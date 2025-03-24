# models.py
from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime,Table,ARRAY,JSON
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


from database import Base  


# Esempio di modello per una tabella User
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    


class Ufficio(Base):
    __tablename__ = "uffici"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    numero = Column(String(10), nullable=False)
    descrizione = Column(String(1000))
    
    # Relazioni con i processi

    processiCore = Column(JSON)
    processiVerticali = Column(JSON)
    processiRilevanti = Column(JSON)

# Definizione dei modelli per i processi

class ProcessoCore(Base):
    __tablename__ = "processi_core"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    tipo = Column(String(50))
    descrizione = Column(String(500))
    frequenza = Column(String(50))
    input = Column(String(50))
    output = Column(String(50))

    diagrammi = Column(JSON)  # Memorizza un array in formato JSON
    attori = Column(JSON)  # Memorizza un array in formato JSON
    terzi_coinvolti = Column(JSON)
    
    # Per modello di funzionamento e funzionamento, dovresti usare JSON o relazioni
    modello_di_funzionamento = Column(JSON)  # JSON per la struttura nidificata
    funzionamento = Column(JSON)  # JSON per le fasi


class ProcessoVerticale(Base):
    __tablename__ = "processi_verticali"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
   
   

class ProcessoRilevante(Base):
    __tablename__ = "processi_rilevanti"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
    
   