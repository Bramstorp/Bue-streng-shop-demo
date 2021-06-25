from typing import List

from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from . import crud, models, schemas

from .models import Arrows
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


@app.get("/arrows/", response_model=List[schemas.Arrows])
def read_arrows(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    arrows = crud.get_arrows(db, skip=skip, limit=limit)
    return arrows


@app.post("/arrows/", response_model=schemas.Arrows)
def create_arrows(arrow: schemas.CreateArrow, db: Session = Depends(get_db)):
    return crud.create_arrow(db=db, arrow=arrow)