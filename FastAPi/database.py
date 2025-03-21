# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Configura la stringa di connessione
# Formato: mysql+pymysql://username:password@host:port/database_name
DATABASE_URL = "mysql+pymysql://root:nc030225@localhost:3306/mefapp"

# Crea l'engine di SQLAlchemy
engine = create_engine(DATABASE_URL)

# Crea una SessionLocal class che sarà usata per accedere al DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Crea una classe Base che farà da base per tutti i modelli
Base = declarative_base()
