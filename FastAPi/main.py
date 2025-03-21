# main.py
from fastapi import FastAPI,HTTPException, Depends, status
from pydantic import BaseModel
from typing import Annotated
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session

app = FastAPI()

# Crea le tabelle nel database
models.Base.metadata.create_all(bind=engine)


class UserBase(BaseModel):
    name : str


class UfficioBase(BaseModel):
    nome:str
    numero:int
    descrizione:str

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session,Depends(get_db)]



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

# Da qui puoi aggiungere altre route e logica dell'applicazione

@app.post("/ufficio/", status_code=status.HTTP_201_CREATED)
async def create_ufficio(ufficio : UfficioBase, db : db_dependency):
    db_ufficio = models.Ufficio(**ufficio.model_dump())
    db.add(db_ufficio)
    db.commit()
    db.refresh(db_ufficio)
    return db_ufficio

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


