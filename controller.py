import urllib.request
import json
import time

SERVER_URL = "http://127.0.0.1:8500/api/action"

class PixelCrawlerController:
    """
    Python Controller điều khiển game Pixel Crawler qua REST API & WebSocket
    """
    def send_action(self, action_name: str, **kwargs):
        payload = {"action": action_name, **kwargs}
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            SERVER_URL,
            data=data,
            headers={"Content-Type": "application/json"}
        )
        try:
            with urllib.request.urlopen(req) as response:
                res = json.loads(response.read().decode("utf-8"))
                print(f"[{action_name.upper()}] Thành công: {res}")
                return res
        except Exception as e:
            print(f"[{action_name.upper()}] Lỗi kết nối máy chủ: {e}")
            return None

    def attack(self, style="slice"):
        """Tấn công: 'slice' (chém), 'pierce' (đâm), 'crush' (đập búa)"""
        return self.send_action("attack", style=style)

    def change_weapon(self, weapon="bone"):
        """Đổi vũ khí: 'wood' (gỗ), 'bone' (xương), 'hands' (găng tay quyền anh)"""
        return self.send_action("change_weapon", weapon=weapon)

    def switch_skin(self):
        """Đổi ngoại trang: Classic / Champion / Knight / Rogue / Wizard"""
        return self.send_action("switch_skin")

    def toggle_carry(self):
        """Bê vác rương đồ / Đặt xuống"""
        return self.send_action("toggle_carry")

    def interact(self):
        """Tương tác bằng phím F (bàn giả kim, đe rèn, bếp nấu, lò sưởi, rương báu, NPC)"""
        return self.send_action("interact")

    def spawn_wave(self):
        """Kích hoạt đợt quái vật mới (32+ quái)"""
        return self.send_action("spawn_wave")

    def spawn_mob(self, mob_type="skeleton_warrior", x=None, y=None):
        """
        Triệu hồi quái vật:
        - Skeleton: 'skeleton_base', 'skeleton_warrior', 'skeleton_rogue', 'skeleton_mage'
        - Orc: 'orc_base', 'orc_warrior', 'orc_rogue', 'orc_shaman'
        """
        return self.send_action("spawn_mob", type=mob_type, x=x, y=y)

    def heal(self, amount=50):
        """Hồi máu cho nhân vật"""
        return self.send_action("heal", amount=amount)

    def add_gold(self, amount=100):
        """Cộng vàng cho nhân vật"""
        return self.send_action("add_gold", amount=amount)

    def clear_mobs(self):
        """Quét sạch toàn bộ quái vật trên bản đồ"""
        return self.send_action("clear_mobs")

    def notify(self, message: str):
        """Gửi thông báo nổi lên màn hình game"""
        return self.send_action("notify", message=message)

    def enter_house(self):
        """Bước vào Ngôi Nhà Khởi Đầu của NPC Trưởng Lão Alden"""
        return self.send_action("goto_starter_house")

    def exit_house(self):
        """Rời khỏi Ngôi Nhà Khởi Đầu ra ngoài Sân Thung Lũng Nhà Tân Thủ"""
        return self.send_action("goto_starter_homestead")

    def goto_starter_homestead(self):
        """Dịch chuyển tới Thung Lũng Nhà Tân Thủ (Bản đồ riêng)"""
        return self.send_action("goto_starter_homestead")

    def goto_map(self, map_name: str):
        """Dịch chuyển tức thời tới 1 trong 5 bản đồ độc lập:
        'tavern', 'courtyard', 'starter_house', 'dungeon', 'castle_gate'
        """
        action_map = {
            "tavern": "goto_tavern",
            "courtyard": "goto_courtyard",
            "starter_house": "goto_starter_house",
            "dungeon": "goto_dungeon",
            "castle_gate": "goto_castle_gate"
        }
        return self.send_action(action_map.get(map_name, "goto_tavern"))

    def goto_tavern(self):
        """Dịch chuyển tới Sảnh Quán Rượu Hoàng Gia (Map 1)"""
        return self.send_action("goto_tavern")

    def goto_courtyard(self):
        """Dịch chuyển tới Sân Làng Ngoài Trời & Ngôi Nhà Khởi Đầu (Map 2)"""
        return self.send_action("goto_courtyard")

    def goto_starter_house(self):
        """Dịch chuyển vào Nội Thất Ngôi Nhà Khởi Đầu Của NPC (Map 3)"""
        return self.send_action("goto_starter_house")

    def goto_dungeon(self):
        """Dịch chuyển xuống Tầng Hầm Ngục & Ma Trận 4 Phòng (Map 4)"""
        return self.send_action("goto_dungeon")

    def goto_castle_gate(self):
        """Dịch chuyển tới Cổng Thành Vương Quốc (Map 5)"""
        return self.send_action("goto_castle_gate")


if __name__ == "__main__":
    game = PixelCrawlerController()
    print("=" * 60)
    print("🎮 PIXEL CRAWLER PYTHON CONTROLLER (5 BẢN ĐỒ & TOÀN BỘ ASSET)")
    print("=" * 60)
    print("[1] ⚔️ Chém Kiếm (Slice - J)")
    print("[2] 🗡️ Đâm Giáo (Pierce - K)")
    print("[3] 🔨 Đập Búa (Crush - L)")
    print("[4] ✨ Sử dụng đồ vật / NPC gần nhất (F)")
    print("[5] 🏹 Đổi vũ khí: Kiếm Gỗ (Phím 1)")
    print("[6] 💀 Đổi vũ khí: Lưỡi Hái Xương (Phím 2)")
    print("[7] 🥊 Đổi vũ khí: Găng Tay Quyền Anh (Phím 3)")
    print("[8] 📦 Bê vác rương / Thùng hàng (G)")
    print("[9] 🥋 Đổi ngoại trang nhân vật (Classic / Champion / Knight / Rogue / Wizard) (C)")
    print("[10] 👹 Triệu hồi Skeleton Tân Binh (skeleton_base)")
    print("[11] ⚔️ Triệu hồi Skeleton Chiến Binh")
    print("[12] 🧌 Triệu hồi Orc Thổ Phỉ (orc_base)")
    print("[13] 👑 Triệu hồi Boss Orc Phù Thủy Tộc (orc_shaman)")
    print("[14] 💚 Hồi 50 HP")
    print("[15] 💰 Thưởng 100 Vàng")
    print("[16] 🧹 Quét sạch toàn bộ quái vật")
    print("[17] 🏰 Chuyển Map: Sảnh Quán Rượu (Tavern)")
    print("[18] 🏡 Chuyển Map: Thung Lũng Nhà Tân Thủ (Starter Homestead)")
    print("[19] 🌲 Chuyển Map: Đại Rừng Nguyên Sinh (Forest Wilds / Courtyard)")
    print("[20] 🚪 Chuyển Map: Nội Thất Nhà Khởi Đầu NPC (Starter House)")
    print("[21] ⚔️ Chuyển Map: Hầm Ngục Phó Bản (Dungeon)")
    print("[22] 👑 Chuyển Map: Cổng Thành Vương Quốc (Castle Gate)")
    print("[0] Thoát")
    print("=" * 60)

    actions = {
        "1": lambda: game.attack("slice"),
        "2": lambda: game.attack("pierce"),
        "3": lambda: game.attack("crush"),
        "4": lambda: game.interact(),
        "5": lambda: game.change_weapon("wood"),
        "6": lambda: game.change_weapon("bone"),
        "7": lambda: game.change_weapon("hands"),
        "8": lambda: game.toggle_carry(),
        "9": lambda: game.switch_skin(),
        "10": lambda: game.spawn_mob("skeleton_base"),
        "11": lambda: game.spawn_mob("skeleton_warrior"),
        "12": lambda: game.spawn_mob("orc_base"),
        "13": lambda: game.spawn_mob("orc_shaman"),
        "14": lambda: game.heal(50),
        "15": lambda: game.add_gold(100),
        "16": lambda: game.clear_mobs(),
        "17": lambda: game.goto_tavern(),
        "18": lambda: game.goto_starter_homestead(),
        "19": lambda: game.goto_courtyard(),
        "20": lambda: game.goto_starter_house(),
        "21": lambda: game.goto_dungeon(),
        "22": lambda: game.goto_castle_gate(),
    }

    while True:
        try:
            choice = input("\n👉 Nhập số lệnh để thực thi (0 để thoát): ").strip()
            if choice == "0":
                print("Tạm biệt!")
                break
            if choice in actions:
                actions[choice]()
            else:
                print("Lựa chọn không hợp lệ, vui lòng thử lại.")
        except KeyboardInterrupt:
            print("\nĐã dừng.")
            break
