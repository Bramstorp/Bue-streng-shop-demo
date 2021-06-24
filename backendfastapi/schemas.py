from typing import List, Optional

from pydantic import BaseModel


class ArrowsBase(BaseModel):
    arrow_name: str


class ArrowsCreate(ArrowsBase):
    pass


class Arrows(ArrowsBase):
    id: int

    class Config:
        orm_mode = True
