# main.py
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session

from database import engine, get_db  # ✅ CORRETTO
import models  # ✅ CORRETTO
# Crea le tabelle nel database
models.Base.metadata.create_all(bind=engine)

# Inizializza l'applicazione FastAPI
app = FastAPI(title="Mia API", description="API per il progetto MEF")

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