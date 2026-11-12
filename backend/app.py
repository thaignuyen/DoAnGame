import os
from fastapi import FastAPI
from fastapi.responses import FileResponse, JSONResponse
from fastapi.staticfiles import StaticFiles

from backend.config import FRONTEND_DIR, PIXEL_DIR
from backend.routes import router as api_router, websocket_endpoint

def create_app() -> FastAPI:
    app = FastAPI(title="Pixel Crawler 2D Action RPG Game", version="3.0.0")

    # Đảm bảo các thư mục tồn tại
    os.makedirs(FRONTEND_DIR, exist_ok=True)

    # Gắn kết tài nguyên Game Pixel Crawler (hỗ trợ cả /assets và /pixel_crawler)
    if PIXEL_DIR.exists():
        app.mount("/pixel_crawler", StaticFiles(directory=str(PIXEL_DIR)), name="pixel_crawler")
        app.mount("/assets", StaticFiles(directory=str(PIXEL_DIR)), name="assets")
    app.mount("/css", StaticFiles(directory=str(FRONTEND_DIR / "css")), name="css")
    app.mount("/js", StaticFiles(directory=str(FRONTEND_DIR / "js")), name="js")

    # Đăng ký API Routes & WebSocket
    app.include_router(api_router, prefix="/api")
    app.add_api_websocket_route("/ws", websocket_endpoint)

    @app.middleware("http")
    async def add_no_cache_headers(request, call_next):
        response = await call_next(request)
        if request.url.path.endswith((".js", ".css", ".html")) or request.url.path == "/":
            response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate, max-age=0"
            response.headers["Pragma"] = "no-cache"
            response.headers["Expires"] = "0"
        return response

    @app.get("/")
    async def get_index():
        index_file = FRONTEND_DIR / "index.html"
        if index_file.exists():
            headers = {
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            }
            return FileResponse(str(index_file), headers=headers)
        return JSONResponse(status_code=404, content={"error": "File index.html không tồn tại"})

    return app

app = create_app()
