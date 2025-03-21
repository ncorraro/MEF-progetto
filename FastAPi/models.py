# models.py
from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime,Table
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func


from database import Base  


# Esempio di modello per una tabella User
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    


# Tabelle di associazione per le relazioni many-to-many
ufficio_processo_core = Table(
    "ufficio_processo_core",
    Base.metadata,
    Column("ufficio_id", Integer, ForeignKey("uffici.id"), primary_key=True),
    Column("processo_core_id", Integer, ForeignKey("processi_core.id"), primary_key=True)
)

ufficio_processo_verticale = Table(
    "ufficio_processo_verticale",
    Base.metadata,
    Column("ufficio_id", Integer, ForeignKey("uffici.id"), primary_key=True),
    Column("processo_verticale_id", Integer, ForeignKey("processi_verticali.id"), primary_key=True)
)

ufficio_processo_rilevante = Table(
    "ufficio_processo_rilevante",
    Base.metadata,
    Column("ufficio_id", Integer, ForeignKey("uffici.id"), primary_key=True),
    Column("processo_rilevante_id", Integer, ForeignKey("processi_rilevanti.id"), primary_key=True)
)

class Ufficio(Base):
    __tablename__ = "uffici"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    numero = Column(String(10), nullable=False)
    descrizione = Column(String(1000))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relazioni con i processi
    processi_core = relationship("ProcessoCore", secondary=ufficio_processo_core, back_populates="uffici")
    processi_verticali = relationship("ProcessoVerticale", secondary=ufficio_processo_verticale, back_populates="uffici")
    processi_rilevanti = relationship("ProcessoRilevante", secondary=ufficio_processo_rilevante, back_populates="uffici")

# Definizione dei modelli per i processi

class ProcessoCore(Base):
    __tablename__ = "processi_core"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relazione inversa con uffici
    uffici = relationship("Ufficio", secondary=ufficio_processo_core, back_populates="processi_core")

class ProcessoVerticale(Base):
    __tablename__ = "processi_verticali"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relazione inversa con uffici
    uffici = relationship("Ufficio", secondary=ufficio_processo_verticale, back_populates="processi_verticali")

class ProcessoRilevante(Base):
    __tablename__ = "processi_rilevanti"
    
    id = Column(Integer, primary_key=True, index=True)
    nome = Column(String(100), nullable=False)
    descrizione = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    
    # Relazione inversa con uffici
    uffici = relationship("Ufficio", secondary=ufficio_processo_rilevante, back_populates="processi_rilevanti")