 
from sqlalchemy.orm import Session

from . import models, schemas


def create_arrow(db: Session, arrow: schemas.CreateArrow):
    arrow_item = models.Arrows(**arrow.dict())
    db.add(arrow_item)
    db.commit()
    db.refresh(arrow_item)
    return arrow_item


def get_arrows(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Arrows).offset(skip).limit(limit).all()