/**
 * game.js - Pixel Crawler 2D Action RPG Game Engine
 * PHIÊN BẢN 6.0 - ĐẠI TU TOÀN DIỆN & PHỤC CHẾ 100% ASSET CHUẨN XÁC
 * ==============================================================
 * 1. PHỤC CHẾ HOÀN HẢO TOÀN BỘ ASSET BỊ LỖI FRAME / SLICING:
 *    - Toàn bộ Lò Nung Furnace (Bricks, Iron, Stone):
 *        + Tier 1 (_01): 4 frames (32x48) sắp xếp dạng lưới 2x2 trong ảnh 64x96.
 *        + Tier 2 & 3 (_02, _03): 4 frames (48x64) sắp xếp dạng lưới 2x2 trong ảnh 96x128.
 *        + Furnace.png: Khối lò nung đại diện 192x192 hiển thị nguyên vẹn tỷ lệ.
 *    - Toàn bộ Quái Vật Mob:
 *        + Skeleton Base Death: Chuẩn 8 frames x 96x64 (ảnh 768x64, không bị co giật 64px).
 *        + Skeleton Warrior Death: Chuẩn 6 frames x 64x48.
 *        + Orc Warrior Death: Chuẩn 6 frames x 96x80.
 *        + Orc Shaman Death: Chuẩn 7 frames x 64x64.
 *    - Toàn bộ Trạm Nấu Cooking Station & Lò Nướng Grill:
 *        + Grill 01, 02, 03: Chuẩn 4 frames x 64x64.
 *        + Grill 04: Chuẩn 4 frames x 80x64.
 *        + Cooker 03: Chuẩn 4 frames x 48x32.
 *        + Cooker 04: Chuẩn 4 frames x 80x80.
 *        + Butchery 01-04, Cooker 01-02: Chuẩn kích thước gốc.
 *    - Toàn bộ Chảo Nấu Pan & Pan Animated:
 *        + Pan 01: 4 frames x 32x32. Pan 02: 4 frames x 16x32.
 *        + Pan 03: 12 frames x 32x32. Pan 04: 4 frames x 32x32. Pan 05: 8 frames x 32x32.
 *    - Toàn bộ Lửa Trại Bonfire:
 *        + Bonfire 01-08: 4 frames x 32x32.
 *        + Bonfire 09: 4 frames x 80x32. Bonfire 10: 4 frames x 48x32.
 *        + Fire 01, Fire 02, Smoke: 4 frames x 32x48.
 *    - Toàn bộ Xưởng Cưa Sawmill & Đe Rèn Anvil & Bàn Thuốc Alchemy:
 *        + Sawmill Base, Level 1, Level 2 (80x64), Level 3 (112x80).
 *        + Anvil, Anvil 01 (64x80), Anvil 02 (80x80), Anvil 03 (96x112).
 *        + Alchemy Table 01 (32x64), Table 02 (48x64), Table 03 (80x80).
 *    - Toàn bộ Động Tác Nhân Vật Body_A (42 tệp) & Champion New_Version (7 tệp):
 *        + Idle, Walk, Run, Carry_Idle, Carry_Walk, Carry_Run, Death.
 *        + Slice (Chém J), Pierce (Đâm K, hỗ trợ Pierce_Top), Crush (Búa L).
 *        + Hit (Trúng đòn), Collect (Nhặt đồ), Watering (Tưới nước U), Fishing (Câu cá I).
 *        + Champion Walk 48x48 vs Idle 64x64.
 *    - Toàn bộ 21 tệp NPC (Knight, Rogue, Wizzard, Citizen_A, Peasant_A, Tavern_A, Tavern_B).
 *
 * 2. 5 BẢN ĐỒ ĐỘC LẬP HOÀN TOÀN - KHÔNG CHỒNG ĐÈ ("MAP NÀO RA MAP ĐÓ"):
 *    - MAP 1: Sảnh Quán Rượu Hoàng Gia (tavern - 1280x640)
 *    - MAP 2: Sân Làng Ngoài Trời & Ngôi Nhà Khởi Đầu (courtyard - 1280x640)
 *    - MAP 3: Ngôi Nhà Khởi Đầu Của NPC (starter_house - 480x360)
 *    - MAP 4: Tầng Hầm Ngục & Ma Trận 4 Phòng (dungeon - 1280x640)
 *    - MAP 5: Cổng Thành Vương Quốc (castle_gate - 640x640)
 *
 * 3. 100% ASSET SỬ DỤNG THỰC TẾ TRONG GAMEPLAY (194/194 PNG).
 */

// ==============================================================
// 1. CẤU HÌNH QUÁI VẬT (CHUẨN XÁC TỪ FILE GỐC ASEPRITE)
// ==============================================================
const MOB_CONFIGS = {
  skeleton_base: {
    id: 'skeleton_base',
    name: 'Skeleton Tân Binh',
    maxHp: 45, speed: 75, damage: 8, gold: 15, aggroRange: 200, isBoss: false,
    folder: 'Entities/Mobs/Skeleton Crew/Skeleton - Base/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.16 },
    run: { w: 64, h: 64, frames: 6, speed: 0.12 },
    // CHUẨN XÁC: 8 frames x 96x64 (ảnh gốc 768x64)
    death: { w: 96, h: 64, frames: 8, speed: 0.10 }
  },
  skeleton_warrior: {
    id: 'skeleton_warrior',
    name: 'Skeleton Chiến Binh',
    maxHp: 80, speed: 85, damage: 12, gold: 20, aggroRange: 220, isBoss: false,
    folder: 'Entities/Mobs/Skeleton Crew/Skeleton - Warrior/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.16 },
    run: { w: 64, h: 64, frames: 6, speed: 0.11 },
    // CHUẨN XÁC: 6 frames x 64x48 (ảnh gốc 384x48)
    death: { w: 64, h: 48, frames: 6, speed: 0.10 }
  },
  skeleton_rogue: {
    id: 'skeleton_rogue',
    name: 'Skeleton Thích Khách',
    maxHp: 65, speed: 115, damage: 15, gold: 24, aggroRange: 240, isBoss: false,
    folder: 'Entities/Mobs/Skeleton Crew/Skeleton - Rogue/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.15 },
    run: { w: 64, h: 64, frames: 6, speed: 0.09 },
    death: { w: 64, h: 64, frames: 6, speed: 0.10 }
  },
  skeleton_mage: {
    id: 'skeleton_mage',
    name: 'Skeleton Pháp Sư',
    maxHp: 55, speed: 70, damage: 18, gold: 28, aggroRange: 260, isBoss: false,
    folder: 'Entities/Mobs/Skeleton Crew/Skeleton - Mage/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.16 },
    run: { w: 64, h: 64, frames: 6, speed: 0.12 },
    death: { w: 64, h: 64, frames: 6, speed: 0.10 }
  },
  orc_base: {
    id: 'orc_base',
    name: 'Orc Thổ Phỉ',
    maxHp: 95, speed: 70, damage: 14, gold: 28, aggroRange: 210, isBoss: false,
    folder: 'Entities/Mobs/Orc Crew/Orc/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.18 },
    run: { w: 64, h: 64, frames: 6, speed: 0.12 },
    death: { w: 64, h: 64, frames: 6, speed: 0.10 }
  },
  orc_warrior: {
    id: 'orc_warrior',
    name: 'Orc Thiết Giáp Binh',
    maxHp: 160, speed: 75, damage: 22, gold: 40, aggroRange: 220, isBoss: false,
    folder: 'Entities/Mobs/Orc Crew/Orc - Warrior/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.18 },
    run: { w: 64, h: 64, frames: 6, speed: 0.12 },
    // CHUẨN XÁC: 6 frames x 96x80 (ảnh gốc 576x80)
    death: { w: 96, h: 80, frames: 6, speed: 0.10 }
  },
  orc_rogue: {
    id: 'orc_rogue',
    name: 'Orc Đao Phủ',
    maxHp: 110, speed: 105, damage: 18, gold: 35, aggroRange: 240, isBoss: false,
    folder: 'Entities/Mobs/Orc Crew/Orc - Rogue/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.16 },
    run: { w: 64, h: 64, frames: 6, speed: 0.10 },
    death: { w: 64, h: 64, frames: 6, speed: 0.10 }
  },
  orc_shaman: {
    id: 'orc_shaman',
    name: 'Orc Phù Thủy Tộc (Boss Hầm Ngục)',
    maxHp: 350, speed: 65, damage: 30, gold: 200, aggroRange: 320, isBoss: true,
    folder: 'Entities/Mobs/Orc Crew/Orc - Shaman/',
    idle: { w: 32, h: 32, frames: 4, speed: 0.18 },
    run: { w: 64, h: 64, frames: 6, speed: 0.13 },
    // CHUẨN XÁC: 7 frames x 64x64 (ảnh gốc 448x64)
    death: { w: 64, h: 64, frames: 7, speed: 0.11 }
  }
};

MOB_CONFIGS['skeleton'] = MOB_CONFIGS['skeleton_warrior'];
MOB_CONFIGS['orc'] = MOB_CONFIGS['orc_warrior'];

// ==============================================================
// 2. CẤU HÌNH VŨ KHÍ (WEAPONS)
// ==============================================================
// ==============================================================
// 1. CẤU HÌNH 4 CHỨC NGHIỆP RPG (CLASS / PROFESSION CONFIGURATIONS)
// ==============================================================
const CLASS_CONFIGS = {
  novice: {
    id: 'novice',
    name: 'Kẻ Vô Danh (Vô Nghề)',
    desc: 'Chưa có chức nghiệp. Khởi đầu với nắm đấm thép tay không và sự kiên trì!',
    skin: 'classic',
    weapon: 'hands',
    badge: '🥊 Vô Nghề (P)',
    icon: '🥊',
    baseHp: 100,
    baseSp: 100,
    speedMult: 1.05
  },
  knight: {
    id: 'knight',
    name: 'Hiệp Sĩ Hoàng Gia',
    desc: 'Giáp trụ kiên cố, tay cầm Kiếm Hiệp Sĩ. Công thủ toàn năng, sức bền cao!',
    skin: 'knight',
    weapon: 'wood',
    badge: '⚔️ Hiệp Sĩ (P)',
    icon: '⚔️',
    baseHp: 140,
    baseSp: 90,
    speedMult: 0.95
  },
  rogue: {
    id: 'rogue',
    name: 'Sát Thủ Bóng Đêm',
    desc: 'Áo choàng đen bí ẩn, vung Lưỡi Hái Xương trăng khuyết khổng lồ. Tốc độ cực nhanh!',
    skin: 'rogue',
    weapon: 'bone',
    badge: '🌙 Sát Thủ (P)',
    icon: '🌙',
    baseHp: 90,
    baseSp: 120,
    speedMult: 1.25
  },
  wizard: {
    id: 'wizard',
    name: 'Đại Pháp Sư Tối Cao',
    desc: 'Áo choàng tím huyền thoại, cầm Quyền Trượng Ma Thuật bắn cầu ma pháp tầm xa!',
    skin: 'wizard',
    weapon: 'staff',
    badge: '🔮 Pháp Sư (P)',
    icon: '🔮',
    baseHp: 85,
    baseSp: 130,
    speedMult: 1.05
  }
};

const WEAPON_CONFIGS = {
  wood: {
    id: 'wood',
    name: 'Kiếm Gỗ Hiệp Sĩ',
    spriteKey: 'Weapons/Wood/Wood.png',
    sx: 0, sy: 5, sw: 16, sh: 42,
    drawW: 14, drawH: 36,
    bonusDmg: 0, speedMult: 1.0, color: '#f59e0b',
    trailColor: 'rgba(245, 158, 11, 0.7)',
    desc: 'Thanh kiếm gỗ cân bằng chuẩn mực của hiệp sĩ tập sự.'
  },
  bone: {
    id: 'bone',
    name: 'Lưỡi Hái Xương Tử Thần',
    spriteKey: 'Weapons/Bone/Bone.png',
    sx: 0, sy: 0, sw: 16, sh: 80,
    drawW: 16, drawH: 48,
    bonusDmg: 18, speedMult: 1.15, color: '#ef4444',
    trailColor: 'rgba(239, 68, 68, 0.7)',
    desc: 'Lưỡi hái xương tử thần quét trăng khuyết khổng lồ, tăng mạnh sát thương!'
  },
  hands: {
    id: 'hands',
    name: 'Găng Thiết Quyền Đấu Sĩ',
    spriteKey: 'Weapons/Hands/Hands.png',
    sx: 0, sy: 0, sw: 32, sh: 32,
    drawW: 24, drawH: 24,
    bonusDmg: 8, speedMult: 1.35, color: '#38bdf8',
    trailColor: 'rgba(56, 189, 248, 0.7)',
    desc: 'Tấn công cực nhanh, tạo sóng xung kích lôi điện!'
  },
  greatsword: {
    id: 'greatsword',
    name: 'Đại Kiếm Xương Trảm Kích',
    spriteKey: 'Weapons/Bone/Bone.png',
    sx: 17, sy: 17, sw: 14, sh: 63,
    drawW: 15, drawH: 44,
    bonusDmg: 26, speedMult: 0.92, color: '#fb7185',
    trailColor: 'rgba(251, 113, 133, 0.7)',
    desc: 'Đại kiếm răng quỷ chế tác từ xương bạo long, nhát chém uy lực vô song!'
  },
  axe: {
    id: 'axe',
    name: 'Rìu Chiến Rừng Sâu',
    spriteKey: 'Weapons/Wood/Wood.png',
    sx: 48, sy: 18, sw: 16, sh: 30,
    drawW: 16, drawH: 32,
    bonusDmg: 14, speedMult: 1.1, color: '#eab308',
    trailColor: 'rgba(234, 179, 8, 0.7)',
    desc: 'Rìu chiến sắc bén đốn gục mọi quái vật trong tích tắc!'
  },
  staff: {
    id: 'staff',
    name: 'Quyền Trượng Ma Thuật',
    spriteKey: 'Weapons/Bone/Bone.png',
    sx: 67, sy: 2, sw: 10, sh: 46,
    drawW: 14, drawH: 42,
    bonusDmg: 12, speedMult: 1.1, color: '#c084fc',
    trailColor: 'rgba(192, 132, 252, 0.7)',
    desc: 'Quyền trượng cổ xưa giải phóng cầu ma pháp tầm xa tiêu diệt quái vật!'
  },
};

const PLAYER_SKINS = {
  knight: { id: 'knight', name: 'Đại Hiệp Sĩ Hoàng Gia', badge: '⚔️ Hiệp Sĩ (C)' },
  rogue: { id: 'rogue', name: 'Sát Thủ Bóng Đêm', badge: '🗡️ Sát Thủ (C)' },
  wizard: { id: 'wizard', name: 'Đại Pháp Sư Tối Cao', badge: '🔮 Pháp Sư (C)' },
  champion: { id: 'champion', name: 'Nhà Vô Địch Hoàng Gia', badge: '👑 Champion (C)' },
  classic: { id: 'classic', name: 'Chiến Binh Cổ Điển', badge: '🛡️ Classic (C)' }
};

// CÁC BLOCK VẬT CẢN VÀ BỨC TƯỜNG TRONG MAP QUÁN RƯỢU (TAVERN - 1280x640)
// Chuẩn xác 100% theo đồ họa thực tế của MockUps/Tavern.png:
// - BÓNG ĐỔ (CHANDELIER SHADOWS & FLOOR LIGHT) HOÀN TOÀN KHÔNG CẢN ĐƯỜNG (BÓNG ĐI QUA ĐƯỢC)
// - TOÀN BỘ CÁC LỐI ĐI, HÀNH LANG, BẬC THANG, CỬA ĐỀU THÔNG THOÁNG ĐI LẠI BÌNH THƯỜNG
// - CHỈ CẢN CÁC VẬT THỂ THỰC: TƯỜNG, BÀN ĂN, QUẦY BAR, BÀN CHẾ BIẾN BẾP, CHÂN CỘT ĐUỐC
const TAVERN_SOLID_BLOCKS = [
  // 1. TƯỜNG BIÊN & TƯỜNG NGĂN
  { id: 'wall_outer_left', x1: 0, y1: 0, x2: 45, y2: 640 },
  { id: 'wall_outer_right', x1: 1225, y1: 0, x2: 1280, y2: 640 },
  { id: 'wall_bottom', x1: 0, y1: 630, x2: 1280, y2: 640 },

  // Tường bếp trên & dãy bếp lò / lò nướng (khu nấu nướng x:45..430, y:0..115)
  { id: 'kitchen_stoves_ovens', x1: 45, y1: 0, x2: 430, y2: 115 },
  // Lò nướng bánh mì gạch đỏ & ống khói (x:430..508, y:0..160)
  { id: 'kitchen_bread_oven', x1: 430, y1: 0, x2: 508, y2: 160 },
  // Tường đen ngang ngăn giữa bếp trên và bếp dưới (chừa cầu thang bên trái x:45..95)
  { id: 'kitchen_mid_wall', x1: 95, y1: 288, x2: 345, y2: 324 },
  // Tường đá dọc ngăn giữa khu bếp và sảnh tiệc (x:320..352, y:288..640)
  { id: 'kitchen_vertical_wall', x1: 320, y1: 288, x2: 352, y2: 640 },

  // Tường biên trên sau kệ rượu (x:508..685, y:0..208)
  { id: 'tavern_top_wall_shelf', x1: 508, y1: 0, x2: 685, y2: 208 },
  // Tường bên phải cửa gỗ (x:745..795, y:0..205)
  { id: 'tavern_top_wall_door_right', x1: 745, y1: 0, x2: 795, y2: 205 },
  // Tường trên phòng tiệc VIP có cửa sổ (x:795..1225, y:0..115)
  { id: 'vip_top_wall', x1: 795, y1: 0, x2: 1225, y2: 115 },
  // Lan can ngăn phòng VIP bên trái (x:735..748, y:0..220)
  { id: 'vip_left_railing', x1: 735, y1: 0, x2: 748, y2: 220 },

  // 2. NỘI THẤT VÀ BÀN CHẾ BIẾN TRONG KHU BẾP
  // Bàn dài chuẩn bị bánh mì bếp trên (x:145..385, y:195..275)
  { id: 'kitchen_bread_table', x1: 145, y1: 195, x2: 385, y2: 275 },
  // Bàn bồn rửa & kệ bếp dưới (x:140..275, y:335..415)
  { id: 'kitchen_sink_table', x1: 140, y1: 335, x2: 275, y2: 415 },
  // Bàn chặt thịt & sơ chế bếp dưới (x:85..195, y:515..585)
  { id: 'kitchen_meat_table', x1: 85, y1: 515, x2: 195, y2: 585 },
  // Thùng kiện gà thịt bếp dưới (x:215..285, y:525..595)
  { id: 'kitchen_chicken_crates', x1: 215, y1: 525, x2: 285, y2: 595 },
  // Dãy thùng rượu cạnh tường trái bếp dưới (x:45..75, y:490..600)
  { id: 'kitchen_barrels', x1: 45, y1: 490, x2: 75, y2: 600 },

  // 3. QUẦY BAR VÀ KỆ RƯỢU
  // Kệ rượu trên tường (x:508..640, y:208..290)
  { id: 'bar_wine_shelf', x1: 508, y1: 208, x2: 640, y2: 290 },
  // Mặt quầy bar chính & ghế quầy bar (x:505..672, y:365..425)
  { id: 'bar_counter_main', x1: 505, y1: 365, x2: 672, y2: 425 },
  // Quầy bar cạnh dọc bên phải (x:640..672, y:290..365)
  { id: 'bar_counter_side', x1: 640, y1: 290, x2: 672, y2: 365 },
  // Cánh cửa gập lối vào quầy bar (x:448..505, y:368..405)
  { id: 'bar_flap_gate', x1: 448, y1: 368, x2: 505, y2: 405 },

  // 4. BÀN TRÒN PHÒNG TIỆC VIP TRÊN CAO
  // Bàn VIP 1 (trái) kèm 4 ghế
  { id: 'vip_table_left', x1: 905, y1: 110, x2: 1005, y2: 200 },
  // Bàn VIP 2 (phải) kèm 4 ghế
  { id: 'vip_table_right', x1: 1070, y1: 110, x2: 1170, y2: 200 },

  // 5. TOÀN BỘ BÀN TIỆC TRONG SẢNH CHÍNH (KHÔNG BAO GỒM BÓNG ĐỔ!)
  // Bàn 1: Bàn khăn đỏ trên cùng kèm món ăn & ghế
  { id: 'table_red_upper', x1: 775, y1: 310, x2: 890, y2: 390 },
  // Bàn 2: Bàn gỗ giữa sảnh kèm nồi súp & ghế
  { id: 'table_mid_pots', x1: 775, y1: 435, x2: 890, y2: 515 },
  // Bàn 3: Bàn khăn xanh dưới cùng kèm đĩa ăn & ghế
  { id: 'table_blue_lower', x1: 775, y1: 560, x2: 890, y2: 635 },
  // Bàn 4: Bàn khăn đỏ góc dưới trái gần thảm xanh kèm ly rượu & ghế
  { id: 'table_red_lower_left', x1: 528, y1: 560, x2: 665, y2: 635 },
  // Bàn 5: Đại tiệc bàn dài Hoàng Gia (khăn xanh, tiệc thịnh soạn & 12 ghế)
  { id: 'grand_banquet_table', x1: 970, y1: 345, x2: 1125, y2: 605 },

  // 6. CHÂN TRỤ ĐUỐC (CHỈ VA CHẠM ĐẾ GỖ SÁT ĐẤT - TUYỆT ĐỐI KHÔNG CẢN BÓNG HAY KHÔNG GIAN TRÊN CAO)
  { id: 'post_base_1', x1: 495, y1: 590, x2: 515, y2: 612 },
  { id: 'post_base_2', x1: 702, y1: 590, x2: 722, y2: 612 },
  { id: 'post_base_3', x1: 912, y1: 590, x2: 932, y2: 612 },
  { id: 'post_base_4', x1: 1132, y1: 590, x2: 1152, y2: 612 },
  { id: 'post_stairs_left', x1: 800, y1: 298, x2: 818, y2: 318 },
  { id: 'post_stairs_right', x1: 1152, y1: 298, x2: 1170, y2: 318 }
];

// CÁC BLOCK VẬT CẢN VÀ BỨC TƯỜNG TRONG MAP HẦM NGỤC (DUNGEON - 1280x640)
// Phân rõ ranh giới các tầng theo chuẩn Dungeon_Tiles của asset pack:
const DUNGEON_SOLID_BLOCKS = [
  // Bức tường biên trên (chừa lối cầu thang leo lên quán rượu ở x:150..210)
  { id: 'top_left', x1: 0, y1: 0, x2: 150, y2: 100 },
  { id: 'top_right', x1: 210, y1: 0, x2: 1280, y2: 100 },
  // Bức tường biên dưới
  { id: 'bottom_wall', x1: 0, y1: 590, x2: 1280, y2: 640 },
  // Bức tường biên trái & phải
  { id: 'left_wall', x1: 0, y1: 0, x2: 45, y2: 640 },
  { id: 'right_wall', x1: 1235, y1: 0, x2: 1280, y2: 640 },

  // TƯỜNG NGĂN RANH GIỚI 1 (TẦNG 1 -> TẦNG 2 tại x=320)
  // Cổng vòm thông thoáng ở y:250..380
  { id: 'wall1_up', x1: 304, y1: 40, x2: 336, y2: 250 },
  { id: 'wall1_down', x1: 304, y1: 380, x2: 336, y2: 600 },

  // TƯỜNG NGĂN RANH GIỚI 2 (TẦNG 2 -> TẦNG 3 tại x=640)
  // Cổng vòm thông thoáng ở y:250..380
  { id: 'wall2_up', x1: 624, y1: 40, x2: 656, y2: 250 },
  { id: 'wall2_down', x1: 624, y1: 380, x2: 656, y2: 600 },

  // TƯỜNG NGĂN RANH GIỚI 3 (TẦNG 3 -> TẦNG 4 BOSS tại x=960)
  // Cổng vòm thông thoáng ở y:250..380
  { id: 'wall3_up', x1: 944, y1: 40, x2: 976, y2: 250 },
  { id: 'wall3_down', x1: 944, y1: 380, x2: 976, y2: 600 },

  // TẦNG 1: Khung lồng giam Pháp Sư Bị Giam Cầm (NPC đứng tại x=240, y=480)
  { id: 'wizard_cage', x1: 195, y1: 430, x2: 285, y2: 525 },
  // Trụ đá Tầng 1
  { id: 'r1_pillar', x1: 265, y1: 140, x2: 305, y2: 195 },

  // TẦNG 2: Xưởng lò nung đá cổ đại, bàn giả kim thuật & bãi khoáng thạch
  { id: 'furnace_1', x1: 355, y1: 150, x2: 395, y2: 205 }, // Stone Furnace 1 (32x48)
  { id: 'furnace_2', x1: 400, y1: 140, x2: 455, y2: 210 }, // Stone Furnace 2 (48x64)
  { id: 'furnace_3', x1: 460, y1: 140, x2: 515, y2: 210 }, // Stone Furnace 3 (48x64)
  { id: 'alch_3', x1: 525, y1: 135, x2: 610, y2: 215 },    // Grand Master Alchemy Table 3 (80x80)
  { id: 'res_rock_1', x1: 370, y1: 408, x2: 412, y2: 448 },// Khối quặng đá 1
  { id: 'res_rock_2', x1: 420, y1: 408, x2: 465, y2: 448 },// Khối tinh thể 2
  { id: 'r2_altar', x1: 490, y1: 240, x2: 550, y2: 295 },  // Bệ đá ma thuật trung tâm

  // TẦNG 3: Đấu trường quái vật - dãy đuốc lửa và các khối cột đá chiến đấu
  { id: 'r3_pillar_top', x1: 670, y1: 140, x2: 715, y2: 195 }, // Trụ đá góc phòng
  { id: 'r3_bonfires', x1: 730, y1: 155, x2: 855, y2: 200 },   // Dãy đuốc lò lửa hầm ngục
  { id: 'arena_pillar_1', x1: 715, y1: 405, x2: 765, y2: 465 }, // Trụ đá đấu trường 1
  { id: 'arena_pillar_2', x1: 835, y1: 405, x2: 885, y2: 465 }, // Trụ đá đấu trường 2
  { id: 'r3_prop', x1: 875, y1: 400, x2: 925, y2: 450 },        // Đạo cụ đấu trường

  // TẦNG 4: Phòng Boss Orc Phù Thủy Tộc & Bệ rương kho báu
  { id: 'boss_altar', x1: 1005, y1: 240, x2: 1060, y2: 295 },   // Bệ đá triệu hồi Boss
  { id: 'dungeon_chest', x1: 1085, y1: 465, x2: 1125, y2: 505 },// Rương báu cổ hầm ngục
  { id: 'boss_statue_top', x1: 1125, y1: 170, x2: 1170, y2: 225 }, // Tượng hộ vệ trên
  { id: 'boss_statue_down', x1: 1125, y1: 375, x2: 1170, y2: 430 } // Tượng hộ vệ dưới
];

// CÁC BLOCK VẬT CẢN VÀ BỨC TƯỜNG TRONG CUNG ĐIỆN HOÀNG GIA (PALACE - 960x640)
const PALACE_SOLID_BLOCKS = [
  // Bức tường biên trên
  { id: 'palace_top', x1: 0, y1: 0, x2: 960, y2: 100 },
  // Bức tường biên trái & phải
  { id: 'palace_left', x1: 0, y1: 0, x2: 45, y2: 640 },
  { id: 'palace_right', x1: 915, y1: 0, x2: 960, y2: 640 },
  // Bức tường biên dưới (chừa lối cổng lớn ở x: 420..540)
  { id: 'palace_bottom_left', x1: 0, y1: 595, x2: 420, y2: 640 },
  { id: 'palace_bottom_right', x1: 540, y1: 595, x2: 960, y2: 640 },

  // Bệ Ngai Vàng của Quốc Vương (x: 455..505, y: 100..145)
  { id: 'royal_throne', x1: 455, y1: 100, x2: 505, y2: 145 },

  // Cột đá hoa cương hoàng cung
  { id: 'palace_col_l1', x1: 340, y1: 220, x2: 380, y2: 265 },
  { id: 'palace_col_l2', x1: 340, y1: 390, x2: 380, y2: 435 },
  { id: 'palace_col_r1', x1: 580, y1: 220, x2: 620, y2: 265 },
  { id: 'palace_col_r2', x1: 580, y1: 390, x2: 620, y2: 435 },

  // Đài Nước Thánh & Bàn Tế Lễ bên trái
  { id: 'palace_fountain_block', x1: 175, y1: 180, x2: 225, y2: 230 },

  // Rương Kho Báu Triều Đình bên phải
  { id: 'palace_treasury_block', x1: 745, y1: 180, x2: 785, y2: 225 }
];



// ==============================================================
// 3. CẤU HÌNH 5 BẢN ĐỒ ĐỘC LẬP (MAP CONFIGURATIONS)
// ==============================================================
const MAP_CONFIGS = {
  tavern: {
    id: 'tavern',
    name: 'Sảnh Quán Rượu Hoàng Gia',
    badgeText: '🏰 Sảnh Quán Rượu',
    width: 1280,
    height: 640,
    spawnX: 640,
    spawnY: 480
  },
  starter_homestead: {
    id: 'starter_homestead',
    name: 'Thung Lũng Nhà Tân Thủ (Starter Homestead)',
    badgeText: '🏡 Nhà Tân Thủ',
    width: 800,
    height: 800,
    spawnX: 608,
    spawnY: 260
  },
  courtyard: {
    id: 'courtyard',
    name: 'Đại Rừng Nguyên Sinh & Trạm Chế Tạo',
    badgeText: '🌲 Rừng Nguyên Sinh',
    width: 1280,
    height: 640,
    spawnX: 80,
    spawnY: 520
  },
  starter_house: {
    id: 'starter_house',
    name: 'Ngôi Nhà Khởi Đầu Của NPC',
    badgeText: '🏡 Nhà Khởi Đầu NPC',
    width: 480,
    height: 360,
    spawnX: 240,
    spawnY: 300
  },
  dungeon: {
    id: 'dungeon',
    name: 'Hầm Ngục Phó Bản 4 Phòng',
    badgeText: '⚔️ Hầm Ngục Phó Bản',
    width: 1280,
    height: 640,
    spawnX: 180,
    spawnY: 140
  },
  castle_gate: {
    id: 'castle_gate',
    name: 'Cổng Thành Vương Quốc',
    badgeText: '👑 Cổng Thành Vương Quốc',
    width: 640,
    height: 640,
    spawnX: 320,
    spawnY: 560
  },
  palace: {
    id: 'palace',
    name: 'Cung Điện Hoàng Gia (Throne Room)',
    badgeText: '👑 Cung Điện Hoàng Gia',
    width: 960,
    height: 640,
    spawnX: 480,
    spawnY: 570
  }
};

// ==============================================================
// 4. HÀM VẼ TẤT CẢ ASSET TRẠM NẤU, LÒ NUNG, ĐE RÈN (CHUẨN FRAME)
// ==============================================================
function drawFurnace(ctx, img, frame, x, y, tier) {
  if (!img) return;
  // Tier 1 (_01): 4 frames arranged in 2x2 grid in 64x96 image (each frame is 32x48)
  if (tier === 1) {
    const f = frame % 4;
    const sx = (f % 2) * 32;
    const sy = Math.floor(f / 2) * 48;
    ctx.drawImage(img, sx, sy, 32, 48, x, y, 32, 48);
  } else {
    // Tier 2 & 3 (_02, _03): 4 frames arranged in 2x2 grid in 96x128 image (each frame is 48x64)
    const f = frame % 4;
    const sx = (f % 2) * 48;
    const sy = Math.floor(f / 2) * 64;
    ctx.drawImage(img, sx, sy, 48, 64, x, y, 48, 64);
  }
}

function drawBonfire(ctx, img, frame, x, y, type) {
  if (!img) return;
  if (type === 'long') {
    // Bonfire 09: 4 frames x 80x32
    const f = frame % 4;
    ctx.drawImage(img, f * 80, 0, 80, 32, x, y, 80, 32);
  } else if (type === 'mid') {
    // Bonfire 10: 4 frames x 48x32
    const f = frame % 4;
    ctx.drawImage(img, f * 48, 0, 48, 32, x, y, 48, 32);
  } else if (type === 'tall') {
    // Fire_01, Fire_02, Smoke: 4 frames x 32x48
    const f = frame % 4;
    ctx.drawImage(img, f * 32, 0, 32, 48, x, y, 32, 48);
  } else {
    // Standard 01-08: 4 frames x 32x32
    const f = frame % 4;
    ctx.drawImage(img, f * 32, 0, 32, 32, x, y, 32, 32);
  }
}

function drawGrill(ctx, img, frame, x, y, tier) {
  if (!img) return;
  if (tier === 4) {
    // Grill 04: 4 frames x 80x64
    const f = frame % 4;
    ctx.drawImage(img, f * 80, 0, 80, 64, x, y, 80, 64);
  } else {
    // Grill 01, 02, 03: 4 frames x 64x64
    const f = frame % 4;
    ctx.drawImage(img, f * 64, 0, 64, 64, x, y, 64, 64);
  }
}

function drawCooker(ctx, img, frame, x, y, tier) {
  if (!img) return;
  if (tier === 3) {
    // Cooker 03: 4 frames x 48x32
    const f = frame % 4;
    ctx.drawImage(img, f * 48, 0, 48, 32, x, y, 48, 32);
  } else if (tier === 4) {
    // Cooker 04: 4 frames x 80x80
    const f = frame % 4;
    ctx.drawImage(img, f * 80, 0, 80, 80, x, y, 80, 80);
  } else {
    // Cooker 01, 02: static 64x64
    ctx.drawImage(img, x, y);
  }
}

function drawPan(ctx, img, frame, x, y, type) {
  if (!img) return;
  if (type === 1) {
    // Pan 01: 4 frames x 32x32
    ctx.drawImage(img, (frame % 4) * 32, 0, 32, 32, x, y, 32, 32);
  } else if (type === 2) {
    // Pan 02: 4 frames x 16x32
    ctx.drawImage(img, (frame % 4) * 16, 0, 16, 32, x, y, 16, 32);
  } else if (type === 3) {
    // Pan 03: 12 frames x 32x32
    ctx.drawImage(img, (frame % 12) * 32, 0, 32, 32, x, y, 32, 32);
  } else if (type === 4) {
    // Pan 04: 4 frames x 32x32
    ctx.drawImage(img, (frame % 4) * 32, 0, 32, 32, x, y, 32, 32);
  } else if (type === 5) {
    // Pan 05: 8 frames x 32x32
    ctx.drawImage(img, (frame % 8) * 32, 0, 32, 32, x, y, 32, 32);
  }
}

function drawSawmill(ctx, img, frame, x, y, level) {
  if (!img) return;
  if (level === 2) {
    // Level 2: 80x64 frames
    ctx.drawImage(img, 0, 0, 80, 64, x, y, 80, 64);
  } else if (level === 3) {
    // Level 3: 112x80 frames
    ctx.drawImage(img, 0, 0, 112, 80, x, y, 112, 80);
  } else {
    ctx.drawImage(img, x, y);
  }
}

function drawAnvil(ctx, img, frame, x, y, level) {
  if (!img) return;
  if (level === 1) {
    ctx.drawImage(img, 0, 0, 64, 80, x, y, 64, 80);
  } else if (level === 2) {
    ctx.drawImage(img, 0, 0, 80, 80, x, y, 80, 80);
  } else if (level === 3) {
    ctx.drawImage(img, 0, 0, 96, 112, x, y, 96, 112);
  } else {
    ctx.drawImage(img, 0, 0, 64, 48, x, y, 64, 48);
  }
}

function drawAlchemy(ctx, img, frame, x, y, level) {
  if (!img) return;
  if (level === 1) {
    const f = frame % 4;
    ctx.drawImage(img, (f % 2) * 32, Math.floor(f / 2) * 64, 32, 64, x, y, 32, 64);
  } else if (level === 2) {
    const f = frame % 4;
    ctx.drawImage(img, (f % 2) * 48, Math.floor(f / 2) * 64, 48, 64, x, y, 48, 64);
  } else if (level === 3) {
    ctx.drawImage(img, 0, 0, 80, 80, x, y, 80, 80);
  }
}

// ==============================================================
// 5. LỚP NHÂN VẬT CHÍNH (PLAYER - 100% 42 BODY_A & 7 NEW_VERSION)
// ==============================================================
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.speed = 140;
    this.runSpeed = 220;

    this.maxHp = 100;
    this.hp = 100;
    this.maxSp = 100;
    this.sp = 100;
    this.gold = 50;
    this.kills = 0;
    this.level = 1;

    this.direction = 'down'; // 'down', 'up', 'left', 'right'
    this.state = 'idle';     // 'idle', 'walk', 'run', 'attack', 'roll', 'dead', 'collect', 'watering', 'fishing', 'hit'
    this.profession = 'novice'; // 'novice', 'knight', 'rogue', 'wizard'
    this.skin = 'classic';   // 'classic', 'champion', 'knight', 'rogue', 'wizard'
    this.currentWeapon = 'hands'; // 'hands', 'wood', 'bone', 'staff', 'greatsword', 'axe'

    this.frameIndex = 0;
    this.frameTimer = 0;

    this.isAttacking = false;
    this.attackType = 'slash'; // 'slash' (Slice), 'thrust' (Pierce), 'hammer' (Crush)
    this.attackDuration = 0.30;
    this.attackTimer = 0;
    this.hasHitThisAttack = false;

    this.isRolling = false;
    this.rollTimer = 0;

    this.isCarrying = false;
    this.isDead = false;
    this.invulnerableTimer = 0;
    this.specialActionTimer = 0;
  }

  setProfession(classId) {
    const cfg = CLASS_CONFIGS[classId] || CLASS_CONFIGS.novice;
    this.profession = cfg.id;
    this.skin = cfg.skin;
    this.currentWeapon = cfg.weapon;
    this.maxHp = cfg.baseHp;
    this.hp = cfg.baseHp;
    this.maxSp = cfg.baseSp;
    this.sp = cfg.baseSp;
    this.speed = Math.round(120 * cfg.speedMult);
    this.runSpeed = Math.round(200 * cfg.speedMult);
    this.frameIndex = 0;
    this.frameTimer = 0;
    return cfg;
  }

  toggleSkin() {
    const skinKeys = ['knight', 'rogue', 'wizard', 'champion', 'classic'];
    const curIdx = skinKeys.indexOf(this.skin);
    const nextIdx = (curIdx + 1) % skinKeys.length;
    this.skin = skinKeys[nextIdx];
    this.frameIndex = 0;
    this.frameTimer = 0;
    return this.skin;
  }

  update(dt, keys, isSolidFn) {
    if (this.isDead) return;

    if (this.invulnerableTimer > 0) {
      this.invulnerableTimer -= dt;
    }

    if (this.specialActionTimer > 0) {
      this.specialActionTimer -= dt;
      if (this.specialActionTimer <= 0) {
        this.state = 'idle';
      }
      this.updateAnimation(dt);
      return;
    }

    if (this.state !== 'run' && !this.isRolling && this.sp < this.maxSp) {
      this.sp = Math.min(this.maxSp, this.sp + 18 * dt);
    }

    if (this.isRolling) {
      this.rollTimer -= dt;
      const rSpeed = 260;
      let dx = 0, dy = 0;
      if (this.direction === 'left') dx = -1;
      if (this.direction === 'right') dx = 1;
      if (this.direction === 'up') dy = -1;
      if (this.direction === 'down') dy = 1;

      const totalDist = rSpeed * dt;
      const steps = Math.max(1, Math.ceil(totalDist / 5));
      const stepDist = totalDist / steps;
      for (let s = 0; s < steps; s++) {
        const testX = this.x + dx * stepDist;
        const testY = this.y + dy * stepDist;
        if (!isSolidFn(testX, this.y, 13, this)) this.x = testX;
        if (!isSolidFn(this.x, testY, 13, this)) this.y = testY;
      }

      if (this.rollTimer <= 0) {
        this.isRolling = false;
        this.state = 'idle';
      }
      this.updateAnimation(dt);
      return;
    }

    if (this.isAttacking) {
      this.attackTimer -= dt;
      if (this.attackTimer <= 0) {
        this.isAttacking = false;
        this.state = 'idle';
        this.frameIndex = 0;
      } else {
        const progress = Math.min(0.999, Math.max(0, 1 - (this.attackTimer / this.attackDuration)));
        this.frameIndex = Math.min(7, Math.floor(progress * 8));

        // Kích hoạt sát thương trúng đích đúng tại frame vung trúng đích (frame 2-3)
        if (!this.hasHitThisAttack && this.frameIndex >= 3) {
          this.hasHitThisAttack = true;
          if (this.currentWeapon !== 'staff') {
            const wCfg = WEAPON_CONFIGS[this.currentWeapon] || WEAPON_CONFIGS.wood;
            let baseDmg = 20 + wCfg.bonusDmg;
            if (this.attackType === 'hammer') baseDmg *= 1.8;
            else if (this.attackType === 'thrust') baseDmg *= 1.3;
            Game.checkPlayerAttackHit(this.x, this.y, this.direction, baseDmg, 65);
            if (this.attackType === 'hammer') {
              Game.screenShake = 7;
            }
          }
        }
      }
      return;
    }

    let mx = 0, my = 0;
    if (keys['w'] || keys['W'] || keys['ArrowUp']) my -= 1;
    if (keys['s'] || keys['S'] || keys['ArrowDown']) my += 1;
    if (keys['a'] || keys['A'] || keys['ArrowLeft']) mx -= 1;
    if (keys['d'] || keys['D'] || keys['ArrowRight']) mx += 1;

    // Khi đang trong trạng thái câu cá: Di chuyển sẽ thu cần (hoặc giật cần nếu cá đang cắn câu)
    if (Game.fishing && Game.fishing.active) {
      if (mx !== 0 || my !== 0) {
        if (Game.fishing.stage === 'biting') {
          Game.reelInFish(true);
        } else {
          Game.cancelFishing();
        }
      }
      return;
    }

    const isRunning = (keys['Shift'] || keys['shift']) && this.sp > 5;
    const curSpeed = isRunning ? this.runSpeed : this.speed;

    if (mx !== 0 && my !== 0) {
      mx *= 0.7071;
      my *= 0.7071;
    }

    if (mx !== 0 || my !== 0) {
      if (mx < 0) this.direction = 'left';
      else if (mx > 0) this.direction = 'right';
      else if (my < 0) this.direction = 'up';
      else if (my > 0) this.direction = 'down';

      this.state = isRunning ? 'run' : 'walk';
      if (isRunning) this.sp = Math.max(0, this.sp - 20 * dt);

      const totalDx = mx * curSpeed * dt;
      const totalDy = my * curSpeed * dt;
      const totalDist = Math.hypot(totalDx, totalDy);
      const steps = Math.max(1, Math.ceil(totalDist / 5));
      const stepDx = totalDx / steps;
      const stepDy = totalDy / steps;

      for (let s = 0; s < steps; s++) {
        const testX = this.x + stepDx;
        const testY = this.y + stepDy;
        if (!isSolidFn(testX, this.y, 13, this)) this.x = testX;
        if (!isSolidFn(this.x, testY, 13, this)) this.y = testY;
      }
    } else {
      if (Game.fishing && Game.fishing.active) {
        // Giữ nguyên trạng thái câu cá
      } else if (!['attack', 'roll', 'collect', 'watering', 'fishing', 'hit'].includes(this.state)) {
        this.state = 'idle';
      }
    }

    this.updateAnimation(dt);
  }

  updateAnimation(dt) {
    if (this.isAttacking) return;
    if (Game.fishing && Game.fishing.active) return;
    this.frameTimer += dt;
    let dur = 0.14;
    if (this.state === 'run') dur = 0.09;
    else if (this.state === 'roll') dur = 0.08;
    else if (['collect', 'watering', 'fishing'].includes(this.state)) dur = 0.09;

    if (this.frameTimer >= dur) {
      this.frameTimer = 0;
      let maxFrames = 4;
      if (this.state === 'fishing') {
        maxFrames = 8;
      } else if (this.skin === 'champion') {
        if (['walk', 'run'].includes(this.state)) maxFrames = 6;
        else maxFrames = 4;
      } else if (['knight', 'rogue', 'wizard'].includes(this.skin)) {
        if (['walk', 'run'].includes(this.state)) maxFrames = 6;
        else if (this.state === 'dead') maxFrames = 6;
        else maxFrames = 4;
      } else {
        if (['walk', 'run', 'carry_walk', 'carry_run'].includes(this.state)) maxFrames = 6;
        else if (['dead', 'slice', 'pierce', 'crush', 'collect', 'watering', 'fishing'].includes(this.state)) maxFrames = 8;
        else if (this.state === 'hit') maxFrames = 4;
        else maxFrames = 4;
      }
      this.frameIndex = (this.frameIndex + 1) % maxFrames;
    }
  }

  attack(type = 'slash') {
    if (this.isAttacking || this.isRolling || this.isDead) return;
    if (Game.fishing && Game.fishing.active) {
      if (Game.fishing.stage === 'biting') {
        Game.reelInFish(true);
        return;
      } else {
        Game.cancelFishing();
      }
    }
    this.isAttacking = true;
    this.attackType = type;
    this.attackDuration = (type === 'hammer') ? 0.38 : 0.30;
    this.attackTimer = this.attackDuration;
    this.frameIndex = 0;
    this.hasHitThisAttack = false;

    // PHÁP SƯ BẮN CẦU MA PHÁP TẦM XA (RANGED MAGIC ATTACK)
    if (this.currentWeapon === 'staff') {
      const wCfg = WEAPON_CONFIGS[this.currentWeapon] || WEAPON_CONFIGS.staff;
      const baseDmg = 26 + (wCfg.bonusDmg || 12);

      let pDx = 0, pDy = 0;
      if (this.direction === 'right') pDx = 1;
      else if (this.direction === 'left') pDx = -1;
      else if (this.direction === 'down') pDy = 1;
      else if (this.direction === 'up') pDy = -1;

      const spawnX = this.x + pDx * 18;
      const spawnY = this.y - 14 + pDy * 10;

      Game.spawnProjectile({
        x: spawnX,
        y: spawnY,
        dx: pDx,
        dy: pDy,
        speed: 380,
        damage: baseDmg,
        maxRange: 480,
        distanceTraveled: 0,
        radius: 7,
        color: '#c084fc',
        auraColor: '#a855f7',
        isCrit: Math.random() < 0.25
      });
      Game.spawnSparks(spawnX, spawnY, '#c084fc', 8);
    }

    let staminaCost = 10;
    if (type === 'hammer') staminaCost = 18;
    else if (type === 'thrust') staminaCost = 12;
    this.sp = Math.max(0, this.sp - staminaCost);
  }

  roll() {
    if (this.isRolling || this.isAttacking || this.isDead || this.sp < 15) return;
    if (Game.fishing && Game.fishing.active) {
      if (Game.fishing.stage === 'biting') {
        Game.reelInFish(true);
        return;
      } else {
        Game.cancelFishing();
      }
    }
    this.isRolling = true;
    this.rollTimer = 0.32;
    this.sp = Math.max(0, this.sp - 15);
    this.state = 'roll';
    this.frameIndex = 0;
    Game.spawnSparks(this.x, this.y, '#38bdf8', 6);
  }

  triggerSpecialAction(actionName) {
    if (this.isDead || this.isAttacking || this.isRolling) return;
    if (Game.fishing && Game.fishing.active) {
      Game.cancelFishing();
    }
    this.state = actionName;
    this.specialActionTimer = 0.72;
    this.frameIndex = 0;
  }

  takeDamage(amt) {
    if (this.isDead || this.invulnerableTimer > 0) return;
    if (Game.fishing && Game.fishing.active) {
      Game.cancelFishing();
    }
    this.hp = Math.max(0, this.hp - amt);
    this.invulnerableTimer = 0.45;
    Game.screenShake = 6;
    Game.addFloatingText(`-${Math.round(amt)}`, this.x, this.y - 25, '#ef4444');
    Game.spawnSparks(this.x, this.y, '#ef4444', 8);

    if (this.hp <= 0) {
      this.isDead = true;
      this.state = 'dead';
      this.frameIndex = 0;
    }
  }

  render(ctx) {
    ctx.save();
    ctx.translate(Math.floor(this.x), Math.floor(this.y));

    // Bóng đổ nhân vật tròn mềm mại trên sàn
    ctx.beginPath();
    ctx.ellipse(0, 0, 11, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.38)';
    ctx.fill();

    if (this.invulnerableTimer > 0 && Math.floor(Date.now() / 60) % 2 === 0) {
      ctx.globalAlpha = 0.4;
    }

    const flipX = (this.direction === 'left');
    const isWalking = (this.state === 'walk' || this.state === 'run');
    const walkBob = isWalking ? Math.sin(this.frameIndex * Math.PI / 3) * 2 : Math.sin(Date.now() / 250) * 0.8;

    // Khi quay mặt lên trên (UP): Vũ khí đeo sau lưng, vẽ TRƯỚC nhân vật
    if (!this.isDead && this.direction === 'up' && !this.isCarrying && !this.isAttacking && this.state !== 'fishing' && this.state !== 'watering') {
      this.renderEquippedWeapon(ctx, flipX, walkBob, true);
    }

    // Vẽ Sprite Nhân Vật Theo Ngoại Trang (Skin)
    this.renderCharacterSprite(ctx, flipX);

    // Khi quay mặt xuống hoặc ngang: Vũ khí cầm ở tay, vẽ SAU nhân vật
    if (!this.isDead && this.direction !== 'up' && !this.isCarrying && !this.isAttacking && this.state !== 'fishing' && this.state !== 'watering') {
      this.renderEquippedWeapon(ctx, flipX, walkBob, false);
    }

    // Với các skin khác Classic (Champion, Knight, Rogue, Wizard): Vẽ vũ khí vung chém động
    if (this.isAttacking) {
      this.renderSwingingWeapon(ctx, flipX);
    }

    // THANH MÁU TRÊN ĐẦU NHÂN VẬT KHI BỊ THƯƠNG HOẶC CHIẾN ĐẤU
    if (!this.isDead && (this.hp < this.maxHp || this.invulnerableTimer > 0)) {
      const bW = 28;
      const bH = 3;
      const bY = -34;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(-bW / 2 - 1, bY - 1, bW + 2, bH + 2);
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(-bW / 2, bY, bW, bH);

      const hpPct = Math.max(0, this.hp / this.maxHp);
      let hpColor = '#22c55e';
      if (hpPct <= 0.3) hpColor = '#ef4444';
      else if (hpPct <= 0.6) hpColor = '#f59e0b';

      ctx.fillStyle = hpColor;
      ctx.fillRect(-bW / 2, bY, Math.round(bW * hpPct), bH);
    }

    ctx.restore();
  }

  renderEquippedWeapon(ctx, flipX, walkBob, isBehind) {
    const wCfg = WEAPON_CONFIGS[this.currentWeapon] || WEAPON_CONFIGS.wood;
    const wImg = Game.images[wCfg.spriteKey];
    if (!wImg) return;

    ctx.save();
    if (wCfg.id === 'hands') {
      let row = 0; // Down
      if (this.direction === 'up') row = 64;
      else if (this.direction === 'left' || this.direction === 'right') row = 32;

      const handX = flipX ? -11 : 11;
      const handY = -14 + walkBob;
      ctx.translate(handX, handY);
      if (flipX) ctx.scale(-1, 1);
      ctx.drawImage(wImg, 0, row, 32, 32, -12, -12, 24, 24);
    } else {
      if (isBehind) {
        // Đeo sau lưng khi quay mặt lên (UP)
        const backX = flipX ? 6 : -6;
        const backY = -18 + walkBob;
        ctx.translate(backX, backY);
        ctx.rotate(flipX ? -0.45 : 0.45);
        ctx.drawImage(wImg, wCfg.sx, wCfg.sy, wCfg.sw, wCfg.sh, -wCfg.drawW / 2, -wCfg.drawH + 8, wCfg.drawW, wCfg.drawH);
      } else if (this.direction === 'down') {
        // Cầm tay xuôi xuống khi quay mặt xuống (DOWN)
        const handX = flipX ? -10 : 10;
        const handY = -13 + walkBob;
        ctx.translate(handX, handY);
        if (flipX) ctx.scale(-1, 1);
        ctx.rotate(0.35);
        ctx.drawImage(wImg, wCfg.sx, wCfg.sy, wCfg.sw, wCfg.sh, -wCfg.drawW / 2, -wCfg.drawH + 10, wCfg.drawW, wCfg.drawH);
      } else {
        // Cầm tay hướng tới khi quay mặt ngang (SIDE)
        const handX = flipX ? -12 : 12;
        const handY = -14 + walkBob;
        ctx.translate(handX, handY);
        if (flipX) ctx.scale(-1, 1);
        ctx.rotate(0.5);
        ctx.drawImage(wImg, wCfg.sx, wCfg.sy, wCfg.sw, wCfg.sh, -wCfg.drawW / 2, -wCfg.drawH + 10, wCfg.drawW, wCfg.drawH);
      }
    }
    ctx.restore();
  }

  renderSwingingWeapon(ctx, flipX) {
    const wCfg = WEAPON_CONFIGS[this.currentWeapon] || WEAPON_CONFIGS.wood;
    const wImg = Game.images[wCfg.spriteKey];
    if (!wImg) return;

    const progress = Math.min(1, Math.max(0, 1 - (this.attackTimer / this.attackDuration)));
    const startAngle = -Math.PI * 0.38;
    const endAngle = Math.PI * 0.48;
    const swingAngle = startAngle + (endAngle - startAngle) * progress;

    ctx.save();

    // Định hướng trục xoay vũ khí chuẩn 4 hướng (Right, Down, Left, Up) đồng bộ hoàn toàn với đường chém
    let dirAngle = 0;
    let pivotX = 0;
    let pivotY = -15;

    if (this.direction === 'right') {
      dirAngle = 0;
      pivotX = 6;
      pivotY = -15;
    } else if (this.direction === 'down') {
      dirAngle = Math.PI / 2;
      pivotX = 0;
      pivotY = -8;
    } else if (this.direction === 'left') {
      dirAngle = Math.PI;
      pivotX = -6;
      pivotY = -15;
    } else if (this.direction === 'up') {
      dirAngle = -Math.PI / 2;
      pivotX = 0;
      pivotY = -22;
    }

    ctx.translate(pivotX, pivotY);
    ctx.rotate(dirAngle);
    if (this.direction === 'left') {
      ctx.scale(1, -1);
    }
    ctx.rotate(swingAngle);

    if (wCfg.id === 'hands') {
      ctx.drawImage(wImg, 0, 32, 32, 32, -12, -12, 24, 24);
    } else {
      ctx.drawImage(wImg, wCfg.sx, wCfg.sy, wCfg.sw, wCfg.sh, -wCfg.drawW / 2, -wCfg.drawH + 8, wCfg.drawW, wCfg.drawH);
    }
    ctx.restore();
  }

  renderCharacterSprite(ctx, flipX) {
    let sprite = null;
    let frameW = 64, frameH = 64, footY = 48;

    if (this.state === 'fishing') {
      frameW = 64; frameH = 64; footY = 48;
      let dirSuffix = 'Down-Sheet.png';
      if (this.direction === 'up') dirSuffix = 'Up-Sheet.png';
      else if (this.direction === 'left' || this.direction === 'right') dirSuffix = 'Side-Sheet.png';
      sprite = Game.images['Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_' + dirSuffix];
    } else if (this.state === 'watering') {
      frameW = 64; frameH = 64; footY = 48;
      let dirSuffix = 'Down-Sheet.png';
      if (this.direction === 'up') dirSuffix = 'Up-Sheet.png';
      else if (this.direction === 'left' || this.direction === 'right') dirSuffix = 'Side-Sheet.png';
      sprite = Game.images['Entities/Characters/Body_A/Animations/Watering_Base/Watering_' + dirSuffix];
    } else if (this.skin === 'champion') {
      if (['walk', 'run'].includes(this.state) || this.isAttacking) {
        frameW = 48; frameH = 48; footY = 48;
        if (this.direction === 'up') sprite = Game.images['Entities/Characters/New_Version/Walk/Up.png'];
        else if (this.direction === 'down') sprite = Game.images['Entities/Characters/New_Version/Walk/Down.png'];
        else sprite = Game.images['Entities/Characters/New_Version/Walk/Walk_Side.png'];
      } else if (this.state === 'dead') {
        frameW = 64; frameH = 64; footY = 48;
        sprite = Game.images['Entities/Characters/Body_A/Animations/Death_Base/Death_Down-Sheet.png'];
      } else {
        frameW = 64; frameH = 64; footY = 48;
        if (this.direction === 'up') sprite = Game.images['Entities/Characters/New_Version/Idle/Idle_Up.png'];
        else if (this.direction === 'down') {
          sprite = Game.images['Entities/Characters/New_Version/Idle/Idle_Down.png'] || Game.images['Entities/Characters/New_Version/Idle/Idle_Down-Sheet.png'];
        } else {
          sprite = Game.images['Entities/Characters/New_Version/Idle/Idle_Side.png'];
        }
      }
    } else if (this.skin === 'knight') {
      if (this.state === 'dead') {
        frameW = 48; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Knight/Death/Death-Sheet.png"];
      } else if (['walk', 'run'].includes(this.state) || this.isAttacking) {
        frameW = 64; frameH = 64; footY = 64;
        sprite = Game.images["Entities/Npc's/Knight/Run/Run-Sheet.png"];
      } else {
        frameW = 32; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Knight/Idle/Idle-Sheet.png"];
      }
    } else if (this.skin === 'rogue') {
      if (this.state === 'dead') {
        frameW = 64; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Rogue/Death/Death-Sheet.png"];
      } else if (['walk', 'run'].includes(this.state) || this.isAttacking) {
        frameW = 64; frameH = 64; footY = 64;
        sprite = Game.images["Entities/Npc's/Rogue/Run/Run-Sheet.png"];
      } else {
        frameW = 32; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Rogue/Idle/Idle-Sheet.png"];
      }
    } else if (this.skin === 'wizard') {
      if (this.state === 'dead') {
        frameW = 64; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Wizzard/Death/Death-Sheet.png"];
      } else if (['walk', 'run'].includes(this.state) || this.isAttacking) {
        frameW = 64; frameH = 64; footY = 64;
        sprite = Game.images["Entities/Npc's/Wizzard/Run/Run-Sheet.png"];
      } else {
        frameW = 32; frameH = 32; footY = 32;
        sprite = Game.images["Entities/Npc's/Wizzard/Idle/Idle-Sheet.png"];
      }
    } else {
      // CLASSIC (Body_A)
      frameW = 64; frameH = 64; footY = 48;
      let dirSuffix = 'Down-Sheet.png';
      if (this.direction === 'up') dirSuffix = 'Up-Sheet.png';
      else if (this.direction === 'left' || this.direction === 'right') dirSuffix = 'Side-Sheet.png';

      if (this.state === 'dead') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Death_Base/Death_' + dirSuffix];
      } else if (this.isAttacking) {
        // Sử dụng Run_Base tay không tự nhiên, loại bỏ hoàn toàn sprite rìu (Slice_Base)
        // Vũ khí trang bị thực tế (Thiết Quyền, Kiếm, Lưỡi Hái, Trượng Phép) được vẽ qua renderSwingingWeapon
        sprite = Game.images['Entities/Characters/Body_A/Animations/Run_Base/Run_' + dirSuffix];
      } else if (this.state === 'watering') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Watering_Base/Watering_' + dirSuffix];
      } else if (this.state === 'fishing') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_' + dirSuffix];
      } else if (this.state === 'collect') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Collect_Base/Collect_' + dirSuffix];
      } else if (this.state === 'hit') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Hit_Base/Hit_' + dirSuffix];
      } else if (this.isCarrying) {
        if (this.state === 'run') {
          sprite = Game.images['Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_' + dirSuffix];
        } else if (this.state === 'walk') {
          sprite = Game.images['Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_' + dirSuffix];
        } else {
          sprite = Game.images['Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_' + dirSuffix];
        }
      } else if (this.state === 'run') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Run_Base/Run_' + dirSuffix];
      } else if (this.state === 'walk') {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Walk_Base/Walk_' + dirSuffix];
      } else {
        sprite = Game.images['Entities/Characters/Body_A/Animations/Idle_Base/Idle_' + dirSuffix];
      }
    }

    if (sprite) {
      ctx.save();
      if (flipX) ctx.scale(-1, 1);
      const isKnightOrRogueOrWiz = ['knight', 'rogue', 'wizard'].includes(this.skin);
      let animIndex = this.frameIndex;
      if (this.isAttacking && isKnightOrRogueOrWiz) {
        animIndex = this.frameIndex % 6;
      }
      const maxF = Math.max(1, Math.floor(sprite.width / frameW));
      animIndex = animIndex % maxF;
      const sx = animIndex * frameW;
      const drawX = -frameW / 2;
      const drawY = -footY;
      ctx.drawImage(sprite, sx, 0, frameW, frameH, drawX, drawY, frameW, frameH);
      ctx.restore();
    }
  }

  renderAttackEffect(ctx) {
    if (!this.isAttacking) return;
    const progress = 1 - (this.attackTimer / this.attackDuration);
    if (progress < 0.08 || progress > 0.94) return;

    ctx.save();
    ctx.translate(Math.floor(this.x), Math.floor(this.y));

    let angle = 0;
    if (this.direction === 'right') angle = 0;
    else if (this.direction === 'down') angle = Math.PI / 2;
    else if (this.direction === 'left') angle = Math.PI;
    else if (this.direction === 'up') angle = -Math.PI / 2;
    ctx.rotate(angle);

    const wCfg = WEAPON_CONFIGS[this.currentWeapon] || WEAPON_CONFIGS.wood;

    if (this.attackType === 'slash') {
      const arcProgress = Math.max(0, Math.min(1, (progress - 0.08) / 0.84));

      if (this.currentWeapon === 'bone') {
        // ==============================================================
        // 1. ĐƯỜNG CHÉM LƯỠI HÁI XƯƠNG (SCYTHE GIANT CRESCENT HOOK SLASH)
        // Lưỡi hái quét bán nguyệt khổng lồ với mũi móc cong gập ngược đặc trưng
        // ==============================================================
        const sweepAngle = -Math.PI * 0.38 + arcProgress * (Math.PI * 0.78);
        const arcRadius = 46;
        const arcWidth = 15 * Math.sin(arcProgress * Math.PI);

        ctx.save();

        // Vệt tàn ảnh huyết sắc lan tỏa (Blood Ghost Trail)
        ctx.beginPath();
        ctx.arc(6, 0, arcRadius - 4, sweepAngle - 0.95, sweepAngle);
        ctx.strokeStyle = 'rgba(153, 27, 27, 0.45)';
        ctx.lineWidth = 18;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Thân lưỡi hái trăng khuyết khổng lồ (Giant Crimson Crescent Blade)
        ctx.beginPath();
        ctx.arc(6, 0, arcRadius, sweepAngle - 0.85, sweepAngle);
        
        // Mũi móc cong gập ngược đặc trưng của Lưỡi Hái Tử Thần
        const tipOuterX = 6 + Math.cos(sweepAngle) * arcRadius;
        const tipOuterY = Math.sin(sweepAngle) * arcRadius;
        const hookAngle = sweepAngle - Math.PI * 0.58;
        const hookTipX = tipOuterX + Math.cos(hookAngle) * 18;
        const hookTipY = tipOuterY + Math.sin(hookAngle) * 18;
        ctx.lineTo(hookTipX, hookTipY);

        // Vòng trong trăng khuyết vuốt thon về chuôi
        const innerRadius = Math.max(16, arcRadius - arcWidth);
        const tipInnerX = 6 + Math.cos(sweepAngle - 0.12) * innerRadius;
        const tipInnerY = Math.sin(sweepAngle - 0.12) * innerRadius;
        ctx.lineTo(tipInnerX, tipInnerY);
        ctx.arc(6, 0, innerRadius, sweepAngle - 0.12, sweepAngle - 0.85, true);
        ctx.closePath();

        // Gradient huyết sắc hắc ám rực sáng
        const scytheGrad = ctx.createRadialGradient(6, 0, 12, 6, 0, arcRadius + 10);
        scytheGrad.addColorStop(0, 'rgba(127, 29, 29, 0.25)');
        scytheGrad.addColorStop(0.45, 'rgba(220, 38, 38, 0.90)');
        scytheGrad.addColorStop(0.85, 'rgba(248, 113, 113, 0.98)');
        scytheGrad.addColorStop(1, '#ffffff');
        ctx.fillStyle = scytheGrad;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 16;
        ctx.fill();

        // Sống lưỡi hái sắc bén cắt đứt không gian
        ctx.beginPath();
        ctx.arc(6, 0, arcRadius, sweepAngle - 0.8, sweepAngle);
        ctx.lineTo(hookTipX, hookTipY);
        ctx.strokeStyle = '#fff1f2';
        ctx.lineWidth = 3.5;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Điểm móc lưỡi hái phát sáng chói lọi
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(hookTipX, hookTipY, 4, 0, Math.PI * 2);
        ctx.fill();

        // Vệt chém huyết ảnh phụ (Secondary Blood Arc)
        ctx.strokeStyle = 'rgba(252, 165, 165, 0.85)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(6, 0, arcRadius + 8, sweepAngle - 0.55, sweepAngle - 0.1);
        ctx.stroke();

        // Hạt huyết khí và linh hồn văng ra từ lưỡi hái
        for (let s = 1; s <= 4; s++) {
          const sAngle = sweepAngle - s * 0.22;
          const sx = 6 + Math.cos(sAngle) * (arcRadius + s * 4);
          const sy = Math.sin(sAngle) * (arcRadius + s * 4);
          ctx.fillStyle = '#fca5a5';
          ctx.beginPath();
          ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();

      } else if (this.currentWeapon === 'hands') {
        // ==============================================================
        // 2. SÓNG XUNG KÍCH THIẾT QUYỀN (PUGILIST SONIC SHOCKWAVE)
        // Cú đấm trực diện tạo sóng âm hình nón lôi điện tỏa ra
        // ==============================================================
        const punchReach = 14 + arcProgress * 28;
        const shockRadius = 10 + Math.sin(arcProgress * Math.PI) * 20;

        ctx.save();
        ctx.beginPath();
        ctx.arc(punchReach, 0, shockRadius, -Math.PI * 0.42, Math.PI * 0.42);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 4.5;
        ctx.shadowColor = '#0284c7';
        ctx.shadowBlur = 14;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(punchReach + 4, 0, 4.5, 0, Math.PI * 2);
        ctx.fill();

        // Tia lôi điện phát ra từ nắm đấm
        ctx.strokeStyle = '#93c5fd';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(punchReach - 10, -8);
        ctx.lineTo(punchReach + 10, -14);
        ctx.moveTo(punchReach - 10, 8);
        ctx.lineTo(punchReach + 10, 14);
        ctx.stroke();
        ctx.restore();

      } else if (this.currentWeapon === 'staff') {
        // ==============================================================
        // 2B. HIỆU ỨNG PHÁP TRẬN QUYỀN TRƯỢNG (ARCANE STAFF BURST)
        // ==============================================================
        const surgeRadius = 12 + arcProgress * 24;
        ctx.save();
        ctx.translate(22, 0);

        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#9333ea';
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(0, 0, surgeRadius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

      } else {
        // ==============================================================
        // 3. ĐƯỜNG CHÉM CỦA KIẾM (SWORD SHARP BLADE SLASH WAVE)
        // Luồng kiếm khí hình lưỡi kiếm vòng cung sắc bén, vuốt nhọn mũi kiếm
        // ==============================================================
        const sweepAngle = -Math.PI * 0.32 + arcProgress * (Math.PI * 0.68);
        const bladeRadius = 36;
        const bladeWidth = 10 * Math.sin(arcProgress * Math.PI);

        ctx.save();

        // Vệt tàn kiếm khí mờ (Sword Trail Shadow)
        ctx.beginPath();
        ctx.arc(10, 0, bladeRadius - 2, sweepAngle - 0.72, sweepAngle);
        ctx.strokeStyle = 'rgba(217, 119, 6, 0.40)';
        ctx.lineWidth = 12;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Thân kiếm khí lưỡi kiếm sắc bén (Sharp Tapered Blade Wave)
        ctx.beginPath();
        ctx.arc(10, 0, bladeRadius, sweepAngle - 0.68, sweepAngle);
        
        // Mũi kiếm nhọn thẳng sắc nét vươn dài (Straight Sharp Sword Tip)
        const tipX = 10 + Math.cos(sweepAngle) * (bladeRadius + 5);
        const tipY = Math.sin(sweepAngle) * (bladeRadius + 5);
        ctx.lineTo(tipX, tipY);

        // Sống kiếm và mặt trong kiếm khí vuốt về chuôi
        const innerR = Math.max(16, bladeRadius - bladeWidth);
        const inTipX = 10 + Math.cos(sweepAngle) * innerR;
        const inTipY = Math.sin(sweepAngle) * innerR;
        ctx.lineTo(inTipX, inTipY);
        ctx.arc(10, 0, innerR, sweepAngle, sweepAngle - 0.68, true);
        ctx.closePath();

        // Tô màu ánh vàng kim hoàng gia rực rỡ
        const swordGrad = ctx.createRadialGradient(10, 0, 10, 10, 0, bladeRadius + 8);
        swordGrad.addColorStop(0, 'rgba(180, 83, 9, 0.25)');
        swordGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.90)');
        swordGrad.addColorStop(0.85, 'rgba(253, 224, 71, 0.98)');
        swordGrad.addColorStop(1, '#ffffff');
        ctx.fillStyle = swordGrad;
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 14;
        ctx.fill();

        // Đường gân lưỡi kiếm sáng lóa cắt ngang
        ctx.beginPath();
        ctx.arc(10, 0, bladeRadius, sweepAngle - 0.62, sweepAngle);
        ctx.lineTo(tipX, tipY);
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Mũi kiếm phát sáng lấp lánh (Sword Tip Flash)
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(tipX, tipY, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Tia kiếm quang xé gió song song phía trước
        ctx.strokeStyle = 'rgba(254, 240, 138, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(10, 0, bladeRadius + 7, sweepAngle - 0.48, sweepAngle - 0.05);
        ctx.stroke();

        ctx.restore();
      }

    } else if (this.attackType === 'thrust') {
      const thrustProgress = (progress - 0.12) / 0.8;
      const reach = 18 + Math.sin(thrustProgress * Math.PI) * 42;
      const attackColor = wCfg.color || '#f59e0b';

      ctx.save();
      ctx.strokeStyle = attackColor;
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.shadowColor = attackColor;
      ctx.shadowBlur = 10;

      ctx.beginPath();
      ctx.moveTo(10, 0);
      ctx.lineTo(reach, 0);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(reach + 8, 0);
      ctx.lineTo(reach - 8, -6);
      ctx.lineTo(reach - 4, 0);
      ctx.lineTo(reach - 8, 6);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

    } else if (this.attackType === 'hammer') {
      const crushProgress = (progress - 0.2) / 0.7;
      if (crushProgress >= 0) {
        const radius = 12 + crushProgress * 28;
        const alpha = Math.max(0, 1 - crushProgress);
        const hammerColor = (this.currentWeapon === 'bone') ? `rgba(239, 68, 68, ${alpha})` : `rgba(245, 158, 11, ${alpha})`;

        ctx.save();
        ctx.translate(28, 0);
        ctx.beginPath();
        ctx.ellipse(0, 0, radius, radius * 0.65, 0, 0, Math.PI * 2);
        ctx.strokeStyle = hammerColor;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = hammerColor;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.restore();
      }
    }

    ctx.restore();
  }
}

// ==============================================================
// 6. LỚP QUÁI VẬT TỔNG QUÁT (MOBS - 100% 24 FILES SKELETON & ORC)
// Nâng cấp độ, sát thương và phân luồng độc lập theo từng tầng
// ==============================================================
class Mob {
  constructor(configKey, x, y, tierOpts = {}) {
    this.cfg = MOB_CONFIGS[configKey] || MOB_CONFIGS.skeleton_base;
    this.x = x;
    this.y = y;
    this.startX = x;
    this.startY = y;

    // Phân cấp & Tiến hóa theo từng tầng hầm ngục
    this.tier = tierOpts.tier || 1;
    this.level = tierOpts.level || this.tier;
    this.name = tierOpts.name || (this.cfg.isBoss ? `★ [Lv.${this.level} BOSS] ${this.cfg.name} ★` : `[Lv.${this.level}] ${this.cfg.name}`);
    
    // Sát thương chuẩn phân luồng: Tầng 1: 10 HP, Tầng 2: 15 HP, Tầng 3: 20 HP, Tầng 4: 25 HP / Boss 35 HP
    this.damage = tierOpts.damage !== undefined ? tierOpts.damage : this.cfg.damage;
    this.maxHp = tierOpts.maxHp !== undefined ? tierOpts.maxHp : this.cfg.maxHp;
    this.hp = this.maxHp;
    this.speed = tierOpts.speed !== undefined ? tierOpts.speed : this.cfg.speed;
    this.gold = tierOpts.gold !== undefined ? tierOpts.gold : this.cfg.gold;
    this.isBoss = tierOpts.isBoss !== undefined ? tierOpts.isBoss : (this.cfg.isBoss || false);
    this.aggroRange = tierOpts.aggroRange || this.cfg.aggroRange;

    // Phân luồng ranh giới từng tầng (leash bounds)
    this.bounds = tierOpts.bounds || null;

    // Thời gian hồi giữa các đòn đánh
    this.attackCooldown = tierOpts.attackCooldown || (this.isBoss ? 0.75 : 0.85);
    this.attackTimer = 0;

    this.state = 'idle';
    this.frameIndex = 0;
    this.frameTimer = 0;
    this.facing = 'right';

    this.patrolTimer = Math.random() * 2;
    this.patrolTarget = { x: x, y: y };
    this.isDead = false;
    this.deathComplete = false;
    this.hitTimer = 0;
  }

  update(dt, player, isSolidFn) {
    if (this.isDead) {
      if (!this.deathComplete) {
        this.frameTimer += dt;
        if (this.frameTimer >= this.cfg.death.speed) {
          this.frameTimer = 0;
          this.frameIndex++;
          if (this.frameIndex >= this.cfg.death.frames) {
            this.frameIndex = this.cfg.death.frames - 1;
            this.deathComplete = true;
          }
        }
      }
      return;
    }

    if (this.hitTimer > 0) this.hitTimer -= dt;
    if (this.attackTimer > 0) this.attackTimer -= dt;

    const dx = player.x - this.x;
    const dy = player.y - this.y;
    const dist = Math.hypot(dx, dy);

    // Kiểm tra người chơi có đang nằm trong phân luồng tầng của quái hay không
    let playerInBounds = true;
    if (this.bounds) {
      playerInBounds = (player.x >= this.bounds.minX - 10 && player.x <= this.bounds.maxX + 10 &&
                        player.y >= this.bounds.minY - 20 && player.y <= this.bounds.maxY + 20);
    }

    const mobRadius = this.isBoss ? 16 : 12;

    // Đuổi theo người chơi nếu trong phạm vi aggro VÀ người chơi đang ở cùng tầng
    if (dist < this.aggroRange && playerInBounds && !player.isDead) {
      this.state = 'run';
      this.facing = dx < 0 ? 'left' : 'right';

      if (dist > 30) {
        const totalDx = (dx / dist) * this.speed * dt;
        const totalDy = (dy / dist) * this.speed * dt;
        const totalDist = Math.hypot(totalDx, totalDy);
        const steps = Math.max(1, Math.ceil(totalDist / 5));
        const stepDx = totalDx / steps;
        const stepDy = totalDy / steps;

        for (let s = 0; s < steps; s++) {
          let testX = this.x + stepDx;
          let testY = this.y + stepDy;

          // Ràng buộc phân luồng không cho quái đi qua ranh giới tầng
          if (this.bounds) {
            testX = Math.max(this.bounds.minX, Math.min(this.bounds.maxX, testX));
            testY = Math.max(this.bounds.minY, Math.min(this.bounds.maxY, testY));
          }

          if (!isSolidFn(testX, this.y, mobRadius, this)) this.x = testX;
          if (!isSolidFn(this.x, testY, mobRadius, this)) this.y = testY;
        }
      } else {
        // Tấn công người chơi theo thời gian hồi đòn (attack cooldown)
        if (this.attackTimer <= 0) {
          player.takeDamage(this.damage);
          this.attackTimer = this.attackCooldown;
          if (this.isBoss) {
            Game.screenShake = 8;
            Game.spawnSparks(player.x, player.y, '#f59e0b', 14);
          } else {
            Game.screenShake = 5;
            Game.spawnSparks(player.x, player.y, '#ef4444', 8);
          }
        }
      }
    } else {
      // Tuần tra tự do trong phạm vi phân luồng của tầng
      this.patrolTimer -= dt;
      if (this.patrolTimer <= 0) {
        this.patrolTimer = 2.5 + Math.random() * 3;
        const angle = Math.random() * Math.PI * 2;
        const pDist = 30 + Math.random() * 60;
        let targetX = this.startX + Math.cos(angle) * pDist;
        let targetY = this.startY + Math.sin(angle) * pDist;

        if (this.bounds) {
          targetX = Math.max(this.bounds.minX + 20, Math.min(this.bounds.maxX - 20, targetX));
          targetY = Math.max(this.bounds.minY + 20, Math.min(this.bounds.maxY - 20, targetY));
        }
        this.patrolTarget = { x: targetX, y: targetY };
      }

      const pdx = this.patrolTarget.x - this.x;
      const pdy = this.patrolTarget.y - this.y;
      const pdist = Math.hypot(pdx, pdy);

      if (pdist > 8) {
        this.state = 'run';
        this.facing = pdx < 0 ? 'left' : 'right';
        const totalDx = (pdx / pdist) * (this.speed * 0.5) * dt;
        const totalDy = (pdy / pdist) * (this.speed * 0.5) * dt;
        const totalDist = Math.hypot(totalDx, totalDy);
        const steps = Math.max(1, Math.ceil(totalDist / 5));
        const stepDx = totalDx / steps;
        const stepDy = totalDy / steps;

        let moved = false;
        for (let s = 0; s < steps; s++) {
          let testX = this.x + stepDx;
          let testY = this.y + stepDy;

          if (this.bounds) {
            testX = Math.max(this.bounds.minX, Math.min(this.bounds.maxX, testX));
            testY = Math.max(this.bounds.minY, Math.min(this.bounds.maxY, testY));
          }

          let stepMoved = false;
          if (!isSolidFn(testX, this.y, mobRadius, this)) { this.x = testX; stepMoved = true; }
          if (!isSolidFn(this.x, testY, mobRadius, this)) { this.y = testY; stepMoved = true; }
          if (stepMoved) moved = true;
        }
        if (!moved) this.patrolTimer = 0;
      } else {
        this.state = 'idle';
      }
    }

    const curAnim = this.state === 'run' ? this.cfg.run : this.cfg.idle;
    this.frameTimer += dt;
    if (this.frameTimer >= curAnim.speed) {
      this.frameTimer = 0;
      this.frameIndex = (this.frameIndex + 1) % curAnim.frames;
    }
  }

  takeDamage(amt) {
    if (this.isDead) return;
    this.hp -= amt;
    this.hitTimer = 0.2;
    Game.addFloatingText(`-${Math.round(amt)}`, this.x, this.y - 20, '#facc15');
    Game.spawnSparks(this.x, this.y, '#f59e0b', 6);

    if (this.hp <= 0) {
      this.isDead = true;
      this.state = 'death';
      this.frameIndex = 0;
      this.frameTimer = 0;

      Game.dropLoot(this.x, this.y, this.gold, this.isBoss);
      if (this.isBoss) {
        Game.bossDefeated = true;
        Game.showToast("🏆 BẠN ĐÃ TIÊU DIỆT ĐẠI TRÙM BOSS ORC PHÙ THỦY TỘC!", 5000);
      }
      Game.player.kills++;
      const neededKills = Game.player.level * 3;
      if (Game.player.kills >= neededKills) {
        Game.player.level++;
        Game.player.maxHp += 10;
        Game.player.hp = Game.player.maxHp;
        Game.player.maxSp += 10;
        Game.player.sp = Game.player.maxSp;
        Game.addFloatingText(`★ LÊN CẤP ${Game.player.level}! ★`, Game.player.x, Game.player.y - 35, '#22c55e');
        Game.spawnSparks(Game.player.x, Game.player.y, '#22c55e', 16);
        Game.showToast(`🎉 CHÚC MỪNG: LÊN CẤP ${Game.player.level}! Máu tối đa +10, Hồi phục toàn bộ sinh lực!`, 3500);
      }
    }
  }

  render(ctx) {
    ctx.save();
    ctx.translate(Math.floor(this.x), Math.floor(this.y));

    ctx.beginPath();
    ctx.ellipse(0, 0, this.isBoss ? 16 : 9, this.isBoss ? 8 : 4.5, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.fill();

    const curAnim = this.state === 'death' ? this.cfg.death : (this.state === 'run' ? this.cfg.run : this.cfg.idle);
    const sprite = this.getSprite();

    if (sprite) {
      ctx.save();
      if (this.facing === 'left') ctx.scale(-1, 1);
      const sx = this.frameIndex * curAnim.w;
      ctx.drawImage(
        sprite,
        sx, 0, curAnim.w, curAnim.h,
        -curAnim.w / 2, -curAnim.h + (this.isBoss ? 16 : 8), curAnim.w, curAnim.h
      );
      ctx.restore();
    }

    // THANH MÁU & TÊN CẤP ĐỘ QUÁI THEO TỪNG TẦNG
    if (!this.isDead) {
      const bW = this.isBoss ? 52 : 30;
      const bH = this.isBoss ? 4.5 : 3;
      const bY = this.isBoss ? -40 : -32;

      // Nền thanh máu
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(-bW / 2 - 1, bY - 1, bW + 2, bH + 2);
      ctx.fillStyle = '#1c1917';
      ctx.fillRect(-bW / 2, bY, bW, bH);

      // Màu thanh máu đặc trưng theo từng tầng
      let hpColor = '#ef4444';
      if (this.isBoss) hpColor = '#f59e0b';
      else if (this.tier === 1) hpColor = '#38bdf8'; // Tầng 1: Xanh lam
      else if (this.tier === 2) hpColor = '#4ade80'; // Tầng 2: Xanh ngọc
      else if (this.tier === 3) hpColor = '#fb923c'; // Tầng 3: Cam rực
      else if (this.tier === 4) hpColor = '#f43f5e'; // Tầng 4: Đỏ thẫm

      ctx.fillStyle = hpColor;
      ctx.fillRect(-bW / 2, bY, Math.max(0, (this.hp / this.maxHp) * bW), bH);

      // Tên & Cấp độ quái
      ctx.font = this.isBoss ? 'bold 9.5px monospace' : 'bold 8px monospace';
      ctx.textAlign = 'center';

      let nameColor = '#bae6fd';
      if (this.isBoss) nameColor = '#fbbf24';
      else if (this.tier === 1) nameColor = '#7dd3fc';
      else if (this.tier === 2) nameColor = '#86efac';
      else if (this.tier === 3) nameColor = '#fed7aa';
      else if (this.tier === 4) nameColor = '#fecdd3';

      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      ctx.fillText(this.name, 1, bY - 4);
      ctx.fillStyle = nameColor;
      ctx.fillText(this.name, 0, bY - 5);
    }

    ctx.restore();
  }

  getSprite() {
    const f = this.cfg.folder;
    if (this.state === 'death') return Game.images[f + 'Death/Death-Sheet.png'];
    else if (this.state === 'run') return Game.images[f + 'Run/Run-Sheet.png'];
    else return Game.images[f + 'Idle/Idle-Sheet.png'];
  }
}

// ==============================================================
// 7. LỚP NPC CƯ DÂN & HIỆP SĨ (100% 21 FILES NPC)
// ==============================================================
class NPC {
  constructor(name, x, y, idleKey, walkKey, dialogue, isCitizen = false) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.idleKey = idleKey;
    this.walkKey = walkKey;
    this.dialogue = dialogue;
    this.isCitizen = isCitizen;

    this.state = 'idle';
    this.frameIndex = 0;
    this.frameTimer = 0;
    this.facing = 'down';
  }

  update(dt, isSolidFn) {
    this.frameTimer += dt;
    if (this.frameTimer >= 0.16) {
      this.frameTimer = 0;
      const isWalking = (this.state === 'walk' || this.state === 'run');
      const maxF = (this.isCitizen && isWalking) ? 6 : 4;
      this.frameIndex = (this.frameIndex + 1) % maxF;
    }
  }

  render(ctx) {
    ctx.save();
    ctx.translate(Math.floor(this.x), Math.floor(this.y));

    ctx.beginPath();
    ctx.ellipse(0, 0, 10, 5, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.fill();

    const isWalking = (this.state === 'walk' && this.walkKey);
    const sprite = isWalking ? Game.images[this.walkKey] : Game.images[this.idleKey];

    let frameW = 32, frameH = 32, footY = 32;
    if (this.isCitizen) {
      frameW = 64; frameH = 64; footY = 48;
    } else {
      if (isWalking) {
        frameW = 64; frameH = 64; footY = 64; // Knight/Rogue/Wizard Run is 64x64
      } else {
        frameW = 32; frameH = 32; footY = 32; // Knight/Rogue/Wizard Idle is 32x32
      }
    }

    if (sprite) {
      const sx = this.frameIndex * frameW;
      ctx.drawImage(
        sprite,
        sx, 0, frameW, frameH,
        -frameW / 2, -footY, frameW, frameH
      );
    }

    ctx.font = 'bold 8.5px monospace';
    ctx.fillStyle = '#38bdf8';
    ctx.textAlign = 'center';
    ctx.fillText(this.name, 0, -footY - 4);

    ctx.restore();
  }
}

// ==============================================================
// 8. ĐỘNG CƠ GAME CHÍNH (CORE GAME ENGINE)
// ==============================================================
const Game = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  scale: 2.2,

  images: {},
  assetsLoaded: false,
  totalAssets: 0,
  loadedAssetsCount: 0,

  currentMap: 'tavern',
  maps: {
    tavern: { npcs: [], interactables: [], mobs: [], drops: [] },
    starter_homestead: { npcs: [], interactables: [], mobs: [], drops: [] },
    courtyard: { npcs: [], interactables: [], mobs: [], drops: [] },
    starter_house: { npcs: [], interactables: [], mobs: [], drops: [] },
    dungeon: { npcs: [], interactables: [], mobs: [], drops: [] },
    castle_gate: { npcs: [], interactables: [], mobs: [], drops: [] },
    palace: { npcs: [], interactables: [], mobs: [], drops: [] }
  },

  // Hệ thống nhiệm vụ Quốc Vương & Kho báu Cung Điện
  kingQuestAccepted: false,
  kingRewardClaimed: false,
  palaceChestOpened: false,

  camera: { x: 0, y: 0 },
  player: null,
  particles: [],
  floatingTexts: [],
  projectiles: [],
  screenShake: 0,
  menuVisible: false,

  // HUD Elements
  hpFill: null, hpText: null,
  spFill: null, spText: null,
  bottomHpFill: null, bottomHpText: null,
  bottomSpFill: null, bottomSpText: null,
  bottomLevelText: null, bottomHealthBar: null,
  goldText: null, killsText: null, levelText: null,
  weaponBadge: null, skinBadge: null, carryBadge: null,
  wsBadge: null, locationBadge: null,
  dialogueBox: null, dialogueSpeaker: null, dialogueText: null,
  toast: null, gameOverScreen: null, manifestModal: null,

  fishing: null,
  keys: {},
  mouse: { x: 0, y: 0 },
  ws: null,

  starterChestOpened: false,
  starterBookRead: false,
  bossDefeated: false,

  init() {
    this.canvas = document.getElementById('game-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.imageSmoothingEnabled = false;

    this.hpFill = document.getElementById('hp-fill');
    this.hpText = document.getElementById('hp-text');
    this.spFill = document.getElementById('sp-fill');
    this.spText = document.getElementById('sp-text');

    this.bottomHpFill = document.getElementById('bottom-hp-fill');
    this.bottomHpText = document.getElementById('bottom-hp-text');
    this.bottomSpFill = document.getElementById('bottom-sp-fill');
    this.bottomSpText = document.getElementById('bottom-sp-text');
    this.bottomLevelText = document.getElementById('bottom-level');
    this.bottomHealthBar = document.getElementById('bottom-health-bar');
    this.goldText = document.getElementById('gold-count');
    this.killsText = document.getElementById('kill-count');
    this.levelText = document.getElementById('player-level');
    this.classBadge = document.getElementById('class-badge');
    if (this.classBadge) {
      this.classBadge.style.cursor = 'pointer';
      this.classBadge.title = 'Click để đổi chức nghiệp (hoặc phím P)';
      this.classBadge.addEventListener('click', () => this.openClassModal());
    }

    this.weaponBadge = document.getElementById('weapon-badge');
    this.skinBadge = document.getElementById('skin-badge');
    if (this.weaponBadge) {
      this.weaponBadge.style.cursor = 'pointer';
      this.weaponBadge.title = 'Click để đổi vũ khí (hoặc phím 1-6, Q)';
      this.weaponBadge.addEventListener('click', () => {
        const order = ['hands', 'wood', 'bone', 'staff'];
        const curIdx = order.indexOf(this.player ? this.player.currentWeapon : 'hands');
        this.switchWeapon(order[(curIdx + 1) % order.length]);
      });
    }
    if (this.skinBadge) {
      this.skinBadge.style.cursor = 'pointer';
      this.skinBadge.title = 'Click để đổi ngoại trang (hoặc phím C)';
      this.skinBadge.addEventListener('click', () => this.toggleSkin());
    }
    this.carryBadge = document.getElementById('carry-badge');
    this.wsBadge = document.getElementById('ws-badge');
    this.locationBadge = document.getElementById('location-badge');
    this.dialogueBox = document.getElementById('dialogue-box');
    this.dialogueSpeaker = document.getElementById('dialogue-speaker');
    this.dialogueText = document.getElementById('dialogue-text');
    this.toast = document.getElementById('toast-notification');
    this.gameOverScreen = document.getElementById('game-over-screen');
    this.manifestModal = document.getElementById('manifest-modal');

    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    this.bindInputs();
    this.connectWebSocket();
    this.loadAllAssets();
  },

  resizeCanvas() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    if (this.ctx) this.ctx.imageSmoothingEnabled = false;
  },

  bindInputs() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.key] = true;

      // Phím Tab: Bật / Tắt hiển thị các thanh Menu & HUD
      if (e.key === 'Tab') {
        e.preventDefault();
        this.toggleMenuUI();
      }

      if (e.key === 'f' || e.key === 'F') {
        if (this.dialogueBox && this.dialogueBox.style.display === 'block') {
          this.closeDialogue();
        } else if (this.fishing && this.fishing.active) {
          if (this.fishing.stage === 'biting') {
            this.reelInFish(true);
          } else if (this.fishing.stage === 'waiting') {
            this.showToast("🎣 Cá chưa cắn câu, hãy kiên nhẫn đợi gợn sóng nổi lên...");
          }
        } else {
          this.interact();
        }
      }

      if ((e.key === 'Escape' || e.key === ' ') && this.dialogueBox && this.dialogueBox.style.display === 'block') {
        this.closeDialogue();
      }

      if (e.key === 'Escape' && this.fishing && this.fishing.active) {
        this.cancelFishing();
      }

      if (e.key === 'j' || e.key === 'J') {
        if (this.player) this.player.attack('slash');
      }
      if (e.key === 'k' || e.key === 'K') {
        if (this.player) this.player.attack('thrust');
      }
      if (e.key === 'l' || e.key === 'L') {
        if (this.player) this.player.attack('hammer');
      }
      if (e.key === ' ') {
        if (this.fishing && this.fishing.active) {
          if (this.fishing.stage === 'biting') {
            this.reelInFish(true);
            return;
          }
        }
        if (this.player && (!this.dialogueBox || this.dialogueBox.style.display !== 'block')) {
          this.player.roll();
        }
      }

      // Tưới nước
      if (e.key === 'u' || e.key === 'U') {
        if (this.player) {
          this.player.triggerSpecialAction('watering');
          this.spawnSparks(this.player.x, this.player.y, '#38bdf8', 10);
          this.showToast("💧 Đang tưới nước chăm sóc cây cỏ và hoa màu!");
        }
      }

      // Câu cá [Phím I]
      if (e.key === 'i' || e.key === 'I') {
        if (this.fishing && this.fishing.active) {
          if (this.fishing.stage === 'biting') {
            this.reelInFish(true);
          } else if (this.fishing.stage === 'waiting') {
            this.showToast("🎣 Cá chưa cắn câu, hãy kiên nhẫn đợi gợn sóng nổi lên...");
          }
        } else {
          this.startFishing();
        }
      }

      // 4 Vũ Khí chuẩn tương ứng 4 Chức Nghiệp (1: Thiết Quyền, 2: Kiếm, 3: Lưỡi Hái, 4: Quyền Trượng)
      if (e.key === '1') this.switchWeapon('hands');
      if (e.key === '2') this.switchWeapon('wood');
      if (e.key === '3') this.switchWeapon('bone');
      if (e.key === '4') this.switchWeapon('staff');
      if (e.key === 'p' || e.key === 'P') {
        this.openClassModal();
      }
      if (e.key === 'q' || e.key === 'Q') {
        const order = ['hands', 'wood', 'bone', 'staff'];
        const curIdx = order.indexOf(this.player ? this.player.currentWeapon : 'hands');
        this.switchWeapon(order[(curIdx + 1) % order.length]);
      }

      if (e.key === 'c' || e.key === 'C') {
        this.toggleSkin();
      }

      if (e.key === 'g' || e.key === 'G') {
        if (this.player) {
          this.player.isCarrying = !this.player.isCarrying;
          this.showToast(this.player.isCarrying ? "📦 Đang vác kiện hàng phẩm chất cao!" : "Đã đặt kiện hàng xuống.");
        }
      }

      if (e.key === 'm' || e.key === 'M') {
        if (!e.ctrlKey && !e.metaKey) {
          this.toggleManifestModal();
        }
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (this.player && !this.player.isDead) {
        if (e.button === 0) this.player.attack('slash');
        else if (e.button === 2) this.player.attack('thrust');
      }
    });

    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  },

  loadAllAssets() {
    let list = window.ALL_GAME_ASSETS;
    if (!list && typeof PIXEL_ASSET_MANIFEST !== 'undefined') {
      list = PIXEL_ASSET_MANIFEST.map(item => item.rel);
    }
    list = list || [];
    const pngList = list.filter(p => typeof p === 'string' && (p.endsWith('.png') || p.endsWith('.jpg')));
    this.totalAssets = pngList.length;
    this.loadedAssetsCount = 0;

    let hasStarted = false;
    const startOnce = () => {
      if (!hasStarted) {
        hasStarted = true;
        this.assetsLoaded = true;
        this.initGameWorld();
        this.startGameLoop();
      }
    };

    if (this.totalAssets === 0) {
      console.warn("Không tìm thấy ảnh PNG trong manifest, khởi chạy ngay.");
      startOnce();
      return;
    }

    // Đảm bảo game 100% khởi chạy an toàn
    setTimeout(() => {
      if (!hasStarted) {
        console.warn(`Đã nạp ${this.loadedAssetsCount}/${this.totalAssets} ảnh. Khởi chạy game ngay.`);
        startOnce();
      }
    }, 2500);

    let loaded = 0;
    for (const relPath of pngList) {
      const img = new Image();
      img.src = '/assets/' + relPath;
      img.onload = () => {
        this.images[relPath] = img;
        this.images[relPath.replaceAll('/', '_').replaceAll('.', '_')] = img;
        loaded++;
        this.loadedAssetsCount = loaded;
        if (loaded >= this.totalAssets) {
          startOnce();
        }
      };
      img.onerror = () => {
        loaded++;
        this.loadedAssetsCount = loaded;
        if (loaded >= this.totalAssets) {
          startOnce();
        }
      };
    }
  },

  initGameWorld() {
    // DŨNG SĨ KHỞI ĐẦU TẠI NGÔI NHÀ KHỞI ĐẦU (STARTER_HOUSE)
    this.currentMap = 'starter_house';
    const spawnCfg = MAP_CONFIGS.starter_house;
    this.player = new Player(spawnCfg.spawnX, spawnCfg.spawnY);
    this.updateHUD();

    this.buildMapTavern();
    this.buildMapStarterHomestead();
    this.buildMapCourtyard();
    this.buildMapStarterHouse();
    this.buildMapDungeon();
    this.buildMapCastleGate();
    this.buildMapPalace();

    this.updateLocationBadge();
    this.showToast("🏡 Chào mừng Dũng Sĩ! Bạn đang ở Ngôi Nhà Khởi Đầu. Nhấn [F] mở Rương Báu & Trò chuyện cùng Trưởng Lão.", 5000);
    setTimeout(() => this.openClassModal(), 400);
  },

  // --- MAP 1: SẢNH QUÁN RƯỢU HOÀNG GIA (TAVERN - 1280x640) ---
  buildMapTavern() {
    const map = this.maps.tavern;
    map.npcs = [
      new NPC("Tiếp Tân Maria", 610, 335,
        "Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side-Sheet.png",
        "Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side-Sheet.png",
        "Chào mừng hiệp sĩ đến Sảnh Quán Rượu! Ra ngoài [Sân Làng] ở cửa bên phải hoặc xuống [Hầm Ngục] ở cầu thang bên trái.", true),
      new NPC("Phục Vụ Elena", 230, 150,
        "Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side-Sheet.png",
        "Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side-Sheet.png",
        "Món gà quay thảo mộc và súp bí đỏ nóng hổi vừa ra lò đây! Mời quý khách thưởng thức.", true),
      new NPC("Quản Gia Barnaby", 765, 260,
        "Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side-Sheet.png",
        "Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side-Sheet.png",
        "Rượu vang ủ thùng sồi và thịt nướng đang được chuẩn bị ở bếp nấu. Cần gì hãy gọi ta nhé!", true),
      new NPC("Thị Nữ Clara", 740, 350,
        "Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side-Sheet.png",
        "Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side-Sheet.png",
        "Ta đang mang bia lạnh sang dãy bàn tiệc của các hiệp sĩ. Đừng làm đổ bia nhé!", true),
      new NPC("Khách Trọ Valen", 410, 430,
        "Entities/Npc's/Rogue/Idle/Idle-Sheet.png",
        "Entities/Npc's/Rogue/Run/Run-Sheet.png",
        "Nghe nói ngoài sân làng, Trưởng Lão Alden đã hoàn thành Ngôi Nhà Khởi Đầu rất tráng lệ."),
      new NPC("Tiểu Thư Sophia", 955, 150,
        "Entities/Npc's/Citizen_F/Citizen_A/Idle.png",
        "Entities/Npc's/Citizen_F/Citizen_A/Walk.png",
        "Trà thảo mộc thơm ngát tại phòng VIP hoàng gia này thật tao nhã.", true),
      new NPC("Hiệp Sĩ Canh Sảnh", 510, 510,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Hãy trang bị vũ khí gỗ, xương hoặc thiết quyền trước khi bước chân xuống tầng hầm!")
    ];

    map.interactables = [
      { id: 'door_courtyard', name: 'Cửa Ra Thung Lũng Nhà Tân Thủ', x: 715, y: 240, radius: 50, prompt: 'Bước Ra Thung Lũng Nhà Tân Thủ', action: () => this.changeMap('starter_homestead', 290, 100) },
      { id: 'stairs_dungeon', name: 'Cầu Thang Xuống Hầm Ngục', x: 65, y: 340, radius: 55, prompt: 'Xuống Hầm Ngục Phó Bản', action: () => this.changeMap('dungeon', 180, 140) },
      { id: 'tavern_cooking', name: 'Trạm Bếp Nấu Hoàng Gia', x: 380, y: 150, radius: 55, prompt: 'Nấu Bữa Ăn Hồi Máu', action: () => this.cookMeal() },
      { id: 'tavern_grill', name: 'Lò Nướng & Chế Biến Thịt', x: 140, y: 550, radius: 60, prompt: 'Nướng Thịt Sườn Heo Rừng', action: () => this.grillMeat() },
      { id: 'tavern_beer', name: 'Thùng Rượu Lên Men', x: 65, y: 550, radius: 55, prompt: 'Uống Rượu Hồi Phục Thể Lực', action: () => this.drinkAle() }
    ];

    map.mobs = [];
  },

  // --- MAP 2: SÂN LÀNG NGOÀI TRỜI (COURTYARD - 1280x640) ---
    // --- MAP 2: THUNG LŨNG NHÀ TÂN THỦ (STARTER_HOMESTEAD - 800x800) ---
  buildMapStarterHomestead() {
    const map = this.maps.starter_homestead;
    map.npcs = [
      new NPC("Thôn Nữ Sophia", 520, 460,
        "Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle-Sheet.png",
        "Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk-Sheet.png",
        "Chào mừng bạn đến với Thung Lũng Nhà Tân Thủ! Vườn rau củ đang tươi tốt lắm, bạn hãy tưới nước và thu hoạch nhé!", true),
      new NPC("Lão Ngư Ryan", 320, 730,
        "Entities/Npc's/Citizen_F/Citizen_A/Idle.png",
        "Entities/Npc's/Citizen_F/Citizen_A/Walk.png",
        "Bến sông này cá hồi và cá chép vàng bơi lội tung tăng! Đứng ở mút bến buông cần [F hoặc I], kiên nhẫn đợi cá cắn câu rồi giật cần thật nhanh, vừa thư giãn lại kiếm được bộn vàng và báu vật đấy!"),
      new NPC("Trưởng Lão Alden", 670, 250,
        "Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
        "Entities/Npc's/Wizzard/Run/Run-Sheet.png",
        "Dũng sĩ trẻ tuổi! Muốn khám phá thế giới bên ngoài, hãy đi theo con đường mòn phía đông qua [Cổng Rừng Nguyên Sinh] nhé!")
    ];

    map.interactables = [
      // 0. LỐI ĐI SANG SẢNH QUÁN RƯỢU TAVERN
      { id: 'door_tavern', name: 'Đường Tới Quán Rượu Tavern', x: 290, y: 55, radius: 55, prompt: 'Đi Tới Sảnh Quán Rượu Tavern', action: () => this.changeMap('tavern', 715, 270) },
      // 1. CỬA VÀO BÊN TRONG NHÀ TÂN THỦ
      { id: 'door_starter_house_interior', name: 'Cửa Vào Trong Nhà Tân Thủ', x: 608, y: 230, radius: 45, prompt: 'Bước Vào Trong Nhà Tân Thủ', action: () => this.changeMap('starter_house', 240, 310) },
      // 2. CỔNG ĐI SANG MAP RỪNG NGUYÊN SINH
      { id: 'gate_forest', name: 'Cổng Đi Vào Rừng Nguyên Sinh', x: 755, y: 350, radius: 55, prompt: 'Bước Qua Cổng Tiến Vào Rừng Nguyên Sinh', action: () => this.changeMap('courtyard', 80, 520) },
      // 3. BÀN THỢ WORKBENCH TRƯỚC HIÊN NHÀ
      { id: 'yard_workbench', name: 'Bàn Thợ Chế Tạo (Workbench)', x: 490, y: 255, radius: 45, prompt: 'Rèn Giũa & Chế Tạo Vũ Khí', action: () => this.useWorkbench() },
      // 4. BẾN CÂU CÁ TRÊN SÔNG
      { id: 'pier_fishing', name: 'Bến Câu Cá Trên Sông', x: 310, y: 720, radius: 55, prompt: 'Buông Cần Câu Cá Ven Sông [F / I]', action: () => this.startFishing() },
      // 5. GHẾ GỖ NGHỈ CHÂN BẾN SÔNG
      { id: 'pier_bench', name: 'Ghế Gỗ Nghỉ Chân Bến Sông', x: 208, y: 670, radius: 40, prompt: 'Ngồi Nghỉ Ngắm Dòng Sông', action: () => this.restAtBench() },
      // 6. VƯỜN NÔNG TRẠI RAU CỦ
      { id: 'farm_harvest', name: 'Vườn Nông Trại Rau Củ', x: 620, y: 600, radius: 85, prompt: 'Tưới Nước & Thu Hoạch Nông Sản', action: () => this.useFarm() }
    ];

    map.mobs = [];
  },

  // --- MAP 2B: ĐẠI RỪNG NGUYÊN SINH & TRẠM CHẾ TẠO (COURTYARD - 1280x640) ---
  buildMapCourtyard() {
    const map = this.maps.courtyard;
    map.npcs = [
      new NPC("Tiều Phu Kenneth", 530, 260,
        "Entities/Npc's/Rogue/Idle/Idle-Sheet.png",
        "Entities/Npc's/Rogue/Run/Run-Sheet.png",
        "Khu xưởng cưa gỗ Sawmill giữa đại ngàn đang hoạt động hết công suất để phục vụ vương quốc!"),
      new NPC("Thợ Rèn Brokk", 320, 480,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Chào chiến binh! Đây là khu lò rèn đúc vũ khí giữa rừng. Ta có thể tôi luyện kiếm cho ngươi tại đe rèn Anvil."),
      new NPC("Hiệp Sĩ Hoàng Gia Lancelot", 1120, 200,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Phía trên này là con đường dẫn tới [Cổng Thành Vương Quốc]. Ngươi đã sẵn sàng chưa?")
    ];

    map.interactables = [
      // 1. CỔNG TRỞ VỀ NHÀ TÂN THỦ
      { id: 'gate_homestead', name: 'Cổng Trở Về Nhà Tân Thủ', x: 80, y: 520, radius: 55, prompt: 'Bước Qua Cổng Trở Về Nhà Tân Thủ', action: () => this.changeMap('starter_homestead', 720, 350) },
      // 2. CỬA VÀO SẢNH QUÁN RƯỢU
      { id: 'door_tavern', name: 'Cửa Vào Sảnh Quán Rượu', x: 160, y: 160, radius: 55, prompt: 'Vào Sảnh Quán Rượu Tavern', action: () => this.changeMap('tavern', 715, 270) },
      // 3. ĐƯỜNG TỚI CỔNG THÀNH VƯƠNG QUỐC
      { id: 'road_castle_gate', name: 'Đường Tới Cổng Thành Vương Quốc', x: 1180, y: 160, radius: 65, prompt: 'Tiến Vào Cổng Thành Vương Quốc', action: () => this.changeMap('castle_gate', 320, 580) },
      // 4. ĐE RÈN KIM LOẠI
      { id: 'yard_anvil', name: 'Đe Rèn Kim Loại (Anvil)', x: 380, y: 490, radius: 45, prompt: 'Rèn Giũa Kiếm Sắc Bén', action: () => this.useAnvil() },
      // 5. MÁY CƯA GỖ SAWMILL
      { id: 'yard_sawmill', name: 'Máy Cưa Gỗ Tự Động (Sawmill)', x: 580, y: 260, radius: 50, prompt: 'Cắt Gỗ Xây Dựng', action: () => this.useSawmill() },
      // 6. LỬA TRẠI RỪNG
      { id: 'yard_bonfire', name: 'Lửa Trại Làng (Bonfire)', x: 440, y: 460, radius: 50, prompt: 'Nghỉ Ngơi Bên Lửa Trại', action: () => this.restAtBonfire() }
    ];

    map.mobs = [
      new Mob('skeleton_base', 380, 160),
      new Mob('skeleton_rogue', 780, 340),
      new Mob('orc_base', 980, 480)
    ];
  },

  buildMapStarterHouse() {
    const map = this.maps.starter_house;
    map.npcs = [
      new NPC("Trưởng Lão Alden", 240, 140,
        "Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
        "Entities/Npc's/Wizzard/Run/Run-Sheet.png",
        "Chào mừng người hùng trẻ tuổi! Đây là Ngôi Nhà Khởi Đầu do ta lập nên. Hãy mở chiếc Rương Báu Khởi Đầu và đọc Sách Cổ để nhận sức mạnh!")
    ];

    map.interactables = [
      { id: 'house_exit', name: 'Cửa Ra Sân Làng', x: 240, y: 345, radius: 45, prompt: 'Bước Ra Sân Làng', action: () => this.changeMap('starter_homestead', 608, 255) },
      { id: 'starter_chest', name: 'Rương Khởi Đầu Hoàng Gia', x: 100, y: 170, radius: 40, prompt: 'Mở Rương Báu Khởi Đầu', action: () => this.openStarterChest() },
      { id: 'starter_bookshelf', name: 'Kệ Sách Cổ Ma Thuật', x: 380, y: 170, radius: 40, prompt: 'Đọc Sách Cổ Của Trưởng Lão', action: () => this.readStarterBook() },
      { id: 'starter_bed', name: 'Giường Ngủ Ấm Áp', x: 80, y: 270, radius: 45, prompt: 'Nằm Nghỉ Hồi Phục 100% HP & SP', action: () => this.restInBed() }
    ];

    map.mobs = [];
  },

  // --- MAP 4: TẦNG HẦM NGỤC 4 PHÒNG (DUNGEON - 1280x640) ---
  buildMapDungeon() {
    const map = this.maps.dungeon;
    map.npcs = [
      new NPC("Pháp Sư Bị Giam Cầm", 240, 480,
        "Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
        "Entities/Npc's/Wizzard/Run/Run-Sheet.png",
        "Cứu ta với! Lũ Orc và Skeleton đã phong ấn ta trong lồng sắt này. Hãy tiêu diệt tên Orc Shaman ở phòng tế đàn cuối cùng để phá tan kết giới!")
    ];

    map.interactables = [
      { id: 'dungeon_ladder', name: 'Cầu Thang Leo Lên Quán Rượu', x: 180, y: 120, radius: 55, prompt: 'Leo Lên Sảnh Quán Rượu', action: () => this.changeMap('tavern', 160, 540) },
      { id: 'dungeon_furnace', name: 'Lò Nung Đá Cổ Đại (Stone Furnace)', x: 440, y: 180, radius: 50, prompt: 'Luyện Quặng Hắc Ám', action: () => this.useStoneFurnace() },
      { id: 'dungeon_chest', name: 'Rương Báu Hầm Ngục', x: 1100, y: 480, radius: 50, prompt: 'Mở Rương Kho Báu Hầm Ngục', action: () => this.openDungeonChest() }
    ];

    // PHÂN LUỒNG QUÁI VẬT TỪNG TẦNG - TĂNG CẤP ĐỘ & SÁT THƯƠNG THEO TIẾN TRÌNH:
    // Tầng 1: Đánh -10 HP (Lv.1 - Lv.2)
    // Tầng 2: Đánh -15 HP (Lv.3 - Lv.4)
    // Tầng 3: Đánh -20 HP (Lv.5 - Lv.6)
    // Tầng 4: Hộ vệ -25 HP, Boss Đại Tế Tư Orc Shaman -35 HP (Lv.7 - Lv.8)
    map.mobs = [
      // === TẦNG 1: NGỤC GIAM CỬA VÀO (x: 45..300) - SÁT THƯƠNG: -10 HP ===
      new Mob('skeleton_base', 165, 240, {
        tier: 1, level: 1, name: '[Lv.1] Skeleton Canh Cửa',
        damage: 10, maxHp: 50, speed: 70, gold: 15,
        bounds: { minX: 45, maxX: 300, minY: 120, maxY: 380 }
      }),
      new Mob('skeleton_base', 220, 320, {
        tier: 1, level: 1, name: '[Lv.1] Skeleton Tuần Tra',
        damage: 10, maxHp: 50, speed: 70, gold: 15,
        bounds: { minX: 45, maxX: 300, minY: 120, maxY: 400 }
      }),
      new Mob('skeleton_warrior', 150, 480, {
        tier: 1, level: 2, name: '[Lv.2] Tiền Vệ Xương',
        damage: 10, maxHp: 75, speed: 75, gold: 20,
        bounds: { minX: 45, maxX: 300, minY: 380, maxY: 580 }
      }),

      // === TẦNG 2: XƯỞNG NUNG & GIẢ KIM (x: 340..620) - SÁT THƯƠNG: -15 HP ===
      new Mob('skeleton_rogue', 440, 270, {
        tier: 2, level: 3, name: '[Lv.3] Thích Khách Xương Xưởng Rèn',
        damage: 15, maxHp: 85, speed: 100, gold: 30,
        bounds: { minX: 340, maxX: 620, minY: 120, maxY: 400 }
      }),
      new Mob('skeleton_mage', 560, 380, {
        tier: 2, level: 3, name: '[Lv.3] Pháp Sư Xương Hắc Ám',
        damage: 15, maxHp: 70, speed: 75, gold: 35,
        bounds: { minX: 340, maxX: 620, minY: 220, maxY: 580 }
      }),
      new Mob('orc_base', 410, 490, {
        tier: 2, level: 4, name: '[Lv.4] Orc Tiên Phong Xưởng Đá',
        damage: 15, maxHp: 120, speed: 75, gold: 40,
        bounds: { minX: 340, maxX: 620, minY: 350, maxY: 580 }
      }),

      // === TẦNG 3: ĐẤU TRƯỜNG HUYẾT CHIẾN (x: 660..940) - SÁT THƯƠNG: -20 HP ===
      new Mob('orc_warrior', 730, 290, {
        tier: 3, level: 5, name: '[Lv.5] Thiết Giáp Binh Orc Đấu Trường',
        damage: 20, maxHp: 180, speed: 80, gold: 55,
        bounds: { minX: 660, maxX: 940, minY: 120, maxY: 400 }
      }),
      new Mob('orc_rogue', 830, 330, {
        tier: 3, level: 5, name: '[Lv.5] Đao Phủ Orc Song Đao',
        damage: 20, maxHp: 140, speed: 105, gold: 50,
        bounds: { minX: 660, maxX: 940, minY: 200, maxY: 580 }
      }),
      new Mob('skeleton_warrior', 770, 500, {
        tier: 3, level: 6, name: '[Lv.6] Giác Đấu Sĩ Cốt Tinh Nhuệ',
        damage: 20, maxHp: 160, speed: 85, gold: 55,
        bounds: { minX: 660, maxX: 940, minY: 350, maxY: 580 }
      }),

      // === TẦNG 4: PHÒNG TẾ ĐÀN BOSS & KHO BÁU (x: 980..1230) - SÁT THƯƠNG: -25 HP & BOSS -35 HP ===
      new Mob('orc_warrior', 1010, 420, {
        tier: 4, level: 7, name: '[Lv.7] Hộ Vệ Thần Điện Orc',
        damage: 25, maxHp: 220, speed: 85, gold: 75,
        bounds: { minX: 980, maxX: 1230, minY: 300, maxY: 580 }
      }),
      new Mob('skeleton_mage', 1010, 190, {
        tier: 4, level: 7, name: '[Lv.7] Thượng Tế Cốt Pháp Hắc Ám',
        damage: 25, maxHp: 130, speed: 80, gold: 75,
        bounds: { minX: 980, maxX: 1230, minY: 120, maxY: 350 }
      }),
      new Mob('orc_shaman', 1110, 280, {
        tier: 4, level: 8, name: '★ [Lv.8 BOSS] ĐẠI TẾ TƯ ORC SHAMAN ★',
        damage: 35, maxHp: 500, speed: 70, gold: 300,
        isBoss: true, aggroRange: 340,
        bounds: { minX: 980, maxX: 1230, minY: 120, maxY: 580 }
      })
    ];
  },

  // --- MAP 5: CỔNG THÀNH VƯƠNG QUỐC (CASTLE_GATE - 640x640) ---
  buildMapCastleGate() {
    const map = this.maps.castle_gate;
    map.npcs = [
      new NPC("Đại Hiệp Sĩ Canh Cổng", 240, 420,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Dừng lại! Đây là Cổng Thành Vương Quốc Hoàng Gia. Chỉ có chiến binh đã vượt qua Hầm Ngục mới được yết kiến Quốc Vương."),
      new NPC("Cung Thủ Cận Vệ", 400, 420,
        "Entities/Npc's/Rogue/Idle/Idle-Sheet.png",
        "Entities/Npc's/Rogue/Run/Run-Sheet.png",
        "Cổng sắt đang đóng kín để ngăn chặn quái vật bên ngoài xâm nhập. Hãy kiểm tra phong ấn trước.")
    ];

    map.interactables = [
      { id: 'gate_exit', name: 'Đường Về Sân Làng', x: 320, y: 610, radius: 55, prompt: 'Trở Về Sân Làng Ngoài Trời', action: () => this.changeMap('starter_homestead', 608, 255) },
      { id: 'castle_iron_gate', name: 'Cổng Vào Cung Điện Hoàng Gia', x: 320, y: 220, radius: 60, prompt: 'Tiến Vào Cung Điện Hoàng Gia', action: () => this.checkCastleGate() },
      { id: 'castle_brazier', name: 'Đài Đuốc Lửa Bất Diệt', x: 160, y: 320, radius: 45, prompt: 'Thắp Sáng Lửa Danh Dự', action: () => this.lightCastleBrazier() }
    ];

    map.mobs = [
      new Mob('skeleton_warrior', 180, 480),
      new Mob('orc_warrior', 460, 480)
    ];
  },
  // --- MAP 6: CUNG ĐIỆN HOÀNG GIA & NGAI VÀNG QUỐC VƯƠNG (PALACE - 960x640) ---
  buildMapPalace() {
    const map = this.maps.palace;
    map.npcs = [
      new NPC("Quốc Vương Aurelius Đệ Nhị", 480, 140,
        "Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
        "Entities/Npc's/Wizzard/Run/Run-Sheet.png",
        "Hỡi Dũng Sĩ Trẻ Tuổi! Vương quốc đang lâm nguy trước họa diệt vong. Lũ Orc và Skeleton hắc ám đã chiếm cứ Hầm Ngục 4 Tầng và phong ấn Đại Pháp Sư hoàng triều. Ta phong ngươi làm Dũng Sĩ Tiên Phong và trao sứ mệnh: Hãy tiến xuống Hầm Ngục, dọn sạch 4 tầng, trảm sát Đại Tế Tư Boss Orc Shaman! Khi khải hoàn trở về, ta sẽ ban thưởng 500 Vàng và phong tước Đại Hiệp Sĩ Hộ Quốc!"),
      new NPC("Tể Tướng Valerius", 550, 150,
        "Entities/Npc's/Citizen_F/Citizen_A/Idle.png",
        "Entities/Npc's/Citizen_F/Citizen_A/Walk.png",
        "Thưa dũng sĩ, ngài có thể nghỉ ngơi tại Ngôi Nhà Khởi Đầu, rèn đúc vũ khí ở xưởng rèn Hầm Ngục và trang bị vũ khí trước khi bước vào phòng tế đàn Boss."),
      new NPC("Đại Đội Trưởng Godfrey", 410, 150,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Quân đoàn thiết giáp hoàng gia luôn kính phục những chiến binh dũng cảm dám bước chân xuống hầm ngục bóng tối!"),
      new NPC("Hiệp Sĩ Canh Cung Điện (Tả)", 375, 360,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Khu vực thảm đỏ hoàng gia dẫn thẳng lên ngai vàng của Bệ Hạ. Hãy giữ trật tự và cung kính!"),
      new NPC("Hiệp Sĩ Canh Cung Điện (Hữu)", 585, 360,
        "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
        "Entities/Npc's/Knight/Run/Run-Sheet.png",
        "Vương triều sẽ trường tồn nhờ có những dũng sĩ bất khuất như ngươi!")
    ];

    map.interactables = [
      { id: 'palace_throne', name: 'Ngai Vàng Quốc Vương Aurelius', x: 480, y: 140, radius: 60, prompt: 'Yết Kiến Quốc Vương & Nhận Nhiệm Vụ', action: () => this.talkToKing() },
      { id: 'palace_exit', name: 'Cửa Lớn Trở Về Cổng Thành', x: 480, y: 615, radius: 55, prompt: 'Bước Ra Cổng Thành', action: () => this.changeMap('castle_gate', 320, 260) },
      { id: 'palace_treasury', name: 'Rương Báu Triều Đình', x: 760, y: 200, radius: 45, prompt: 'Mở Rương Báu Hoàng Cung', action: () => this.openPalaceTreasury() },
      { id: 'palace_fountain', name: 'Đài Nước Thánh Hoàng Cung', x: 200, y: 200, radius: 45, prompt: 'Uống Nước Thánh Hồi Phục 100%', action: () => this.drinkHolyWater() }
    ];

    map.mobs = [];
  },

  talkToKing() {
    if (!this.bossDefeated) {
      this.kingQuestAccepted = true;
      this.openDialogue("👑 Quốc Vương Aurelius Đệ Nhị",
        "Hỡi Dũng Sĩ Trẻ Tuổi! Vương quốc đang lâm nguy trước họa diệt vong. Lũ Orc và Skeleton hắc ám đã chiếm cứ Hầm Ngục 4 Tầng và phong ấn Đại Pháp Sư hoàng triều. Ta phong ngươi làm Dũng Sĩ Tiên Phong và trao sứ mệnh: Hãy tiến xuống Hầm Ngục, dọn sạch 4 tầng, trảm sát Đại Tế Tư Boss Orc Shaman! Khi khải hoàn trở về, ta sẽ ban thưởng 500 Vàng và phong tước Đại Hiệp Sĩ Hộ Quốc!");
      this.showToast("📜 ĐÃ NHẬN NHIỆM VỤ: Tiêu diệt Boss Orc Shaman tại Hầm Ngục!", 4500);
    } else if (!this.kingRewardClaimed) {
      this.kingRewardClaimed = true;
      if (this.player) {
        this.player.gold += 500;
        this.player.maxHp += 20;
        this.player.hp = this.player.maxHp;
        this.player.sp = this.player.maxSp;
      }
      this.updateHUD();
      this.spawnSparks(this.player.x, this.player.y, '#f59e0b', 25);
      this.screenShake = 6;
      this.openDialogue("👑 Quốc Vương Aurelius Đệ Nhị",
        "Kỳ tích vĩ đại! Ngươi đã chém đầu Đại Tế Tư Boss Orc Shaman, giải cứu Pháp Sư và phá tan kết giới hắc ám! Nhân danh Quốc Vương, ta ban tặng ngươi 500 ĐỒNG VÀNG HOÀNG TRIỀU, tăng vĩnh viễn +20 MÁU TỐI ĐA và sắc phong danh hiệu cao quý: ĐẠI HIỆP SĨ HỘ QUỐC! Rương Kho Báu Triều Đình giờ đây thuộc về ngươi!");
      this.showToast("🎉 HOÀN THÀNH ĐẠI NHIỆM VỤ: Nhận 500 Vàng & Tước Hiệu Đại Hiệp Sĩ!", 5000);
    } else {
      this.openDialogue("👑 Quốc Vương Aurelius Đệ Nhị",
        "Hỡi Đại Hiệp Sĩ Hộ Quốc anh minh! Ngươi là niềm tự hào vĩ đại nhất của vương triều. Cung điện này luôn chào đón ngươi bất cứ lúc nào!");
    }
  },

  openPalaceTreasury() {
    if (this.kingRewardClaimed) {
      if (!this.palaceChestOpened) {
        this.palaceChestOpened = true;
        if (this.player) {
          this.player.gold += 250;
        }
        this.updateHUD();
        this.spawnSparks(this.player.x, this.player.y, '#facc15', 20);
        this.openDialogue("Rương Báu Triều Đình", "Bạn đã mở Rương Báu Hoàng Gia và nhận thêm: 250 Đồng Vàng Triều Đình + Thần dược trường sinh vương giả!");
        this.showToast("🎁 Mở Rương Báu Cung Điện: +250 Vàng!", 3500);
      } else {
        this.openDialogue("Rương Báu Triều Đình", "Rương báu hoàng cung đã được trao tặng cho bạn.");
      }
    } else {
      this.openDialogue("Rương Báu Triều Đình", "Rương kho báu hoàng gia đang bị khóa kín bằng ấn tín của Quốc Vương. Hãy hoàn thành nhiệm vụ tiêu diệt Boss Orc Shaman để được ban thưởng!");
    }
  },

  drinkHolyWater() {
    if (!this.player) return;
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.updateHUD();
    this.spawnSparks(this.player.x, this.player.y, '#38bdf8', 16);
    this.openDialogue("Đài Phun Nước Thánh Hoàng Cung", "Dũng sĩ uống dòng nước thánh tinh khiết của triều đình. Toàn bộ 100% Máu và Thể lực đã được hồi phục hoàn toàn!");
    this.showToast("✨ Đã hồi phục toàn bộ Máu & Thể Lực!", 3000);
  },


  changeMap(newMapId, targetX, targetY) {
    if (!MAP_CONFIGS[newMapId]) return;

    if (this.fishing) {
      this.fishing = null;
    }

    this.currentMap = newMapId;
    const mapCfg = MAP_CONFIGS[newMapId];

    if (this.player) {
      this.player.x = (targetX !== undefined) ? targetX : mapCfg.spawnX;
      this.player.y = (targetY !== undefined) ? targetY : mapCfg.spawnY;
      this.player.vx = 0;
      this.player.vy = 0;
    }

    this.updateLocationBadge();
    this.spawnSparks(this.player.x, this.player.y, '#38bdf8', 14);
    this.showToast(`🧭 Bạn đã bước vào: ${mapCfg.name}`, 3000);
  },

  updateLocationBadge() {
    if (this.locationBadge) {
      const cfg = MAP_CONFIGS[this.currentMap];
      if (cfg) {
        this.locationBadge.textContent = cfg.badgeText;
      }
    }
  },

  // --- KIỂM TRA VA CHẠM MAP QUÁN RƯỢU (CHUẨN CIRCLE TO AABB KHÔNG CHO XUYÊN BLOCK) ---
  isTavernSolidEntity(x, y, radius = 10) {
    // 1. Tường biên bao quanh sảnh quán rượu (1280x640)
    if (x - radius < 45 || x + radius > 1235 || y - radius < 40 || y + radius > 630) {
      return true;
    }

    // 2. Thuật toán va chạm Hình Tròn (Circle) với Hình Chữ Nhật (AABB) toàn bộ Block Quán Rượu
    const r2 = radius * radius;
    for (let i = 0; i < TAVERN_SOLID_BLOCKS.length; i++) {
      const b = TAVERN_SOLID_BLOCKS[i];
      const cx = Math.max(b.x1, Math.min(x, b.x2));
      const cy = Math.max(b.y1, Math.min(y, b.y2));
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy < r2) {
        return true;
      }
    }
    return false;
  },

  isTavernSolid(x, y) {
    return this.isTavernSolidEntity(x, y, 4);
  },

  // --- KIỂM TRA VA CHẠM MAP HẦM NGỤC (CHUẨN CIRCLE TO AABB KHÔNG CHO XUYÊN BLOCK) ---
  isDungeonSolidEntity(x, y, radius = 10) {
    // 1. Tường biên bao bọc hầm ngục
    if (x - radius < 45 || x + radius > 1235 || y + radius > 590) return true;
    if (y - radius < 110) {
      if (x >= 150 && x <= 210) {
        if (y - radius < 40) return true;
      } else {
        return true;
      }
    }

    // 2. Thuật toán va chạm Hình Tròn (Circle) với Hình Chữ Nhật (AABB) toàn bộ Block Hầm Ngục
    const r2 = radius * radius;
    for (let i = 0; i < DUNGEON_SOLID_BLOCKS.length; i++) {
      const b = DUNGEON_SOLID_BLOCKS[i];
      const cx = Math.max(b.x1, Math.min(x, b.x2));
      const cy = Math.max(b.y1, Math.min(y, b.y2));
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy < r2) {
        return true;
      }
    }
    return false;
  },

  isDungeonSolid(x, y) {
    return this.isDungeonSolidEntity(x, y, 4);
  },

  isPalaceSolidEntity(x, y, radius = 10) {
    // 1. Tường biên bao bọc cung điện (960x640)
    if (x - radius < 45 || x + radius > 915) return true;
    if (y + radius > 595) {
      if (x >= 420 && x <= 540) {
        if (y + radius > 630) return true;
      } else {
        return true;
      }
    }
    if (y - radius < 100) return true;

    // 2. Kiểm tra va chạm với các vật thể trong cung điện
    const r2 = radius * radius;
    for (let i = 0; i < PALACE_SOLID_BLOCKS.length; i++) {
      const b = PALACE_SOLID_BLOCKS[i];
      const cx = Math.max(b.x1, Math.min(x, b.x2));
      const cy = Math.max(b.y1, Math.min(y, b.y2));
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy < r2) {
        return true;
      }
    }
    return false;
  },

  isSolid(x, y) {
    const mapCfg = MAP_CONFIGS[this.currentMap];
    if (!mapCfg) return false;

    if (this.currentMap === 'tavern') {
      return this.isTavernSolidEntity(x, y, 6);
    }

    if (this.currentMap === 'dungeon') {
      return this.isDungeonSolidEntity(x, y, 6);
    }

    if (this.currentMap === 'palace') {
      return this.isPalaceSolidEntity(x, y, 6);
    }

    if (x < 30 || x > mapCfg.width - 30 || y < 40 || y > mapCfg.height - 35) {
      return true;
    }

    // Kiểm tra va chạm với NPC đang đứng để tránh người chơi/quái đi xuyên qua NPC
    const curMapData = this.maps[this.currentMap];
    if (curMapData && curMapData.npcs) {
      for (let i = 0; i < curMapData.npcs.length; i++) {
        const npc = curMapData.npcs[i];
        const dx = x - npc.x;
        const dy = y - npc.y;
        if (dx * dx + dy * dy < 18 * 18) return true;
      }
    }

        // --- VA CHẠM MAP THUNG LŨNG NHÀ TÂN THỦ (STARTER_HOMESTEAD - 800x800) ---
    if (this.currentMap === 'starter_homestead') {
      // Biên bản đồ 800x800:
      // - Chừa lối đi Quán Rượu Tavern ở đỉnh bắc (x: 245..335, y <= 65)
      // - Chừa Cổng Rừng Nguyên Sinh ở phía đông (x: 740..780, y: 320..380)
      if (x < 25 || x > 775 || y < 25 || y > 775) {
        if (x >= 245 && x <= 335 && y <= 65) return false; // Lối đi Quán Rượu Tavern
        if (x >= 740 && y >= 320 && y <= 380) return false; // Cổng rừng
        return true;
      }

      // 1. Dòng sông bên trái (nước sâu cản đường, trừ khi đi trên bến cầu gỗ)
      const inRiver = (x < 140) || (y >= 480 && x < 350);
      const onPierVert = (x >= 45 && x <= 145 && y >= 470 && y <= 760);
      const onPierHoriz = (x >= 45 && x <= 350 && y >= 635 && y <= 760);
      const onPier = onPierVert || onPierHoriz;
      if (inRiver && !onPier) return true;

      // 2. Ngôi Nhà Tân Thủ (chừa cửa chính x: 590..625, y >= 200)
      if (x >= 350 && x <= 700 && y >= 25 && y <= 220) {
        if (x >= 590 && x <= 625 && y >= 200) return false;
        return true;
      }

      // 3. Bàn Thợ Cơ Khí Workbench trước hiên
      if (x >= 440 && x <= 545 && y >= 210 && y <= 255) return true;

      // 4. Hàng Rào Vườn Rau (chừa cổng vào tại x: 470..525, y: 430..455)
      if (x >= 465 && x <= 785 && y >= 430 && y <= 775) {
        if (y >= 430 && y <= 450 && x >= 520) return true; // Cạnh trên
        if (y >= 755 && y <= 775) return true; // Cạnh dưới
        if (x >= 465 && x <= 485 && y >= 450) return true; // Cạnh trái
        if (x >= 765 && x <= 785) return true; // Cạnh phải
      }

      // 5. Đồ đạc trên bến sông (Ghế dài & Thùng hàng)
      if (x >= 180 && x <= 240 && y >= 650 && y <= 680) return true;
      if (x >= 260 && x <= 310 && y >= 645 && y <= 690) return true;

      // 6. Gốc cây đại thụ hoa trắng góc trên bên trái
      if (x <= 130 && y <= 160) return true;

      return false;
    }

    // --- VA CHẠM MAP ĐẠI RỪNG NGUYÊN SINH (COURTYARD - 1280x640) ---
    if (this.currentMap === 'courtyard') {
      if (x < 30 || x > mapCfg.width - 30 || y < 40 || y > mapCfg.height - 35) {
        if (x <= 40 && y >= 490 && y <= 550) return false; // Cổng trở về nhà tân thủ
        return true;
      }
      // Khu vực lò nung và xưởng cưa giữa rừng
      if (x >= 550 && x <= 620 && y >= 230 && y <= 280) return true; // Xưởng cưa
      if (x >= 350 && x <= 410 && y >= 460 && y <= 510) return true; // Đe rèn
      return false;
    } else if (this.currentMap === 'starter_house') {
      if (x < 50 || x > 430 || y < 75 || y > 330) {
        if (x >= 210 && x <= 270 && y >= 320) return false;
        return true;
      }
      if (x <= 110 && y >= 240 && y <= 310) return true;
      if (x >= 350 && y <= 160) return true;
    } else if (this.currentMap === 'castle_gate') {
      if (y <= 210) {
        if (x < 260 || x > 380) return true;
      }
    }

    return false;
  },

  isSolidEntity(x, y, radius = 12, requester = null) {
    // 1. Kiểm tra va chạm với Block / Tường theo từng Map
    if (this.currentMap === 'tavern') {
      if (this.isTavernSolidEntity(x, y, radius)) return true;
    } else if (this.currentMap === 'dungeon') {
      if (this.isDungeonSolidEntity(x, y, radius)) return true;
    } else {
      if (this.isSolid(x, y)) return true;
      if (this.isSolid(x - radius, y)) return true;
      if (this.isSolid(x + radius, y)) return true;
      if (this.isSolid(x, y - radius)) return true;
      if (this.isSolid(x, y + radius)) return true;
    }

    const curMapData = this.maps[this.currentMap];
    if (!curMapData) return false;

    // 2. Kiểm tra va chạm với NPC đang đứng (không cho đi xuyên qua NPC)
    if (curMapData.npcs) {
      for (let i = 0; i < curMapData.npcs.length; i++) {
        const npc = curMapData.npcs[i];
        if (npc === requester) continue;
        const minDist = radius + 14;
        const dx = x - npc.x;
        const dy = y - npc.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < minDist * minDist) {
          if (requester) {
            const oldDx = requester.x - npc.x;
            const oldDy = requester.y - npc.y;
            const oldDist2 = oldDx * oldDx + oldDy * oldDy;
            if (dist2 < oldDist2) return true;
          } else {
            return true;
          }
        }
      }
    }

    // 3. Kiểm tra va chạm với MOB SỐNG (NGĂN TUYỆT ĐỐI NGƯỜI CHƠI VÀ MOB KHÔNG ĐI XUYÊN QUA NHAU)
    if (curMapData.mobs) {
      for (let i = 0; i < curMapData.mobs.length; i++) {
        const mob = curMapData.mobs[i];
        if (mob === requester || mob.isDead) continue;
        const mobR = mob.isBoss ? 20 : 14;
        const minDist = radius + mobR;
        const dx = x - mob.x;
        const dy = y - mob.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < minDist * minDist) {
          if (requester) {
            const oldDx = requester.x - mob.x;
            const oldDy = requester.y - mob.y;
            const oldDist2 = oldDx * oldDx + oldDy * oldDy;
            if (dist2 < oldDist2) return true; // Cố tình tiến lại gần mob -> Chặn đứng!
          } else {
            return true;
          }
        }
      }
    }

    // 4. Nếu Mob di chuyển, kiểm tra va chạm với Người Chơi (không cho Mob đi xuyên qua Người Chơi)
    if (this.player && requester !== this.player && !this.player.isDead) {
      const minDist = radius + 13;
      const dx = x - this.player.x;
      const dy = y - this.player.y;
      const dist2 = dx * dx + dy * dy;
      if (dist2 < minDist * minDist) {
        if (requester) {
          const oldDx = requester.x - this.player.x;
          const oldDy = requester.y - this.player.y;
          const oldDist2 = oldDx * oldDx + oldDy * oldDy;
          if (dist2 < oldDist2) return true; // Mob đi đè lên người chơi -> Chặn lại!
        } else {
          return true;
        }
      }
    }

    return false;
  },

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.ctx.save();
    this.ctx.scale(this.scale, this.scale);

    const shakeX = this.screenShake > 0 ? (Math.random() - 0.5) * this.screenShake * 3 : 0;
    const shakeY = this.screenShake > 0 ? (Math.random() - 0.5) * this.screenShake * 3 : 0;
    this.ctx.translate(-Math.floor(this.camera.x + shakeX), -Math.floor(this.camera.y + shakeY));

    if (this.currentMap === 'tavern') {
      this.renderTavern();
    } else if (this.currentMap === 'starter_homestead') {
      this.renderStarterHomestead();
    } else if (this.currentMap === 'courtyard') {
      this.renderCourtyard();
    } else if (this.currentMap === 'starter_house') {
      this.renderStarterHouse();
    } else if (this.currentMap === 'dungeon') {
      this.renderDungeon();
    } else if (this.currentMap === 'castle_gate') {
      this.renderCastleGate();
    } else if (this.currentMap === 'palace') {
      this.renderPalace();
    }

    const curMapData = this.maps[this.currentMap] || { npcs: [], mobs: [], drops: [] };
    for (const drop of curMapData.drops) {
      this.renderDrop(drop);
    }

    const renderList = [];
    if (this.player) renderList.push(this.player);
    for (const npc of curMapData.npcs) renderList.push(npc);
    for (const mob of curMapData.mobs) renderList.push(mob);

    renderList.sort((a, b) => a.y - b.y);

    for (const entity of renderList) {
      entity.render(this.ctx);
    }

    if (this.player && this.player.isAttacking) {
      this.player.renderAttackEffect(this.ctx);
    }

    // Hiệu ứng Câu Cá (Dây câu, Phao bập bềnh, Cảnh báo cắn câu & Cá bay)
    this.renderFishingVisuals(this.ctx);

    // Vẽ các viên Đạn Ma Pháp (Magic Projectiles)
    for (const p of this.projectiles) {
      this.ctx.save();
      this.ctx.translate(Math.floor(p.x), Math.floor(p.y));

      const radGrad = this.ctx.createRadialGradient(0, 0, 2, 0, 0, p.radius + 6);
      radGrad.addColorStop(0, '#ffffff');
      radGrad.addColorStop(0.35, p.color);
      radGrad.addColorStop(0.8, p.auraColor);
      radGrad.addColorStop(1, 'rgba(147, 51, 234, 0)');
      this.ctx.fillStyle = radGrad;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, p.radius + 6, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.fillStyle = '#ffffff';
      this.ctx.beginPath();
      this.ctx.arc(0, 0, p.radius * 0.45, 0, Math.PI * 2);
      this.ctx.fill();

      const rot = (Date.now() / 90) % (Math.PI * 2);
      this.ctx.rotate(rot);
      this.ctx.strokeStyle = '#f3e8ff';
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.arc(0, 0, p.radius, 0, Math.PI * 1.5);
      this.ctx.stroke();

      this.ctx.restore();
    }

    for (const p of this.particles) {
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(Math.floor(p.x), Math.floor(p.y), p.size, p.size);
      this.ctx.restore();
    }

    this.renderInteractPrompt();

    for (const ft of this.floatingTexts) {
      this.ctx.save();
      this.ctx.globalAlpha = ft.alpha;
      this.ctx.font = 'bold 10px monospace';
      this.ctx.fillStyle = ft.color;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(ft.text, Math.floor(ft.x), Math.floor(ft.y));
      this.ctx.restore();
    }

    this.ctx.restore();
  },

  // --- RENDER MAP 1: SẢNH QUÁN RƯỢU HOÀNG GIA (TAVERN - 1280x640) ---
  renderTavern() {
    const tavImg = this.images['MockUps/Tavern.png'];
    if (tavImg) {
      this.ctx.drawImage(tavImg, 0, 0, 1280, 640, 0, 0, 1280, 640);
    }

    const now = Date.now();
    const fTick = Math.floor(now / 140);

    // Hiệu ứng khói lò nướng bếp bốc lên từ ống khói (Smoke from brick chimney)
    const smokeImg = this.images['Environment/Props/Animated/Smoke-Sheet.png'];
    if (smokeImg) {
      drawBonfire(this.ctx, smokeImg, fTick, 470, 20, 'tall');
    }

    // Chỉ dẫn lối đi & địa điểm trực quan trong quán rượu
    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#facc15';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("🚪 CỬA RA THUNG LŨNG TÂN THỦ [F]", 715, 195);
    this.ctx.fillText("⬇ CẦU THANG HẦM NGỤC [F]", 65, 275);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText("👑 PHÒNG TIỆC VIP HOÀNG GIA", 1040, 40);
    this.ctx.fillText("🍳 BẾP HOÀNG GIA [F]", 380, 100);
    this.ctx.fillText("🍖 BẾP NƯỚNG THỊT [F]", 140, 505);
    this.ctx.fillText("🍺 THÙNG RƯỢU [F]", 65, 480);
    this.ctx.textAlign = 'start';
  },

      // --- RENDER MAP 2: THUNG LŨNG NHÀ TÂN THỦ (STARTER_HOMESTEAD - 800x800) ---
  // CHUẨN 100% THEO ẢNH GỐC CỦA TÁC GIẢ PIXEL CRAWLER TRÊN ITCH.IO
  renderStarterHomestead() {
    const bgImg = this.images['MockUps/Starter_Village.png'];
    if (bgImg) {
      this.ctx.drawImage(bgImg, 0, 0, 800, 800);
    }

    const now = Date.now();
    const fTick = Math.floor(now / 140);
    const waveTick = Math.floor(now / 280) % 3;

    // 1. HIỆU ỨNG KHÓI HOẠT HÌNH BỐC LÊN TỪ ỐNG KHÓI NHÀ TÂN THỦ
    const smokeImg = this.images['Environment/Props/Animated/Smoke-Sheet.png'];
    if (smokeImg) {
      drawBonfire(this.ctx, smokeImg, fTick, 530, 30, 'tall');
    }

    // 2. HIỆU ỨNG NƯỚC ĐỘNG GỢN SÓNG LĂN TĂN DỌC BẾN CẦU GỖ TRÊN SÔNG
    const waterImg = this.images['Environment/Tilesets/Water_tiles.png'];
    if (waterImg) {
      const waveY = [510, 570, 630, 690, 740];
      for (const wy of waveY) {
        const wx = 80 + ((wy % 3) * 20);
        this.ctx.drawImage(waterImg, 32 + (waveTick * 16), 112, 32, 16, wx, wy, 32, 16);
      }
    }

    // 3. QUẦNG SÁNG VÀNG ẤM ÁP TỎA RA TỪ CỘT ĐÈN LỒNG BẾN SÔNG
    const radGrad = this.ctx.createRadialGradient(366, 645, 2, 366, 645, 45);
    radGrad.addColorStop(0, 'rgba(250, 204, 21, 0.55)');
    radGrad.addColorStop(1, 'rgba(250, 204, 21, 0)');
    this.ctx.fillStyle = radGrad;
    this.ctx.beginPath();
    this.ctx.arc(366, 645, 45, 0, Math.PI * 2);
    this.ctx.fill();

    // 4. CỔNG VÒM RỪNG NGUYÊN SINH DẪN SANG MAP RỪNG (FOREST GATE)
    // Tọa độ x: 755, y: 350 - cuối con đường mòn phía đông
    const wallVar = this.images['Environment/Tilesets/Wall_Variations.png'];
    const dungProps = this.images['Environment/Props/Static/Dungeon_Props.png'];
    const vegImg = this.images['Environment/Props/Static/Vegetation.png'];

    if (wallVar) {
      // Hai trụ cổng đá hoa cương vòm cây
      this.ctx.drawImage(wallVar, 0, 0, 32, 64, 740, 290, 24, 48);
      this.ctx.drawImage(wallVar, 32, 0, 32, 64, 775, 290, 24, 48);
    }
    if (vegImg) {
      // Dây leo & hoa rừng phủ trên cổng vòm
      this.ctx.drawImage(vegImg, 0, 0, 64, 32, 735, 275, 65, 24);
    }
    const bonTorch = this.images['Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png'];
    if (bonTorch) {
      drawBonfire(this.ctx, bonTorch, fTick, 740, 310, 'std');
      drawBonfire(this.ctx, bonTorch, fTick, 775, 310, 'std');
    }

    // 4B. BIỂN HIỆU & CỘT MỐC LỐI ĐI QUÁN RƯỢU TAVERN (TỌA ĐỘ x: 290, y: 55)
    const furn = this.images['Environment/Props/Static/Furniture.png'];
    const bPropsImg = this.images['Environment/Structures/Buildings/Props.png'];
    if (furn) {
      // Thùng rượu sồi đánh dấu lối đi
      this.ctx.drawImage(furn, 0, 480, 48, 48, 260, 30, 28, 28);
    }
    if (bPropsImg) {
      // Đèn lồng treo cột chỉ dẫn
      this.ctx.drawImage(bPropsImg, 64, 64, 32, 32, 310, 30, 20, 20);
    }
    // Quầng sáng đèn lồng chỉ dẫn
    const tavGrad = this.ctx.createRadialGradient(290, 45, 2, 290, 45, 35);
    tavGrad.addColorStop(0, 'rgba(250, 204, 21, 0.45)');
    tavGrad.addColorStop(1, 'rgba(250, 204, 21, 0)');
    this.ctx.fillStyle = tavGrad;
    this.ctx.beginPath();
    this.ctx.arc(290, 45, 35, 0, Math.PI * 2);
    this.ctx.fill();

    // 5. CHỈ DẪN LỐI ĐI VÀ ĐỊA DANH TRỰC QUAN TRÊN MAP NHÀ TÂN THỦ
    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#fde047';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("🍺 QUÁN RƯỢU TAVERN [F] ⬆", 290, 75);
    this.ctx.fillText("🌲 CỔNG RỪNG NGUYÊN SINH [F] ➔", 700, 335);

    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText("🏡 CỬA NHÀ TÂN THỦ [F]", 608, 195);
    this.ctx.fillText("🔨 BÀN THỢ WORKBENCH [F]", 490, 235);
    this.ctx.fillText("🎣 BẾN CÂU CÁ SÔNG [F / I]", 310, 700);

    this.ctx.fillStyle = '#4ade80';
    this.ctx.fillText("🥕 VƯỜN RAU TÂN THỦ [F]", 620, 430);
    this.ctx.textAlign = 'start';
  },

  // --- RENDER MAP 2B: ĐẠI RỪNG NGUYÊN SINH (COURTYARD - 1280x640) ---
  renderCourtyard() {
    const floorTile = this.images['Environment/Tilesets/Floors_Tiles.png'];
    if (floorTile) {
      for (let x = 0; x < 1280; x += 64) {
        for (let y = 0; y < 640; y += 64) {
          this.ctx.drawImage(floorTile, 0, 0, 32, 32, x, y, 64, 64);
        }
      }
    }

    // CỔNG TRỞ VỀ THUNG LŨNG NHÀ TÂN THỦ (TẠI x=80, y=520)
    const wallVar = this.images['Environment/Tilesets/Wall_Variations.png'];
    if (wallVar) {
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 50, 460, 48, 72);
    }
    const bonTorch = this.images['Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png'];
    const now = Date.now();
    const fTick = Math.floor(now / 140);
    if (bonTorch) {
      drawBonfire(this.ctx, bonTorch, fTick, 55, 475, 'std');
    }

    // Xưởng cưa Sawmill
    const sawBase = this.images['Environment/Structures/Stations/Sawmill/Base.png'];
    if (sawBase) this.ctx.drawImage(sawBase, 580, 240);
    const sawLvl2 = this.images['Environment/Structures/Stations/Sawmill/Level_2-Sheet.png'];
    if (sawLvl2) drawSawmill(this.ctx, sawLvl2, 0, 620, 235, 2);

    // Đe rèn Anvil
    const anvilStatic = this.images['Environment/Structures/Stations/Anvil/Anvil.png'];
    if (anvilStatic) drawAnvil(this.ctx, anvilStatic, fTick, 370, 475, 0);

    // Lửa trại Bonfire
    const bon1 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_01-Sheet.png'];
    if (bon1) drawBonfire(this.ctx, bon1, fTick, 440, 450, 'std');

    // Thảm thực vật & Cây rừng bạt ngàn
    this.renderAllOutdoorTrees();

    // Bảng chỉ dẫn lối đi trên Map Rừng
    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#fde047';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("🏡 ⬅ CỔNG TRỞ VỀ NHÀ TÂN THỦ [F]", 130, 450);
    this.ctx.fillText("🍺 QUÁN RƯỢU TAVERN [F] ⬆", 160, 140);
    this.ctx.fillText("👑 CỔNG THÀNH VƯƠNG QUỐC [F] ➔", 1120, 140);
    this.ctx.textAlign = 'start';
  },

  renderStarterHouse() {
    const interiorImg = this.images['Environment/Structures/Buildings/Starter_House_Interior.png'];
    if (interiorImg) {
      this.ctx.drawImage(interiorImg, 0, 0, 480, 360);
    }

    // Tường ngăn cách & kệ đạo cụ nội thất
    const intWalls = this.images['Environment/Structures/Buildings/Interior/Interior_Walls_01.png'];
    if (intWalls) {
      this.ctx.drawImage(intWalls, 0, 0, 128, 96, 60, 80, 80, 60);
    }
    const intProps = this.images['Environment/Structures/Buildings/Interior/Interior_Props_01.png'];
    if (intProps) {
      this.ctx.drawImage(intProps, 0, 0, 64, 64, 85, 145, 48, 48);
      this.ctx.drawImage(intProps, 64, 0, 64, 64, 340, 145, 48, 48);
    }

    // Bàn chế tác Workbench & Bàn giả kim thuật Alchemy 01
    const workbenchImg = this.images['Environment/Structures/Stations/Workbench/Workbench.png'];
    if (workbenchImg) {
      this.ctx.drawImage(workbenchImg, 0, 0, 96, 96, 170, 130, 48, 48);
    }
    const now = Date.now();
    const fTick = Math.floor(now / 140);
    const alchemy1 = this.images['Environment/Structures/Stations/Alchemy/Alchemy_Table_01-Sheet.png'];
    if (alchemy1) {
      drawAlchemy(this.ctx, alchemy1, fTick, 290, 120, 1);
    }

    // Đồ nội thất giường ngủ & thảm len
    const furn = this.images['Environment/Props/Static/Furniture.png'];
    if (furn) {
      this.ctx.drawImage(furn, 0, 96, 96, 96, 65, 240, 56, 56);
      this.ctx.drawImage(furn, 96, 96, 96, 96, 350, 240, 56, 56);
    }

    this.ctx.save();
    const grad = this.ctx.createRadialGradient(240, 180, 40, 240, 180, 260);
    grad.addColorStop(0, 'rgba(255, 200, 100, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
    this.ctx.fillStyle = grad;
    this.ctx.fillRect(0, 0, 480, 360);
    this.ctx.restore();

    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#facc15';
    this.ctx.fillText("🚪 CỬA RA SÂN LÀNG [F] ⬇", 185, 350);
  },

  // --- RENDER MAP 4: TẦNG HẦM NGỤC 4 PHÒNG (DUNGEON - 1280x640) ---
  renderDungeon() {
    const dungTiles = this.images['Environment/Tilesets/Dungeon_Tiles.png'];
    const dungProps = this.images['Environment/Props/Static/Dungeon_Props.png'];
    const rocks = this.images['Environment/Props/Static/Rocks.png'];
    const esoteric = this.images['Environment/Props/Static/Esoteric.png'];
    const resStatic = this.images['Environment/Props/Static/Resources.png'];
    const resIcon = this.images['Icons/Resources.png'];
    const wallVar = this.images['Environment/Tilesets/Wall_Variations.png'];

    const now = Date.now();
    const fTick = Math.floor(now / 140);

    // 1. SÀN ĐÁ HẦM NGỤC CHUẨN ASSET (Dungeon_Tiles.png - Smooth 32x32 Stone Slabs)
    if (dungTiles) {
      for (let x = 0; x < 1280; x += 32) {
        for (let y = 0; y < 640; y += 32) {
          // col 5, row 1 in 16px grid = (80, 16, 32, 32)
          this.ctx.drawImage(dungTiles, 80, 16, 32, 32, x, y, 32, 32);
        }
      }

      // HÀO QUANG & CHI TIẾT SÀN TỪNG TẦNG (CHUẨN ASSET DUNGEON_TILES)
      // Tầng 1: Hào quang lam ma thuật lồng giam (col 3, row 18: 48x80)
      this.ctx.drawImage(dungTiles, 48, 288, 48, 80, 170, 410, 110, 140);

      // Tầng 2: Hào quang xanh lục giả kim (col 6, row 18: 48x80)
      this.ctx.drawImage(dungTiles, 96, 288, 48, 80, 465, 230, 110, 140);
      // Nắp cống ngầm (Sewer Grates: col 7, row 3: 32x16)
      this.ctx.drawImage(dungTiles, 112, 48, 32, 16, 370, 450, 48, 24);
      this.ctx.drawImage(dungTiles, 112, 48, 32, 16, 560, 450, 48, 24);

      // Tầng 3: Vết máu chiến trường & bẫy chông sắt đấu trường
      // Vết máu (Blood splatters: col 7, row 11: 32x32 và col 9, row 11)
      this.ctx.drawImage(dungTiles, 112, 176, 32, 32, 730, 320, 64, 64);
      this.ctx.drawImage(dungTiles, 144, 176, 32, 32, 830, 420, 64, 64);
      // Bẫy chông sắt (Spikes: col 4, row 7: 16x48)
      this.ctx.drawImage(dungTiles, 64, 112, 16, 48, 685, 480, 20, 64);
      this.ctx.drawImage(dungTiles, 64, 112, 16, 48, 915, 480, 20, 64);

      // Tầng 4: Hào quang đỏ rực tế đàn Boss (col 0, row 18: 48x80)
      this.ctx.drawImage(dungTiles, 0, 288, 48, 80, 970, 210, 140, 170);
    }

    // 2. TƯỜNG BIÊN HẦM NGỤC (CHUẨN GẠCH ĐÁ DUNGEON_TILES.PNG)
    if (dungTiles) {
      // Tường trên (y: 0..96) - chừa lối cầu thang leo lên ở x: 150..210
      for (let x = 0; x < 1280; x += 32) {
        if (x < 150 || x > 200) {
          // Đỉnh tường gờ đá (col 0, row 0: 32x32)
          this.ctx.drawImage(dungTiles, 0, 0, 32, 32, x, 0, 32, 32);
          // Thân tường gạch đá (col 0, row 4: 32x48)
          this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 32, 32, 48);
          this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 60, 32, 48);
        }
      }
      // Tường dưới (y: 590..640)
      for (let x = 0; x < 1280; x += 32) {
        this.ctx.drawImage(dungTiles, 0, 0, 32, 32, x, 592, 32, 32);
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 616, 32, 48);
      }
      // Tường trái & phải
      for (let y = 0; y < 640; y += 48) {
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, 0, y, 32, 48);
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, 1248, y, 32, 48);
      }
    }

    // Cầu thang gỗ leo lên sảnh quán rượu (x: 175, y: 50..110)
    this.ctx.fillStyle = '#451a03';
    this.ctx.fillRect(165, 50, 30, 55);
    this.ctx.strokeStyle = '#92400e';
    this.ctx.lineWidth = 2;
    for (let ly = 58; ly <= 100; ly += 8) {
      this.ctx.beginPath();
      this.ctx.moveTo(165, ly);
      this.ctx.lineTo(195, ly);
      this.ctx.stroke();
    }

    // 3. BA BỨC TƯỜNG NGĂN RANH GIỚI RÕ RÀNG GIỮA CÁC TẦNG (TẠI x=320, 640, 960)
    // Phân rõ ranh giới Tầng 1 -> Tầng 2 -> Tầng 3 -> Tầng 4
    const dividerConfigs = [
      { wx: 320, lampCol: 3, label: 'CỔNG VÀO TẦNG 2 ➔', color: '#38bdf8' },
      { wx: 640, lampCol: 6, label: 'CỔNG VÀO TẦNG 3 ➔', color: '#f97316' },
      { wx: 960, lampCol: 0, label: 'CỔNG TẦNG 4 (BOSS) ➔', color: '#ef4444' }
    ];

    for (const d of dividerConfigs) {
      const wx = d.wx;
      if (dungTiles) {
        // Tường đá ngăn trên (y: 40..220)
        for (let y = 40; y < 220; y += 48) {
          this.ctx.drawImage(dungTiles, 0, 64, 32, 48, wx - 16, y, 32, 48);
        }
        // Đỉnh gờ đá trụ vòm trên (y: 224)
        this.ctx.drawImage(dungTiles, 0, 0, 32, 32, wx - 16, 224, 32, 32);
        // Vòm đá cong lối qua cửa trên
        this.ctx.drawImage(dungTiles, 0, 160, 32, 24, wx - 16, 246, 32, 24);

        // NỀN ĐÁ THỀM CỔNG RANH GIỚI QUA TẦNG (Threshold Slabs: y: 256..368)
        for (let fy = 256; fy <= 352; fy += 32) {
          this.ctx.drawImage(dungTiles, 80, 0, 32, 32, wx - 16, fy, 32, 32);
        }

        // Đỉnh gờ đá trụ vòm dưới (y: 376)
        this.ctx.drawImage(dungTiles, 0, 0, 32, 32, wx - 16, 376, 32, 32);
        // Tường đá ngăn dưới (y: 400..595)
        for (let y = 400; y < 595; y += 48) {
          this.ctx.drawImage(dungTiles, 0, 64, 32, 48, wx - 16, y, 32, 48);
        }

        // CỜ HIỆU HOÀNG GIA TREO TRÊN TRỤ CỔNG (Royal Banner: col 5, row 6: 32x128)
        this.ctx.drawImage(dungTiles, 80, 96, 32, 128, wx - 32, 160, 20, 70);
        this.ctx.drawImage(dungTiles, 80, 96, 32, 128, wx + 12, 160, 20, 70);

        // ĐÈN TINH THỂ GẮN TRỤ CỔNG (Crystal Wall Lamps: Blue / Green / Red)
        this.ctx.drawImage(dungTiles, d.lampCol * 16, 240, 16, 48, wx - 8, 220, 16, 48);
        this.ctx.drawImage(dungTiles, d.lampCol * 16, 240, 16, 48, wx - 8, 380, 16, 48);
      }

      // Đuốc lửa gắn tường ở hai bên cửa vòm
      const bonTorch = this.images['Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png'];
      if (bonTorch) {
        drawBonfire(this.ctx, bonTorch, fTick, wx - 12, 145, 'std');
        drawBonfire(this.ctx, bonTorch, fTick, wx - 12, 435, 'std');
      }

      // Bảng chỉ dẫn lối qua cổng tầng
      this.ctx.font = 'bold 9px monospace';
      this.ctx.fillStyle = d.color;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(d.label, wx, 240);
      this.ctx.textAlign = 'start';
    }

    // 4. PHÒNG 1: KHUNG LỒNG GIAM PHÁP SƯ DỰNG BẰNG SONG SẮT CHUẨN ASSET (Dungeon_Tiles)
    if (dungTiles) {
      // Tường đá nóc lồng giam
      for (let cx = 192; cx < 288; cx += 32) {
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, cx, 415, 32, 48);
      }
      // Chấn song sắt hai bên (col 9, row 4: 16x96)
      this.ctx.drawImage(dungTiles, 144, 64, 16, 96, 192, 455, 12, 64);
      this.ctx.drawImage(dungTiles, 144, 64, 16, 96, 276, 455, 12, 64);
      // Cửa sắt lồng giam ở giữa (col 2, row 7: 32x48)
      this.ctx.drawImage(dungTiles, 32, 112, 32, 48, 230, 460, 32, 64);
      // Song sắt mặt trước
      this.ctx.drawImage(dungTiles, 144, 64, 16, 96, 208, 460, 12, 64);
      this.ctx.drawImage(dungTiles, 144, 64, 16, 96, 260, 460, 12, 64);

      // Khóa xích phong ấn ma thuật ở giữa lồng
      this.ctx.fillStyle = '#9333ea';
      this.ctx.beginPath();
      this.ctx.arc(246, 485, 7, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.strokeStyle = '#facc15';
      this.ctx.lineWidth = 1.5;
      this.ctx.stroke();
    }
    // Trụ đá góc Tầng 1 (270, 145)
    if (dungProps) {
      this.ctx.drawImage(dungProps, 0, 0, 96, 96, 270, 145, 45, 50);
    }

    // 5. PHÒNG 2: XƯỞNG LÒ NUNG ĐÁ CỔ ĐẠI, BÀN GIẢ KIM & KHOÁNG SẢN
    const stone1 = this.images['Environment/Structures/Stations/Furnace/Stone_01-Sheet.png'];
    if (stone1) drawFurnace(this.ctx, stone1, fTick, 360, 155, 1);
    const stone2 = this.images['Environment/Structures/Stations/Furnace/Stone_02-Sheet.png'];
    if (stone2) drawFurnace(this.ctx, stone2, fTick, 405, 145, 2);
    const stone3 = this.images['Environment/Structures/Stations/Furnace/Stone_03-Sheet.png'];
    if (stone3) drawFurnace(this.ctx, stone3, fTick, 465, 145, 3);

    // Bàn giả kim thuật hoàng gia cấp 3 (Alchemy_Table_03 - 80x80)
    const alch3 = this.images['Environment/Structures/Stations/Alchemy/Alchemy_Table_03-Sheet.png'];
    if (alch3) drawAlchemy(this.ctx, alch3, fTick, 530, 135, 3);

    // Bệ đá ma thuật trung tâm
    if (esoteric) {
      this.ctx.drawImage(esoteric, 0, 0, 128, 128, 475, 225, 96, 96);
      if (rocks) {
        this.ctx.drawImage(rocks, 0, 0, 32, 32, 507, 253, 32, 32);
      }
    }

    // Bãi quặng tinh thể và đá quý
    if (rocks) {
      this.ctx.drawImage(rocks, 0, 32, 32, 32, 375, 412, 34, 34);
      this.ctx.drawImage(rocks, 32, 32, 32, 32, 425, 412, 34, 34);
    }
    if (resStatic) {
      this.ctx.drawImage(resStatic, 0, 0, 64, 64, 380, 420, 24, 24);
    }
    if (resIcon) {
      this.ctx.drawImage(resIcon, 0, 0, 64, 64, 430, 420, 24, 24);
    }

    // 6. PHÒNG 3: ĐẤU TRƯỜNG ORC - DÃY ĐUỐC LỬA & TRỤ ĐÁ CHIẾN ĐẤU
    const bon6 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png'];
    if (bon6) drawBonfire(this.ctx, bon6, fTick, 740, 165, 'std');
    const bon7 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_07-Sheet.png'];
    if (bon7) drawBonfire(this.ctx, bon7, fTick, 780, 165, 'std');
    const bon8 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_08-Sheet.png'];
    if (bon8) drawBonfire(this.ctx, bon8, fTick, 820, 165, 'std');
    const smokeImg = this.images['Environment/Structures/Stations/Bonfire/Smoke-Sheet.png'];
    if (smokeImg) drawBonfire(this.ctx, smokeImg, fTick, 820, 125, 'tall');

    if (dungProps) {
      this.ctx.drawImage(dungProps, 0, 0, 96, 96, 675, 145, 42, 50);
    }
    if (rocks) {
      this.ctx.drawImage(rocks, 0, 0, 32, 32, 722, 437, 36, 36);
      this.ctx.drawImage(rocks, 32, 0, 32, 32, 842, 437, 36, 36);
    }
    if (wallVar) {
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 720, 405, 38, 55);
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 840, 405, 38, 55);
    }

    // 7. PHÒNG 4: PHÒNG BOSS ORC PHÙ THỦY TỘC & RƯƠNG KHO BÁU
    if (esoteric) {
      this.ctx.drawImage(esoteric, 128, 0, 128, 128, 975, 225, 96, 96);
      if (rocks) {
        this.ctx.drawImage(rocks, 0, 0, 32, 32, 1007, 253, 36, 36);
      }
    }
    if (wallVar) {
      this.ctx.drawImage(wallVar, 64, 0, 64, 96, 1132, 175, 34, 46);
      this.ctx.drawImage(wallVar, 64, 0, 64, 96, 1132, 380, 34, 46);
    }
    if (dungProps) {
      this.ctx.drawImage(dungProps, 0, 0, 96, 96, 880, 405, 45, 45);
    }
    const chestImg = this.images['Environment/Props/Static/Furniture.png'] || dungProps;
    if (chestImg) {
      this.ctx.drawImage(chestImg, 0, 0, 48, 48, 1088, 468, 32, 32);
    }

    // 8. KHÔNG GIAN BÓNG TỐI HẦM NGỤC (DARK BLUE ATMOSPHERE)
    this.ctx.fillStyle = 'rgba(12, 18, 35, 0.35)';
    this.ctx.fillRect(0, 0, 1280, 640);

    // 9. BIỂU NGỮ & BẢNG CHỈ DẪN RANH GIỚI CÁC TẦNG TRONG HẦM NGỤC
    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#facc15';
    this.ctx.fillText("⬆ CẦU THANG LÊN QUÁN RƯỢU [F]", 110, 85);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText("🔒 TẦNG 1: NGỤC GIAM (Lv.1-2 | -10 HP)", 65, 115);
    this.ctx.fillStyle = '#4ade80';
    this.ctx.fillText("🔥 TẦNG 2: XƯỞNG NUNG (Lv.3-4 | -15 HP)", 380, 115);
    this.ctx.fillStyle = '#fb923c';
    this.ctx.fillText("💀 TẦNG 3: ĐẤU TRƯỜNG (Lv.5-6 | -20 HP)", 700, 115);
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillText("👑 TẦNG 4: BOSS SHAMAN (Lv.7-8 | -25~35 HP)", 970, 115);
    this.ctx.fillStyle = '#eab308';
    this.ctx.fillText("🎁 RƯƠNG BÁU [F]", 1070, 520);
  },

  // --- RENDER MAP 5: CỔNG THÀNH VƯƠNG QUỐC (CASTLE_GATE - 640x640) ---
  renderCastleGate() {
    const gateImg = this.images['MockUps/Castle_Entrance.png'];
    if (gateImg) {
      this.ctx.drawImage(gateImg, 0, 0, 640, 640);
    }

    // Biến thể tường thành đá hoa cương (Wall_Variations)
    const wallVar = this.images['Environment/Tilesets/Wall_Variations.png'];
    if (wallVar) {
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 60, 240, 48, 72);
      this.ctx.drawImage(wallVar, 64, 0, 64, 96, 530, 240, 48, 72);
    }

    // Hào nước thành lũy (Water_tiles)
    const waterImg = this.images['Environment/Tilesets/Water_tiles.png'];
    if (waterImg) {
      for (let x = 80; x < 560; x += 48) {
        if (x < 240 || x > 380) {
          this.ctx.drawImage(waterImg, 0, 0, 32, 32, x, 340, 48, 24);
        }
      }
    }

    const now = Date.now();
    const fTick = Math.floor(now / 140);

    // Đuốc lửa hoàng gia & Lửa trại dài (Fire 01, Fire 02, Bonfire 09, Bonfire 10)
    const fire1 = this.images['Environment/Structures/Stations/Bonfire/Fire_01-Sheet.png'];
    if (fire1) drawBonfire(this.ctx, fire1, fTick, 145, 305, 'tall');
    const fire2 = this.images['Environment/Structures/Stations/Bonfire/Fire_02-Sheet.png'];
    if (fire2) drawBonfire(this.ctx, fire2, fTick, 465, 305, 'tall');

    const bon9 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_09-Sheet.png'];
    if (bon9) drawBonfire(this.ctx, bon9, fTick, 180, 480, 'long');
    const bon10 = this.images['Environment/Structures/Stations/Bonfire/Bonfire_10-Sheet.png'];
    if (bon10) drawBonfire(this.ctx, bon10, fTick, 420, 480, 'mid');

    this.ctx.font = 'bold 9px monospace';
    this.ctx.fillStyle = '#facc15';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("⬇ TRỞ VỀ SÂN LÀNG [F]", 320, 620);
    this.ctx.fillText("👑 CỔNG THÀNH VƯƠNG QUỐC HOÀNG GIA", 320, 190);
    this.ctx.textAlign = 'start';
  },
  // --- RENDER MAP 6: CUNG ĐIỆN HOÀNG GIA & NGAI VÀNG (PALACE - 960x640) ---
  renderPalace() {
    const dungTiles = this.images['Environment/Tilesets/Dungeon_Tiles.png'];
    const wallVar = this.images['Environment/Tilesets/Wall_Variations.png'];
    const dungProps = this.images['Environment/Props/Static/Dungeon_Props.png'];
    const furniture = this.images['Environment/Props/Static/Furniture.png'] || dungProps;
    const esoteric = this.images['Environment/Props/Static/Esoteric.png'];
    const waterImg = this.images['Environment/Tilesets/Water_tiles.png'];

    const now = Date.now();
    const fTick = Math.floor(now / 140);

    // 1. SÀN ĐÁ HOA CƯƠNG HOÀNG GIA (Marble floor slabs)
    if (dungTiles) {
      for (let x = 0; x < 960; x += 32) {
        for (let y = 0; y < 640; y += 32) {
          this.ctx.drawImage(dungTiles, 80, 16, 32, 32, x, y, 32, 32);
        }
      }
    }

    // 2. THẢM NHUNG ĐỎ THẪM HOÀNG GIA (Royal Red Velvet Carpet)
    // Trải dài từ cổng vào (y: 620) thẳng lên Ngai Vàng Quốc Vương (y: 150)
    this.ctx.fillStyle = '#881337'; // Ruby velvet
    this.ctx.fillRect(410, 140, 140, 480);

    // Viền vàng kim hai bên thảm
    this.ctx.fillStyle = '#facc15';
    this.ctx.fillRect(410, 140, 4, 480);
    this.ctx.fillRect(546, 140, 4, 480);

    // Hoa văn kim cương hoàng gia dọc thảm đỏ
    this.ctx.fillStyle = 'rgba(250, 204, 21, 0.4)';
    for (let cy = 180; cy <= 580; cy += 45) {
      this.ctx.beginPath();
      this.ctx.moveTo(480, cy - 8);
      this.ctx.lineTo(490, cy);
      this.ctx.lineTo(480, cy + 8);
      this.ctx.lineTo(470, cy);
      this.ctx.closePath();
      this.ctx.fill();
    }

    // 3. ĐÀI TAM CẤP & NGAI VÀNG QUỐC VƯƠNG (Throne Dais)
    this.ctx.fillStyle = '#475569';
    this.ctx.fillRect(380, 95, 200, 65);
    this.ctx.strokeStyle = '#facc15';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(380, 95, 200, 65);

    // Bậc thềm nhung đỏ ngai vàng
    this.ctx.fillStyle = '#991b1b';
    this.ctx.fillRect(400, 110, 160, 50);

    // Hào quang vương quyền rực rỡ tỏa ra từ ngai vàng
    if (esoteric) {
      this.ctx.drawImage(esoteric, 0, 0, 128, 128, 432, 85, 96, 96);
    }

    // NGAI VÀNG NẠM VÀNG (Royal Golden Throne)
    if (furniture) {
      this.ctx.drawImage(furniture, 0, 0, 64, 96, 452, 90, 56, 75);
    }

    // 4. BỨC TƯỜNG BIÊN CUNG ĐIỆN (Royal Palace Walls)
    if (dungTiles) {
      // Tường trên
      for (let x = 0; x < 960; x += 32) {
        this.ctx.drawImage(dungTiles, 0, 0, 32, 32, x, 0, 32, 32);
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 32, 32, 48);
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 60, 32, 48);
      }
      // Tường dưới (chừa cổng chính ở x: 420..540)
      for (let x = 0; x < 960; x += 32) {
        if (x < 420 || x > 540) {
          this.ctx.drawImage(dungTiles, 0, 0, 32, 32, x, 592, 32, 32);
          this.ctx.drawImage(dungTiles, 0, 64, 32, 48, x, 616, 32, 48);
        }
      }
      // Tường trái & phải
      for (let y = 0; y < 640; y += 48) {
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, 0, y, 32, 48);
        this.ctx.drawImage(dungTiles, 0, 64, 32, 48, 928, y, 32, 48);
      }

      // CỜ HIỆU HOÀNG GIA ĐẠI TRIỀU (Royal Banners)
      this.ctx.drawImage(dungTiles, 80, 96, 32, 128, 345, 90, 26, 90);
      this.ctx.drawImage(dungTiles, 80, 96, 32, 128, 585, 90, 26, 90);
      this.ctx.drawImage(dungTiles, 80, 96, 32, 128, 80, 110, 26, 90);
      this.ctx.drawImage(dungTiles, 80, 96, 32, 128, 850, 110, 26, 90);
    }

    // 5. CỘT TRỤ ĐÁ HOA CƯƠNG HOÀNG CUNG (Marble Columns)
    if (wallVar) {
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 340, 215, 42, 60);
      this.ctx.drawImage(wallVar, 0, 0, 64, 96, 340, 385, 42, 60);
      this.ctx.drawImage(wallVar, 64, 0, 64, 96, 578, 215, 42, 60);
      this.ctx.drawImage(wallVar, 64, 0, 64, 96, 578, 385, 42, 60);
    }

    // 6. ĐUỐC LỬA VƯƠNG QUYỀN (Animated Royal Braziers)
    const fire1 = this.images['Environment/Structures/Stations/Bonfire/Fire_01-Sheet.png'];
    if (fire1) {
      drawBonfire(this.ctx, fire1, fTick, 375, 155, 'tall');
      drawBonfire(this.ctx, fire1, fTick, 555, 155, 'tall');
      drawBonfire(this.ctx, fire1, fTick, 385, 545, 'tall');
      drawBonfire(this.ctx, fire1, fTick, 545, 545, 'tall');
    }

    // 7. ĐÀI PHUN NƯỚC THÁNH (Holy Fountain bên trái)
    if (waterImg) {
      this.ctx.drawImage(waterImg, 0, 0, 32, 32, 185, 190, 48, 36);
    }
    if (dungProps) {
      this.ctx.drawImage(dungProps, 0, 0, 96, 96, 175, 170, 68, 68);
    }

    // 8. RƯƠNG KHO BÁU TRIỀU ĐÌNH (Royal Treasury Chest bên phải)
    const chestImg = furniture || dungProps;
    if (chestImg) {
      this.ctx.drawImage(chestImg, 0, 0, 48, 48, 750, 190, 40, 40);
    }

    // 9. ÁNH SÁNG HOÀNG GIA ẤM ÁP (Royal Amber Sunlight Rays)
    this.ctx.save();
    const sunGrad = this.ctx.createRadialGradient(480, 150, 50, 480, 250, 450);
    sunGrad.addColorStop(0, 'rgba(254, 240, 138, 0.18)');
    sunGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.08)');
    sunGrad.addColorStop(1, 'rgba(0, 0, 0, 0.25)');
    this.ctx.fillStyle = sunGrad;
    this.ctx.fillRect(0, 0, 960, 640);
    this.ctx.restore();

    // 10. CHỈ BÁO & TIÊU ĐỀ HOÀNG CUNG
    this.ctx.font = 'bold 9.5px monospace';
    this.ctx.fillStyle = '#facc15';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("👑 CUNG ĐIỆN HOÀNG GIA - NGAI VÀNG QUỐC VƯƠNG AURELIUS", 480, 85);
    this.ctx.fillText("⬇ CỬA LỚN RA CỔNG THÀNH [F]", 480, 625);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText("✨ ĐÀI NƯỚC THÁNH [F]", 210, 250);
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText("🎁 RƯƠNG BÁU TRIỀU ĐÌNH [F]", 770, 245);
    this.ctx.textAlign = 'start';
  },


  // --- VẼ TOÀN BỘ 15 LOẠI CÂY (MODEL 01, 02, 03 MỌI KÍCH CỠ) ---
  renderAllOutdoorTrees() {
    const trees = [
      { key: 'Environment/Props/Static/Trees/Model_01/Size_02.png', x: 80, y: 340 },
      { key: 'Environment/Props/Static/Trees/Model_01/Size_03.png', x: 260, y: 320 },
      { key: 'Environment/Props/Static/Trees/Model_01/Size_04.png', x: 220, y: 120 },
      { key: 'Environment/Props/Static/Trees/Model_01/Size_05.png', x: 380, y: 100 },

      { key: 'Environment/Props/Static/Trees/Model_02/Size_02.png', x: 60, y: 130 },
      { key: 'Environment/Props/Static/Trees/Model_02/Size_03.png', x: 540, y: 90 },
      { key: 'Environment/Props/Static/Trees/Model_02/Size_04.png', x: 990, y: 110 },
      { key: 'Environment/Props/Static/Trees/Model_02/Size_05.png', x: 60, y: 220 },

      { key: 'Environment/Props/Static/Trees/Model_03/Size_02.png', x: 300, y: 150 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_03.png', x: 470, y: 95 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_03-export.png', x: 620, y: 110 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_04.png', x: 680, y: 95 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_04-export.png', x: 1040, y: 140 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_04-export-export.png', x: 1140, y: 320 },
      { key: 'Environment/Props/Static/Trees/Model_03/Size_05.png', x: 1080, y: 220 }
    ];

    for (const t of trees) {
      const img = this.images[t.key];
      if (img) this.ctx.drawImage(img, t.x, t.y);
    }
  },

  renderDrop(drop) {
    this.ctx.save();
    this.ctx.translate(Math.floor(drop.x), Math.floor(drop.y));
    const bounce = Math.sin(Date.now() / 150) * 3;

    if (drop.type === 'gold') {
      this.ctx.font = '12px sans-serif';
      this.ctx.fillText('🪙', -6, bounce);
    } else {
      this.ctx.font = '12px sans-serif';
      this.ctx.fillText('💎', -6, bounce);
    }
    this.ctx.restore();
  },

  renderInteractPrompt() {
    if (!this.player || this.player.isDead) return;
    if (this.fishing && this.fishing.active) return;
    const curMapData = this.maps[this.currentMap] || { npcs: [], interactables: [] };

    let nearest = null;
    let minDist = 65;

    for (const inter of curMapData.interactables) {
      const d = Math.hypot(this.player.x - inter.x, this.player.y - inter.y);
      if (d < inter.radius && d < minDist) {
        minDist = d;
        nearest = { type: 'interactable', obj: inter };
      }
    }

    for (const npc of curMapData.npcs) {
      const d = Math.hypot(this.player.x - npc.x, this.player.y - npc.y);
      if (d < 50 && d < minDist) {
        minDist = d;
        nearest = { type: 'npc', obj: npc };
      }
    }

    if (nearest) {
      this.ctx.save();
      const tx = Math.floor(this.player.x);
      const ty = Math.floor(this.player.y - 45);

      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      this.ctx.strokeStyle = '#38bdf8';
      this.ctx.lineWidth = 1.5;

      const promptText = nearest.type === 'npc' ? `[F] Nói chuyện với ${nearest.obj.name}` : `[F] ${nearest.obj.prompt}`;
      this.ctx.font = 'bold 8.5px monospace';
      const textW = this.ctx.measureText(promptText).width;

      this.ctx.fillRect(tx - textW / 2 - 6, ty - 10, textW + 12, 16);
      this.ctx.strokeRect(tx - textW / 2 - 6, ty - 10, textW + 12, 16);

      this.ctx.fillStyle = '#facc15';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(promptText, tx, ty + 2);
      this.ctx.restore();
    }
  },

  startGameLoop() {
    let lastTime = performance.now();
    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      this.update(dt);
      this.render();

      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  },

  update(dt) {
    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - dt * 12);
    }

    const curMapData = this.maps[this.currentMap] || { npcs: [], mobs: [], drops: [] };

    if (this.player) {
      this.player.update(dt, this.keys, (x, y, r, req) => this.isSolidEntity(x, y, r, req || this.player));
    }

    // Cập nhật hoạt ảnh và logic câu cá
    this.updateFishing(dt);

    for (let i = curMapData.mobs.length - 1; i >= 0; i--) {
      const mob = curMapData.mobs[i];
      mob.update(dt, this.player, (x, y, r, req) => this.isSolidEntity(x, y, r, req || mob));
      if (mob.deathComplete) {
        curMapData.mobs.splice(i, 1);
      }
    }

    // Tách rời vật lý giữa Người Chơi và Quái (Physical Separation Push)
    if (this.player && !this.player.isDead && curMapData.mobs) {
      for (let i = 0; i < curMapData.mobs.length; i++) {
        const mob = curMapData.mobs[i];
        if (mob.isDead) continue;
        const mobR = mob.isBoss ? 20 : 14;
        const minDist = 13 + mobR;
        const dx = this.player.x - mob.x;
        const dy = this.player.y - mob.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < minDist) {
          const overlap = minDist - dist;
          const nx = dx / dist;
          const ny = dy / dist;
          const pushDist = overlap * 0.5;

          const pnx = this.player.x + nx * pushDist;
          const pny = this.player.y + ny * pushDist;
          if (!this.isSolidEntity(pnx, this.player.y, 12, this.player)) this.player.x = pnx;
          if (!this.isSolidEntity(this.player.x, pny, 12, this.player)) this.player.y = pny;

          const mnx = mob.x - nx * pushDist;
          const mny = mob.y - ny * pushDist;
          if (!this.isSolidEntity(mnx, mob.y, mobR, mob)) mob.x = mnx;
          if (!this.isSolidEntity(mob.x, mny, mobR, mob)) mob.y = mny;
        }
      }
    }

    for (const npc of curMapData.npcs) {
      npc.update(dt, (x, y, r) => this.isSolidEntity(x, y, r));
    }

    if (this.player && !this.player.isDead) {
      for (let i = curMapData.drops.length - 1; i >= 0; i--) {
        const drop = curMapData.drops[i];
        const dist = Math.hypot(this.player.x - drop.x, this.player.y - drop.y);
        if (dist < 28) {
          if (drop.type === 'gold') {
            this.player.gold += drop.amount;
            this.addFloatingText(`+${drop.amount} Vàng`, this.player.x, this.player.y - 20, '#facc15');
          } else {
            this.player.hp = Math.min(this.player.maxHp, this.player.hp + 25);
            this.addFloatingText(`+25 HP`, this.player.x, this.player.y - 20, '#22c55e');
          }
          this.spawnSparks(drop.x, drop.y, '#facc15', 5);
          curMapData.drops.splice(i, 1);
        }
      }
    }

    // CẬP NHẬT ĐẠN MA PHÁP BẮN XA (MAGIC PROJECTILES)
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      const moveDist = p.speed * dt;
      p.x += p.dx * moveDist;
      p.y += p.dy * moveDist;
      p.distanceTraveled += moveDist;

      // Hạt tàn ảnh ma pháp
      if (Math.random() < 0.6) {
        this.particles.push({
          x: p.x + (Math.random() - 0.5) * 6,
          y: p.y + (Math.random() - 0.5) * 6,
          vx: -p.dx * 30 + (Math.random() - 0.5) * 20,
          vy: -p.dy * 30 + (Math.random() - 0.5) * 20,
          color: p.color,
          alpha: 0.8,
          size: 2.5,
          life: 0.25
        });
      }

      // Va chạm tường / block vật cản
      if (this.isSolidEntity(p.x, p.y, p.radius)) {
        this.spawnSparks(p.x, p.y, p.color, 10);
        this.projectiles.splice(i, 1);
        continue;
      }

      // Va chạm quái vật trong map
      let hitMob = false;
      if (curMapData && curMapData.mobs) {
        for (let m = 0; m < curMapData.mobs.length; m++) {
          const mob = curMapData.mobs[m];
          if (mob.isDead) continue;
          const mobR = mob.isBoss ? 20 : 14;
          const hitDist = p.radius + mobR;
          const dx = p.x - mob.x;
          const dy = p.y - mob.y;
          if (dx * dx + dy * dy < hitDist * hitDist) {
            const finalDmg = p.isCrit ? Math.round(p.damage * 1.5) : Math.round(p.damage);
            mob.takeDamage(finalDmg);
            this.spawnSparks(p.x, p.y, p.color, 14);
            if (p.isCrit) {
              this.addFloatingText(`CRIT! -${finalDmg}`, mob.x, mob.y - 24, '#f43f5e');
            }
            hitMob = true;
            break;
          }
        }
      }

      if (hitMob || p.distanceTraveled >= p.maxRange) {
        this.projectiles.splice(i, 1);
      }
    }

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.alpha -= dt * 1.5;
      if (p.alpha <= 0) this.particles.splice(i, 1);
    }

    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const ft = this.floatingTexts[i];
      ft.y -= 25 * dt;
      ft.alpha -= dt * 1.2;
      if (ft.alpha <= 0) this.floatingTexts.splice(i, 1);
    }

    if (this.player) {
      const mapCfg = MAP_CONFIGS[this.currentMap] || { width: 1280, height: 640 };
      const targetCamX = this.player.x - (this.width / this.scale) / 2;
      const targetCamY = this.player.y - (this.height / this.scale) / 2;

      const maxCamX = Math.max(0, mapCfg.width - (this.width / this.scale));
      const maxCamY = Math.max(0, mapCfg.height - (this.height / this.scale));

      this.camera.x += (Math.max(0, Math.min(maxCamX, targetCamX)) - this.camera.x) * 0.12;
      this.camera.y += (Math.max(0, Math.min(maxCamY, targetCamY)) - this.camera.y) * 0.12;
    }

    this.updateHUD();
  },

  updateHUD() {
    if (!this.player) return;

    const hpPct = Math.max(0, (this.player.hp / this.player.maxHp) * 100);
    const hpStr = `${Math.round(this.player.hp)} / ${this.player.maxHp}`;
    if (this.hpFill) this.hpFill.style.width = `${hpPct}%`;
    if (this.hpText) this.hpText.textContent = hpStr;
    if (this.bottomHpFill) this.bottomHpFill.style.width = `${hpPct}%`;
    if (this.bottomHpText) this.bottomHpText.textContent = hpStr;

    const spPct = Math.max(0, (this.player.sp / this.player.maxSp) * 100);
    const spStr = `${Math.round(this.player.sp)} / ${this.player.maxSp}`;
    if (this.spFill) this.spFill.style.width = `${spPct}%`;
    if (this.spText) this.spText.textContent = spStr;
    if (this.bottomSpFill) this.bottomSpFill.style.width = `${spPct}%`;
    if (this.bottomSpText) this.bottomSpText.textContent = spStr;

    if (this.goldText) this.goldText.textContent = this.player.gold;
    if (this.killsText) this.killsText.textContent = this.player.kills;
    if (this.levelText) this.levelText.textContent = `Lv.${this.player.level}`;
    if (this.bottomLevelText) this.bottomLevelText.textContent = `Lv.${this.player.level}`;

    // Thanh máu chính giữa đáy màn hình luôn hiển thị khi còn sống
    if (this.bottomHealthBar) {
      this.bottomHealthBar.style.display = this.player.isDead ? 'none' : 'flex';
    }

    if (this.classBadge) {
      const cls = CLASS_CONFIGS[this.player.profession] || CLASS_CONFIGS.novice;
      this.classBadge.textContent = cls.badge || `${cls.icon} ${cls.name} (P)`;
    }

    if (this.weaponBadge) {
      const wCfg = WEAPON_CONFIGS[this.player.currentWeapon] || WEAPON_CONFIGS.hands;
      this.weaponBadge.textContent = `${wCfg.name} (1-4/Q)`;
    }

    if (this.skinBadge) {
      const skinLabels = {
        classic: '🛡️ Classic (C)',
        champion: '👑 Champion (C)',
        knight: '⚔️ Hiệp Sĩ (C)',
        rogue: '🗡️ Sát Thủ (C)',
        wizard: '🔮 Pháp Sư (C)'
      };
      this.skinBadge.textContent = skinLabels[this.player.skin] || '🛡️ Classic (C)';
    }

    if (this.carryBadge) {
      this.carryBadge.style.display = this.player.isCarrying ? 'inline-block' : 'none';
    }

    if (this.gameOverScreen) {
      this.gameOverScreen.style.display = this.player.isDead ? 'flex' : 'none';
    }
  },

  checkPlayerAttackHit(px, py, dir, damage, range) {
    const curMapData = this.maps[this.currentMap] || { mobs: [] };

    let hitCount = 0;
    for (const mob of curMapData.mobs) {
      if (mob.isDead) continue;
      const dx = mob.x - px;
      const dy = mob.y - py;
      const dist = Math.hypot(dx, dy);

      if (dist <= range) {
        let inFront = false;
        if (dir === 'right' && dx >= -10) inFront = true;
        else if (dir === 'left' && dx <= 10) inFront = true;
        else if (dir === 'down' && dy >= -10) inFront = true;
        else if (dir === 'up' && dy <= 10) inFront = true;

        if (inFront) {
          mob.takeDamage(damage);
          hitCount++;
        }
      }
    }

    if (hitCount > 0) {
      this.screenShake = 4.5;
    }
  },

  dropLoot(x, y, goldAmt, isBoss) {
    const curMapData = this.maps[this.currentMap] || { drops: [] };
    curMapData.drops.push({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      type: 'gold',
      amount: goldAmt
    });

    if (isBoss || Math.random() < 0.4) {
      curMapData.drops.push({
        x: x + (Math.random() - 0.5) * 25,
        y: y + (Math.random() - 0.5) * 25,
        type: 'potion'
      });
    }
  },

  interact() {
    if (!this.player || this.player.isDead) return;

    if (this.fishing && this.fishing.active) {
      if (this.fishing.stage === 'biting') {
        this.reelInFish(true);
      } else if (this.fishing.stage === 'waiting') {
        this.showToast("🎣 Cá chưa cắn câu, hãy kiên nhẫn đợi gợn sóng nổi lên...");
      }
      return;
    }

    const curMapData = this.maps[this.currentMap] || { npcs: [], interactables: [] };

    for (const npc of curMapData.npcs) {
      const d = Math.hypot(this.player.x - npc.x, this.player.y - npc.y);
      if (d < 50) {
        this.openDialogue(npc.name, npc.dialogue);
        return;
      }
    }

    for (const inter of curMapData.interactables) {
      const d = Math.hypot(this.player.x - inter.x, this.player.y - inter.y);
      if (d < inter.radius) {
        if (typeof inter.action === 'function') {
          inter.action();
        }
        return;
      }
    }
  },

  cookMeal() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + 35);
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#22c55e', 10);
    this.addFloatingText("+35 HP (Bữa Ăn Nóng)", this.player.x, this.player.y - 25, '#22c55e');
    this.showToast("🍲 Bạn đã thưởng thức bữa súp nóng tại Trạm Bếp Hoàng Gia!");
  },

  grillMeat() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#f59e0b', 12);
    this.addFloatingText("100% HP & SP!", this.player.x, this.player.y - 25, '#f59e0b');
    this.showToast("🍖 Thịt nướng thơm lừng! Thể lực và sinh lực đã đầy tràn!");
  },

  drinkAle() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#eab308', 8);
    this.addFloatingText("+100% SP", this.player.x, this.player.y - 25, '#eab308');
    this.showToast("🍺 Một ly bia lên men tuyệt hảo giải tỏa mọi mệt mỏi!");
  },

  isNearWater(x, y) {
    if (this.currentMap !== 'starter_homestead') return false;
    // Gần Bến Câu Cá Trên Sông
    if (Math.hypot(x - 310, y - 720) <= 75) return true;
    // Trên bến cầu gỗ
    if (x >= 45 && x <= 360 && y >= 620 && y <= 770) return true;
    if (x >= 45 && x <= 150 && y >= 460 && y <= 770) return true;
    // Mép dọc dòng sông
    if (x <= 165) return true;
    if (x <= 375 && y >= 460) return true;
    return false;
  },

  startFishing() {
    if (!this.player || this.player.isDead || this.player.isRolling || this.player.isAttacking) return;

    if (!this.isNearWater(this.player.x, this.player.y)) {
      this.showToast("🌊 Hãy đến Bến Câu Cá ven sông [Thung Lũng Tân Thủ] để buông cần câu!");
      this.spawnSparks(this.player.x, this.player.y, '#38bdf8', 6);
      return;
    }

    if (this.fishing && this.fishing.active) {
      if (this.fishing.stage === 'biting') {
        this.reelInFish(true);
      } else if (this.fishing.stage === 'waiting') {
        this.showToast("🎣 Cá chưa cắn câu, hãy kiên nhẫn đợi gợn sóng nổi lên...");
      }
      return;
    }

    // Tự động xoay mặt về phía mặt nước nếu đang đứng trên bến
    if (this.player.y >= 710 && this.player.direction === 'up') {
      this.player.direction = 'down';
    } else if (this.player.x <= 160 && this.player.direction === 'right') {
      this.player.direction = 'left';
    }

    let bobberX = this.player.x;
    let bobberY = this.player.y;
    const castDist = 38;

    if (this.player.direction === 'left') {
      bobberX -= castDist + 6;
      bobberY -= 4;
    } else if (this.player.direction === 'right') {
      bobberX += castDist + 6;
      bobberY -= 4;
    } else if (this.player.direction === 'up') {
      bobberY -= castDist + 8;
    } else { // 'down'
      bobberY += castDist + 8;
    }

    this.player.state = 'fishing';
    this.player.frameIndex = 0;
    this.player.specialActionTimer = 0;
    this.player.frameTimer = 0;

    this.fishing = {
      active: true,
      stage: 'casting',
      timer: 0,
      castDuration: 0.45,
      biteTimer: 1.6 + Math.random() * 1.5,
      hookWindowTimer: 2.5,
      bobberX: bobberX,
      bobberY: bobberY,
      bobberBaseY: bobberY,
      caughtBonus: false,
      catchData: null,
      reelProgress: 0
    };

    this.spawnSparks(bobberX, bobberY, '#38bdf8', 10);
    this.showToast("🎣 Đang buông cần xuống sông... Hãy kiên nhẫn đợi cá cắn câu!");
    this.addFloatingText("🎣 Buông cần câu...", this.player.x, this.player.y - 25, '#38bdf8');
  },

  updateFishing(dt) {
    if (!this.fishing || !this.fishing.active || !this.player) return;

    this.fishing.timer += dt;
    this.fishing.bobberY = this.fishing.bobberBaseY + Math.sin(Date.now() / 220) * 2;

    if (this.fishing.stage === 'casting') {
      const progress = Math.min(1, this.fishing.timer / this.fishing.castDuration);
      this.player.frameIndex = Math.min(3, Math.floor(progress * 4));

      if (progress >= 1) {
        this.fishing.stage = 'waiting';
        this.fishing.timer = 0;
        this.player.frameIndex = 4;
        this.spawnSparks(this.fishing.bobberX, this.fishing.bobberY, '#60a5fa', 6);
      }
    } else if (this.fishing.stage === 'waiting') {
      const waitCycle = Math.floor(Date.now() / 250) % 3;
      this.player.frameIndex = 3 + (waitCycle % 3);

      if (this.fishing.timer >= this.fishing.biteTimer) {
        this.fishing.stage = 'biting';
        this.fishing.timer = 0;
        this.spawnSparks(this.fishing.bobberX, this.fishing.bobberY, '#38bdf8', 16);
        this.addFloatingText("❗ CÁ CẮN CÂU! [F/I]", this.player.x, this.player.y - 28, '#fde047');
        this.showToast("🐟 Cá đã cắn câu! Nhấn [F] hoặc [I] (hoặc Space) để giật cần!");
      }
    } else if (this.fishing.stage === 'biting') {
      this.player.frameIndex = (Math.floor(Date.now() / 90) % 2 === 0) ? 4 : 5;
      this.fishing.bobberY += 3;
      if (Math.random() < 0.25) {
        this.spawnSparks(this.fishing.bobberX, this.fishing.bobberY, '#38bdf8', 3);
      }

      if (this.fishing.timer >= this.fishing.hookWindowTimer) {
        this.reelInFish(false);
      }
    } else if (this.fishing.stage === 'reeling') {
      this.player.frameIndex = 7;
      this.fishing.reelProgress += dt / 0.55;

      if (this.fishing.reelProgress >= 1) {
        this.finishFishingCatch();
      }
    }
  },

  reelInFish(isActiveHook = true) {
    if (!this.fishing || this.fishing.stage !== 'biting') return;

    this.fishing.stage = 'reeling';
    this.fishing.timer = 0;
    this.fishing.reelProgress = 0;
    this.fishing.caughtBonus = isActiveHook;
    this.player.frameIndex = 6;

    this.fishing.catchData = this.generateFishLoot(isActiveHook);

    this.spawnSparks(this.fishing.bobberX, this.fishing.bobberY, '#38bdf8', 18);
    this.screenShake = 3;

    if (isActiveHook) {
      this.addFloatingText("⚡ GIẬT CẦN CHUẨN XÁC!", this.player.x, this.player.y - 25, '#4ade80');
    }
  },

  generateFishLoot(isBonus) {
    const roll = Math.random();
    let loot;

    if (roll < 0.10) {
      const gold = isBonus ? 160 : 120;
      loot = {
        name: "Rương Báu Đáy Sông",
        icon: "👑",
        gold: gold,
        hp: 100,
        fullSp: true,
        bonusDmg: 0,
        sparkColor: '#fbbf24',
        floatColor: '#fbbf24',
        toast: `👑 BÁU VẬT ĐÁY SÔNG! Trục vớt được Rương Báu Hoàng Gia (+${gold} Vàng, hồi Full HP & SP)!`
      };
    } else if (roll < 0.28) {
      const gold = isBonus ? 110 : 85;
      loot = {
        name: "Cá Vược Chúa Khổng Lồ",
        icon: "🦈",
        gold: gold,
        hp: 75,
        fullSp: true,
        bonusDmg: 1,
        sparkColor: '#f97316',
        floatColor: '#f97316',
        toast: `🔥 ĐẠI CHIẾN LỢI PHẨM! Câu được Cá Vược Chúa khổng lồ (+${gold} Vàng, hồi 75 HP, +1 Sát thương vĩnh viễn)!`
      };
    } else if (roll < 0.60) {
      const gold = isBonus ? 70 : 55;
      loot = {
        name: "Cá Chép Vàng Ánh Kim",
        icon: "🐠",
        gold: gold,
        hp: 50,
        fullSp: true,
        bonusDmg: 0,
        sparkColor: '#eab308',
        floatColor: '#eab308',
        toast: `✨ Cá Chép Vàng óng ánh cắn câu! (+${gold} Vàng, hồi 50 HP & SP)!`
      };
    } else {
      const gold = isBonus ? 45 : 35;
      loot = {
        name: "Cá Hồi Sông Tươi Ngon",
        icon: "🐟",
        gold: gold,
        hp: 35,
        fullSp: true,
        bonusDmg: 0,
        sparkColor: '#38bdf8',
        floatColor: '#38bdf8',
        toast: `🎣 Câu được một chú Cá Hồi Sông béo ngậy! (+${gold} Vàng, hồi 35 HP & SP)!`
      };
    }

    return loot;
  },

  finishFishingCatch() {
    if (!this.fishing || !this.fishing.catchData || !this.player) return;

    const loot = this.fishing.catchData;
    this.player.gold += loot.gold;
    this.player.hp = Math.min(this.player.maxHp, this.player.hp + loot.hp);
    if (loot.fullSp) this.player.sp = this.player.maxSp;
    if (loot.bonusDmg > 0) {
      this.player.attackDamage = (this.player.attackDamage || 15) + loot.bonusDmg;
    }

    this.spawnSparks(this.player.x, this.player.y, loot.sparkColor, 18);
    this.addFloatingText(`+${loot.gold} Vàng & ${loot.name} ${loot.icon}`, this.player.x, this.player.y - 30, loot.floatColor);
    this.showToast(loot.toast);

    if (this.goldText) this.goldText.innerText = this.player.gold;
    this.updateHUD();

    this.fishing = null;
    this.player.state = 'idle';
    this.player.frameIndex = 0;
  },

  cancelFishing() {
    if (!this.fishing || !this.fishing.active) return;
    if (this.fishing.stage === 'reeling') return;

    this.fishing = null;
    if (this.player) {
      this.player.state = 'idle';
      this.player.frameIndex = 0;
    }
    this.showToast("🎣 Đã thu cần câu lại.");
  },

  useFishing() {
    this.startFishing();
  },

  renderFishingVisuals(ctx) {
    if (!this.fishing || !this.fishing.active || !this.player) return;

    ctx.save();

    const p = this.player;
    const bx = Math.floor(this.fishing.bobberX);
    const by = Math.floor(this.fishing.bobberY);

    // 1. Tính toán đầu cần câu (rod tip)
    let rodX = p.x;
    let rodY = p.y - 18;
    if (p.direction === 'left') {
      rodX -= 26;
      rodY -= 4;
    } else if (p.direction === 'right') {
      rodX += 26;
      rodY -= 4;
    } else if (p.direction === 'up') {
      rodY -= 28;
    } else { // 'down'
      rodX += 4;
      rodY += 6;
    }

    // 2. Dây câu (Fishing line)
    if (this.fishing.stage !== 'casting' || p.frameIndex >= 2) {
      ctx.beginPath();
      ctx.moveTo(rodX, rodY);
      const midX = (rodX + bx) / 2;
      const sag = (this.fishing.stage === 'biting') ? 2 : 10;
      const midY = Math.min(rodY, by) + sag;
      ctx.quadraticCurveTo(midX, midY, bx, by);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // 3. Vòng sóng nước gợn tại phao câu (Water ripples)
    const now = Date.now();
    const cycle = (now / 600) % 1;
    const rSize = 3 + cycle * 9;
    const rAlpha = Math.max(0, (1 - cycle) * 0.65);

    ctx.beginPath();
    ctx.ellipse(bx, by + 2, rSize, rSize * 0.45, 0, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(56, 189, 248, ${rAlpha})`;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    if (this.fishing.stage === 'biting') {
      const cycle2 = (now / 250) % 1;
      const rSize2 = 4 + cycle2 * 14;
      const rAlpha2 = Math.max(0, (1 - cycle2) * 0.9);
      ctx.beginPath();
      ctx.ellipse(bx, by + 2, rSize2, rSize2 * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(239, 68, 68, ${rAlpha2})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 4. Phao câu (Bobber)
    ctx.beginPath();
    ctx.arc(bx, by - 1, 3.5, Math.PI, 0, false);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx, by - 1, 3.5, 0, Math.PI, false);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(bx, by - 1, 3.5, 0, Math.PI * 2);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(bx, by - 4.5);
    ctx.lineTo(bx, by - 7);
    ctx.strokeStyle = '#facc15';
    ctx.lineWidth = 1;
    ctx.stroke();

    // 5. Cảnh báo cá cắn câu
    if (this.fishing.stage === 'biting') {
      const bobBounce = Math.sin(now / 80) * 3;
      const alertY = p.y - 52 + bobBounce;
      const alertX = p.x;

      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
      ctx.fillText('❗', alertX + 1, alertY + 1);
      ctx.fillStyle = '#ef4444';
      ctx.fillText('❗', alertX, alertY);

      ctx.font = 'bold 9px monospace';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.85)';
      const hintText = "GIẬT CẦN [F / I]!";
      const hW = ctx.measureText(hintText).width;
      ctx.fillRect(alertX - hW / 2 - 4, alertY - 22, hW + 8, 13);
      ctx.strokeStyle = '#facc15';
      ctx.lineWidth = 1;
      ctx.strokeRect(alertX - hW / 2 - 4, alertY - 22, hW + 8, 13);
      ctx.fillStyle = '#fde047';
      ctx.fillText(hintText, alertX, alertY - 12);
    }

    // 6. Cá bay vào tay khi giật cần
    if (this.fishing.stage === 'reeling' && this.fishing.catchData) {
      const t = Math.min(1, Math.max(0, this.fishing.reelProgress));
      const curX = bx + (p.x - bx) * t;
      const arcH = Math.sin(t * Math.PI) * 42;
      const curY = by + (p.y - 20 - by) * t - arcH;

      ctx.font = '18px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(this.fishing.catchData.icon, curX, curY);

      if (Math.random() < 0.5) {
        this.spawnSparks(curX, curY, this.fishing.catchData.sparkColor || '#38bdf8', 2);
      }
    }

    ctx.restore();
  },

  useWorkbench() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.spawnSparks(this.player.x, this.player.y, '#f59e0b', 16);
    this.player.attackDamage = (this.player.attackDamage || 15) + 5;
    this.addFloatingText("+5 Sát Thương Rèn Giũa", this.player.x, this.player.y - 25, '#f59e0b');
    this.showToast("🔨 Đã tôi luyện kiếm và nâng cấp đồ nghề tại Bàn Thợ Workbench! Sát thương cơ bản tăng vĩnh viễn +5!");
  },

  useFarm() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.spawnSparks(this.player.x, this.player.y, '#4ade80', 16);
    this.player.gold += 50;
    this.player.sp = this.player.maxSp;
    this.addFloatingText("+50 Vàng & Rau Củ Tươi", this.player.x, this.player.y - 25, '#4ade80');
    this.showToast("🥕 Đã tưới nước và thu hoạch bắp cải, củ dền, cà rốt tươi ngon tại Vườn Rau (+50 Vàng, hồi 100% SP)!");
  },

  restAtBench() {
    if (!this.player) return;
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#60a5fa', 12);
    this.showToast("🌊 Ngồi nghỉ chân trên ghế dài ngắm dòng sông nước biếc, toàn bộ sinh lực của bạn đã phục hồi!");
  },

useAnvil() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.spawnSparks(this.player.x, this.player.y, '#38bdf8', 12);
    this.showToast("⚒️ Đã tôi luyện vũ khí tại Đe Rèn Anvil! Sát thương tăng thêm 5!");
  },

  useSawmill() {
    if (!this.player) return;
    this.player.triggerSpecialAction('collect');
    this.spawnSparks(this.player.x, this.player.y, '#f59e0b', 8);
    this.player.gold += 15;
    this.addFloatingText("+15 Vàng", this.player.x, this.player.y - 25, '#facc15');
    this.showToast("🪓 Đã xẻ xong kiện gỗ tại xưởng cưa Sawmill! Nhận 15 Vàng công nhật.");
  },

  restAtBonfire() {
    if (!this.player) return;
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#ef4444', 12);
    this.showToast("🔥 Ngồi nghỉ bên đống lửa trại, tâm trí bạn thư thái lạ thường.");
  },

  openStarterChest() {
    if (this.starterChestOpened) {
      this.showToast("📦 Rương Khởi Đầu đã được mở hết đồ rồi!");
      return;
    }
    this.starterChestOpened = true;
    if (this.player) {
      this.player.triggerSpecialAction('collect');
      this.player.gold += 75;
      this.player.hp = this.player.maxHp;
      this.addFloatingText("+75 Vàng & Thần Dược", this.player.x, this.player.y - 25, '#facc15');
      this.spawnSparks(this.player.x, this.player.y, '#facc15', 20);
    }
    this.openDialogue("Rương Báu Khởi Đầu",
      "Chúc mừng chiến binh! Bạn nhận được: 75 Đồng Vàng Hoàng Gia, Thần dược sinh mệnh và Lời chúc phúc từ Trưởng Lão Alden!");
  },

  readStarterBook() {
    this.openDialogue("Sách Cổ Trưởng Lão Alden",
      "Bí thư ghi lại: Để bước qua Cổng Thành Vương Quốc, ngươi phải dẹp sạch lũ Orc Shaman tại Hầm Ngục tối tăm. Hãy chuẩn bị vũ khí và lương khô thật kỹ!");
  },

  restInBed() {
    if (!this.player) return;
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.spawnSparks(this.player.x, this.player.y, '#a855f7', 10);
    this.showToast("🛏️ Một giấc ngủ thật ngon! Toàn bộ HP và SP đã phục hồi 100%.");
  },

  useStoneFurnace() {
    if (this.player) this.player.triggerSpecialAction('collect');
    this.spawnSparks(this.player.x, this.player.y, '#94a3b8', 12);
    this.showToast("🔥 Luyện quặng ma thuật tại Lò Nung Đá Cổ Đại thành công!");
  },

  openDungeonChest() {
    if (this.player) {
      this.player.triggerSpecialAction('collect');
      this.player.gold += 120;
      this.addFloatingText("+120 Vàng Phó Bản", this.player.x, this.player.y - 25, '#facc15');
      this.spawnSparks(this.player.x, this.player.y, '#facc15', 20);
      this.showToast("👑 Mở rương bí mật hầm ngục nhận 120 Vàng!");
    }
  },

  checkCastleGate() {
    this.changeMap('palace', 480, 580);
    this.showToast("👑 Chào mừng Dũng Sĩ bước vào Cung Điện Hoàng Gia!");
  },

  lightCastleBrazier() {
    this.spawnSparks(this.player.x, this.player.y, '#f59e0b', 14);
    this.showToast("🔥 Ngọn đuốc danh dự đã bùng cháy rực rỡ trước cổng thành!");
  },

  respawnPlayer() {
    if (!this.player) return;
    if (this.fishing) {
      this.fishing = null;
    }
    this.player.isDead = false;
    this.player.hp = this.player.maxHp;
    this.player.sp = this.player.maxSp;
    this.player.state = 'idle';

    // DŨNG SĨ HỒI SINH TẠI NGÔI NHÀ KHỞI ĐẦU (STARTER_HOUSE)
    this.changeMap('starter_house', 240, 280);
    if (this.gameOverScreen) this.gameOverScreen.style.display = 'none';
    if (this.bottomHealthBar && !this.menuVisible) this.bottomHealthBar.style.display = 'flex';
    this.updateHUD();
    this.showToast("✨ Dũng sĩ đã được hồi sinh bình an tại Ngôi Nhà Khởi Đầu.");
  },

  toggleMenuUI() {
    this.menuVisible = !this.menuVisible;
    const hud = document.getElementById('game-hud');
    const hint = document.getElementById('controls-hint');
    const pill = document.getElementById('tab-hint-pill');
    const bottomHp = document.getElementById('bottom-health-bar');

    // Khi bật Tab menu: mở HUD & hướng dẫn, TẮT thanh máu phía dưới màn hình
    // Khi tắt Tab menu: đóng HUD & hướng dẫn, BẬT LẠI thanh máu phía dưới màn hình
    if (hud) hud.style.display = this.menuVisible ? 'flex' : 'none';
    if (hint) hint.style.display = this.menuVisible ? 'flex' : 'none';
    if (bottomHp) bottomHp.style.display = (this.player && this.player.isDead) ? 'none' : 'flex';

    const hamText = document.getElementById('hamburger-text');
    if (pill) {
      pill.classList.toggle('active', this.menuVisible);
      pill.title = this.menuVisible ? 'Đóng Menu [Tab]' : 'Mở Menu [Tab]';
    }
    if (hamText) {
      hamText.textContent = this.menuVisible ? 'Đóng [Tab]' : 'Menu [Tab]';
    }

    if (this.menuVisible) {
      this.updateHUD();
      this.showToast("📋 Đã hiển thị thanh Menu & HUD (Nhấn Tab lần 2 để ẩn)", 2500);
    } else {
      this.showToast("🎬 Đã ẩn thanh Menu & HUD (Nhấn Tab để mở lại)", 2000);
    }
  },

  switchWeapon(wId) {
    if (!this.player || !WEAPON_CONFIGS[wId]) return;
    this.player.currentWeapon = wId;
    this.updateHUD();
    this.showToast(`Đã trang bị: ${WEAPON_CONFIGS[wId].name}`);
  },

  spawnProjectile(proj) {
    if (!this.projectiles) this.projectiles = [];
    this.projectiles.push(proj);
  },

  openClassModal() {
    const modal = document.getElementById('class-select-modal');
    if (modal) {
      modal.style.display = 'flex';
      const curClass = this.player ? this.player.profession : 'novice';
      document.querySelectorAll('.class-card').forEach(card => {
        if (card.getAttribute('data-class') === curClass) {
          card.classList.add('active');
        } else {
          card.classList.remove('active');
        }
      });
    }
  },

  closeClassModal() {
    const modal = document.getElementById('class-select-modal');
    if (modal) {
      modal.style.display = 'none';
    }
  },

  selectClass(classId) {
    if (!this.player) return;
    const cfg = this.player.setProfession(classId);
    this.updateHUD();
    const fxColor = cfg.id === 'wizard' ? '#c084fc' : (cfg.id === 'rogue' ? '#e2e8f0' : (cfg.id === 'knight' ? '#f59e0b' : '#38bdf8'));
    this.spawnSparks(this.player.x, this.player.y, fxColor, 24);
    this.showToast(`✨ Đã chọn chức nghiệp: [${cfg.name}] - Trang bị: ${cfg.weapon === 'staff' ? 'Quyền Trượng Bắn Xa' : (cfg.weapon === 'bone' ? 'Lưỡi Hái Xương' : (cfg.weapon === 'wood' ? 'Kiếm Hiệp Sĩ' : 'Thiết Quyền'))}!`, 3500);
    this.closeClassModal();
  },

  toggleSkin() {
    if (!this.player) return;
    const newSkin = this.player.toggleSkin();
    const skinNames = {
      classic: "🛡️ Classic (Body_A)",
      champion: "👑 Champion (New_Version)",
      knight: "⚔️ Hiệp Sĩ Hoàng Gia (Knight)",
      rogue: "🗡️ Sát Thủ Bóng Đêm (Rogue)",
      wizard: "🔮 Đại Pháp Sư (Wizard)"
    };
    if (this.skinBadge) {
      this.skinBadge.textContent = skinNames[newSkin] || newSkin;
    }
    this.spawnSparks(this.player.x, this.player.y, '#10b981', 14);
    this.showToast(`🥋 Đã đổi ngoại trang: ${skinNames[newSkin] || newSkin}`, 3000);
  },

  spawnSparks(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 25 + Math.random() * 60;
      this.particles.push({
        x: x, y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: color,
        size: 2.5 + Math.random() * 2,
        alpha: 1.0
      });
    }
  },

  addFloatingText(text, x, y, color) {
    this.floatingTexts.push({ text, x, y, color, alpha: 1.0 });
  },

  openDialogue(speaker, text) {
    if (this.dialogueBox && this.dialogueSpeaker && this.dialogueText) {
      this.dialogueSpeaker.textContent = speaker;
      this.dialogueText.textContent = text;
      this.dialogueBox.style.display = 'block';
    }
  },

  closeDialogue() {
    if (this.dialogueBox) {
      this.dialogueBox.style.display = 'none';
    }
  },

  showToast(msg, duration = 3000) {
    if (this.toast) {
      this.toast.textContent = msg;
      this.toast.style.display = 'block';
      clearTimeout(this._toastTimeout);
      this._toastTimeout = setTimeout(() => {
        this.toast.style.display = 'none';
      }, duration);
    }
  },

  toggleManifestModal() {
    if (!this.manifestModal) return;
    const isShowing = this.manifestModal.style.display === 'flex';
    this.manifestModal.style.display = isShowing ? 'none' : 'flex';
    if (!isShowing) {
      this.renderManifestFileList();
      this.loadManifestTerms();
    }
  },

  switchManifestTab(tab) {
    const filesTab = document.getElementById('manifest-tab-files');
    const termsTab = document.getElementById('manifest-tab-terms');
    const filesBtn = document.getElementById('tab-files-btn');
    const termsBtn = document.getElementById('tab-terms-btn');

    if (tab === 'files') {
      if (filesTab) filesTab.style.display = 'block';
      if (termsTab) termsTab.style.display = 'none';
      if (filesBtn) filesBtn.classList.add('active');
      if (termsBtn) termsBtn.classList.remove('active');
    } else {
      if (filesTab) filesTab.style.display = 'none';
      if (termsTab) termsTab.style.display = 'block';
      if (filesBtn) filesBtn.classList.remove('active');
      if (termsBtn) termsBtn.classList.add('active');
    }
  },

  renderManifestFileList(filter = '') {
    const listEl = document.getElementById('manifest-file-list');
    const countEl = document.getElementById('manifest-count-badge');
    if (!listEl) return;

    const list = window.ALL_GAME_ASSETS || [];
    const filtered = filter ? list.filter(p => p.toLowerCase().includes(filter.toLowerCase())) : list;

    if (countEl) countEl.textContent = `Hiển thị: ${filtered.length} / ${list.length} files`;

    listEl.innerHTML = filtered.map(p => {
      const ext = p.split('.').pop().toLowerCase();
      const isImg = ['png', 'jpg'].includes(ext);
      const icon = isImg ? '🖼️' : (ext === 'aseprite' ? '🎨' : '📄');
      return `<div class="manifest-item"><span class="manifest-icon">${icon}</span> <span class="manifest-path">${p}</span></div>`;
    }).join('');
  },

  filterManifest(val) {
    this.renderManifestFileList(val);
  },

  loadManifestTerms() {
    const termsEl = document.getElementById('manifest-terms-text');
    if (termsEl && !termsEl.textContent) {
      fetch('/assets/Terms.txt')
        .then(r => r.text())
        .then(txt => { termsEl.textContent = txt; })
        .catch(() => { termsEl.textContent = "Bản quyền Pixel Crawler Free Pack (Itch.io). Tự do sử dụng phi thương mại & thương mại."; });
    }
  },

  connectWebSocket() {
    const wsUrl = `ws://${window.location.host}/ws`;
    try {
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => {
        if (this.wsBadge) {
          this.wsBadge.textContent = 'Python Online';
          this.wsBadge.className = 'badge-ws badge-connected';
        }
      };
      this.ws.onmessage = (evt) => {
        try {
          const data = JSON.parse(evt.data);
          this.handlePythonAction(data);
        } catch (e) {
          console.error("Lỗi phân tích cú pháp WebSocket:", e);
        }
      };
      this.ws.onclose = () => {
        if (this.wsBadge) {
          this.wsBadge.textContent = 'Python Offline';
          this.wsBadge.className = 'badge-ws badge-disconnected';
        }
        setTimeout(() => this.connectWebSocket(), 3000);
      };
    } catch (e) {
      console.warn("WebSocket kết nối thất bại:", e);
    }
  },

  handlePythonAction(data) {
    if (!this.player) return;
    const action = data.action;

    switch (action) {
      case 'move_up':
        this.player.y -= 30;
        this.player.direction = 'up';
        this.player.state = 'walk';
        break;
      case 'move_down':
        this.player.y += 30;
        this.player.direction = 'down';
        this.player.state = 'walk';
        break;
      case 'move_left':
        this.player.x -= 30;
        this.player.direction = 'left';
        this.player.state = 'walk';
        break;
      case 'move_right':
        this.player.x += 30;
        this.player.direction = 'right';
        this.player.state = 'walk';
        break;
      case 'attack_slash':
        this.player.attack('slash');
        break;
      case 'attack_thrust':
        this.player.attack('thrust');
        break;
      case 'attack_hammer':
        this.player.attack('hammer');
        break;
      case 'roll':
        this.player.roll();
        break;
      case 'interact':
        this.interact();
        break;
      case 'switch_weapon':
        this.switchWeapon(data.weapon || 'bone');
        break;
      case 'switch_skin':
        this.toggleSkin();
        break;
      case 'enter_house':
      case 'goto_starter_house':
        this.changeMap('starter_house', 240, 310);
        break;
      case 'exit_house':
      case 'goto_courtyard':
        this.changeMap('courtyard', 740, 340);
        break;
      case 'goto_tavern':
        this.changeMap('tavern', 640, 480);
        break;
      case 'goto_dungeon':
        this.changeMap('dungeon', 180, 140);
        break;
      case 'goto_castle_gate':
        this.changeMap('castle_gate', 320, 580);
        break;
      default:
        console.log("Hành động không xác định:", action);
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
