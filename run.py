import os
import sys
import socket
import threading
import time
import webbrowser
import urllib.request
import json
import uvicorn

from backend.config import DEFAULT_HOST, DEFAULT_PORT

# Đảm bảo in UTF-8 trên Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

def is_server_running(host, port):
    """Kiểm tra máy chủ FastAPI đã đang phản hồi hay chưa"""
    try:
        req = urllib.request.Request(f"http://{host}:{port}/api/status")
        with urllib.request.urlopen(req, timeout=1.5) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data.get("status") == "online"
    except Exception:
        return False

def is_port_in_use(host, port):
    """Kiểm tra socket kết nối đến port"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.settimeout(1.0)
        return s.connect_ex((host, port)) == 0

def main():
    host = DEFAULT_HOST
    port = DEFAULT_PORT
    url = f"http://{host}:{port}"

    print("=" * 65)
    print(" 🎮 KHỞI ĐỘNG GAME PIXEL CRAWLER 2D ACTION RPG")
    print(f" 🌐 Địa chỉ Server: {url}")
    print("    Đồ họa: Pixel Crawler - Free Pack | Điều khiển: Python WebSocket")
    print("=" * 65)

    # 1. Nếu máy chủ đã đang chạy ở chế độ nền (hoặc chạy từ trước)
    if is_server_running(host, port):
        print(f"\n[+] Máy chủ Game đã đang chạy và hoạt động tốt tại: {url}")
        print("[+] Đang tự động mở trình duyệt web tới game...")
        webbrowser.open(url)
        print("\n✨ Game đã mở trong trình duyệt! Bạn có thể bắt đầu trải nghiệm ngay.")
        print("💡 Nhấn Ctrl+C để dừng.\n")
        try:
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\nĐã đóng.")
        return

    # 2. Nếu port bị chiếm bởi tiến trình khác không phản hồi
    if is_port_in_use(host, port):
        print(f"\n[!] Cảnh báo: Cổng {port} đang bị chiếm. Chuyển sang cổng dự phòng 8501...")
        port = 8501
        url = f"http://{host}:{port}"

    # 3. Tự động mở trình duyệt sau khi máy chủ khởi động
    def open_browser():
        time.sleep(1.2)
        print(f"\n[+] Tự động mở trình duyệt tới Game: {url}")
        webbrowser.open(url)

    threading.Thread(target=open_browser, daemon=True).start()

    # Khởi động FastAPI server
    from backend.app import app
    uvicorn.run(app, host=host, port=port, log_level="info")

if __name__ == "__main__":
    main()
