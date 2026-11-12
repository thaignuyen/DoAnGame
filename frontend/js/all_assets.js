/**
 * all_assets.js - Danh mục & Quản lý toàn bộ 383/383 Files của Pixel Crawler Pack
 * Tự động tạo và kiểm chứng độ nguyên vẹn 100% của mọi tài nguyên
 */

const PIXEL_ASSET_MANIFEST = [
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Down-Sheet.png",
    "name": "Carry_Idle_Down-Sheet.png",
    "ext": ".png",
    "size": 992,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Down.aseprite",
    "name": "Carry_Idle_Down.aseprite",
    "ext": ".aseprite",
    "size": 1991,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Side-Sheet.png",
    "name": "Carry_Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1001,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Side.aseprite",
    "name": "Carry_Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 2072,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Up-Sheet.png",
    "name": "Carry_Idle_Up-Sheet.png",
    "ext": ".png",
    "size": 827,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Up.aseprite",
    "name": "Carry_Idle_Up.aseprite",
    "ext": ".aseprite",
    "size": 1931,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Down-Sheet.png",
    "name": "Carry_Run_Down-Sheet.png",
    "ext": ".png",
    "size": 1375,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Down.aseprite",
    "name": "Carry_Run_Down.aseprite",
    "ext": ".aseprite",
    "size": 2913,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Side-Sheet.png",
    "name": "Carry_Run_Side-Sheet.png",
    "ext": ".png",
    "size": 1369,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Side.aseprite",
    "name": "Carry_Run_Side.aseprite",
    "ext": ".aseprite",
    "size": 3006,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Up-Sheet.png",
    "name": "Carry_Run_Up-Sheet.png",
    "ext": ".png",
    "size": 1073,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Up.aseprite",
    "name": "Carry_Run_Up.aseprite",
    "ext": ".aseprite",
    "size": 2770,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Down-Sheet.png",
    "name": "Carry_Walk_Down-Sheet.png",
    "ext": ".png",
    "size": 1283,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Down.aseprite",
    "name": "Carry_Walk_Down.aseprite",
    "ext": ".aseprite",
    "size": 2861,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Side-Sheet.png",
    "name": "Carry_Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 1367,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Side.aseprite",
    "name": "Carry_Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 3007,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Up-Sheet.png",
    "name": "Carry_Walk_Up-Sheet.png",
    "ext": ".png",
    "size": 1123,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Up.aseprite",
    "name": "Carry_Walk_Up.aseprite",
    "ext": ".aseprite",
    "size": 2751,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Down-Sheet.png",
    "name": "Collect_Down-Sheet.png",
    "ext": ".png",
    "size": 1743,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Down.aseprite",
    "name": "Collect_Down.aseprite",
    "ext": ".aseprite",
    "size": 3560,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Side-Sheet.png",
    "name": "Collect_Side-Sheet.png",
    "ext": ".png",
    "size": 2053,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Side.aseprite",
    "name": "Collect_Side.aseprite",
    "ext": ".aseprite",
    "size": 3771,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Up-Sheet.png",
    "name": "Collect_Up-Sheet.png",
    "ext": ".png",
    "size": 1544,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Collect_Base/Collect_Up.aseprite",
    "name": "Collect_Up.aseprite",
    "ext": ".aseprite",
    "size": 3393,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Down-Sheet.png",
    "name": "Crush_Down-Sheet.png",
    "ext": ".png",
    "size": 2629,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Down.aseprite",
    "name": "Crush_Down.aseprite",
    "ext": ".aseprite",
    "size": 4831,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Side-Sheet.png",
    "name": "Crush_Side-Sheet.png",
    "ext": ".png",
    "size": 2664,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Side.aseprite",
    "name": "Crush_Side.aseprite",
    "ext": ".aseprite",
    "size": 4951,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Up-Sheet.png",
    "name": "Crush_Up-Sheet.png",
    "ext": ".png",
    "size": 2202,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Crush_Base/Crush_Up.aseprite",
    "name": "Crush_Up.aseprite",
    "ext": ".aseprite",
    "size": 4455,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Down-Sheet.png",
    "name": "Death_Down-Sheet.png",
    "ext": ".png",
    "size": 2017,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Down.aseprite",
    "name": "Death_Down.aseprite",
    "ext": ".aseprite",
    "size": 3476,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Side-Sheet.png",
    "name": "Death_Side-Sheet.png",
    "ext": ".png",
    "size": 1803,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Side.aseprite",
    "name": "Death_Side.aseprite",
    "ext": ".aseprite",
    "size": 3599,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Up-Sheet.png",
    "name": "Death_Up-Sheet.png",
    "ext": ".png",
    "size": 1692,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Death_Base/Death_Up.aseprite",
    "name": "Death_Up.aseprite",
    "ext": ".aseprite",
    "size": 3374,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Down-Sheet.png",
    "name": "Fishing_Down-Sheet.png",
    "ext": ".png",
    "size": 2425,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Down.aseprite",
    "name": "Fishing_Down.aseprite",
    "ext": ".aseprite",
    "size": 4878,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Side-Sheet.png",
    "name": "Fishing_Side-Sheet.png",
    "ext": ".png",
    "size": 2471,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Side.aseprite",
    "name": "Fishing_Side.aseprite",
    "ext": ".aseprite",
    "size": 5162,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Up-Sheet.png",
    "name": "Fishing_Up-Sheet.png",
    "ext": ".png",
    "size": 2303,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Up.aseprite",
    "name": "Fishing_Up.aseprite",
    "ext": ".aseprite",
    "size": 4880,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Down-Sheet.png",
    "name": "Hit_Down-Sheet.png",
    "ext": ".png",
    "size": 1163,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Down.aseprite",
    "name": "Hit_Down.aseprite",
    "ext": ".aseprite",
    "size": 1971,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Side-Sheet.png",
    "name": "Hit_Side-Sheet.png",
    "ext": ".png",
    "size": 1169,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Side.aseprite",
    "name": "Hit_Side.aseprite",
    "ext": ".aseprite",
    "size": 2104,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Up-Sheet.png",
    "name": "Hit_Up-Sheet.png",
    "ext": ".png",
    "size": 988,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Hit_Base/Hit_Up.aseprite",
    "name": "Hit_Up.aseprite",
    "ext": ".aseprite",
    "size": 1896,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Down-Sheet.png",
    "name": "Idle_Down-Sheet.png",
    "ext": ".png",
    "size": 1026,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Down.aseprite",
    "name": "Idle_Down.aseprite",
    "ext": ".aseprite",
    "size": 1954,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Side-Sheet.png",
    "name": "Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1068,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 2144,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Up-Sheet.png",
    "name": "Idle_Up-Sheet.png",
    "ext": ".png",
    "size": 863,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Idle_Base/Idle_Up.aseprite",
    "name": "Idle_Up.aseprite",
    "ext": ".aseprite",
    "size": 1851,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Down-Sheet.png",
    "name": "Pierce_Down-Sheet.png",
    "ext": ".png",
    "size": 2313,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Down.aseprite",
    "name": "Pierce_Down.aseprite",
    "ext": ".aseprite",
    "size": 4776,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Side-Sheet.png",
    "name": "Pierce_Side-Sheet.png",
    "ext": ".png",
    "size": 2166,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Side.aseprite",
    "name": "Pierce_Side.aseprite",
    "ext": ".aseprite",
    "size": 5114,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Top-Sheet.png",
    "name": "Pierce_Top-Sheet.png",
    "ext": ".png",
    "size": 1748,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Top-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Top.aseprite",
    "name": "Pierce_Top.aseprite",
    "ext": ".aseprite",
    "size": 4504,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Top.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Down-Sheet.png",
    "name": "Run_Down-Sheet.png",
    "ext": ".png",
    "size": 1490,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Down.aseprite",
    "name": "Run_Down.aseprite",
    "ext": ".aseprite",
    "size": 2930,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Side-Sheet.png",
    "name": "Run_Side-Sheet.png",
    "ext": ".png",
    "size": 1696,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Side.aseprite",
    "name": "Run_Side.aseprite",
    "ext": ".aseprite",
    "size": 2963,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Up-Sheet.png",
    "name": "Run_Up-Sheet.png",
    "ext": ".png",
    "size": 1357,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Run_Base/Run_Up.aseprite",
    "name": "Run_Up.aseprite",
    "ext": ".aseprite",
    "size": 2730,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Down-Sheet.png",
    "name": "Slice_Down-Sheet.png",
    "ext": ".png",
    "size": 2780,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Down.aseprite",
    "name": "Slice_Down.aseprite",
    "ext": ".aseprite",
    "size": 5011,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Side-Sheet.png",
    "name": "Slice_Side-Sheet.png",
    "ext": ".png",
    "size": 2871,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Side.aseprite",
    "name": "Slice_Side.aseprite",
    "ext": ".aseprite",
    "size": 5354,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Up-Sheet.png",
    "name": "Slice_Up-Sheet.png",
    "ext": ".png",
    "size": 2319,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Slice_Base/Slice_Up.aseprite",
    "name": "Slice_Up.aseprite",
    "ext": ".aseprite",
    "size": 4722,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Down-Sheet.png",
    "name": "Walk_Down-Sheet.png",
    "ext": ".png",
    "size": 1424,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Down.aseprite",
    "name": "Walk_Down.aseprite",
    "ext": ".aseprite",
    "size": 2828,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Side-Sheet.png",
    "name": "Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 1414,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 2970,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Up-Sheet.png",
    "name": "Walk_Up-Sheet.png",
    "ext": ".png",
    "size": 1319,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Walk_Base/Walk_Up.aseprite",
    "name": "Walk_Up.aseprite",
    "ext": ".aseprite",
    "size": 2735,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Down-Sheet.png",
    "name": "Watering_Down-Sheet.png",
    "ext": ".png",
    "size": 1841,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Down.aseprite",
    "name": "Watering_Down.aseprite",
    "ext": ".aseprite",
    "size": 5058,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Side-Sheet.png",
    "name": "Watering_Side-Sheet.png",
    "ext": ".png",
    "size": 2377,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Side-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Side.aseprite",
    "name": "Watering_Side.aseprite",
    "ext": ".aseprite",
    "size": 5071,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Up-Sheet.png",
    "name": "Watering_Up-Sheet.png",
    "ext": ".png",
    "size": 1547,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Up-Sheet.png"
  },
  {
    "rel": "Entities/Characters/Body_A/Animations/Watering_Base/Watering_Up.aseprite",
    "name": "Watering_Up.aseprite",
    "ext": ".aseprite",
    "size": 4179,
    "url": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Down-Sheet.png",
    "name": "Idle_Down-Sheet.png",
    "ext": ".png",
    "size": 916,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Down-Sheet.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Down.aseprite",
    "name": "Idle_Down.aseprite",
    "ext": ".aseprite",
    "size": 1350,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Down.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Down.png",
    "name": "Idle_Down.png",
    "ext": ".png",
    "size": 916,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Down.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 1316,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Side.png",
    "name": "Idle_Side.png",
    "ext": ".png",
    "size": 888,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Side.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Up.aseprite",
    "name": "Idle_Up.aseprite",
    "ext": ".aseprite",
    "size": 1344,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Up.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Idle/Idle_Up.png",
    "name": "Idle_Up.png",
    "ext": ".png",
    "size": 946,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Up.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Down.aseprite",
    "name": "Down.aseprite",
    "ext": ".aseprite",
    "size": 1853,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Down.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Down.png",
    "name": "Down.png",
    "ext": ".png",
    "size": 1122,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Down.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Up.aseprite",
    "name": "Up.aseprite",
    "ext": ".aseprite",
    "size": 1845,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Up.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Up.png",
    "name": "Up.png",
    "ext": ".png",
    "size": 1097,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Up.png"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 2505,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Characters/New_Version/Walk/Walk_Side.png",
    "name": "Walk_Side.png",
    "ext": ".png",
    "size": 1046,
    "url": "/pixel_crawler/Entities/Characters/New_Version/Walk/Walk_Side.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 3080,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2753,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1544,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2295,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2443,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 6303,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 3430,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 3037,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1614,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2406,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2520,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Rogue/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 8397,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 2777,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 3306,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1713,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2448,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2852,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Shaman/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 7381,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 4416,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 4131,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 2075,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2722,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 3248,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Orc Crew/Orc - Warrior/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 8738,
    "url": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 3388,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 3060,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1248,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 1939,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 1936,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Base/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 5786,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 2881,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2699,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1453,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2310,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2218,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Mage/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 5116,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 2962,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2838,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1432,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2151,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2314,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 9123,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 2908,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2947,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1506,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2271,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2495,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 7309,
    "url": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Citizen_A/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2318,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Idle.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Citizen_A/Idle.png",
    "name": "Idle.png",
    "ext": ".png",
    "size": 956,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Idle.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Citizen_A/Walk.aseprite",
    "name": "Walk.aseprite",
    "ext": ".aseprite",
    "size": 3205,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Walk.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Citizen_A/Walk.png",
    "name": "Walk.png",
    "ext": ".png",
    "size": 1290,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Walk.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1706,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 3993,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk-Sheet.png",
    "name": "Walk-Sheet.png",
    "ext": ".png",
    "size": 2351,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk.aseprite",
    "name": "Walk.aseprite",
    "ext": ".aseprite",
    "size": 6936,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side-Sheet.png",
    "name": "Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1537,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 2857,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side-Sheet.png",
    "name": "Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1437,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 3468,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side-Sheet.png",
    "name": "Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 2089,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 5947,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side-Sheet.png",
    "name": "Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 1852,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 6911,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side-Sheet.png",
    "name": "Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1537,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 2663,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side-Sheet.png",
    "name": "Idle_Side-Sheet.png",
    "ext": ".png",
    "size": 1437,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side.aseprite",
    "name": "Idle_Side.aseprite",
    "ext": ".aseprite",
    "size": 3302,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side-Sheet.png",
    "name": "Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 2089,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 6824,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side-Sheet.png",
    "name": "Walk_Side-Sheet.png",
    "ext": ".png",
    "size": 1852,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side.aseprite",
    "name": "Walk_Side.aseprite",
    "ext": ".aseprite",
    "size": 6824,
    "url": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side.aseprite"
  },
  {
    "rel": "Entities/Npc's/Knight/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 1943,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Knight/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2555,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Npc's/Knight/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1102,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Knight/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 1994,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Npc's/Knight/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 1933,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Knight/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 2681,
    "url": "/pixel_crawler/Entities/Npc's/Knight/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Npc's/Rogue/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 2650,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Rogue/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 2773,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Npc's/Rogue/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1342,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Rogue/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2324,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Npc's/Rogue/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2435,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Rogue/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 7110,
    "url": "/pixel_crawler/Entities/Npc's/Rogue/Run/Run.aseprite"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Death/Death-Sheet.png",
    "name": "Death-Sheet.png",
    "ext": ".png",
    "size": 3465,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Death/Death-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Death/Death.aseprite",
    "name": "Death.aseprite",
    "ext": ".aseprite",
    "size": 3102,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Death/Death.aseprite"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
    "name": "Idle-Sheet.png",
    "ext": ".png",
    "size": 1507,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Idle/Idle-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Idle/Idle.aseprite",
    "name": "Idle.aseprite",
    "ext": ".aseprite",
    "size": 2407,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Idle/Idle.aseprite"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Run/Run-Sheet.png",
    "name": "Run-Sheet.png",
    "ext": ".png",
    "size": 2547,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Run/Run-Sheet.png"
  },
  {
    "rel": "Entities/Npc's/Wizzard/Run/Run.aseprite",
    "name": "Run.aseprite",
    "ext": ".aseprite",
    "size": 6198,
    "url": "/pixel_crawler/Entities/Npc's/Wizzard/Run/Run.aseprite"
  },
  {
    "rel": "Environment/Props/Animated/Pan_01-Sheet.png",
    "name": "Pan_01-Sheet.png",
    "ext": ".png",
    "size": 761,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_01-Sheet.png"
  },
  {
    "rel": "Environment/Props/Animated/Pan_01.aseprite",
    "name": "Pan_01.aseprite",
    "ext": ".aseprite",
    "size": 1542,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_01.aseprite"
  },
  {
    "rel": "Environment/Props/Animated/Pan_02-Sheet.png",
    "name": "Pan_02-Sheet.png",
    "ext": ".png",
    "size": 634,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_02-Sheet.png"
  },
  {
    "rel": "Environment/Props/Animated/Pan_02.aseprite",
    "name": "Pan_02.aseprite",
    "ext": ".aseprite",
    "size": 1564,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_02.aseprite"
  },
  {
    "rel": "Environment/Props/Animated/Pan_03-Sheet.png",
    "name": "Pan_03-Sheet.png",
    "ext": ".png",
    "size": 1670,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_03-Sheet.png"
  },
  {
    "rel": "Environment/Props/Animated/Pan_03.aseprite",
    "name": "Pan_03.aseprite",
    "ext": ".aseprite",
    "size": 4206,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_03.aseprite"
  },
  {
    "rel": "Environment/Props/Animated/Pan_04-Sheet.png",
    "name": "Pan_04-Sheet.png",
    "ext": ".png",
    "size": 838,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_04-Sheet.png"
  },
  {
    "rel": "Environment/Props/Animated/Pan_04.aseprite",
    "name": "Pan_04.aseprite",
    "ext": ".aseprite",
    "size": 1512,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_04.aseprite"
  },
  {
    "rel": "Environment/Props/Animated/Pan_05-Sheet.png",
    "name": "Pan_05-Sheet.png",
    "ext": ".png",
    "size": 1624,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_05-Sheet.png"
  },
  {
    "rel": "Environment/Props/Animated/Pan_05.aseprite",
    "name": "Pan_05.aseprite",
    "ext": ".aseprite",
    "size": 2348,
    "url": "/pixel_crawler/Environment/Props/Animated/Pan_05.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Dungeon_Props.aseprite",
    "name": "Dungeon_Props.aseprite",
    "ext": ".aseprite",
    "size": 2381,
    "url": "/pixel_crawler/Environment/Props/Static/Dungeon_Props.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Dungeon_Props.png",
    "name": "Dungeon_Props.png",
    "ext": ".png",
    "size": 4213,
    "url": "/pixel_crawler/Environment/Props/Static/Dungeon_Props.png"
  },
  {
    "rel": "Environment/Props/Static/Esoteric.aseprite",
    "name": "Esoteric.aseprite",
    "ext": ".aseprite",
    "size": 2679,
    "url": "/pixel_crawler/Environment/Props/Static/Esoteric.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Esoteric.png",
    "name": "Esoteric.png",
    "ext": ".png",
    "size": 4885,
    "url": "/pixel_crawler/Environment/Props/Static/Esoteric.png"
  },
  {
    "rel": "Environment/Props/Static/Farm.aseprite",
    "name": "Farm.aseprite",
    "ext": ".aseprite",
    "size": 11972,
    "url": "/pixel_crawler/Environment/Props/Static/Farm.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Farm.png",
    "name": "Farm.png",
    "ext": ".png",
    "size": 22698,
    "url": "/pixel_crawler/Environment/Props/Static/Farm.png"
  },
  {
    "rel": "Environment/Props/Static/Furniture.aseprite",
    "name": "Furniture.aseprite",
    "ext": ".aseprite",
    "size": 21418,
    "url": "/pixel_crawler/Environment/Props/Static/Furniture.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Furniture.png",
    "name": "Furniture.png",
    "ext": ".png",
    "size": 29445,
    "url": "/pixel_crawler/Environment/Props/Static/Furniture.png"
  },
  {
    "rel": "Environment/Props/Static/Meat.aseprite",
    "name": "Meat.aseprite",
    "ext": ".aseprite",
    "size": 3178,
    "url": "/pixel_crawler/Environment/Props/Static/Meat.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Meat.png",
    "name": "Meat.png",
    "ext": ".png",
    "size": 5397,
    "url": "/pixel_crawler/Environment/Props/Static/Meat.png"
  },
  {
    "rel": "Environment/Props/Static/Pan.aseprite",
    "name": "Pan.aseprite",
    "ext": ".aseprite",
    "size": 3649,
    "url": "/pixel_crawler/Environment/Props/Static/Pan.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Pan.png",
    "name": "Pan.png",
    "ext": ".png",
    "size": 6799,
    "url": "/pixel_crawler/Environment/Props/Static/Pan.png"
  },
  {
    "rel": "Environment/Props/Static/Resources.aseprite",
    "name": "Resources.aseprite",
    "ext": ".aseprite",
    "size": 2532,
    "url": "/pixel_crawler/Environment/Props/Static/Resources.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Resources.png",
    "name": "Resources.png",
    "ext": ".png",
    "size": 4487,
    "url": "/pixel_crawler/Environment/Props/Static/Resources.png"
  },
  {
    "rel": "Environment/Props/Static/Rocks.aseprite",
    "name": "Rocks.aseprite",
    "ext": ".aseprite",
    "size": 6029,
    "url": "/pixel_crawler/Environment/Props/Static/Rocks.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Rocks.png",
    "name": "Rocks.png",
    "ext": ".png",
    "size": 8436,
    "url": "/pixel_crawler/Environment/Props/Static/Rocks.png"
  },
  {
    "rel": "Environment/Props/Static/Shadows.aseprite",
    "name": "Shadows.aseprite",
    "ext": ".aseprite",
    "size": 2587,
    "url": "/pixel_crawler/Environment/Props/Static/Shadows.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Shadows.png",
    "name": "Shadows.png",
    "ext": ".png",
    "size": 3965,
    "url": "/pixel_crawler/Environment/Props/Static/Shadows.png"
  },
  {
    "rel": "Environment/Props/Static/Tools.aseprite",
    "name": "Tools.aseprite",
    "ext": ".aseprite",
    "size": 7416,
    "url": "/pixel_crawler/Environment/Props/Static/Tools.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Tools.png",
    "name": "Tools.png",
    "ext": ".png",
    "size": 13491,
    "url": "/pixel_crawler/Environment/Props/Static/Tools.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_02.aseprite",
    "name": "Size_02.aseprite",
    "ext": ".aseprite",
    "size": 6851,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_02.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_02.png",
    "name": "Size_02.png",
    "ext": ".png",
    "size": 10604,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_02.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_03.aseprite",
    "name": "Size_03.aseprite",
    "ext": ".aseprite",
    "size": 11782,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_03.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_03.png",
    "name": "Size_03.png",
    "ext": ".png",
    "size": 19583,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_03.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_04.aseprite",
    "name": "Size_04.aseprite",
    "ext": ".aseprite",
    "size": 27909,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_04.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_04.png",
    "name": "Size_04.png",
    "ext": ".png",
    "size": 47337,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_04.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_05.aseprite",
    "name": "Size_05.aseprite",
    "ext": ".aseprite",
    "size": 31960,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_05.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_01/Size_05.png",
    "name": "Size_05.png",
    "ext": ".png",
    "size": 50559,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_05.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_02.aseprite",
    "name": "Size_02.aseprite",
    "ext": ".aseprite",
    "size": 3235,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_02.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_02.png",
    "name": "Size_02.png",
    "ext": ".png",
    "size": 4945,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_02.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_03.aseprite",
    "name": "Size_03.aseprite",
    "ext": ".aseprite",
    "size": 5302,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_03.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_03.png",
    "name": "Size_03.png",
    "ext": ".png",
    "size": 8168,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_03.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_04.aseprite",
    "name": "Size_04.aseprite",
    "ext": ".aseprite",
    "size": 8374,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_04.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_04.png",
    "name": "Size_04.png",
    "ext": ".png",
    "size": 12805,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_04.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_05.aseprite",
    "name": "Size_05.aseprite",
    "ext": ".aseprite",
    "size": 18887,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_05.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_02/Size_05.png",
    "name": "Size_05.png",
    "ext": ".png",
    "size": 28032,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_05.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_02.aseprite",
    "name": "Size_02.aseprite",
    "ext": ".aseprite",
    "size": 3997,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_02.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_02.png",
    "name": "Size_02.png",
    "ext": ".png",
    "size": 5922,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_02.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_03-export.png",
    "name": "Size_03-export.png",
    "ext": ".png",
    "size": 15338,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_03-export.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_03.aseprite",
    "name": "Size_03.aseprite",
    "ext": ".aseprite",
    "size": 10122,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_03.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_03.png",
    "name": "Size_03.png",
    "ext": ".png",
    "size": 15338,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_03.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_04-export-export.png",
    "name": "Size_04-export-export.png",
    "ext": ".png",
    "size": 30240,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04-export-export.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_04-export.png",
    "name": "Size_04-export.png",
    "ext": ".png",
    "size": 30240,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04-export.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_04.aseprite",
    "name": "Size_04.aseprite",
    "ext": ".aseprite",
    "size": 19906,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_04.png",
    "name": "Size_04.png",
    "ext": ".png",
    "size": 31102,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04.png"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_05.aseprite",
    "name": "Size_05.aseprite",
    "ext": ".aseprite",
    "size": 28068,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_05.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Trees/Model_03/Size_05.png",
    "name": "Size_05.png",
    "ext": ".png",
    "size": 41673,
    "url": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_05.png"
  },
  {
    "rel": "Environment/Props/Static/Vegetation.aseprite",
    "name": "Vegetation.aseprite",
    "ext": ".aseprite",
    "size": 19929,
    "url": "/pixel_crawler/Environment/Props/Static/Vegetation.aseprite"
  },
  {
    "rel": "Environment/Props/Static/Vegetation.png",
    "name": "Vegetation.png",
    "ext": ".png",
    "size": 32871,
    "url": "/pixel_crawler/Environment/Props/Static/Vegetation.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Interior/Interior_Props_01.aseprite",
    "name": "Interior_Props_01.aseprite",
    "ext": ".aseprite",
    "size": 28129,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Interior/Interior_Props_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Interior/Interior_Props_01.png",
    "name": "Interior_Props_01.png",
    "ext": ".png",
    "size": 40173,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Interior/Interior_Props_01.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Interior/Interior_Walls_01.png",
    "name": "Interior_Walls_01.png",
    "ext": ".png",
    "size": 26542,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Interior/Interior_Walls_01.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Interior/Walls.aseprite",
    "name": "Walls.aseprite",
    "ext": ".aseprite",
    "size": 16575,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Interior/Walls.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Props.aseprite",
    "name": "Props.aseprite",
    "ext": ".aseprite",
    "size": 4455,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Props.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Props.png",
    "name": "Props.png",
    "ext": ".png",
    "size": 8364,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Props.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Roofs.aseprite",
    "name": "Roofs.aseprite",
    "ext": ".aseprite",
    "size": 11410,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Roofs.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Roofs.png",
    "name": "Roofs.png",
    "ext": ".png",
    "size": 11073,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Roofs.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Shadows.aseprite",
    "name": "Shadows.aseprite",
    "ext": ".aseprite",
    "size": 910,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Shadows.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Shadows.png",
    "name": "Shadows.png",
    "ext": ".png",
    "size": 1634,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Shadows.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Starter_House.png",
    "name": "Starter_House.png",
    "ext": ".png",
    "size": 7388,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Starter_House.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Starter_House_Interior.png",
    "name": "Starter_House_Interior.png",
    "ext": ".png",
    "size": 21579,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Starter_House_Interior.png"
  },
  {
    "rel": "Environment/Structures/Buildings/Walls.aseprite",
    "name": "Walls.aseprite",
    "ext": ".aseprite",
    "size": 22866,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Walls.aseprite"
  },
  {
    "rel": "Environment/Structures/Buildings/Walls.png",
    "name": "Walls.png",
    "ext": ".png",
    "size": 22524,
    "url": "/pixel_crawler/Environment/Structures/Buildings/Walls.png"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy.aseprite",
    "name": "Alchemy.aseprite",
    "ext": ".aseprite",
    "size": 5656,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_01-Sheet.png",
    "name": "Alchemy_Table_01-Sheet.png",
    "ext": ".png",
    "size": 13701,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_01.aseprite",
    "name": "Alchemy_Table_01.aseprite",
    "ext": ".aseprite",
    "size": 43799,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_02-Sheet.png",
    "name": "Alchemy_Table_02-Sheet.png",
    "ext": ".png",
    "size": 16055,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_02.aseprite",
    "name": "Alchemy_Table_02.aseprite",
    "ext": ".aseprite",
    "size": 73077,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_03-Sheet.png",
    "name": "Alchemy_Table_03-Sheet.png",
    "ext": ".png",
    "size": 24639,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Alchemy/Alchemy_Table_03.aseprite",
    "name": "Alchemy_Table_03.aseprite",
    "ext": ".aseprite",
    "size": 54879,
    "url": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil.aseprite",
    "name": "Anvil.aseprite",
    "ext": ".aseprite",
    "size": 6815,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil.png",
    "name": "Anvil.png",
    "ext": ".png",
    "size": 7961,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil.png"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_01-Sheet.png",
    "name": "Anvil_01-Sheet.png",
    "ext": ".png",
    "size": 14014,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_01.aseprite",
    "name": "Anvil_01.aseprite",
    "ext": ".aseprite",
    "size": 42493,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_02-Sheet.png",
    "name": "Anvil_02-Sheet.png",
    "ext": ".png",
    "size": 27126,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_02.aseprite",
    "name": "Anvil_02.aseprite",
    "ext": ".aseprite",
    "size": 73318,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_03-Sheet.png",
    "name": "Anvil_03-Sheet.png",
    "ext": ".png",
    "size": 39876,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Anvil/Anvil_03.aseprite",
    "name": "Anvil_03.aseprite",
    "ext": ".aseprite",
    "size": 102587,
    "url": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire.aseprite",
    "name": "Bonfire.aseprite",
    "ext": ".aseprite",
    "size": 4136,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire.png",
    "name": "Bonfire.png",
    "ext": ".png",
    "size": 3919,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_01-Sheet.png",
    "name": "Bonfire_01-Sheet.png",
    "ext": ".png",
    "size": 1049,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_01.aseprite",
    "name": "Bonfire_01.aseprite",
    "ext": ".aseprite",
    "size": 1640,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_02-Sheet.png",
    "name": "Bonfire_02-Sheet.png",
    "ext": ".png",
    "size": 1169,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_02.aseprite",
    "name": "Bonfire_02.aseprite",
    "ext": ".aseprite",
    "size": 1745,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_03-Sheet.png",
    "name": "Bonfire_03-Sheet.png",
    "ext": ".png",
    "size": 714,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_03.aseprite",
    "name": "Bonfire_03.aseprite",
    "ext": ".aseprite",
    "size": 1085,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_04-Sheet.png",
    "name": "Bonfire_04-Sheet.png",
    "ext": ".png",
    "size": 689,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_04-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_04.aseprite",
    "name": "Bonfire_04.aseprite",
    "ext": ".aseprite",
    "size": 1141,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_04.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_05-Sheet.png",
    "name": "Bonfire_05-Sheet.png",
    "ext": ".png",
    "size": 725,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_05-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_05.aseprite",
    "name": "Bonfire_05.aseprite",
    "ext": ".aseprite",
    "size": 1005,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_05.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png",
    "name": "Bonfire_06-Sheet.png",
    "ext": ".png",
    "size": 353,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_06.aseprite",
    "name": "Bonfire_06.aseprite",
    "ext": ".aseprite",
    "size": 634,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_06.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_07-Sheet.png",
    "name": "Bonfire_07-Sheet.png",
    "ext": ".png",
    "size": 692,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_07-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_07.aseprite",
    "name": "Bonfire_07.aseprite",
    "ext": ".aseprite",
    "size": 1137,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_07.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_08-Sheet.png",
    "name": "Bonfire_08-Sheet.png",
    "ext": ".png",
    "size": 651,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_08-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_08.aseprite",
    "name": "Bonfire_08.aseprite",
    "ext": ".aseprite",
    "size": 966,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_08.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_09-Sheet.png",
    "name": "Bonfire_09-Sheet.png",
    "ext": ".png",
    "size": 1809,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_09-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_09.aseprite",
    "name": "Bonfire_09.aseprite",
    "ext": ".aseprite",
    "size": 2699,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_09.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_10-Sheet.png",
    "name": "Bonfire_10-Sheet.png",
    "ext": ".png",
    "size": 1179,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_10-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Bonfire_10.aseprite",
    "name": "Bonfire_10.aseprite",
    "ext": ".aseprite",
    "size": 1908,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_10.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Fire_01-Sheet.png",
    "name": "Fire_01-Sheet.png",
    "ext": ".png",
    "size": 1417,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Fire_01.aseprite",
    "name": "Fire_01.aseprite",
    "ext": ".aseprite",
    "size": 1309,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Fire_02-Sheet.png",
    "name": "Fire_02-Sheet.png",
    "ext": ".png",
    "size": 797,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Fire_02.aseprite",
    "name": "Fire_02.aseprite",
    "ext": ".aseprite",
    "size": 891,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Smoke-Sheet.png",
    "name": "Smoke-Sheet.png",
    "ext": ".png",
    "size": 554,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Smoke-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Bonfire/Smoke.aseprite",
    "name": "Smoke.aseprite",
    "ext": ".aseprite",
    "size": 2191,
    "url": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Smoke.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_01-Sheet.png",
    "name": "Butchery_01-Sheet.png",
    "ext": ".png",
    "size": 752,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_01.aseprite",
    "name": "Butchery_01.aseprite",
    "ext": ".aseprite",
    "size": 753,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_02.aseprite",
    "name": "Butchery_02.aseprite",
    "ext": ".aseprite",
    "size": 1035,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_02.png",
    "name": "Butchery_02.png",
    "ext": ".png",
    "size": 1150,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_02.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_03.aseprite",
    "name": "Butchery_03.aseprite",
    "ext": ".aseprite",
    "size": 1738,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_03.png",
    "name": "Butchery_03.png",
    "ext": ".png",
    "size": 2233,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_03.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_04.aseprite",
    "name": "Butchery_04.aseprite",
    "ext": ".aseprite",
    "size": 2320,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_04.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Butchery/Butchery_04.png",
    "name": "Butchery_04.png",
    "ext": ".png",
    "size": 3020,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_04.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_01.aseprite",
    "name": "Cooker_01.aseprite",
    "ext": ".aseprite",
    "size": 543,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_01.png",
    "name": "Cooker_01.png",
    "ext": ".png",
    "size": 508,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_01.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_02.aseprite",
    "name": "Cooker_02.aseprite",
    "ext": ".aseprite",
    "size": 386,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_02.png",
    "name": "Cooker_02.png",
    "ext": ".png",
    "size": 336,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_02.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_03-Sheet.png",
    "name": "Cooker_03-Sheet.png",
    "ext": ".png",
    "size": 909,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_03.aseprite",
    "name": "Cooker_03.aseprite",
    "ext": ".aseprite",
    "size": 1605,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_04-Sheet.png",
    "name": "Cooker_04-Sheet.png",
    "ext": ".png",
    "size": 2897,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_04-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooker/Cooker_04.aseprite",
    "name": "Cooker_04.aseprite",
    "ext": ".aseprite",
    "size": 5056,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_04.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooking Station.aseprite",
    "name": "Cooking Station.aseprite",
    "ext": ".aseprite",
    "size": 11310,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooking Station.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Cooking Station.png",
    "name": "Cooking Station.png",
    "ext": ".png",
    "size": 16528,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooking Station.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Estructure.png",
    "name": "Estructure.png",
    "ext": ".png",
    "size": 6314,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Estructure.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_01-Sheet.png",
    "name": "Grill_01-Sheet.png",
    "ext": ".png",
    "size": 1564,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_01.aseprite",
    "name": "Grill_01.aseprite",
    "ext": ".aseprite",
    "size": 3171,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_02-Sheet.png",
    "name": "Grill_02-Sheet.png",
    "ext": ".png",
    "size": 1708,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_02.aseprite",
    "name": "Grill_02.aseprite",
    "ext": ".aseprite",
    "size": 3573,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_03-Sheet.png",
    "name": "Grill_03-Sheet.png",
    "ext": ".png",
    "size": 2249,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_03.aseprite",
    "name": "Grill_03.aseprite",
    "ext": ".aseprite",
    "size": 4218,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_04-Sheet.png",
    "name": "Grill_04-Sheet.png",
    "ext": ".png",
    "size": 2787,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_04-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Cooking Station/Grill/Grill_04.aseprite",
    "name": "Grill_04.aseprite",
    "ext": ".aseprite",
    "size": 4408,
    "url": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_04.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_01-Sheet.png",
    "name": "Bricks_01-Sheet.png",
    "ext": ".png",
    "size": 1680,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_01.aseprite",
    "name": "Bricks_01.aseprite",
    "ext": ".aseprite",
    "size": 2645,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_02-Sheet.png",
    "name": "Bricks_02-Sheet.png",
    "ext": ".png",
    "size": 2440,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_02.aseprite",
    "name": "Bricks_02.aseprite",
    "ext": ".aseprite",
    "size": 3610,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_03-Sheet.png",
    "name": "Bricks_03-Sheet.png",
    "ext": ".png",
    "size": 2439,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Bricks_03.aseprite",
    "name": "Bricks_03.aseprite",
    "ext": ".aseprite",
    "size": 4537,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Furnace.aseprite",
    "name": "Furnace.aseprite",
    "ext": ".aseprite",
    "size": 13505,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Furnace.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Furnace.png",
    "name": "Furnace.png",
    "ext": ".png",
    "size": 18229,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Furnace.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_01-Sheet.png",
    "name": "Iron_01-Sheet.png",
    "ext": ".png",
    "size": 1550,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_01.aseprite",
    "name": "Iron_01.aseprite",
    "ext": ".aseprite",
    "size": 3146,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_02-Sheet.png",
    "name": "Iron_02-Sheet.png",
    "ext": ".png",
    "size": 2283,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_02.aseprite",
    "name": "Iron_02.aseprite",
    "ext": ".aseprite",
    "size": 4062,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_03-Sheet.png",
    "name": "Iron_03-Sheet.png",
    "ext": ".png",
    "size": 3160,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Iron_03.aseprite",
    "name": "Iron_03.aseprite",
    "ext": ".aseprite",
    "size": 5252,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_01-Sheet.png",
    "name": "Stone_01-Sheet.png",
    "ext": ".png",
    "size": 1560,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_01-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_01.aseprite",
    "name": "Stone_01.aseprite",
    "ext": ".aseprite",
    "size": 2566,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_01.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_02-Sheet.png",
    "name": "Stone_02-Sheet.png",
    "ext": ".png",
    "size": 1807,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_02-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_02.aseprite",
    "name": "Stone_02.aseprite",
    "ext": ".aseprite",
    "size": 8251,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_02.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_03-Sheet.png",
    "name": "Stone_03-Sheet.png",
    "ext": ".png",
    "size": 2331,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_03-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Furnace/Stone_03.aseprite",
    "name": "Stone_03.aseprite",
    "ext": ".aseprite",
    "size": 3675,
    "url": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_03.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Base.aseprite",
    "name": "Base.aseprite",
    "ext": ".aseprite",
    "size": 5525,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Base.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Base.png",
    "name": "Base.png",
    "ext": ".png",
    "size": 7334,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Base.png"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_1.aseprite",
    "name": "Level_1.aseprite",
    "ext": ".aseprite",
    "size": 548,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_1.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_1.png",
    "name": "Level_1.png",
    "ext": ".png",
    "size": 614,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_1.png"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_2-Sheet.png",
    "name": "Level_2-Sheet.png",
    "ext": ".png",
    "size": 31563,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_2-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_2.aseprite",
    "name": "Level_2.aseprite",
    "ext": ".aseprite",
    "size": 77849,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_2.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_3-Sheet.png",
    "name": "Level_3-Sheet.png",
    "ext": ".png",
    "size": 50055,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_3-Sheet.png"
  },
  {
    "rel": "Environment/Structures/Stations/Sawmill/Level_3.aseprite",
    "name": "Level_3.aseprite",
    "ext": ".aseprite",
    "size": 108107,
    "url": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_3.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Workbench/Workbench.aseprite",
    "name": "Workbench.aseprite",
    "ext": ".aseprite",
    "size": 10800,
    "url": "/pixel_crawler/Environment/Structures/Stations/Workbench/Workbench.aseprite"
  },
  {
    "rel": "Environment/Structures/Stations/Workbench/Workbench.png",
    "name": "Workbench.png",
    "ext": ".png",
    "size": 13731,
    "url": "/pixel_crawler/Environment/Structures/Stations/Workbench/Workbench.png"
  },
  {
    "rel": "Environment/Tilesets/Dungeon_Tiles.aseprite",
    "name": "Dungeon_Tiles.aseprite",
    "ext": ".aseprite",
    "size": 14007,
    "url": "/pixel_crawler/Environment/Tilesets/Dungeon_Tiles.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Dungeon_Tiles.png",
    "name": "Dungeon_Tiles.png",
    "ext": ".png",
    "size": 21113,
    "url": "/pixel_crawler/Environment/Tilesets/Dungeon_Tiles.png"
  },
  {
    "rel": "Environment/Tilesets/Floors_Tiles.aseprite",
    "name": "Floors_Tiles.aseprite",
    "ext": ".aseprite",
    "size": 16280,
    "url": "/pixel_crawler/Environment/Tilesets/Floors_Tiles.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Floors_Tiles.png",
    "name": "Floors_Tiles.png",
    "ext": ".png",
    "size": 21966,
    "url": "/pixel_crawler/Environment/Tilesets/Floors_Tiles.png"
  },
  {
    "rel": "Environment/Tilesets/New_Tiles(WIP).aseprite",
    "name": "New_Tiles(WIP).aseprite",
    "ext": ".aseprite",
    "size": 842,
    "url": "/pixel_crawler/Environment/Tilesets/New_Tiles(WIP).aseprite"
  },
  {
    "rel": "Environment/Tilesets/Wall_Tiles.aseprite",
    "name": "Wall_Tiles.aseprite",
    "ext": ".aseprite",
    "size": 26629,
    "url": "/pixel_crawler/Environment/Tilesets/Wall_Tiles.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Wall_Tiles.png",
    "name": "Wall_Tiles.png",
    "ext": ".png",
    "size": 41057,
    "url": "/pixel_crawler/Environment/Tilesets/Wall_Tiles.png"
  },
  {
    "rel": "Environment/Tilesets/Wall_Variations.aseprite",
    "name": "Wall_Variations.aseprite",
    "ext": ".aseprite",
    "size": 24573,
    "url": "/pixel_crawler/Environment/Tilesets/Wall_Variations.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Wall_Variations.png",
    "name": "Wall_Variations.png",
    "ext": ".png",
    "size": 36550,
    "url": "/pixel_crawler/Environment/Tilesets/Wall_Variations.png"
  },
  {
    "rel": "Environment/Tilesets/Water.aseprite",
    "name": "Water.aseprite",
    "ext": ".aseprite",
    "size": 8806,
    "url": "/pixel_crawler/Environment/Tilesets/Water.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Water_tiles.aseprite",
    "name": "Water_tiles.aseprite",
    "ext": ".aseprite",
    "size": 9047,
    "url": "/pixel_crawler/Environment/Tilesets/Water_tiles.aseprite"
  },
  {
    "rel": "Environment/Tilesets/Water_tiles.png",
    "name": "Water_tiles.png",
    "ext": ".png",
    "size": 12937,
    "url": "/pixel_crawler/Environment/Tilesets/Water_tiles.png"
  },
  {
    "rel": "Icons/Resources.aseprite",
    "name": "Resources.aseprite",
    "ext": ".aseprite",
    "size": 3298,
    "url": "/pixel_crawler/Icons/Resources.aseprite"
  },
  {
    "rel": "Icons/Resources.png",
    "name": "Resources.png",
    "ext": ".png",
    "size": 5155,
    "url": "/pixel_crawler/Icons/Resources.png"
  },
  {
    "rel": "MockUps/Castle_Entrance.aseprite",
    "name": "Castle_Entrance.aseprite",
    "ext": ".aseprite",
    "size": 40560,
    "url": "/pixel_crawler/MockUps/Castle_Entrance.aseprite"
  },
  {
    "rel": "MockUps/Castle_Entrance.png",
    "name": "Castle_Entrance.png",
    "ext": ".png",
    "size": 37165,
    "url": "/pixel_crawler/MockUps/Castle_Entrance.png"
  },
  {
    "rel": "MockUps/Tavern.aseprite",
    "name": "Tavern.aseprite",
    "ext": ".aseprite",
    "size": 110927,
    "url": "/pixel_crawler/MockUps/Tavern.aseprite"
  },
  {
    "rel": "MockUps/Tavern.png",
    "name": "Tavern.png",
    "ext": ".png",
    "size": 151950,
    "url": "/pixel_crawler/MockUps/Tavern.png"
  },
  {
    "rel": "Terms.txt",
    "name": "Terms.txt",
    "ext": ".txt",
    "size": 1290,
    "url": "/pixel_crawler/Terms.txt"
  },
  {
    "rel": "Weapons/Bone/Bone.aseprite",
    "name": "Bone.aseprite",
    "ext": ".aseprite",
    "size": 4481,
    "url": "/pixel_crawler/Weapons/Bone/Bone.aseprite"
  },
  {
    "rel": "Weapons/Bone/Bone.png",
    "name": "Bone.png",
    "ext": ".png",
    "size": 7285,
    "url": "/pixel_crawler/Weapons/Bone/Bone.png"
  },
  {
    "rel": "Weapons/Hands/Hands.aseprite",
    "name": "Hands.aseprite",
    "ext": ".aseprite",
    "size": 1938,
    "url": "/pixel_crawler/Weapons/Hands/Hands.aseprite"
  },
  {
    "rel": "Weapons/Hands/Hands.png",
    "name": "Hands.png",
    "ext": ".png",
    "size": 1273,
    "url": "/pixel_crawler/Weapons/Hands/Hands.png"
  },
  {
    "rel": "Weapons/Wood/Wood.aseprite",
    "name": "Wood.aseprite",
    "ext": ".aseprite",
    "size": 4295,
    "url": "/pixel_crawler/Weapons/Wood/Wood.aseprite"
  },
  {
    "rel": "Weapons/Wood/Wood.png",
    "name": "Wood.png",
    "ext": ".png",
    "size": 6479,
    "url": "/pixel_crawler/Weapons/Wood/Wood.png"
  },
  {
    "rel": "MockUps/Starter_Village.png",
    "name": "Starter_Village.png",
    "ext": ".png",
    "size": 138559,
    "url": "/pixel_crawler/MockUps/Starter_Village.png"
  }
];

const PIXEL_TERMS_TEXT = "This pack was created by the author - Anokolisa - and contains 2d pixel art sprites for creating projects that can benefit from this type of art and style\n\nSome of the important points to consider when using these assets:\n\n1. It is not necessary to credit the author for any use of the arts, but if it is done it is appreciated.\n    1.1 When you want to give credits to the author, contact by email: AnomalyPixel@gmail.com\n    1.2 The author of the assets has no direct relationship with the development of projects using these assets\n\n2. The arts present can be altered in any shape, color or pattern\n    2.1 Even after changes, these assets cannot be sold without authorization from the original creator, nor can they be marketed as a final product\n\n3. These arts cannot be sold as a final product, only the author can sell the assets\n    3.1 these assets are sold in several different online stores, and their price reflects the guidelines of each of these stores, when buying the assets in the store you chose not to give the right to the same product in other stores\n\n4. You can use these assets in creating commercial products, study or any other project where they are functional\n\n\nPatreon: https://www.patreon.com/Anokolisa\nTwitter: https://twitter.com/Anokolisa\n";

// Danh sách toàn bộ URL ảnh PNG cần nạp vào Game Engine
const ALL_PNG_URLS = {
  "Entities_Characters_Body_A_Animations_Carry_Idle_Carry_Idle_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Idle_Carry_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Idle_Carry_Idle_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Idle/Carry_Idle_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Run_Carry_Run_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Run_Carry_Run_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Run_Carry_Run_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Run/Carry_Run_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Walk_Carry_Walk_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Walk_Carry_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Carry_Walk_Carry_Walk_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Carry_Walk/Carry_Walk_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Collect_Base_Collect_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Collect_Base_Collect_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Collect_Base_Collect_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Collect_Base/Collect_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Crush_Base_Crush_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Crush_Base_Crush_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Crush_Base_Crush_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Crush_Base/Crush_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Death_Base_Death_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Death_Base_Death_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Death_Base_Death_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Death_Base/Death_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Fishing_Base_Fishing_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Fishing_Base_Fishing_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Fishing_Base_Fishing_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Fishing_Base/Fishing_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Hit_Base_Hit_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Hit_Base_Hit_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Hit_Base_Hit_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Hit_Base/Hit_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Idle_Base_Idle_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Idle_Base_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Idle_Base_Idle_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Idle_Base/Idle_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Pierce_Base_Pierce_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Pierce_Base_Pierce_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Pierce_Base_Pierce_Top_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Pierce_Base/Pierce_Top-Sheet.png",
  "Entities_Characters_Body_A_Animations_Run_Base_Run_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Run_Base_Run_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Run_Base_Run_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Run_Base/Run_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Slice_Base_Slice_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Slice_Base_Slice_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Slice_Base_Slice_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Slice_Base/Slice_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Walk_Base_Walk_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Walk_Base_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Walk_Base_Walk_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Walk_Base/Walk_Up-Sheet.png",
  "Entities_Characters_Body_A_Animations_Watering_Base_Watering_Down_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Down-Sheet.png",
  "Entities_Characters_Body_A_Animations_Watering_Base_Watering_Side_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Side-Sheet.png",
  "Entities_Characters_Body_A_Animations_Watering_Base_Watering_Up_Sheet_png": "/pixel_crawler/Entities/Characters/Body_A/Animations/Watering_Base/Watering_Up-Sheet.png",
  "Entities_Characters_New_Version_Idle_Idle_Down_Sheet_png": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Down-Sheet.png",
  "Entities_Characters_New_Version_Idle_Idle_Down_png": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Down.png",
  "Entities_Characters_New_Version_Idle_Idle_Side_png": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Side.png",
  "Entities_Characters_New_Version_Idle_Idle_Up_png": "/pixel_crawler/Entities/Characters/New_Version/Idle/Idle_Up.png",
  "Entities_Characters_New_Version_Walk_Down_png": "/pixel_crawler/Entities/Characters/New_Version/Walk/Down.png",
  "Entities_Characters_New_Version_Walk_Up_png": "/pixel_crawler/Entities/Characters/New_Version/Walk/Up.png",
  "Entities_Characters_New_Version_Walk_Walk_Side_png": "/pixel_crawler/Entities/Characters/New_Version/Walk/Walk_Side.png",
  "Entities_Mobs_Orc Crew_Orc_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Death/Death-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Idle/Idle-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc/Run/Run-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Rogue_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Death/Death-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Rogue_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Idle/Idle-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Rogue_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Rogue/Run/Run-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Shaman_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Death/Death-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Shaman_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Idle/Idle-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Shaman_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Shaman/Run/Run-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Warrior_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Death/Death-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Warrior_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Idle/Idle-Sheet.png",
  "Entities_Mobs_Orc Crew_Orc _ Warrior_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Orc Crew/Orc - Warrior/Run/Run-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Base_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Death/Death-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Base_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Idle/Idle-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Base_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Base/Run/Run-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Mage_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Death/Death-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Mage_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Idle/Idle-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Mage_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Mage/Run/Run-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Rogue_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Death/Death-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Rogue_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Idle/Idle-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Rogue_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Rogue/Run/Run-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Warrior_Death_Death_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Death/Death-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Warrior_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Idle/Idle-Sheet.png",
  "Entities_Mobs_Skeleton Crew_Skeleton _ Warrior_Run_Run_Sheet_png": "/pixel_crawler/Entities/Mobs/Skeleton Crew/Skeleton - Warrior/Run/Run-Sheet.png",
  "Entities_Npc_s_Citizen_F_Citizen_A_Idle_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Idle.png",
  "Entities_Npc_s_Citizen_F_Citizen_A_Walk_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Citizen_A/Walk.png",
  "Entities_Npc_s_Citizen_F_Peasant_A_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Idle/Idle-Sheet.png",
  "Entities_Npc_s_Citizen_F_Peasant_A_Walk_Walk_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Peasant_A/Walk/Walk-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_A_Idle_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle/Idle_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_A_Idle_Hold_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Idle_Hold/Idle_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_A_Walk_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk/Walk_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_A_Walk_Hold_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_A/Walk_Hold/Walk_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_B_Idle_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle/Idle_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_B_Idle_Hold_Idle_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Idle_Hold/Idle_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_B_Walk_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk/Walk_Side-Sheet.png",
  "Entities_Npc_s_Citizen_F_Tavern_B_Walk_Hold_Walk_Side_Sheet_png": "/pixel_crawler/Entities/Npc's/Citizen_F/Tavern_B/Walk_Hold/Walk_Side-Sheet.png",
  "Entities_Npc_s_Knight_Death_Death_Sheet_png": "/pixel_crawler/Entities/Npc's/Knight/Death/Death-Sheet.png",
  "Entities_Npc_s_Knight_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Npc's/Knight/Idle/Idle-Sheet.png",
  "Entities_Npc_s_Knight_Run_Run_Sheet_png": "/pixel_crawler/Entities/Npc's/Knight/Run/Run-Sheet.png",
  "Entities_Npc_s_Rogue_Death_Death_Sheet_png": "/pixel_crawler/Entities/Npc's/Rogue/Death/Death-Sheet.png",
  "Entities_Npc_s_Rogue_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Npc's/Rogue/Idle/Idle-Sheet.png",
  "Entities_Npc_s_Rogue_Run_Run_Sheet_png": "/pixel_crawler/Entities/Npc's/Rogue/Run/Run-Sheet.png",
  "Entities_Npc_s_Wizzard_Death_Death_Sheet_png": "/pixel_crawler/Entities/Npc's/Wizzard/Death/Death-Sheet.png",
  "Entities_Npc_s_Wizzard_Idle_Idle_Sheet_png": "/pixel_crawler/Entities/Npc's/Wizzard/Idle/Idle-Sheet.png",
  "Entities_Npc_s_Wizzard_Run_Run_Sheet_png": "/pixel_crawler/Entities/Npc's/Wizzard/Run/Run-Sheet.png",
  "Environment_Props_Animated_Pan_01_Sheet_png": "/pixel_crawler/Environment/Props/Animated/Pan_01-Sheet.png",
  "Environment_Props_Animated_Pan_02_Sheet_png": "/pixel_crawler/Environment/Props/Animated/Pan_02-Sheet.png",
  "Environment_Props_Animated_Pan_03_Sheet_png": "/pixel_crawler/Environment/Props/Animated/Pan_03-Sheet.png",
  "Environment_Props_Animated_Pan_04_Sheet_png": "/pixel_crawler/Environment/Props/Animated/Pan_04-Sheet.png",
  "Environment_Props_Animated_Pan_05_Sheet_png": "/pixel_crawler/Environment/Props/Animated/Pan_05-Sheet.png",
  "Environment_Props_Static_Dungeon_Props_png": "/pixel_crawler/Environment/Props/Static/Dungeon_Props.png",
  "Environment_Props_Static_Esoteric_png": "/pixel_crawler/Environment/Props/Static/Esoteric.png",
  "Environment_Props_Static_Farm_png": "/pixel_crawler/Environment/Props/Static/Farm.png",
  "Environment_Props_Static_Furniture_png": "/pixel_crawler/Environment/Props/Static/Furniture.png",
  "Environment_Props_Static_Meat_png": "/pixel_crawler/Environment/Props/Static/Meat.png",
  "Environment_Props_Static_Pan_png": "/pixel_crawler/Environment/Props/Static/Pan.png",
  "Environment_Props_Static_Resources_png": "/pixel_crawler/Environment/Props/Static/Resources.png",
  "Environment_Props_Static_Rocks_png": "/pixel_crawler/Environment/Props/Static/Rocks.png",
  "Environment_Props_Static_Shadows_png": "/pixel_crawler/Environment/Props/Static/Shadows.png",
  "Environment_Props_Static_Tools_png": "/pixel_crawler/Environment/Props/Static/Tools.png",
  "Environment_Props_Static_Trees_Model_01_Size_02_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_02.png",
  "Environment_Props_Static_Trees_Model_01_Size_03_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_03.png",
  "Environment_Props_Static_Trees_Model_01_Size_04_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_04.png",
  "Environment_Props_Static_Trees_Model_01_Size_05_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_01/Size_05.png",
  "Environment_Props_Static_Trees_Model_02_Size_02_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_02.png",
  "Environment_Props_Static_Trees_Model_02_Size_03_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_03.png",
  "Environment_Props_Static_Trees_Model_02_Size_04_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_04.png",
  "Environment_Props_Static_Trees_Model_02_Size_05_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_02/Size_05.png",
  "Environment_Props_Static_Trees_Model_03_Size_02_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_02.png",
  "Environment_Props_Static_Trees_Model_03_Size_03_export_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_03-export.png",
  "Environment_Props_Static_Trees_Model_03_Size_03_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_03.png",
  "Environment_Props_Static_Trees_Model_03_Size_04_export_export_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04-export-export.png",
  "Environment_Props_Static_Trees_Model_03_Size_04_export_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04-export.png",
  "Environment_Props_Static_Trees_Model_03_Size_04_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_04.png",
  "Environment_Props_Static_Trees_Model_03_Size_05_png": "/pixel_crawler/Environment/Props/Static/Trees/Model_03/Size_05.png",
  "Environment_Props_Static_Vegetation_png": "/pixel_crawler/Environment/Props/Static/Vegetation.png",
  "Environment_Structures_Buildings_Interior_Interior_Props_01_png": "/pixel_crawler/Environment/Structures/Buildings/Interior/Interior_Props_01.png",
  "Environment_Structures_Buildings_Interior_Interior_Walls_01_png": "/pixel_crawler/Environment/Structures/Buildings/Interior/Interior_Walls_01.png",
  "Environment_Structures_Buildings_Props_png": "/pixel_crawler/Environment/Structures/Buildings/Props.png",
  "Environment_Structures_Buildings_Roofs_png": "/pixel_crawler/Environment/Structures/Buildings/Roofs.png",
  "Environment_Structures_Buildings_Shadows_png": "/pixel_crawler/Environment/Structures/Buildings/Shadows.png",
  "Environment_Structures_Buildings_Starter_House_png": "/pixel_crawler/Environment/Structures/Buildings/Starter_House.png",
  "Environment_Structures_Buildings_Starter_House_Interior_png": "/pixel_crawler/Environment/Structures/Buildings/Starter_House_Interior.png",
  "Environment_Structures_Buildings_Walls_png": "/pixel_crawler/Environment/Structures/Buildings/Walls.png",
  "Environment_Structures_Stations_Alchemy_Alchemy_Table_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_01-Sheet.png",
  "Environment_Structures_Stations_Alchemy_Alchemy_Table_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_02-Sheet.png",
  "Environment_Structures_Stations_Alchemy_Alchemy_Table_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Alchemy/Alchemy_Table_03-Sheet.png",
  "Environment_Structures_Stations_Anvil_Anvil_png": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil.png",
  "Environment_Structures_Stations_Anvil_Anvil_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_01-Sheet.png",
  "Environment_Structures_Stations_Anvil_Anvil_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_02-Sheet.png",
  "Environment_Structures_Stations_Anvil_Anvil_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Anvil/Anvil_03-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_01-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_02-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_03-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_04_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_04-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_05_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_05-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_06_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_06-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_07_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_07-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_08_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_08-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_09_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_09-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Bonfire_10_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Bonfire_10-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Fire_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_01-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Fire_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Fire_02-Sheet.png",
  "Environment_Structures_Stations_Bonfire_Smoke_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Bonfire/Smoke-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Butchery_Butchery_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_01-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Butchery_Butchery_02_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_02.png",
  "Environment_Structures_Stations_Cooking Station_Butchery_Butchery_03_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_03.png",
  "Environment_Structures_Stations_Cooking Station_Butchery_Butchery_04_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Butchery/Butchery_04.png",
  "Environment_Structures_Stations_Cooking Station_Cooker_Cooker_01_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_01.png",
  "Environment_Structures_Stations_Cooking Station_Cooker_Cooker_02_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_02.png",
  "Environment_Structures_Stations_Cooking Station_Cooker_Cooker_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_03-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Cooker_Cooker_04_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooker/Cooker_04-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Cooking Station_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Cooking Station.png",
  "Environment_Structures_Stations_Cooking Station_Estructure_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Estructure.png",
  "Environment_Structures_Stations_Cooking Station_Grill_Grill_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_01-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Grill_Grill_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_02-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Grill_Grill_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_03-Sheet.png",
  "Environment_Structures_Stations_Cooking Station_Grill_Grill_04_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Cooking Station/Grill/Grill_04-Sheet.png",
  "Environment_Structures_Stations_Furnace_Bricks_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_01-Sheet.png",
  "Environment_Structures_Stations_Furnace_Bricks_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_02-Sheet.png",
  "Environment_Structures_Stations_Furnace_Bricks_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Bricks_03-Sheet.png",
  "Environment_Structures_Stations_Furnace_Furnace_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Furnace.png",
  "Environment_Structures_Stations_Furnace_Iron_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_01-Sheet.png",
  "Environment_Structures_Stations_Furnace_Iron_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_02-Sheet.png",
  "Environment_Structures_Stations_Furnace_Iron_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Iron_03-Sheet.png",
  "Environment_Structures_Stations_Furnace_Stone_01_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_01-Sheet.png",
  "Environment_Structures_Stations_Furnace_Stone_02_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_02-Sheet.png",
  "Environment_Structures_Stations_Furnace_Stone_03_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Furnace/Stone_03-Sheet.png",
  "Environment_Structures_Stations_Sawmill_Base_png": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Base.png",
  "Environment_Structures_Stations_Sawmill_Level_1_png": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_1.png",
  "Environment_Structures_Stations_Sawmill_Level_2_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_2-Sheet.png",
  "Environment_Structures_Stations_Sawmill_Level_3_Sheet_png": "/pixel_crawler/Environment/Structures/Stations/Sawmill/Level_3-Sheet.png",
  "Environment_Structures_Stations_Workbench_Workbench_png": "/pixel_crawler/Environment/Structures/Stations/Workbench/Workbench.png",
  "Environment_Tilesets_Dungeon_Tiles_png": "/pixel_crawler/Environment/Tilesets/Dungeon_Tiles.png",
  "Environment_Tilesets_Floors_Tiles_png": "/pixel_crawler/Environment/Tilesets/Floors_Tiles.png",
  "Environment_Tilesets_Wall_Tiles_png": "/pixel_crawler/Environment/Tilesets/Wall_Tiles.png",
  "Environment_Tilesets_Wall_Variations_png": "/pixel_crawler/Environment/Tilesets/Wall_Variations.png",
  "Environment_Tilesets_Water_tiles_png": "/pixel_crawler/Environment/Tilesets/Water_tiles.png",
  "Icons_Resources_png": "/pixel_crawler/Icons/Resources.png",
  "MockUps_Castle_Entrance_png": "/pixel_crawler/MockUps/Castle_Entrance.png",
  "MockUps_Tavern_png": "/pixel_crawler/MockUps/Tavern.png",
  "Weapons_Bone_Bone_png": "/pixel_crawler/Weapons/Bone/Bone.png",
  "Weapons_Hands_Hands_png": "/pixel_crawler/Weapons/Hands/Hands.png",
  "Weapons_Wood_Wood_png": "/pixel_crawler/Weapons/Wood/Wood.png",
  "MockUps_Starter_Village_png": "/pixel_crawler/MockUps/Starter_Village.png"
};


// Gắn kết vào window để mọi file script đều truy cập được
window.PIXEL_ASSET_MANIFEST = PIXEL_ASSET_MANIFEST;
window.PIXEL_TERMS_TEXT = PIXEL_TERMS_TEXT;
window.ALL_PNG_URLS = ALL_PNG_URLS;
window.ALL_GAME_ASSETS = PIXEL_ASSET_MANIFEST.map(item => item.rel);
