 
from sqlalchemy.orm import Session

from . import arrow_models, arrow_schemas


def create_arrow(db: Session, arrow: arrow_schemas.CreateArrow):
    arrow_item = arrow_models.Arrows(**arrow.dict())
    db.add(arrow_item)
    db.commit()
    db.refresh(arrow_item)
    return arrow_item


def get_arrows(db: Session, skip: int = 0, limit: int = 100):
    return db.query(arrow_models.Arrows).offset(skip).limit(limit).all()