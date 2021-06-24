from sqlalchemy.orm import Session
from sqlalchemy.sql.functions import mode

from . import models, schemas


def get_arrows(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Arrows).offset(skip).limit(limit).all()
