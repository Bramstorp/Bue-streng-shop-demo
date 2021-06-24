from typing import List

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/")
def root():
    return {"Hello": "World"}


@app.get("/arrows/", response_model=List[schemas.Arrows])
def read_arrows(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    arrows = crud.get_arrows(db, skip=skip, limit=limit)
    return arrows
