import os
from pathlib import Path

# Thư mục gốc dự án
BASE_DIR = Path(__file__).resolve().parent.parent

# Các đường dẫn thư mục chuẩn
FRONTEND_DIR = BASE_DIR / "frontend"
PIXEL_DIR = BASE_DIR / "Pixel Crawler - Free Pack"

# Cấu hình mạng máy chủ (Dùng cổng 8500 riêng biệt, không trùng với cổng 8000 của các dự án web khác)
DEFAULT_HOST = "127.0.0.1"
DEFAULT_PORT = 8500
