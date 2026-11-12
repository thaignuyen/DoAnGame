import sys
import uvicorn
from backend.app import app
from backend.config import DEFAULT_HOST, DEFAULT_PORT

# Cấu hình encoding trên console Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def run_server(host=DEFAULT_HOST, port=DEFAULT_PORT):
    print("=" * 65)
    print(" 🎮 KHỞI ĐỘNG SERVER PIXEL CRAWLER 2D ACTION RPG")
    print(f" 🌐 Địa chỉ Server: http://{host}:{port}")
    print("=" * 65)
    uvicorn.run(app, host=host, port=port, log_level="warning")

if __name__ == "__main__":
    run_server()
