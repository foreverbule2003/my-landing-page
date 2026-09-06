/**
 * 2024 京都・嵐山・宇治 8日旅 — 行程資料
 * ============================================================
 * 【回顧型旅程】本檔案由 Google Maps 時間軸紀錄（2024/03/09 - 03/16）整理而成，
 * 屬「已完成旅程」的實際足跡回顧，非事前規劃稿。
 *
 * 資料來源與限制：
 *   - 時間與地點：Google Maps 時間軸截圖（逐日逐段）
 *   - 航班：訂位紀錄截圖（表定時刻）；時間軸的實際起降時刻另記於 note
 *   - 時間軸僅記錄「移動段」與「停留點」，未記錄消費金額、房價
 *   - 標註「時間軸未記錄」者代表原始資料缺漏，非推測值
 *   - 3/12 深夜與 3/14 傍晚的最末段行程在截圖中被裁切，以現有段落為準
 * ============================================================
 */

export const TRIP_ID = "2024-kyoto";

// ★ 旅程元資料
export const tripMeta = {
  id: TRIP_ID,
  badge: "JP · KYO · 2024 · 8D · 回顧",
  title: "京都",
  subtitle: "嵐山・宇治 8日旅",
  footer: "© 2024 京都・嵐山・宇治 8日旅（Google Maps 時間軸回顧）",
  heroImage:
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
  nights: 7,
  exchangeRate: 0.21,
  exchangeRateLabel: "¥1 ≈ NT$0.21（2024/03 概值）",
};

// ★ 車站名稱對照表
export const stationMapping = {
  dayLabel: "Day 1-8",
  title: "車站名稱對照表",
  stations: [
    {
      zh: "關西國際機場",
      ja: "関西国際空港 (かんさいこくさいくうこう)",
      en: "Kansai International Airport",
    },
    { zh: "京都車站", ja: "京都駅 (きょうとえき)", en: "Kyoto Station" },
    { zh: "東福寺", ja: "東福寺 (とうふくじ)", en: "Tofukuji" },
    { zh: "七條", ja: "七条 (しちじょう)", en: "Shichijo" },
    { zh: "祇園四條", ja: "祇園四条 (ぎおんしじょう)", en: "Gion-Shijo" },
    {
      zh: "京都河原町",
      ja: "京都河原町 (きょうとかわらまち)",
      en: "Kyoto-Kawaramachi",
    },
    { zh: "四條大宮", ja: "四条大宮 (しじょうおおみや)", en: "Shijo-Omiya" },
    {
      zh: "嵐山（京福電鐵）",
      ja: "嵐山 (あらしやま)",
      en: "Arashiyama (Randen)",
    },
    { zh: "嵯峨嵐山", ja: "嵯峨嵐山 (さがあらしやま)", en: "Saga-Arashiyama" },
  ],
};

// ★ 天氣預報（回顧型旅程，時間軸未記錄當日天氣）
export const weatherData = {
  sourceNote: "回顧型旅程，時間軸未記錄當日天氣",
  sourceUrl: "https://tenki.jp/",
  days: [],
};

// ★ 航班資訊（航班號與起飛時刻未記錄於時間軸，僅保留抵達／起飛實際觀測值）
export const flightData = {
  outbound: {
    airline: "臺灣虎航 tigerair",
    flightNo: "IT212",
    date: "03/09 (六)",
    time: { depart: "12:05", arrive: "15:30" },
    airport: { depart: "TPE 桃園", arrive: "KIX 關西" },
    terminal: { depart: "—", arrive: "—" },
    duration: "2h25m",
    note: "⚠️ 無免費託運行李｜時間軸實際紀錄 15:31 抵達關西國際機場",
  },
  inbound: {
    airline: "泰國越捷航空 Thai Vietjet",
    flightNo: "VZ567",
    date: "03/16 (六)",
    time: { depart: "11:00", arrive: "13:10" },
    airport: { depart: "KIX 關西", arrive: "TPE 桃園" },
    terminal: { depart: "T1", arrive: "T1" },
    duration: "3h10m",
    note: "⚠️ 無免費託運行李｜時間軸實際紀錄 11:10 起飛、13:23 落地，飛行 1,789 公里；14:37 轉乘機場捷運（16 公里 / 18 分）",
  },
};

// ★ 行程概覽
export const overviewData = [
  {
    day: 1,
    date: "3/9 (六)",
    title: "抵達關西・京都車站購物",
    hotel: "Hotel SUI Kyoto Kiyomizu",
  },
  {
    day: 2,
    date: "3/10 (日)",
    title: "東山散策・京都 BAL",
    hotel: "Hotel SUI Kyoto Kiyomizu",
  },
  {
    day: 3,
    date: "3/11 (一)",
    title: "宇治半日・東福寺・河原町",
    hotel: "Hotel SUI Kyoto Kiyomizu",
  },
  {
    day: 4,
    date: "3/12 (二)",
    title: "寺町京極商店街・錢湯之夜",
    hotel: "Hotel SUI Kyoto Kiyomizu",
  },
  {
    day: 5,
    date: "3/13 (三)",
    title: "移居嵐山・風風之湯",
    hotel: "嵐翁居 Ranohkyo",
  },
  { day: 6, date: "3/14 (四)", title: "嵐山慢遊全日", hotel: "嵐山飯店" },
  {
    day: 7,
    date: "3/15 (五)",
    title: "京都採買日・AEON・唐吉訶德",
    hotel: "京都站前 APA 別墅飯店",
  },
  { day: 8, date: "3/16 (六)", title: "關西機場返台", hotel: "✈️ 回家" },
];

// ★ 每日行程（依時間軸逐段還原）
export const itineraryData = [
  {
    phase: "第一階段：京都東山 (Day 1-4)",
    days: [
      {
        day: 1,
        date: "3/9 (六)",
        title: "抵達關西・京都車站購物",
        image:
          "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 15:30 落地即衝京都，友都八喜逛到打烊才進飯店",
        activities: [
          {
            time: "15:31",
            text: "關西國際機場",
            subText:
              "臺灣虎航 IT212（TPE 12:05 → KIX 15:30）落地｜停留至 17:15（入境與交通轉乘）",
            note: "Izumisano, Osaka 549-0001",
            transport: { line: "JR 關西機場線", station: "関西空港" },
            map: { type: "search", query: "Kansai International Airport" },
          },
          {
            time: "18:37",
            text: "京都車站",
            subText:
              "17:15 自關西機場出發，火車 4 段轉乘約 100 公里 / 1h22m 抵達｜停留 26 分",
            note: "Higashishiokoji Kamadonocho, 下京區",
            transport: { line: "JR 特急", station: "関西空港 → 京都" },
            map: { type: "search", query: "Kyoto Station" },
          },
          {
            time: "19:03",
            text: "友都八喜 京都店（ヨドバシカメラ）",
            subText: "Shimogyo Ward, Higashishiokoji｜停留 2 小時 26 分",
            tips: "地點紀錄：Higashishiokojicho",
            map: { type: "search", query: "Yodobashi Camera Kyoto" },
          },
          {
            time: "21:43",
            text: "Azuchicho（安土町）",
            subText: "下京區｜停留 10 分",
          },
          {
            time: "21:59",
            text: "🏨 Hotel SUI Kyoto Kiyomizu 入住",
            subText: "Higashiyama Ward, Sujakuc…",
            map: { type: "search", query: "Hotel SUI Kyoto Kiyomizu" },
          },
        ],
      },
      {
        day: 2,
        date: "3/10 (日)",
        title: "東山散策・京都 BAL",
        image:
          "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 全日步行 3 公里、在外 10 小時 20 分的純散步日",
        activities: [
          {
            time: "07:14",
            text: "離開 Hotel SUI Kyoto Kiyomizu",
            subText: "當日統計：步行 3km / 10h20m・公車 4km / 44m・3 次造訪",
            note: "07:14-14:02 於東山區一帶步行，時間軸未記錄具體停留點",
          },
          {
            time: "17:54",
            text: "京都 BAL",
            subText: "251 Yamazakichō, Nakagyo Ward｜停留 1 小時 30 分",
            tips: "地點紀錄：Yamazakicho",
            map: { type: "search", query: "BAL Kyoto Nakagyo" },
          },
          {
            time: "19:47",
            text: "🏨 Hotel SUI Kyoto Kiyomizu",
          },
        ],
      },
      {
        day: 3,
        date: "3/11 (一)",
        title: "宇治半日・東福寺・河原町",
        image:
          "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 中村藤吉本店坐足 1 小時 43 分，回程一路電車跳站到河原町",
        activities: [
          {
            time: "10:22",
            text: "離開 Hotel SUI Kyoto Kiyomizu",
            subText:
              "當日統計：火車 12km / 48m・步行 2km / 3h16m・開車 5km / 27m",
          },
          {
            time: "13:52",
            text: "Appro 食品館 宇治店",
            subText: "Myōraku-164 Uji｜停留 2 小時 5 分",
            map: { type: "search", query: "Appro Uji Kyoto" },
          },
          {
            time: "15:57",
            text: "中村藤吉本店 宇治本店",
            subText: "Ichiban-10 Uji｜停留 1 小時 43 分",
            isFood: true,
            map: { type: "search", query: "Nakamura Tokichi Honten Uji" },
          },
          {
            time: "18:12",
            text: "東福寺",
            subText: "12 Chome Honmachi, 東山區｜停留 17 分",
            map: { type: "search", query: "Tofukuji Temple Kyoto" },
          },
          {
            time: "18:45",
            text: "京都河原町",
            subText:
              "18:29 自東福寺搭京阪，經七條（停 4 分）、祇園四條抵達｜停留 2 小時 20 分",
            note: "河原町西入, 下京區",
            transport: { line: "京阪本線", station: "東福寺 → 京都河原町" },
            map: { type: "search", query: "Kyoto Kawaramachi Station" },
          },
          {
            time: "21:27",
            text: "🏨 Hotel SUI Kyoto Kiyomizu",
          },
        ],
      },
      {
        day: 4,
        date: "3/12 (二)",
        title: "寺町京極商店街・錢湯之夜",
        image:
          "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 商店街泡了近 4 小時，收在白山湯錢湯",
        activities: [
          {
            time: "11:07",
            text: "離開 Hotel SUI Kyoto Kiyomizu",
            subText: "當日統計：開車 2km / 27m・步行 2km / 16h22m・4 次造訪",
          },
          {
            time: "11:34",
            text: "都野菜 賀茂 烏丸店",
            subText: "Ōgisakayac…, 下京區｜停留 1 小時 15 分",
            isFood: true,
            map: { type: "search", query: "Miyakoyasai Kamo Karasuma Kyoto" },
          },
          {
            time: "12:49",
            text: "寺町京極商店街",
            subText: "下京區 寺町通｜停留 3 小時 52 分",
            note: "地點紀錄：Okonomiyaki Mr Young Men（大阪燒餐廳）",
            isFood: true,
            map: { type: "search", query: "Teramachi Kyogoku Shopping Street" },
          },
          {
            time: "21:45",
            text: "白山湯 高辻店（錢湯）",
            subText: "665 Funayachō, 下京區｜停留 48 分",
            note: "地點紀錄：こりょうりひろめ（日式餐廳）",
            tips: "⚠️ 時間軸截圖於此裁切，22:33 之後的返程細節未完整記錄",
            map: { type: "search", query: "Hakusanyu Takatsuji Kyoto" },
          },
        ],
      },
    ],
  },
  {
    phase: "第二階段：嵐山 (Day 5-6)",
    days: [
      {
        day: 5,
        date: "3/13 (三)",
        title: "移居嵐山・風風之湯",
        image:
          "https://images.unsplash.com/photo-1503640538573-148065ba4904?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 從市區搬到嵐山，泡完足湯直接住進嵐翁居",
        activities: [
          {
            time: "09:51",
            text: "Shijoomiyacho（四条大宮）",
            subText: "下京區｜停留 42 分",
            note: "前段步行 850 公尺、11 小時 18 分（含夜間住宿時段）",
          },
          {
            time: "10:57",
            text: "嵐山（京福電氣鐵道）",
            subText: "嵯峨天龍寺, Ukyo Ward｜停留 5 分",
            transport: { line: "京福電鐵 嵐山本線", station: "嵐山" },
            map: { type: "search", query: "Randen Arashiyama Station" },
          },
          {
            time: "11:02",
            text: "Arashiyama Nishiichikawacho",
            subText: "西京區｜停留 53 分",
          },
          {
            time: "17:07",
            text: "Yojiya Cafe（よーじや咖啡）",
            subText: "2 Sagatenryūji Tateishichō, Ukyo Ward｜停留 35 分",
            isFood: true,
            map: { type: "search", query: "Yojiya Cafe Arashiyama" },
          },
          {
            time: "19:11",
            text: "風風之湯（ふらっと嵐山）",
            subText: "1 Arashiyama Kamikawarachō, 西京區｜停留 2 小時 4 分",
            map: { type: "search", query: "Fu Fu No Yu Arashiyama" },
          },
          {
            time: "21:15",
            text: "🏨 嵐翁居 Ranohkyo（らんおうきょ）入住",
            subText: "32-5 Arashiyama Nakaoshitachō, 西京區",
            map: { type: "search", query: "Ranohkyo Arashiyama" },
          },
        ],
      },
      {
        day: 6,
        date: "3/14 (四)",
        title: "嵐山慢遊全日",
        image:
          "https://images.unsplash.com/photo-1522383225653-ed111181a951?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 一整天沒離開嵐山：走了 7 公里、8 次造訪",
        activities: [
          {
            time: "08:20",
            text: "離開 嵐翁居 Ranohkyo",
            subText: "當日統計：步行 7km / 6h29m・8 次造訪",
          },
          {
            time: "09:49",
            text: "Sagatenryuji Tsukurimichicho（嵯峨天龍寺造路町）",
            subText: "右京區｜停留 34 分",
          },
          {
            time: "13:33",
            text: "Bread, Espresso & 嵐山庭園",
            subText:
              "45-15 Sagatenryūji Susukinobabachō, 右京區｜停留 2 小時 23 分",
            isFood: true,
            map: { type: "search", query: "Bread Espresso Arashiyama Garden" },
          },
          {
            time: "16:13",
            text: "🏨 嵐山飯店 入住",
            subText: "1-3 Arashiyama Kamikawarachō, 西京區｜停留 36 分",
            map: { type: "search", query: "Arashiyama Hotel Kyoto" },
          },
          {
            time: "17:31",
            text: "Gourmet City Saga（嵯峨超市）",
            subText: "自嵐山飯店步行 350 公尺・42 分",
            tips: "⚠️ 時間軸截圖於此裁切，當晚後續行程未完整記錄",
            map: { type: "search", query: "Gourmet City Saga Kyoto" },
          },
        ],
      },
    ],
  },
  {
    phase: "第三階段：京都採買與返程 (Day 7-8)",
    days: [
      {
        day: 7,
        date: "3/15 (五)",
        title: "京都採買日・AEON・唐吉訶德",
        image:
          "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1200&auto=format&fit=crop",
        highlight:
          "✨ 最後採買日：AEON MALL → ASTY → mina → 唐吉訶德一路掃到晚上",
        activities: [
          {
            time: "10:02",
            text: "離開 嵐山飯店",
            subText:
              "當日統計：步行 3km / 3h1m・火車 3km / 13m・公車 7km / 40m",
          },
          {
            time: "11:18",
            text: "都野菜 賀茂 烏丸店（二訪）",
            subText: "Ōgisakayac…, 下京區｜停留 1 小時 3 分",
            isFood: true,
            map: { type: "search", query: "Miyakoyasai Kamo Karasuma Kyoto" },
          },
          {
            time: "12:56",
            text: "京都車站",
            subText: "停留 1 小時 37 分",
            note: "地點紀錄：京都車站大樓（商業園區）、Higashishiokoji Takakuracho",
            map: { type: "search", query: "Kyoto Station Building" },
          },
          {
            time: "14:39",
            text: "AEON MALL KYOTO",
            subText: "1 Nishikujō Toriiguchichō, 南區｜停留 2 小時 9 分",
            note: "地點紀錄：UNIQLO、大創 DAISO",
            map: { type: "search", query: "AEON MALL Kyoto" },
          },
          {
            time: "16:50",
            text: "京都車站 · ASTY 京都",
            subText: "停留 57 分（大型購物中心）",
            map: { type: "search", query: "ASTY Kyoto" },
          },
          {
            time: "18:56",
            text: "mina Kyoto",
            subText: "Daikokuchō, 中京區｜停留 41 分",
            map: { type: "search", query: "mina Kyoto" },
          },
          {
            time: "19:37",
            text: "唐吉訶德 京都四條河原町店",
            subText: "Shioyachō, 中京區｜停留 59 分",
            note: "地點紀錄：Shabu-Shabu Tajimaya Donki Hotte（壽喜燒和涮涮鍋餐廳）",
            isFood: true,
            map: {
              type: "search",
              query: "Don Quijote Kyoto Shijo Kawaramachi",
            },
          },
          {
            time: "21:52",
            text: "🏨 京都站前 APA 別墅飯店 入住",
            subText: "Shiokōjichō, 下京區",
            map: { type: "search", query: "APA Hotel Kyoto Eki Higashi" },
          },
        ],
      },
      {
        day: 8,
        date: "3/16 (六)",
        title: "關西機場返台",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
        highlight: "✨ 早班車直奔關空，越捷 VZ567 於 13:23 落地桃園",
        activities: [
          {
            time: "07:20",
            text: "離開 京都站前 APA 別墅飯店",
            subText:
              "當日統計：步行 2km / 1h・火車 98km / 1h18m・飛機 1,789km / 3h12m",
          },
          {
            time: "09:05",
            text: "關西國際機場",
            subText:
              "07:47 自京都車站搭 JR HARUKA（98 公里 / 1h18m）抵達｜停留 2 小時 5 分（報到與出境）",
            transport: { line: "JR 特急 HARUKA", station: "京都 → 関西空港" },
            map: { type: "search", query: "Kansai International Airport" },
          },
          {
            time: "13:23",
            text: "臺灣桃園國際機場",
            subText:
              "泰國越捷 VZ567（KIX 11:00 → TPE 13:10）落地｜停留 1 小時 14 分後轉機場捷運返家",
            note: "33758 桃園市大園區三石里航站南路 9 號",
            transport: { line: "桃園機場捷運", station: "機場第一航廈 → 市區" },
          },
        ],
      },
    ],
  },
];

// ★ 預算明細（回顧型旅程；時間軸不含金額資料）
export const budgetData = [
  { item: "機票", cost: 0, note: "時間軸未記錄金額" },
  {
    item: "交通",
    cost: 0,
    note: "含 JR / 京阪 / 京福 / 市巴士 / 租車，未記錄金額",
  },
  { item: "住宿", cost: 0, note: "7 晚 4 間飯店，未記錄金額" },
  { item: "餐飲", cost: 0, note: "未記錄金額" },
  {
    item: "購物/景點",
    cost: 0,
    note: "友都八喜 / AEON / 唐吉訶德 等，未記錄金額",
  },
];

// ★ 每日實際交通路線（依時間軸還原）
export const recommendedRoutes = [
  {
    id: 1,
    day: "Day 1 (3/9 六)",
    name: "關西機場 → 京都車站",
    origin: "Kansai International Airport",
    destination: "Kyoto Station",
    type: "route",
    steps: [
      {
        line: "JR 特急（4 段轉乘）",
        type: "train",
        station: "関西空港 → 京都",
        duration: "1h22m（17:15-18:37）",
        note: "時間軸分段：11km/9分 → 35km/32分 → 11km/15分 → 43km/26分",
      },
      {
        line: "市巴士",
        type: "bus",
        station: "京都車站周邊 → 安土町",
        duration: "8分（21:35-21:43）",
        fare: "1.5 公里",
      },
    ],
  },
  {
    id: 2,
    day: "Day 2 (3/10 日)",
    name: "東山 → 京都 BAL 往返",
    origin: "Higashiyama Ward, Kyoto",
    destination: "BAL Kyoto",
    type: "route",
    steps: [
      {
        line: "市巴士",
        type: "bus",
        station: "東山區 → 中京區",
        duration: "21分（14:02-14:23）",
        fare: "2.5 公里",
      },
      {
        line: "市巴士",
        type: "bus",
        station: "中京區 → 東山區（回程）",
        duration: "23分（19:24-19:47）",
        fare: "1.9 公里",
      },
    ],
  },
  {
    id: 3,
    day: "Day 3 (3/11 一)",
    name: "京都 → 宇治 → 東福寺 → 河原町",
    origin: "Kyoto City",
    destination: "Kyoto-Kawaramachi",
    type: "route",
    steps: [
      {
        line: "京阪本線",
        type: "train",
        station: "清水五条 一帶 → 市區",
        duration: "10分（10:22-10:32）",
        fare: "3.0 公里",
      },
      {
        line: "自駕",
        type: "bus",
        station: "京都市區 → 宇治",
        duration: "27分（13:26-13:52）",
        fare: "5.1 公里",
        note: "時間軸判定為「開車」",
      },
      {
        line: "JR 奈良線",
        type: "train",
        station: "宇治 → 東福寺",
        duration: "32分（17:40-18:12）",
        fare: "8.1 公里",
      },
      {
        line: "京阪本線",
        type: "train",
        station: "東福寺 → 七條 → 祇園四條 → 京都河原町",
        duration: "16分（18:29-18:45）",
        note: "站間短距跳站，含七條停留 4 分",
      },
    ],
  },
  {
    id: 4,
    day: "Day 4 (3/12 二)",
    name: "東山 → 烏丸（自駕）",
    origin: "Higashiyama Ward, Kyoto",
    destination: "Karasuma, Shimogyo Ward",
    type: "route",
    steps: [
      {
        line: "自駕",
        type: "bus",
        station: "東山區 → 下京區 烏丸",
        duration: "27分（11:07-11:34）",
        fare: "2.5 公里",
      },
    ],
  },
  {
    id: 5,
    day: "Day 5 (3/13 三)",
    name: "四条大宮 → 嵐山",
    origin: "Shijo-Omiya",
    destination: "Randen Arashiyama Station",
    type: "route",
    steps: [
      {
        line: "自駕",
        type: "bus",
        station: "下京區 → 嵐山",
        duration: "24分（10:33-10:57）",
        fare: "3.7 公里",
      },
      {
        line: "京福電鐵 嵐山本線",
        type: "train",
        station: "嵐山站",
        duration: "5分停留（10:57-11:02）",
        note: "時間軸記錄為造訪點，非乘車段",
      },
    ],
  },
  {
    id: 6,
    day: "Day 6 (3/14 四)",
    name: "嵐山區域內（全步行）",
    origin: "Ranohkyo Arashiyama",
    destination: "Arashiyama Hotel",
    type: "route",
    steps: [
      {
        line: "步行",
        type: "bike",
        station: "嵐翁居 → 嵯峨天龍寺 → 嵐山飯店",
        duration: "全日 6h29m",
        fare: "累計 7 公里",
        note: "當日無任何大眾運輸紀錄",
      },
    ],
  },
  {
    id: 7,
    day: "Day 7 (3/15 五)",
    name: "嵐山 → 京都市區採買動線",
    origin: "Saga-Arashiyama Station",
    destination: "Kyoto Station",
    type: "route",
    steps: [
      {
        line: "JR 嵯峨野線",
        type: "train",
        station: "嵯峨嵐山 → 京都",
        duration: "13分（11:05-11:18）",
        fare: "2.6 公里",
      },
      {
        line: "市巴士",
        type: "bus",
        station: "烏丸 → 京都車站方向",
        duration: "7分（12:23-12:31）",
        fare: "1.4 公里",
      },
      {
        line: "市巴士",
        type: "bus",
        station: "京都車站 → 四條河原町",
        duration: "23分（18:32-18:56）",
        fare: "2.9 公里",
      },
      {
        line: "市巴士",
        type: "bus",
        station: "四條河原町 → 京都車站前",
        duration: "9分（21:43-21:52）",
        fare: "2.5 公里",
      },
    ],
  },
  {
    id: 8,
    day: "Day 8 (3/16 六)",
    name: "京都 → 關西機場 → 桃園",
    origin: "Kyoto Station",
    destination: "Taoyuan International Airport",
    type: "route",
    steps: [
      {
        line: "JR 特急 HARUKA",
        type: "train",
        station: "京都 → 関西空港",
        duration: "1h18m（07:47-09:05）",
        fare: "98 公里",
      },
      {
        line: "✈️ 國際線",
        type: "shinkansen",
        station: "KIX 關西 → TPE 桃園",
        duration: "3h12m（11:10-13:23）",
        fare: "1,789 公里",
      },
      {
        line: "桃園機場捷運",
        type: "train",
        station: "機場第一航廈 → 市區",
        duration: "18分（14:37-14:54）",
        fare: "16 公里",
      },
    ],
  },
];

// ★ 實用連結
export const usefulLinks = {
  categories: [
    {
      type: "hotel",
      label: "住宿",
      icon: "Hotel",
      items: [
        {
          name: "Hotel SUI Kyoto Kiyomizu",
          day: "Day 1-4",
          url: "https://www.google.com/maps/search/?api=1&query=Hotel+SUI+Kyoto+Kiyomizu",
        },
        {
          name: "嵐翁居 Ranohkyo",
          day: "Day 5",
          url: "https://www.google.com/maps/search/?api=1&query=Ranohkyo+Arashiyama",
        },
        {
          name: "嵐山飯店",
          day: "Day 6",
          url: "https://www.google.com/maps/search/?api=1&query=Arashiyama+Hotel+Kyoto",
        },
        {
          name: "京都站前 APA 別墅飯店",
          day: "Day 7",
          url: "https://www.google.com/maps/search/?api=1&query=APA+Hotel+Kyoto+Eki+Higashi",
        },
      ],
    },
    {
      type: "attraction",
      label: "景點",
      icon: "Star",
      items: [
        {
          name: "東福寺",
          day: "Day 3",
          url: "https://www.google.com/maps/search/?api=1&query=Tofukuji+Temple+Kyoto",
        },
        {
          name: "風風之湯（嵐山溫泉足湯）",
          day: "Day 5",
          url: "https://www.google.com/maps/search/?api=1&query=Fu+Fu+No+Yu+Arashiyama",
        },
        {
          name: "白山湯 高辻店（錢湯）",
          day: "Day 4",
          url: "https://www.google.com/maps/search/?api=1&query=Hakusanyu+Takatsuji+Kyoto",
        },
      ],
    },
    {
      type: "ticket",
      label: "交通",
      icon: "Train",
      items: [
        {
          name: "JR 特急 HARUKA（京都 ⇄ 關空）",
          day: "Day 1・Day 8",
          url: "https://www.westjr.co.jp/global/tc/ticket/pass/haruka/",
        },
        {
          name: "京福電鐵 嵐山本線（嵐電）",
          day: "Day 5",
          url: "https://randen.keifuku.co.jp/",
        },
      ],
    },
  ],
};

// ★ 美食紀錄（時間軸中判定為餐飲的停留點）
export const foodData = {
  categories: [
    {
      location: "宇治",
      day: "Day 3 (3/11)",
      sections: [
        {
          title: "🍵 抹茶名店",
          items: [
            {
              name: "中村藤吉本店 宇治本店",
              type: "抹茶甜點・茶寮",
              desc: "宇治本店，實際停留 15:57-17:40（1 小時 43 分）",
              note: "時間軸紀錄地址：Ichiban-10 Uji, Kyoto 611-0021",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Nakamura+Tokichi+Honten+Uji",
            },
          ],
        },
      ],
    },
    {
      location: "京都市區（下京・中京）",
      day: "Day 4・Day 7 (3/12・3/15)",
      sections: [
        {
          title: "🥗 蔬食自助",
          items: [
            {
              name: "都野菜 賀茂 烏丸店",
              type: "蔬食自助餐",
              desc: "本趟造訪兩次：3/12 11:34-12:49、3/15 11:18-12:21",
              note: "Ōgisakayacho, 下京區 600-8095",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Miyakoyasai+Kamo+Karasuma+Kyoto",
            },
          ],
        },
        {
          title: "🍜 商店街覓食",
          items: [
            {
              name: "Okonomiyaki Mr Young Men",
              type: "大阪燒",
              desc: "3/12 於寺町京極商店街停留期間的紀錄地點",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Okonomiyaki+Mr+Young+Men+Kyoto",
            },
            {
              name: "こりょうり ひろめ",
              type: "日式料理",
              desc: "3/12 晚間白山湯 高辻店周邊的紀錄地點",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=%E3%81%93%E3%82%8A%E3%82%87%E3%81%86%E3%82%8A+%E3%81%B2%E3%82%8D%E3%82%81+Kyoto",
            },
            {
              name: "Shabu-Shabu Tajimaya（唐吉訶德四條河原町店內）",
              type: "壽喜燒・涮涮鍋",
              desc: "3/15 19:37-20:36 於唐吉訶德停留期間的紀錄地點",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Shabu+Shabu+Tajimaya+Kyoto+Shijo",
            },
          ],
        },
      ],
    },
    {
      location: "嵐山",
      day: "Day 5-6 (3/13-3/14)",
      sections: [
        {
          title: "☕ 咖啡・輕食",
          items: [
            {
              name: "Yojiya Cafe（よーじや咖啡 嵯峨嵐山）",
              type: "和風咖啡",
              desc: "3/13 17:07-17:42（35 分）",
              note: "2 Sagatenryūji Tateishichō, 右京區",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Yojiya+Cafe+Arashiyama",
            },
            {
              name: "Bread, Espresso & 嵐山庭園",
              type: "麵包・咖啡",
              desc: "3/14 13:33-15:56，本趟嵐山停留最久的餐飲點（2 小時 23 分）",
              note: "45-15 Sagatenryūji Susukinobabachō, 右京區",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Bread+Espresso+Arashiyama+Garden",
            },
          ],
        },
      ],
    },
  ],
};

// ★ 景點紀錄
export const attractionData = {
  categories: [
    {
      location: "京都東山・市區",
      day: "Day 1-4 (3/9-3/12)",
      sections: [
        {
          title: "⛩️ 寺社",
          items: [
            {
              name: "東福寺",
              type: "禪寺",
              desc: "3/11 18:12-18:29，於宇治返程途中順訪（17 分）",
              note: "12 Chome Honmachi, 東山區 605-098…",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Tofukuji+Temple+Kyoto",
            },
          ],
        },
        {
          title: "🛍️ 商圈・街區",
          items: [
            {
              name: "寺町京極商店街",
              type: "商店街",
              desc: "3/12 12:49-16:41，全趟停留最久的市區街區（3 小時 52 分）",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Teramachi+Kyogoku+Shopping+Street",
            },
            {
              name: "京都河原町",
              type: "商圈",
              desc: "3/11 18:45-21:05（2 小時 20 分）",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Kyoto+Kawaramachi",
            },
            {
              name: "京都 BAL",
              type: "百貨",
              desc: "3/10 17:54-19:24（1 小時 30 分）",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=BAL+Kyoto+Nakagyo",
            },
          ],
        },
        {
          title: "♨️ 錢湯",
          items: [
            {
              name: "白山湯 高辻店",
              type: "町の錢湯",
              desc: "3/12 21:45-22:33（48 分）",
              note: "665 Funayachō, 下京區 600-8466",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Hakusanyu+Takatsuji+Kyoto",
            },
          ],
        },
      ],
    },
    {
      location: "宇治",
      day: "Day 3 (3/11)",
      sections: [
        {
          title: "🍵 宇治半日",
          items: [
            {
              name: "Appro 食品館 宇治店",
              type: "在地超市",
              desc: "3/11 13:52-15:57（2 小時 5 分）",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Appro+Uji+Kyoto",
            },
          ],
        },
      ],
    },
    {
      location: "嵐山",
      day: "Day 5-6 (3/13-3/14)",
      sections: [
        {
          title: "🎋 嵐山",
          items: [
            {
              name: "嵐山（京福電氣鐵道）嵐山站",
              type: "電車站・足湯",
              desc: "3/13 10:57-11:02 抵達嵐山的門戶",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Randen+Arashiyama+Station",
            },
            {
              name: "風風之湯（ふらっと嵐山）",
              type: "溫泉",
              desc: "3/13 19:11-21:15（2 小時 4 分）",
              note: "1 Arashiyama Kamikawarachō, 西京區",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Fu+Fu+No+Yu+Arashiyama",
            },
            {
              name: "嵯峨天龍寺一帶",
              type: "寺町街區",
              desc: "3/14 09:49-10:23 造路町、全日累計步行 7 公里",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Tenryuji+Temple+Arashiyama",
            },
          ],
        },
      ],
    },
  ],
};

// 購物紀錄（時間軸僅記錄店家與停留時間，無品項與金額）
export const shoppingData = {
  targetStores: [
    {
      name: "友都八喜 京都店（ヨドバシカメラ）",
      day: "Day 1 (3/9)",
      note: "19:03-21:29・2 小時 26 分",
    },
    {
      name: "AEON MALL KYOTO",
      day: "Day 7 (3/15)",
      note: "14:39-16:48・含 UNIQLO、大創 DAISO",
    },
    {
      name: "ASTY 京都（京都車站內）",
      day: "Day 7 (3/15)",
      note: "16:50-17:47",
    },
    {
      name: "mina Kyoto",
      day: "Day 7 (3/15)",
      note: "18:56-19:37",
    },
    {
      name: "唐吉訶德 京都四條河原町店",
      day: "Day 7 (3/15)",
      note: "19:37-20:36",
    },
    {
      name: "京都 BAL",
      day: "Day 2 (3/10)",
      note: "17:54-19:24",
    },
  ],
  wishlist: [],
  categories: [],
};

// ★ 待辦清單（回顧型旅程：改為資料補完清單）
export const todoData = [
  {
    group: "資料補完",
    category: "航班",
    item: "補上去程航班號與 TPE 起飛時刻",
  },
  { group: "資料補完", category: "住宿", item: "補上四間飯店的實際房價" },
  { group: "資料補完", category: "花費", item: "由帳單／收據回填 expenseData" },
  {
    group: "資料補完",
    category: "行程",
    item: "補上 3/12 深夜與 3/14 傍晚被裁切的行程段",
  },
  {
    group: "資料補完",
    category: "行程",
    item: "確認 3/10 步行 6h48m 期間的實際造訪點",
  },
  {
    group: "內容強化",
    category: "照片",
    item: "挑選各日封面照取代 Unsplash 佔位圖",
  },
  {
    group: "內容強化",
    category: "文案",
    item: "為每日 highlight 補上實際心得",
  },
];

// 素食溝通卡（回顧型旅程不需要）
export const vegetarianCard = null;

// ★ 住宿紀錄（依時間軸 check-in / check-out 還原）
export const accommodationData = [
  {
    location: "京都・東山（清水寺一帶）",
    period: "Day 1-4 (3/9 六 - 3/13 三)",
    hotels: [
      {
        name: "Hotel SUI Kyoto Kiyomizu",
        status: "已訂妥",
        desc: "連住 4 晚的市區基地，步行可達清水寺與河原町商圈",
        features: ["東山區", "連住 4 晚", "近清水寺"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Hotel+SUI+Kyoto+Kiyomizu",
        priceJpy: 0,
        priceTwd: 0,
      },
    ],
  },
  {
    location: "嵐山",
    period: "Day 5 (3/13 三)",
    hotels: [
      {
        name: "嵐翁居 Ranohkyo（らんおうきょ）",
        status: "已訂妥",
        desc: "21:15 泡完風風之湯後入住，隔日 08:20 出發",
        features: ["西京區", "嵐山中之島一帶"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Ranohkyo+Arashiyama",
        priceJpy: 0,
        priceTwd: 0,
      },
    ],
  },
  {
    location: "嵐山",
    period: "Day 6 (3/14 四)",
    hotels: [
      {
        name: "嵐山飯店",
        status: "已訂妥",
        desc: "16:13 入住，隔日 10:02 退房前往京都市區",
        features: ["嵐山上河原町", "臨渡月橋一帶"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Arashiyama+Hotel+Kyoto",
        priceJpy: 0,
        priceTwd: 0,
      },
    ],
  },
  {
    location: "京都車站前",
    period: "Day 7 (3/15 五)",
    hotels: [
      {
        name: "京都站前 APA 別墅飯店",
        status: "已訂妥",
        desc: "返程前一晚選在車站旁，隔日 07:20 出發搭 HARUKA",
        features: ["下京區", "步行 28 分至京都車站", "適合早班機"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=APA+Hotel+Kyoto+Eki+Higashi",
        priceJpy: 0,
        priceTwd: 0,
      },
    ],
  },
];

// 實際花費記帳（時間軸不含金額，待由收據回填）
export const expenseData = {
  days: [],
  grandTotal: {
    JPY: { total: 0, breakdown: {} },
    TWD: { total: 0, breakdown: {} },
  },
};
