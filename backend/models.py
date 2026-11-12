from typing import Optional, Union
from pydantic import BaseModel

class ActionPayload(BaseModel):
    """Định dạng dữ liệu Action nhận từ Python Controller hoặc REST API"""
    action: str
    url: Optional[str] = None
    title: Optional[str] = None
    caption: Optional[str] = None
    mode: Optional[str] = None
    color: Optional[str] = None
    intensity: Optional[float] = None
    angle: Optional[float] = None
    x: Optional[float] = None
    y: Optional[float] = None
    z: Optional[float] = None
    message: Optional[str] = None
    hour: Optional[float] = None
    minute: Optional[float] = None
    speed: Optional[float] = None
    target: Optional[str] = None
    state: Optional[Union[str, bool]] = None

    class Config:
        extra = "allow"

class StatusResponse(BaseModel):
    status: str
    connected_clients: int
    message: str
