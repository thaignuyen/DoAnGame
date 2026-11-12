import json
from typing import Set
from fastapi import WebSocket

class ConnectionManager:
    """Quản lý các kết nối WebSocket thời gian thực giữa Web 3D và Python"""
    def __init__(self):
        self.active_connections: Set[WebSocket] = set()

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.add(websocket)
        print(f"[WebSocket] Client mới kết nối. Tổng số client: {len(self.active_connections)}")

    def disconnect(self, websocket: WebSocket):
        self.active_connections.discard(websocket)
        print(f"[WebSocket] Client ngắt kết nối. Còn lại: {len(self.active_connections)}")

    async def broadcast(self, message: dict) -> int:
        if not self.active_connections:
            return 0
        payload = json.dumps(message)
        dead_connections = set()
        count = 0
        for connection in self.active_connections:
            try:
                await connection.send_text(payload)
                count += 1
            except Exception:
                dead_connections.add(connection)
        for dead in dead_connections:
            self.active_connections.discard(dead)
        return count

manager = ConnectionManager()
