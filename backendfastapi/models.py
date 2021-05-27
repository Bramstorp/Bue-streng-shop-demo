from sqlalchemy import Boolean, Column, Integer, String
from sqlalchemy.sql.sqltypes import Float

from .database import Base


class Arrows(Base):
    id = Column(Integer, primary_key=True, index=True)
    arrow_name = Column(String)
    arrow_length = Column(Integer)
    arrow_amount = Column(Integer)
    wrap = is_active = Column(Boolean, default=False)
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


class Strings(Base):
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