# models.py
from sqlalchemy import Column, Integer, String,Text, Float, ForeignKey, DateTime,Table,ARRAY,JSON
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


from sqlalchemy import Column, Integer, String, Text, JSON

class ProcessoCore(Base):
    __tablename__ = "processi_core"

    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(500), nullable=False)
    tipo = Column(String(50), default="core")
    descrizione = Column(String(2000), nullable=False)
    frequenza = Column(String(50), nullable=True)
    input = Column(String(100), nullable=True)
    output = Column(String(100), nullable=True)
    diagrammi = Column(JSON, default=[])
    attori = Column(JSON, default=[])
    terzi_coinvolti = Column(JSON, default=[])
    destinatari = Column(JSON, default=[])
    # Usare JSON per rappresentare lista di tuple [varchar, text]
    modello_di_funzionamento = Column(JSON, nullable=True, default=[])
    funzionamento = Column(JSON, nullable=True, default=[])

    missione = Column(String(255), nullable=True)

class ProcessoRilevante(Base):
    __tablename__ = "processi_rilevanti"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
   
   

class ProcessoVerticale(Base):
    __tablename__ = "processi_verticali"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
    attori = Column(JSON, default=[])
    
   