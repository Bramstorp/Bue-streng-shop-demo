
from typing import  Optional
from pydantic import BaseModel


class StringBase(BaseModel):
    string_type: Optional[str] = None
    string_length: Optional[int] = 0
    winding_a: Optional[int] = 0
    winding_b: Optional[int] = 0
    winding_c: Optional[int] = 0
    winding_d: Optional[int] = 0
    winding_e: Optional[int] = 0
    winding_f: Optional[int] = 0
    eye_x: Optional[int] = 0
    eye_y: Optional[int] = 0
    material: Optional[str] = None
    string_amount: Optional[int] = 0
    color: Optional[str] = None
    twist: Optional[float] = None


class CreateString(StringBase):
    pass


class Strings(StringBase):
    pass

    class Config:
        orm_mode = True
