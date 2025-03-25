# main.py
from fastapi import FastAPI,HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
from sqlalchemy import text,func

app = FastAPI()

origins = ["*"]  # Accetta richieste da qualsiasi origine

app.add_middleware(CORSMiddleware, 
               allow_origins = origins, 
               allow_credentials = True,
               allow_methods = ['*'],
               allow_headers = ['*'])


class UserBase(BaseModel):
    name : str


class UfficioBase(BaseModel):
    nome:str
    numero:int
    descrizione:str



class ProcessoCoreBase(BaseModel):
    nome: str
    descrizione: str
    frequenza: str
    input: str
    output: str
    diagrammi: List[Any]
    attori: List[str]
    terzi_coinvolti: List[str]
    modello_di_funzionamento: Dict[str, Any]
    funzionamento: Dict[str, Any]
    missione : str
    
    class Config:
        from_attributes = True

        
class ProcessoRilevanteBase(BaseModel):
    nome: str
    descrizione: str
    attori: List[str]
    
    class Config:
        from_attributes = True

class ProcessoBase(BaseModel):
    nome: str
    descrizione: str
     

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]


# Crea le tabelle nel database
models.Base.metadata.create_all(bind=engine)


# Route di test per verificare che l'API funzioni
@app.get("/")
def read_root():
    return {"message": "API funzionantissima"}

# Route di test per verificare la connessione al database
@app.get("/db-test")
def test_db(db: Session = Depends(get_db)):
    try:
        # Esegue una query semplice per testare la connessione
        db.execute("SELECT 1")
        return {"message": "Connessione al database riuscita!"}
    except Exception as e:
        return {"error": f"Errore di connessione al database: {str(e)}"}
    


def reset_sequence(db: Session, model):
    """
    Resetta la sequenza per un modello specifico, riassegnando gli ID in modo sequenziale per MySQL
    """
    try:
        # Query per ottenere tutti i record ordinati
        records = db.query(model).order_by(model.id).all()
        
        # Disabilita i controlli di chiave esterna
        db.execute(text("SET FOREIGN_KEY_CHECKS=0;"))
        
        # Truncate della tabella
        table_name = model.__tablename__
        db.execute(text(f"TRUNCATE TABLE {table_name};"))
        
        # Reinserimento dei record con ID sequenziali
        for new_id, record in enumerate(records, 1):
            # Crea un nuovo oggetto con gli stessi dati ma ID resettat
            new_record = model(**{c.name: getattr(record, c.name) for c in record.__table__.columns if c.name != 'id'})
            db.add(new_record)
        
        # Riabilita i controlli di chiave esterna
        db.execute(text("SET FOREIGN_KEY_CHECKS=1;"))
        
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Errore nel riordino degli ID: {str(e)}")


# Da qui puoi aggiungere altre route e logica dell'applicazione



#cose fa ufficio 
@app.post("/ufficio/", status_code=status.HTTP_201_CREATED)
async def create_ufficio(ufficio : UfficioBase, db : db_dependency):
    db_ufficio = models.Ufficio(**ufficio.model_dump())
    db.add(db_ufficio)
    db.commit()
    db.refresh(db_ufficio)
    return db_ufficio

@app.get("/uffici/", status_code=status.HTTP_200_OK)
async def read_uffici(db: db_dependency):
    uffici = db.query(models.Ufficio).all()
    return uffici


@app.get("/uffici/{ufficio_id}", status_code=status.HTTP_200_OK)
async def read_ufficio(ufficio_id:int,db :db_dependency):
    ufficio = db.query(models.Ufficio).filter(models.Ufficio.id == ufficio_id).first()
    if ufficio is None :
        raise HTTPException(status_code=404 , detail='ufficio not found')
    return ufficio

@app.delete("/uffici/{ufficio_id}",status_code=status.HTTP_200_OK)
async def delete_ufficio(ufficio_id:int,db:db_dependency):
    db_ufficio = db.query(models.Ufficio).filter(models.Ufficio.id == ufficio_id).first()
    if db_ufficio is None:
        raise HTTPException(status_code=404, detail='ufficio not found') 
    db.delete(db_ufficio)
    db.commit()


#cose fa user
@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase, db: db_dependency):
    db_user = models.User(**user.model_dump())  # Usa model_dump() invece di .dict()
    db.add(db_user)
    db.commit()
    db.refresh(db_user)  # Per aggiornare l'oggetto con i dati dal database
    return db_user

@app.get("/users/{user_id}",status_code=status.HTTP_200_OK)
async def read_user(user_id : int ,db:db_dependency):
    user = db.query(models.User).filter(models.User.id == user_id).first()
    if user is None :
        raise HTTPException(status_code=404,detail='User not found')
    return user


@app.get("/processi/", status_code=status.HTTP_200_OK)
async def get_processi(db: db_dependency):
    processi_core = db.query(models.ProcessoCore).all()
    processi_verticali = db.query(models.ProcessoVerticale).all()
    processi_rilevanti = db.query(models.ProcessoRilevante).all()
    
    return {
        "processi_core": processi_core,
        "processi_verticali": processi_verticali,
        "processi_rilevanti": processi_rilevanti
    }

# Rotte per Processo Core
@app.post("/processoCore/", status_code=status.HTTP_201_CREATED)
async def create_processoCore(processoCore: ProcessoCoreBase, db: db_dependency):
    # Converti il modello in dizionario e aggiungi il tipo
    processo_data = processoCore.model_dump()
    processo_data['tipo'] = 'core'
    
    db_processoCore = models.ProcessoCore(**processo_data)
    db.add(db_processoCore)
    db.commit()
    db.refresh(db_processoCore)
    return db_processoCore

@app.get("/processiCore/", status_code=status.HTTP_200_OK)
async def read_processi_core(db: db_dependency):
    processi_core = db.query(models.ProcessoCore).all()
    return processi_core

@app.get("/processiCore/{processo_id}", status_code=status.HTTP_200_OK)
async def read_processoCore(processo_id: int, db: db_dependency):
    processo = db.query(models.ProcessoCore).filter(models.ProcessoCore.id == processo_id).first()
    if processo is None:
        raise HTTPException(status_code=404, detail='Processo Core non trovato')
    return processo

# Esempio di utilizzo nelle rotte di eliminazione
@app.delete("/processiCore/{processo_id}", status_code=status.HTTP_200_OK)
async def delete_processoCore(processo_id: int, db: db_dependency):
    db_processo = db.query(models.ProcessoCore).filter(models.ProcessoCore.id == processo_id).first()
    if db_processo is None:
        raise HTTPException(status_code=404, detail='Processo Core non trovato')
    
    db.delete(db_processo)
    db.commit()
    
    # Riordina gli ID dopo l'eliminazione
    reset_sequence(db, models.ProcessoCore)
    
    return {"message": "Processo Core eliminato e ID riordinati"}

# Rotte per Processo Verticale
@app.post("/processoVerticale/", status_code=status.HTTP_201_CREATED)
async def create_processoVerticale(processoVerticale: ProcessoBase, db: db_dependency):
    # Rimuove l'ID se presente per lasciare che il database lo generi
    processo_data = processoVerticale.model_dump()
    processo_data.pop('id', None)
    
    db_processoVerticale = models.ProcessoVerticale(**processo_data)
    db.add(db_processoVerticale)
    db.commit()
    db.refresh(db_processoVerticale)
    return db_processoVerticale

@app.get("/processiVerticali/", status_code=status.HTTP_200_OK)
async def read_processi_verticali(db: db_dependency):
    processi_verticali = db.query(models.ProcessoVerticale).all()
    return processi_verticali

@app.get("/processiVerticali/{processo_id}", status_code=status.HTTP_200_OK)
async def read_processoVerticale(processo_id: int, db: db_dependency):
    processo = db.query(models.ProcessoVerticale).filter(models.ProcessoVerticale.id == processo_id).first()
    if processo is None:
        raise HTTPException(status_code=404, detail='Processo Verticale non trovato')
    return processo

@app.delete("/processiVerticali/{processo_id}", status_code=status.HTTP_200_OK)
async def delete_processoVerticale(processo_id: int, db: db_dependency):
    db_processo = db.query(models.ProcessoVerticale).filter(models.ProcessoVerticale.id == processo_id).first()
    if db_processo is None:
        raise HTTPException(status_code=404, detail='Processo Verticale non trovato')
    db.delete(db_processo)
    db.commit()
    return {"message": "Processo Verticale eliminato con successo"}

# Rotte per Processo Rilevante
@app.post("/processoRilevante/", status_code=status.HTTP_201_CREATED)
async def create_processoRilevante(processoRilevante: ProcessoRilevanteBase, db: db_dependency):
    # Rimuove l'ID se presente per lasciare che il database lo generi
    processo_data = processoRilevante.model_dump()
    processo_data.pop('id', None)
    
    db_processoRilevante = models.ProcessoRilevante(**processo_data)
    db.add(db_processoRilevante)
    db.commit()
    db.refresh(db_processoRilevante)
    return db_processoRilevante

@app.get("/processiRilevanti/", status_code=status.HTTP_200_OK)
async def read_processi_rilevanti(db: db_dependency):
    processi_rilevanti = db.query(models.ProcessoRilevante).all()
    return processi_rilevanti

@app.get("/processiRilevanti/{processo_id}", status_code=status.HTTP_200_OK)
async def read_processoRilevante(processo_id: int, db: db_dependency):
    processo = db.query(models.ProcessoRilevante).filter(models.ProcessoRilevante.id == processo_id).first()
    if processo is None:
        raise HTTPException(status_code=404, detail='Processo Rilevante non trovato')
    return processo

@app.delete("/processiRilevanti/{processo_id}", status_code=status.HTTP_200_OK)
async def delete_processoRilevante(processo_id: int, db: db_dependency):
    db_processo = db.query(models.ProcessoRilevante).filter(models.ProcessoRilevante.id == processo_id).first()
    if db_processo is None:
        raise HTTPException(status_code=404, detail='Processo Rilevante non trovato')
    db.delete(db_processo)
    db.commit()
    return {"message": "Processo Rilevante eliminato con successo"}