# Pixel Crawler - 2D Action RPG Game & Điều Khiển Bằng Python

Dự án Game 2D Action RPG xây dựng trực tiếp từ gói tài nguyên đồ họa **Pixel Crawler - Free Pack**, hỗ trợ điều khiển qua bàn phím/chuột và kết nối **WebSocket thời gian thực** để thực thi mọi hành động bằng **code Python**.

> **Phiên bản 5.0 - ĐẠI TU TOÀN DIỆN ĐỒ HỌA & HỆ THỐNG BẢN ĐỒ**:
> - **MAP NÀO RA MAP ĐÓ - 5 BẢN ĐỒ HOÀN CHỈNH, TÁCH BIỆT RÕ RÀNG, TUYỆT ĐỐI KHÔNG CHỒNG ĐÈ**:
>   1. 🏰 **Map 1: Sảnh Quán Rượu Hoàng Gia (`tavern` - 1280x640)**
>   2. 🌳 **Map 2: Sân Làng Ngoài Trời & Ngôi Nhà Khởi Đầu (`courtyard` - 1280x640)**
>   3. 🏡 **Map 3: Ngôi Nhà Khởi Đầu Của NPC (`starter_house` - 480x360)**
>   4. ⚔️ **Map 4: Tầng Hầm Ngục & Ma Trận 4 Phòng (`dungeon` - 1280x640)**
>   5. 👑 **Map 5: Cổng Thành Vương Quốc (`castle_gate` - 640x640)**
> - **ĐIỀU CHỈNH 100% CÁC ASSET BỊ LỖI FRAME / SLICING**:
>   + Lò nung Bricks/Iron/Stone (sheet 2 frame) tính `modulo 2 * 32` chuẩn xác, chấm dứt hoàn toàn lỗi nhấp nháy mất hình.
>   + Khắc phục lỗi frame Champion Walk (48x48) và Idle (64x64), hiển thị sắc nét không bị méo hay kéo giãn.
>   + Khắc phục đường dẫn và kích thước frame của toàn bộ NPC (`Knight`, `Wizzard`, `Rogue`, `Citizen_F Peasant & Tavern Maids`).
>   + Khắc phục kích thước frame của 8 chủng quái vật (`Orc Warrior` 96x80, `Orc Shaman` 7 frames, `Skeleton Warrior` 64x48).
> - **KÍCH HOẠT 100% TOÀN BỘ 26 ASSET TỪNG BỊ THIẾU TRONG GAMEPLAY**.

---

## 🌟 Chi Tiết 100% Tài Nguyên Được Sử Dụng & Nâng Cấp

1. **Ngôi Nhà Khởi Đầu Của NPC (Trưởng Lão Alden - Exterior & Interior)**:
   - **Ngoại thất ngoài trời (`Starter_House.png` - 220x240)**: Đặt tại khu vực sân Quán Rượu Tavern, hoàn thiện với mái ngói đỏ rêu phong, tường gỗ vân ghép, bóng đổ chân thực (`Shadows.png`), ống khói bốc làn khói trắng hoạt hình (`Smoke-Sheet.png`), và đèn lồng ấm áp tỏa sáng trước hiên nhà.
   - **Trưởng Lão Alden (Elder Alden)** đứng túc trực trước thềm nhà đón chào dũng sĩ với hộp thoại hướng dẫn chi tiết.
   - **Cánh cửa tương tác `[F]`**: Cho phép bước vào không gian bên trong ngôi nhà bất kỳ lúc nào.
   - **Nội thất ấm áp (`Starter_House_Interior.png` - 480x360)**:
     - 🛏️ **Giường Ngủ Khởi Đầu**: Tương tác `[F]` để nghỉ ngơi, hồi phục 100% HP & SP kèm hiệu ứng ngủ `💤 Full HP & SP!`.
     - 🎁 **Rương Gỗ Tân Thủ**: Tương tác `[F]` mở rương nhận ngay **250 Vàng** khởi nghiệp và **Kiếm Sắt Cường Hóa (+5 Lực đánh)**.
     - 📖 **Kệ Sách Cổ Trưởng Lão**: Tương tác `[F]` lĩnh hội bí kíp võ công thượng thừa, tăng vĩnh viễn **+10 Sát Thương**.
     - 🔥 **Lò Sưởi Ấm Cúng**: Tương tác `[F]` sưởi ấm bên ngọn lửa than hồng, hồi phục toàn bộ Thể Lực Stamina.
     - 🚪 **Cửa Ra Ngoài**: Tương tác `[F]` để quay trở lại khuôn viên Quán Rượu Tavern.
     - 🧙 **Trưởng Lão Alden**: Trực tiếp có mặt trong nhà để hướng dẫn và căn dặn người chơi trước khi xuống hầm ngục.

2. **Số Lượng Quái Vật Tăng Vọt (32+ Mobs & Cơ Chế Wave Spawner)**:
   - **Tầng Quán Rượu Tavern (8 Quái)**: Skeleton Tân Binh, Skeleton Chiến Binh, Skeleton Thích Khách, Orc Thổ Phỉ, Orc Đao Phủ đi tuần.
   - **Phòng 1 - Cửa Hầm Ngục (5 Quái)**: Đại đội Skeleton canh giữ cửa ngục.
   - **Phòng 2 - Ngục Giam Tử Sĩ (6 Quái)**: Skeleton Pháp Sư phóng phép & Thích Khách phục kích.
   - **Phòng 3 - Đấu Trường Orc (8 Quái)**: Orc Thổ Phỉ, Orc Thiết Giáp Binh & Orc Đao Phủ tạo vòng vây nghẹt thở.
   - **Phòng 4 - Phòng Boss & Cổng Thành (7 Quái)**: **Orc Phù Thủy Tộc (Boss)** uy lực 350 HP cùng 6 Hộ Vệ Thần Tốc.
   - **Tự động sinh đợt mới (Wave Respawn)**: Khi quét sạch quái vật, đợt tiếp theo sẽ tự động xuất hiện!

3. **Dàn Nhân Vật Phụ Đa Dạng (13 NPCs Đầy Đủ Vai Trò)**:
   - **Elder Alden (Trưởng Lão Khởi Đầu)**: Đứng canh giữ và chào đón tại Ngôi Nhà Khởi Đầu.
   - **Sir Arthur & Sir Roland**: 2 Hiệp Sĩ Canh Cổng (`Knight` - có đủ `Idle`, `Run`, `Death`).
   - **Archmage Gandor & Sage Elrond**: 2 Đại Pháp Sư Cổ Đại (`Wizard` - có đủ `Idle`, `Run`, `Death`).
   - **Elena & Anna**: 2 Nữ Quản Gia Quán Rượu (`Citizen_F Tavern_A`) phục vụ bia bơ và đồ ăn.
   - **Mia & Chloe**: 2 Tiếp Tân Duyên Dáng (`Citizen_F Tavern_B`) tiếp đón tân thủ.
   - **Lily & Rose**: 2 Cô Gái Nông Trại (`Citizen_F Peasant_A`) hướng dẫn làm vườn và câu cá.
   - **Sophia**: Nữ Quý Tộc (`Citizen_A`) thưởng trà tại bàn VIP.
   - **Kaelen**: Sát Thủ Do Thám (`Rogue` - có đủ `Idle`, `Run`, `Death`).

4. **Toàn Bộ 25+ Cây Cổ Thụ Đa Kích Cỡ (`Environment/Props/Static/Trees`)**:
   - `Model_01` (Sồi cổ thụ): Đầy đủ 4 kích thước `Size_02`, `Size_03`, `Size_04`, `Size_05`.
   - `Model_02` (Thông tuyết): Đầy đủ 4 kích thước `Size_02`, `Size_03`, `Size_04`, `Size_05`.
   - `Model_03` (Bách đại thụ): Đầy đủ các kích thước `Size_02`, `Size_03`, `Size_04`, `Size_05` và các biến thể export.

5. **Khu Vực Chế Tạo & Lò Lửa Toàn Diện (`Environment/Structures/Stations`)**:
   - **Bàn Giả Kim Thuật (`Alchemy_Table_01..03`)**: Bàn cấp 1 chế tiên dược, bàn cấp 2 chế độc dược tẩm kiếm (+6 Sát thương), bàn cấp 3 luyện kim đan.
   - **Bệ Đe Rèn Thần (`Anvil_01..03`)**: Bệ đe cấp 1 mài kiếm (+8 Sát thương), bệ đe cấp 2 đúc giáp (+25 Max HP), đe rèn cổ đại.
   - **Khu Bếp Nấu Ăn Đầy Đủ (`Cooking Station`)**:
     - 4 Bàn chặt mổ thịt (`Butchery_01..04`).
     - 4 Nồi hầm súp sôi bốc khói (`Cooker_01..04`).
     - 4 Bếp nướng than hồng (`Grill_01..04`).
   - **Hệ Thống Lửa Trại & Khói (`Bonfire` & `Furnace`)**:
     - 10 Ngọn đuốc `Bonfire_01` đến `Bonfire_10` rải khắp các ngõ ngách và hành lang tối.
     - Lửa xanh ma quái `Fire_02` tại phòng Boss.
     - Khói lò sưởi hoạt hình `Smoke-Sheet`.
     - Lò nung Bricks, lò nung sắt Iron 1-3, lò nung đá cổ Stone 1-3.
   - **Xưởng Cưa Xẻ Gỗ (`Sawmill_01..03`)**: Máy cưa cấp 1, cấp 2 và cưa đại quy mô cấp 3 lưỡi cưa xoay tít.
   - **5 Loại Chảo Sôi Sùng Sục (`Pan_01..05`)**: Đặt trên các mặt bếp lò và góc hầm ngục.

6. **Gạch Lát Nền & Kiến Trúc (`Tilesets & Buildings`)**:
   - Mặt nước ngầm óng ánh tại giếng cổ (`Water_tiles`).
   - Sàn đá đấu trường và sảnh ngục (`Floors_Tiles`, `Dungeon_Tiles`).
   - Vách tường đá nứt và rêu phong cổ đại (`Wall_Tiles`, `Wall_Variations`).
   - Kệ rượu hoàng gia, vách bình phong gỗ, mái ngói rơm (`Interior_Props_01`, `Interior_Walls_01`, `Roofs`, `Props`, `Shadows`, `Walls`).
   - Đạo cụ hầm ngục, đá phong ấn, xẻng cuốc, vòng ma thuật (`Dungeon_Props`, `Rocks`, `Tools`, `Esoteric`).
   - Bàn ghế salon cao cấp (`Furniture`) và cổng thành cổ đại (`Castle_Entrance`).

7. **Giao Diện Tra Cứu Toàn Bộ 385 Files & Terms.txt Ngay Trong Game**:
   - Nhấn nút **`📜 385 Files & Terms`** trên HUD hoặc nhấn phím **`M`**:
     - **Tab 1**: Danh mục toàn bộ 385 files (194 PNG, 190 Aseprite, 1 Terms.txt) kèm dung lượng, định dạng và thanh tìm kiếm thời gian thực.
     - **Tab 2**: Nội dung đầy đủ của giấy phép bản quyền `Terms.txt`.

---

## 🎮 Bảng Phím Điều Khiển

| Phím | Hành Động |
|---|---|
| `W` `A` `S` `D` | Di chuyển 4 hướng |
| `Shift` (Giữ) | Chạy nhanh (Sprint) |
| `1` / `2` / `3` | **Đổi vũ khí**: [1] Kiếm Gỗ, [2] Lưỡi Hái Xương, [3] Găng Thiết Quyền |
| `Q` | Đổi vũ khí xoay vòng |
| `J` / Chuột Trái | **Chém Kiếm** (Slice - kèm hiệu ứng vệt sáng và icon vũ khí) |
| `K` | **Đâm Giáo** (Pierce - tầm xa) |
| `L` / Chuột Phải | **Đập Búa** (Crush - rung chuyển màn hình) |
| `F` | **Tương tác / Sử dụng trạm** (Bàn giả kim, đe rèn, bếp nấu, máy cưa, lò sưởi, NPC...) |
| `G` | **Bê vác rương đồ / Đặt xuống** (Carry Mode) |
| `C` | **Đổi ngoại trang Skin** (Xoay vòng 5 ngoại trang: Classic / Champion / Knight / Rogue / Wizard) |
| `M` | **Mở Bảng Danh Mục 385 Files & Bản Quyền Terms.txt** |
| `Space` | **Lăn né** (Dodge Roll) |
| `U` | Tưới nước cây trồng |
| `I` | Buông cần câu cá |

---

## 🚀 Hướng Dẫn Sử Dụng

### Cách 1: Khởi Động Nhanh Game
```bash
python run.py
```
Mở trình duyệt tại: `http://127.0.0.1:8500`.

---

### Cách 2: Điều Khiển Từ Xa Bằng Python
Mở cửa sổ dòng lệnh riêng:
```bash
python controller.py
```
Menu lệnh Python:
```text
[1]  ⚔️ Chém Kiếm (Slice - J)
[2]  🗡️ Đâm Giáo (Pierce - K)
[3]  🔨 Đập Búa (Crush - L)
[4]  ✨ Sử dụng đồ vật / NPC gần nhất (F)
[5]  🏹 Đổi vũ khí: Kiếm Gỗ (Phím 1)
[6]  💀 Đổi vũ khí: Lưỡi Hái Xương (Phím 2)
[7]  🥊 Đổi vũ khí: Găng Tay Quyền Anh (Phím 3)
[8]  📦 Bê vác rương / Thùng hàng (G)
[9]  🥋 Đổi ngoại trang nhân vật Champion / Classic (C)
[10] 👹 Triệu hồi Skeleton Tân Binh (skeleton_base)
[11] ⚔️ Triệu hồi Skeleton Chiến Binh
[12] 🧌 Triệu hồi Orc Thổ Phỉ (orc_base)
[13] 👑 Triệu hồi Boss Orc Phù Thủy Tộc (orc_shaman)
[14] 💚 Hồi 50 HP
[15] 💰 Thưởng 100 Vàng
[16] 🧹 Quét sạch toàn bộ quái vật
[17] 🌊 Triệu hồi Đợt Quái Vật Mới (Spawn Wave - 32+ quái)
[18] 🏡 Bước vào Ngôi Nhà Khởi Đầu của NPC Trưởng Lão
[19] 🏰 Ra khỏi Nhà Khởi Đầu ra ngoài Sảnh Tavern
[0]  Thoát
```
