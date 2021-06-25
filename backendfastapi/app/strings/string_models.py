from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.sqltypes import Float

from ..database import Base


class Strings(Base):
    __tablename__ = "Strings"

    id = Column(Integer, primary_key=True, index=True)
    string_type = Column(String)
    string_length = Column(Integer)
    winding_a = Column(Integer)
    winding_b = Column(Integer)
    winding_c = Column(Integer)
    winding_d = Column(Integer)
    winding_e = Column(Integer)
    winding_f = Column(Integer)
    eye_x = Column(Integer)
    eye_y = Column(Integer)
    material = Column(String)
    string_amount = Column(Integer)
    color = Column(String)
    twist = Column(Float)