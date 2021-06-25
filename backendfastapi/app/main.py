from typing import List

from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session

from .arrows import arrow_crud, arrow_models, arrow_schemas
from .strings import string_crud, string_models, string_schemas

from .database import SessionLocal, engine

arrow_models.Base.metadata.create_all(bind=engine)
string_models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/arrows/", response_model=List[arrow_schemas.Arrows])
def read_arrows(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return arrow_crud.get_arrows(db, skip=skip, limit=limit)


@app.post("/arrows/", response_model=arrow_schemas.Arrows)
def create_arrows(arrow: arrow_schemas.CreateArrow, db: Session = Depends(get_db)):
    return arrow_crud.create_arrow(db=db, arrow=arrow)


@app.get("/string/", response_model=List[string_schemas.Strings])
def read_strings(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return string_crud.get_strings(db, skip=skip, limit=limit)


@app.post("/string/", response_model=string_schemas.Strings)
def create_string(string: string_schemas.CreateString, db: Session = Depends(get_db)):
    return string_crud.create_string(db=db, string=string)