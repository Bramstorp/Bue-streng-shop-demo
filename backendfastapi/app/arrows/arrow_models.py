from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.sql.expression import true
from sqlalchemy.sql.sqltypes import Float

from ..database import Base


class Arrows(Base):
    __tablename__ = "arrows"

    id = Column(Integer, primary_key=True, index=True)
    arrow_name = Column(String)
    arrow_length = Column(Integer)
    arrow_amount = Column(Integer)
    wrap = Column(Boolean, default=False)
    wrap_color = Column(String)
    venis_type = Column(String)
    venis_length = Column(String)
    venis_color = Column(String)
    point_type = Column(String)
    point_weight = Column(Integer)
    insert_type = Column(String)
    nock_type = Column(String)
    nock_color = Column(String)
    nock_insert_type = Column(String)
