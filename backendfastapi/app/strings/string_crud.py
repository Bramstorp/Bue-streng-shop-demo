 
from sqlalchemy.orm import Session

from . import string_models, string_schemas


def create_string(db: Session, string: string_schemas.CreateString):
    string_item = string_models.Strings(**string.dict())
    db.add(string_item)
    db.commit()
    db.refresh(string_item)
    return string_item


def get_strings(db: Session, skip: int = 0, limit: int = 100):
    return db.query(string_models.Strings).offset(skip).limit(limit).all()