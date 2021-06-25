
from typing import Optional
from pydantic import BaseModel


class ArrowsBase(BaseModel):
    arrow_name: str


class CreateArrow(ArrowsBase):
    arrow_length: Optional[int] = 0
    arrow_amount: Optional[int] = 0
    wrap: Optional[bool] = False
    wrap_color: Optional[str] = None
    venis_type: Optional[str] = None
    venis_length: Optional[str] = None
    venis_color: Optional[str] = None
    point_type: Optional[str] = None
    point_weight: Optional[int] = 0
    insert_type: Optional[str] = None
    nock_type: Optional[str] = None
    nock_color: Optional[str] = None
    nock_insert_type: Optional[str] = None


class Arrows(ArrowsBase):
    arrow_length: Optional[int] = 0
    arrow_amount: Optional[int] = 0
    wrap: Optional[bool] = False
    wrap_color: Optional[str] = None
    venis_type: Optional[str] = None
    venis_length: Optional[str] = None
    venis_color: Optional[str] = None
    point_type: Optional[str] = None
    point_weight: Optional[int] = 0
    insert_type: Optional[str] = None
    nock_type: Optional[str] = None
    nock_color: Optional[str] = None
    nock_insert_type: Optional[str] = None

    class Config:
        orm_mode = True
