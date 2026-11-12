from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from backend.models import ActionPayload, StatusResponse
from backend.websocket_manager import manager

router = APIRouter()

@router.get("/status", response_model=StatusResponse)
async def get_status():
    """Kiểm tra tình trạng hoạt động của hệ thống"""
    return {
        "status": "online",
        "connected_clients": len(manager.active_connections),
        "message": "Pixel Crawler 2D Action RPG server đang hoạt động tốt"
    }

@router.post("/action")
async def trigger_action(payload: ActionPayload):
    """
    Endpoint nhận hành động bằng code Python và gửi xuống giao diện Pixel Crawler thời gian thực.
    """
    data = payload.model_dump(exclude_none=True)
    sent_count = await manager.broadcast(data)
    try:
        print(f"[Action API] Gui lenh '{payload.action}' toi {sent_count} client.")
    except Exception:
        pass
    return {
        "status": "success",
        "action": payload.action,
        "delivered_to": sent_count
    }

@router.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            try:
                print(f"[Browser Event] Nhan tu browser: {data}")
            except Exception:
                pass
    except WebSocketDisconnect:
        manager.disconnect(websocket)
    except Exception as e:
        try:
            print(f"[WebSocket] Error: {e}")
        except Exception:
            pass
        manager.disconnect(websocket)
