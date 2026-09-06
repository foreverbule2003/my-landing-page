/**
 * 2024 東京迪士尼休閒五日 — 行程資料
 * ============================================================
 * 已完成的過去旅程（2024/09/25 ~ 09/29），非行前規劃。
 * 資料來源：
 *   - 行程內容：安可旅遊行程表 PDF（trips/2024-tokyo-disney/source_anko_5d.pdf）
 *   - 實際花費：紙本收據 20 張（trips/2024-tokyo-disney/expenses.csv）
 *   - 實際走法差異：本人回憶（見 trips/2024-tokyo-disney/spec.md）
 * ============================================================
 */

export const TRIP_ID = "2024-tokyo-disney";

export const tripMeta = {
  id: TRIP_ID,
  badge: "JP · TYO · 2024 · 5D · 回顧",
  title: "東京迪士尼",
  subtitle: "澀谷展望台・休閒五日",
  footer: "© 2024 東京迪士尼 澀谷展望台・休閒五日",
  heroImage:
    "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2070&auto=format&fit=crop",
  nights: 4,
  // 2024 年 9 月匯率推估，未查歷史牌告
  exchangeRate: 0.22,
  exchangeRateLabel: "¥1 ≈ NT$0.22（2024/09 推估）",
};

export const stationMapping = {
  dayLabel: "Day 1-5",
  title: "車站名稱對照表",
  stations: [],
};

// 已完成的旅程，不顯示天氣預報
export const weatherData = {
  sourceNote: "",
  sourceUrl: "",
  days: [],
};

export const flightData = {
  outbound: {
    airline: "長榮航空",
    flightNo: "BR184",
    date: "09/25 (三)",
    time: { depart: "07:55", arrive: "12:25" },
    airport: { depart: "TPE 桃園", arrive: "NRT 成田" },
    terminal: { depart: "T2", arrive: "T1" },
    duration: "3h30m",
    note: "團體集合時間 05:55，起飛前 2 小時",
  },
  inbound: {
    airline: "長榮航空",
    flightNo: "BR183",
    date: "09/29 (日)",
    time: { depart: "13:25", arrive: "16:05" },
    airport: { depart: "NRT 成田", arrive: "TPE 桃園" },
    terminal: { depart: "T1", arrive: "T2" },
    duration: "3h40m",
    note: "回程前於成田機場免稅店採買",
  },
};

export const overviewData = [
  {
    day: 1,
    date: "9/25 (三)",
    title: "成田 → 酒々井 Outlet → 新宿",
    hotel: "淺草豪景飯店別館六區",
  },
  {
    day: 2,
    date: "9/26 (四)",
    title: "東京迪士尼樂園",
    hotel: "淺草豪景飯店別館六區",
  },
  {
    day: 3,
    date: "9/27 (五)",
    title: "teamLab・豐洲・台場・銀座",
    hotel: "淺草豪景飯店別館六區",
  },
  {
    day: 4,
    date: "9/28 (六)",
    title: "哈利波特影城・麻布台・澀谷",
    hotel: "淺草豪景飯店別館六區",
  },
  { day: 5, date: "9/29 (日)", title: "成田機場 → 桃園", hotel: "✈️ 回家" },
];

export const itineraryData = [
  {
    phase: "東京五日 (Day 1-5)",
    image:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2070&auto=format&fit=crop",
    days: [
      {
        day: 1,
        date: "9/25 (三)",
        title: "抵達成田 → 酒々井 Outlet → 新宿夜遊",
        image:
          "https://images.unsplash.com/photo-1554797589-7241bb691973?q=80&w=1200&auto=format&fit=crop",
        highlight: "🛍️ 落地就殺去 Outlet，晚上敘敘苑和牛燒肉配百萬夜景",
        activities: [
          {
            time: "05:55",
            text: "桃園國際機場集合報到",
            subText: "起飛前 2 小時",
          },
          {
            time: "07:55",
            text: "桃園國際機場起飛",
            subText: "長榮航空 BR184",
          },
          { time: "12:25", text: "抵達成田機場" },
          {
            time: "15:00",
            text: "酒々井 Premium Outlets",
            subText: "酒々井 プレミアム・アウトレット",
            note: "距成田機場車程約 20 分鐘",
            tips:
              "行程表原訂「東京車站內採買＋秋葉原大採購」，實際換成這裡；當天逛了 NIKE FACTORY STORE 與 COLONY 2139",
            map: { type: "search", query: "Shisui Premium Outlets" },
          },
          {
            time: "傍晚",
            text: "夜訪新宿・歌舞伎町",
            subText: "不夜城",
            map: { type: "search", query: "Kabukicho Shinjuku Tokyo" },
          },
          {
            time: "晚",
            text: "敘敘苑 和牛燒肉",
            subText: "「人升等」升級餐，百萬夜景",
            isFood: true,
          },
          {
            time: "—",
            text: "入住 淺草豪景飯店別館六區",
            subText: "連泊 4 晚",
            map: { type: "search", query: "Asakusa View Hotel Annex Rokku" },
          },
          {
            time: "22:56",
            text: "LAWSON 淺草二丁目店 補宵夜",
            subText: "南高梅手卷、澤庵紫蘇飯糰、脆笛酥、巧克力餅乾",
            fee: "¥833",
          },
        ],
      },
      {
        day: 2,
        date: "9/26 (四)",
        title: "東京迪士尼樂園",
        image:
          "https://images.unsplash.com/photo-1624601573012-efb68931cc8f?q=80&w=1200&auto=format&fit=crop",
        highlight: "🏰 一整天泡在迪士尼，走的是新開幕的夢幻泉鄉",
        activities: [
          { time: "08:00", text: "飯店早餐" },
          {
            time: "全日",
            text: "東京迪士尼樂園",
            subText:
              "新園區「夢幻泉鄉」：冰雪奇緣王國（艾倫戴爾）、彼得潘夢幻島、魔髮奇緣高塔",
            note: "行程表 B 路線為上野動物園＋阿美橫町＋螃蟹道樂，本團走 A 路線",
            tips: "選 A 路線者，午、晚兩餐改發代金於園內自理",
            map: { type: "search", query: "Tokyo Disneyland" },
          },
          {
            time: "午",
            text: "明日樂園露台 用餐",
            subText: "トゥモローランド・テラス",
            fee: "¥1,630",
            isFood: true,
          },
          {
            time: "—",
            text: "怪獸電力公司商店 購物",
            subText: "モンスターズ・インク・カンパニーストア",
            fee: "¥1,800",
          },
          {
            time: "21:26",
            text: "LIFE 淺草店 採買",
            subText: "栗子香菇炊飯、太卷壽司（皆 50% 折扣）、泡麵",
            fee: "¥398 ＋ ¥273",
          },
        ],
      },
      {
        day: 3,
        date: "9/27 (五)",
        title: "teamLab → 豐洲 → 台場 → 品川 → 銀座",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
        highlight: "🎨 沉浸式藝術＋魚市場＋水上巴士，一天橫跨半個東京",
        activities: [
          { time: "08:00", text: "飯店早餐" },
          {
            time: "上午",
            text: "teamLab Planets TOKYO",
            subText: "4 個巨大作品空間＋2 個庭園作品的沉浸式美術館",
            note: "需赤腳涉水參觀，作品與身體界線模糊的「身體沉浸」概念",
            map: { type: "search", query: "teamLab Planets TOKYO" },
          },
          {
            time: "11:54",
            text: "豐洲千客萬來",
            subText: "築地遷移後的新觀光魚市場「豐洲場外 江戶前市場」",
            note: "午餐於江戸 辻屋吃北海丼（迷你）¥1,100，導遊發代金 ¥1,500",
            isFood: true,
            map: { type: "search", query: "Toyosu Senkyaku Banrai" },
          },
          {
            time: "13:39",
            text: "台場・AQUA CiTY",
            subText: "水上巴士（台場 ➔ 日出棧橋），仿塞納河玻璃船",
            note: "順道在 Air BIC CAMERA 買了 Panasonic 吹風機 ¥12,350（免稅）",
            map: { type: "search", query: "Aqua City Odaiba" },
          },
          {
            time: "下午",
            text: "品川 Maxell Aqua Park 水族館",
            subText: "水母優游區、20m 海中隧道、圓型水槽 The Stadium 海豚秀",
            note: "世界唯一展示昆士蘭鋸鰩",
            map: { type: "search", query: "Maxell Aqua Park Shinagawa" },
          },
          {
            time: "20:57",
            text: "夜訪銀座",
            subText: "精品聖地，逛了 UNIQLO 銀座店",
            tips: "9/27 為週五，沒有週六日限定的「步行者天國」封街",
            map: { type: "search", query: "Ginza Tokyo" },
          },
          {
            time: "晚",
            text: "北大路 懷石料理",
            subText: "東京懷石料理界的奢華品牌",
            isFood: true,
          },
          {
            time: "21:54",
            text: "回淺草，スギ薬局＋LAWSON 補貨",
            subText: "遮瑕盤、蝶矢梅酒、可洛洛軟糖、鹽炒麵麵包",
            fee: "¥1,901 ＋ ¥171",
          },
        ],
      },
      {
        day: 4,
        date: "9/28 (六)",
        title: "海螢火蟲 → 木更津 → 哈利波特 → 麻布台 → 澀谷",
        image:
          "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=1200&auto=format&fit=crop",
        highlight: "⚡ 哈利波特影城喝奶油啤酒，收在澀谷 Sky 的夜景",
        activities: [
          { time: "08:00", text: "飯店早餐" },
          {
            time: "上午",
            text: "(車經) 海螢火蟲 東京灣跨海大橋海中人工島",
            subText: "跨海公路中間的海上停車場，兼休息站與觀光景點",
            map: { type: "search", query: "Umihotaru Parking Area" },
          },
          {
            time: "中午",
            text: "三井 OUTLET PARK 木更津",
            subText: "日本最大等級 Outlet，東京灣沿岸",
            note: "午餐由導遊發代金 ¥1,500 自理",
            map: { type: "search", query: "Mitsui Outlet Park Kisarazu" },
          },
          {
            time: "12:45",
            text: "東京華納兄弟哈利波特影城",
            subText: "全球最大影區，《哈利波特》與《怪獸與牠們的產地》製作後台",
            note: "喝了奶油啤酒特別版與薄荷口味，共 ¥1,800",
            map: { type: "search", query: "Warner Bros Studio Tour Tokyo" },
          },
          {
            time: "下午",
            text: "麻布台之丘 Azabudai Hills",
            subText:
              "日本最新商場，主棟森 JP 塔樓高 330 公尺、64 層，刷新日本最高摩天大樓紀錄",
            tips:
              "當天展望台沒開放，沒能上去看晴空塔、彩虹大橋與東京鐵塔 — 全程唯一可惜的一項",
            map: { type: "search", query: "Azabudai Hills Mori JP Tower" },
          },
          {
            time: "下午",
            text: "二訪 teamLab 無界東京",
            subText: "作品間沒有空間界線，交織流動的燦爛世界",
            map: { type: "search", query: "teamLab Borderless Azabudai" },
          },
          {
            time: "19:53",
            text: "夜訪澀谷",
            subText: "SHIBUYA109（LUNA EARTH 買耳環項鍊）、東急 Foodshow、ビックカメラ",
            fee: "¥2,090 ＋ ¥3,888 ＋ ¥6,564",
            map: { type: "search", query: "Shibuya Crossing" },
          },
          {
            time: "傍晚",
            text: "澀谷 Sky（SHIBUYA SKY）",
            subText: "澀谷十字路口展望台，45 樓室外展望台，日本最人氣夜景",
            map: { type: "search", query: "Shibuya Sky" },
          },
          {
            time: "晚",
            text: "しゃぶ禅 渋谷店 壽喜燒",
            isFood: true,
          },
        ],
      },
      {
        day: 5,
        date: "9/29 (日)",
        title: "成田機場免稅採買 → 返台",
        image:
          "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
        highlight: "🛒 最後一輪機場掃貨：梅酒、香鬆、日本酒 KitKat",
        activities: [
          { time: "08:00", text: "飯店早餐後前往成田機場" },
          {
            time: "11:54",
            text: "FaSoLa AKIHABARA 南翼 3F 免稅店",
            subText: "紀州完熟蜜柑梅酒 720ml、日本酒 KitKat、京都香鬆兩款",
            fee: "¥3,550",
          },
          {
            time: "12:01",
            text: "マツモトキヨシ 成田機場第 1 航廈店",
            subText: "CANMAKE 315 腮紅",
            fee: "¥800",
          },
          {
            time: "13:25",
            text: "成田機場起飛",
            subText: "長榮航空 BR183",
          },
          { time: "16:05", text: "抵達桃園國際機場" },
        ],
      },
    ],
  },
];

// 團費為新台幣，實際日幣支出見 expenseData
export const budgetData = [
  {
    item: "團費",
    cost: 0,
    note: "NT$64,800 / 人（含機票、稅金、飯店、餐食、門票、小費、保險）",
  },
  { item: "交通", cost: 0, note: "團費內含，全程遊覽車" },
  { item: "住宿", cost: 0, note: "團費內含，淺草豪景飯店別館六區連泊 4 晚" },
  { item: "餐飲", cost: 6465, note: "自費部分（含迪士尼園內、超商宵夜）" },
  { item: "購物/景點", cost: 59041, note: "購物 ¥48,803＋伴手禮 ¥10,238" },
];

export const recommendedRoutes = [
  {
    id: 1,
    day: "Day 1-5 (9/25-9/29)",
    name: "全程遊覽車（跟團）",
    origin: "Narita International Airport",
    destination: "Asakusa View Hotel Annex Rokku",
    type: "route",
    steps: [
      {
        line: "團體遊覽車",
        type: "bus",
        station: "成田機場 → 各景點 → 淺草飯店",
        note: "安可旅遊安排，全程無購物站、無自費；本頁不需自行轉乘",
      },
    ],
  },
];

export const usefulLinks = {
  categories: [
    {
      type: "attraction",
      label: "景點官網",
      icon: "Star",
      items: [
        {
          name: "東京迪士尼樂園",
          day: "Day 2",
          url: "https://www.tokyodisneyresort.jp/tc/tdl/",
        },
        {
          name: "teamLab Planets TOKYO",
          day: "Day 3",
          url: "https://www.teamlab.art/e/planets/",
        },
        {
          name: "Maxell Aqua Park 品川",
          day: "Day 3",
          url: "https://www.aqua-park.jp/aqua/",
        },
        {
          name: "華納兄弟哈利波特影城 東京",
          day: "Day 4",
          url: "https://www.wbstudiotour.jp/",
        },
        {
          name: "麻布台之丘 Azabudai Hills",
          day: "Day 4",
          url: "https://www.azabudai-hills.com/",
        },
        {
          name: "澀谷 Sky SHIBUYA SKY",
          day: "Day 4",
          url: "https://www.shibuya-scramble-square.com/sky/",
        },
      ],
    },
    {
      type: "ticket",
      label: "購物地點",
      icon: "Train",
      items: [
        {
          name: "酒々井 Premium Outlets",
          day: "Day 1",
          url: "https://www.premiumoutlets.co.jp/shisui/",
        },
        {
          name: "三井 OUTLET PARK 木更津",
          day: "Day 4",
          url: "https://mitsui-shopping-park.com/mop/kisarazu/",
        },
        {
          name: "豐洲千客萬來",
          day: "Day 3",
          url: "https://toyosu-senkyakubanrai.jp/",
        },
      ],
    },
    {
      type: "hotel",
      label: "住宿",
      icon: "Hotel",
      items: [
        {
          name: "淺草豪景飯店別館六區",
          day: "Day 1-4",
          url: "https://www.viewhotels.co.jp/asakusa-annex/",
        },
      ],
    },
  ],
};

export const foodData = {
  categories: [
    {
      location: "團餐（團費內含）",
      day: "Day 1-4 (9/25-9/28)",
      sections: [
        {
          title: "🍽️ 升級餐與特色餐廳",
          items: [
            {
              name: "敘敘苑",
              type: "和牛燒肉",
              desc: "行程主打的「人升等」升級餐，配百萬夜景吃和牛燒肉。",
              note: "Day 1 晚餐",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Jojoen+Tokyo",
            },
            {
              name: "北大路",
              type: "懷石料理",
              desc: "東京懷石料理界的奢華品牌。",
              note: "Day 3 晚餐",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Kitaohji+Tokyo",
            },
            {
              name: "しゃぶ禅 渋谷店",
              type: "壽喜燒",
              desc: "澀谷的壽喜燒名店，行程最後一晚的團餐。",
              note: "Day 4 晚餐",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Shabuzen+Shibuya",
            },
            {
              name: "日式拉麵",
              type: "拉麵",
              desc: "Day 1 抵達後的午餐，行程表未載店名。",
              note: "Day 1 午餐",
            },
          ],
        },
      ],
    },
    {
      location: "自理餐（發代金）",
      day: "Day 2-4 (9/26-9/28)",
      sections: [
        {
          title: "🍱 自己吃到的",
          items: [
            {
              name: "江戸 辻屋",
              type: "海鮮丼",
              desc: "豐洲千客萬來的海鮮丼店，點了北海丼（迷你）¥1,100。",
              note: "Day 3 午餐，導遊發代金 ¥1,500",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Edo+Tsujiya+Toyosu",
            },
            {
              name: "明日樂園露台",
              type: "樂園餐廳",
              desc: "迪士尼園內用餐 ¥1,630。",
              note: "Day 2，迪士尼發代金自理",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Tomorrowland+Terrace+Tokyo+Disneyland",
            },
            {
              name: "奶油啤酒 Butterbeer",
              type: "主題飲品",
              desc: "哈利波特影城限定，喝了特別版 ¥1,000 與薄荷口味 ¥800。",
              note: "Day 4",
            },
          ],
        },
        {
          title: "🏪 超商與超市宵夜",
          items: [
            {
              name: "LAWSON（淺草二丁目店／淺草 Broadway 店）",
              type: "超商",
              desc: "飯店附近，連三晚都去：南高梅手卷、澤庵紫蘇飯糰、脆笛酥、鹽炒麵麵包、迷你巧克力餅乾。",
              note: "Day 1、3、4 宵夜",
            },
            {
              name: "LIFE 淺草店",
              type: "超市",
              desc: "晚上 9 點後貼半價標籤：栗子香菇炊飯、太卷壽司各打 5 折。",
              note: "Day 2 宵夜",
            },
          ],
        },
      ],
    },
  ],
};

export const attractionData = {
  categories: [
    {
      location: "樂園與主題設施",
      day: "Day 2, 4 (9/26, 9/28)",
      sections: [
        {
          title: "🏰 主題樂園",
          items: [
            {
              name: "東京迪士尼樂園",
              type: "主題樂園",
              desc: "新園區「夢幻泉鄉」以「魔法之泉引領的迪士尼夢幻世界」為主軸，重現《冰雪奇緣》艾倫戴爾王國、《小飛俠彼得潘》夢幻島與《魔髮奇緣》高塔。",
              fee: "團費內含",
              note: "Day 2 全日；行程表另有 B 路線（上野動物園＋阿美橫町＋螃蟹道樂），本團走 A",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Tokyo+Disneyland",
            },
            {
              name: "東京華納兄弟哈利波特影城",
              type: "室內主題設施",
              desc: "全球最大影區，由哈利波特電影系列的製作團隊親手打造的佈景與道具，體驗《哈利波特》和《怪獸與牠們的產地》製作後台。",
              fee: "團費內含",
              note: "Day 4",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Warner+Bros+Studio+Tour+Tokyo",
            },
          ],
        },
        {
          title: "🎨 沉浸式藝術",
          items: [
            {
              name: "teamLab Planets TOKYO",
              type: "數位藝術美術館",
              desc: "由 4 個巨大作品空間與 2 個庭園作品組成的「可置身於水中參觀的美術館和與花朵融為一體的花園」，以「身體沉浸／Body Immersive」為概念。",
              fee: "團費內含",
              note: "Day 3；需赤腳涉水，穿方便捲起的褲子",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=teamLab+Planets+TOKYO",
            },
            {
              name: "teamLab 無界東京（二訪）",
              type: "數位藝術美術館",
              desc: "打破傳統美術館劃區分界的概念，沒有空間和作品間的界限，作品互相交織流動激發出的火花是一大看點。",
              fee: "團費內含",
              note: "Day 4，位於麻布台之丘",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=teamLab+Borderless+Azabudai",
            },
          ],
        },
      ],
    },
    {
      location: "展望台與地標",
      day: "Day 4 (9/28)",
      sections: [
        {
          title: "🌃 展望台",
          items: [
            {
              name: "澀谷 Sky（SHIBUYA SKY）",
              type: "展望台",
              desc: "位於東京市中心澀谷十字路口的展望台，45 樓有一個令人陶醉的室外展望台，可以欣賞東京美景。日本最人氣夜景。",
              fee: "團費內含",
              note: "Day 4 傍晚",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Shibuya+Sky",
            },
            {
              name: "麻布台之丘 Azabudai Hills",
              type: "複合商場・展望台",
              desc: "東京最新商場，總樓高 64 層，由三棟高樓大廈與 A~D 等 4 棟低樓建築組成。主棟「森 JP 塔」（Mori JP Tower）樓高 330 公尺，刷新日本最高摩天大樓紀錄，頂樓可一覽晴空塔、彩虹大橋、東京鐵塔。",
              fee: "團費內含",
              note: "❌ 未成行 — 當天展望台沒開放，只到了商場，沒能上去。全程唯一可惜的一項。",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Azabudai+Hills+Mori+JP+Tower",
            },
          ],
        },
      ],
    },
    {
      location: "市場・水族館・海濱",
      day: "Day 3-4 (9/27-9/28)",
      sections: [
        {
          title: "🐟 市場與水族館",
          items: [
            {
              name: "豐洲千客萬來",
              type: "觀光魚市場",
              desc: "築地市場遷移至豐洲後的新設施，由「豐洲場外 江戶前市場」和「東京豐洲 萬葉俱樂部」（需自費）組成。千客萬來在日語中表示「人山人海的客人來來往往、絡繹不絕」。",
              note: "Day 3 午餐地點",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Toyosu+Senkyaku+Banrai",
            },
            {
              name: "品川 Maxell Aqua Park",
              type: "室內水族館",
              desc: "由音樂和燈光交織演出。寬 9m、長 35m 的「水母優游區」，長約 20m 的海中隧道「神奇通道」，世界上唯一展示的昆士蘭鋸鰩，以及圓型水槽「The Stadium」360 度海豚秀。",
              fee: "團費內含",
              note: "Day 3",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Maxell+Aqua+Park+Shinagawa",
            },
          ],
        },
        {
          title: "🌊 海濱與街區",
          items: [
            {
              name: "海螢火蟲 海ほたる",
              type: "海上休息站",
              desc: "位於東京灣跨海公路中間的一座海上停車場，宛如航空母艦的人工島，餐廳、商店、觀景台等設施齊全。",
              note: "Day 4 車經",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Umihotaru+Parking+Area",
            },
            {
              name: "水上巴士（台場 ➔ 日出棧橋）",
              type: "水上交通",
              desc: "仿塞納河的玻璃船，從台場搭到日出棧橋。",
              note: "Day 3",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Hinode+Pier+Tokyo",
            },
            {
              name: "銀座",
              type: "商圈",
              desc: "日本「繁華」的代名詞，數不清的國際精品服飾與米其林美食，被譽為西方文化與美食的傳播中心。",
              note: "Day 3 夜訪；週六日才有「步行者天國」封街，當天是週五",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Ginza+Tokyo",
            },
            {
              name: "新宿・歌舞伎町",
              type: "商圈",
              desc: "不夜城，抵達首日的夜訪行程。",
              note: "Day 1",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Kabukicho+Shinjuku",
            },
          ],
        },
      ],
    },
    {
      location: "行程表列出但沒去的",
      day: "Day 1 (9/25)",
      sections: [
        {
          title: "🚫 未成行",
          items: [
            {
              name: "東京車站內採買 ・ 秋葉原",
              type: "商圈",
              desc: "行程表原訂 Day 1 下午的採購行程，秋葉原是電器街結合御宅族文化的樂園。",
              note: "❌ 未成行 — 實際改去了酒々井 Premium Outlets。",
              mapUrl:
                "https://www.google.com/maps/search/?api=1&query=Akihabara+Tokyo",
            },
          ],
        },
      ],
    },
  ],
};

export const shoppingData = {
  targetStores: [
    "酒々井 Premium Outlets",
    "SHIBUYA109",
    "東急 Foodshow 澀谷",
    "ビックカメラ 渋谷",
    "成田機場 FaSoLa／マツモトキヨシ",
  ],
  // 實際買回來的東西（金額取自收據，見 trips/2024-tokyo-disney/expenses.csv）
  wishlist: [
    {
      name: "NIKE 女款 Air Max SC",
      nameJp: "ナイキ ウィメンズ エア マックス SC",
      desc: "Day 1 落地就衝 Outlet 買的第一雙",
      price: 7999,
      category: "服飾鞋類",
      shop: "NIKE FACTORY STORE 酒々井",
    },
    {
      name: "NIKE Air Max Command",
      nameJp: "ナイキ エア マックス コマンド",
      desc: "同一張收據的第二雙",
      price: 6999,
      category: "服飾鞋類",
      shop: "NIKE FACTORY STORE 酒々井",
    },
    {
      name: "小洋裝（上衣）",
      nameJp: "カットソウ",
      desc: "含外税 ¥300",
      price: 3300,
      category: "服飾鞋類",
      shop: "COLONY 2139 酒々井店",
    },
    {
      name: "UNIQLO 三件組",
      desc: "圓領 T ¥1,500＋V 領針織 ¥2,990＋運動衫 ¥2,990，扣免稅 ¥680",
      price: 6800,
      category: "服飾鞋類",
      shop: "UNIQLO 銀座店",
    },
    {
      name: "Panasonic 吹風機 EH-NA2K",
      desc: "原價 ¥13,000，免稅 5% 折抵 ¥650",
      price: 12350,
      category: "電器 3C",
      shop: "Air BIC CAMERA 台場 AQUA CiTY 店",
    },
    {
      name: "Chromecast",
      desc: "原價 ¥6,910，免稅 5% 折抵 ¥346",
      price: 6564,
      category: "電器 3C",
      shop: "ビックカメラ 渋谷ハチ公口店",
    },
    {
      name: "遮瑕盤",
      nameJp: "ICEZ パレットコンシーラー",
      price: 748,
      category: "藥妝",
      shop: "スギ薬局 浅草店",
    },
    {
      name: "蝶矢 清爽梅酒",
      nameJp: "蝶矢 さらりとした梅酒",
      price: 877,
      category: "藥妝",
      shop: "スギ薬局 浅草店",
    },
    {
      name: "可洛洛軟糖（麝香葡萄／葡萄）",
      nameJp: "コロロ マスカット／グレープ",
      desc: "兩包各 ¥138",
      price: 276,
      category: "藥妝",
      shop: "スギ薬局 浅草店",
    },
    {
      name: "CANMAKE 315 腮紅",
      nameJp: "315 CAN グロウチーク",
      desc: "免稅",
      price: 800,
      category: "藥妝",
      shop: "マツモトキヨシ 成田機場第 1 航廈店",
    },
    {
      name: "耳環與腳鍊 5 件",
      nameJp: "チタンピアス／フックピアス／アンクレット",
      desc: "巧克力蛙耳環、奶油啤酒項鍊那批",
      price: 2090,
      category: "飾品・紀念品",
      shop: "LUNA EARTH SHIBUYA109 店",
    },
    {
      name: "迪士尼鑰匙圈",
      price: 1800,
      category: "飾品・紀念品",
      shop: "怪獸電力公司商店（東京迪士尼樂園）",
    },
    {
      name: "東京牛奶起司工房 三盒",
      nameJp: "東京ミルクチーズ工場",
      desc: "鹽味卡門貝爾／蜂蜜 G&G／栗子＆馬斯卡彭，各 10 枚，含外税 ¥288",
      price: 3888,
      category: "伴手禮零食",
      shop: "東急 Foodshow 澀谷",
    },
    {
      name: "紀州完熟蜜柑梅酒 720ml",
      nameJp: "紀州 完熟みかん梅酒",
      price: 1500,
      category: "伴手禮零食",
      shop: "FaSoLa AKIHABARA 成田南翼 3F",
    },
    {
      name: "KitKat 日本酒口味 9 枚",
      nameJp: "ネスレ 9枚キットカットミニ 日本酒 満",
      price: 900,
      category: "伴手禮零食",
      shop: "FaSoLa AKIHABARA 成田南翼 3F",
    },
    {
      name: "京都香鬆兩款",
      nameJp: "京ら一油ふりかけ／京の胡麻ふりかけ-黒七味風",
      desc: "辣油 ¥600＋黑七味芝麻 ¥550",
      price: 1150,
      category: "伴手禮零食",
      shop: "FaSoLa AKIHABARA 成田南翼 3F",
    },
    {
      name: "神戶 Frantz 草莓乾巧克力",
      nameJp: "神戸フランツ セレブ ショコラ",
      price: 1000,
      category: "伴手禮零食",
      shop: "FaSoLa AKIHABARA 成田南翼 3F",
    },
    {
      name: "LAWSON 零食（脆笛酥、巧克力餅乾等）",
      desc: "淺草二丁目店與淺草 Broadway 店，Day 1、3、4 三晚合計",
      price: 1264,
      category: "伴手禮零食",
      shop: "LAWSON 淺草",
    },
  ],
  categories: [],
};

// 已完成的旅程，不需要行前待辦
export const todoData = [];

// 無素食需求
export const vegetarianCard = null;

export const accommodationData = [
  {
    location: "淺草",
    period: "Day 1-4 (9/25-9/29)",
    hotels: [
      {
        name: "淺草豪景飯店別館六區",
        status: "已訂妥",
        desc: "位於淺草公園六區的體驗型飯店，連泊 4 晚。",
        features: ["2024 年開幕", "淺草六區", "連泊 4 晚", "團費內含"],
        mapUrl:
          "https://www.google.com/maps/search/?api=1&query=Asakusa+View+Hotel+Annex+Rokku",
        priceJpy: 0,
        priceTwd: 0,
      },
    ],
  },
];

export const expenseData = {
  days: [
    {
      date: "2024-09-25",
      label: "Day 1・成田 → 酒々井 → 新宿",
      items: [
        {
          time: "15:21",
          shop: "NIKE FACTORY STORE 酒々井",
          category: "購物",
          amount: 14998,
          currency: "JPY",
          note: "女款 Air Max SC ¥7,999＋Air Max Command ¥6,999",
        },
        {
          time: "15:41",
          shop: "COLONY 2139 酒々井店",
          category: "購物",
          amount: 3300,
          currency: "JPY",
          note: "上衣 ¥3,000＋外税 ¥300",
        },
        {
          time: "22:56",
          shop: "LAWSON 淺草二丁目店",
          category: "飲食",
          amount: 833,
          currency: "JPY",
          note: "南高梅手卷、澤庵紫蘇飯糰、脆笛酥、巧克力餅乾等 6 件",
        },
      ],
    },
    {
      date: "2024-09-26",
      label: "Day 2・東京迪士尼樂園",
      items: [
        {
          time: "園內",
          shop: "怪獸電力公司商店",
          category: "伴手禮",
          amount: 1800,
          currency: "JPY",
          note: "鑰匙圈",
        },
        {
          time: "園內",
          shop: "明日樂園露台",
          category: "飲食",
          amount: 1630,
          currency: "JPY",
          note: "迪士尼代金自理",
        },
        {
          time: "21:26",
          shop: "LIFE 淺草店",
          category: "飲食",
          amount: 398,
          currency: "JPY",
          note: "栗子香菇炊飯、太卷壽司（各 50% 折扣）",
        },
        {
          time: "21:37",
          shop: "LIFE 淺草店",
          category: "飲食",
          amount: 273,
          currency: "JPY",
          note: "出前一丁丼麵、赤豆皮烏龍",
        },
      ],
    },
    {
      date: "2024-09-27",
      label: "Day 3・豐洲 → 台場 → 品川 → 銀座",
      items: [
        {
          time: "11:54",
          shop: "江戸 辻屋（豐洲千客萬來）",
          category: "飲食",
          amount: 1100,
          currency: "JPY",
          note: "北海丼（迷你）；導遊發代金 ¥1,500",
        },
        {
          time: "13:39",
          shop: "Air BIC CAMERA 台場 AQUA CiTY 店",
          category: "購物",
          amount: 12350,
          currency: "JPY",
          note: "Panasonic 吹風機 EH-NA2K，免稅 5%",
        },
        {
          time: "20:57",
          shop: "UNIQLO 銀座店",
          category: "購物",
          amount: 6800,
          currency: "JPY",
          note: "圓領 T、V 領針織、運動衫，扣免稅 ¥680",
        },
        {
          time: "21:54",
          shop: "スギ薬局 浅草店",
          category: "購物",
          amount: 1901,
          currency: "JPY",
          note: "遮瑕盤、蝶矢梅酒、可洛洛軟糖 ×2",
        },
        {
          time: "22:25",
          shop: "LAWSON 淺草 Broadway 店",
          category: "飲食",
          amount: 171,
          currency: "JPY",
          note: "鹽炒麵麵包",
        },
      ],
    },
    {
      date: "2024-09-28",
      label: "Day 4・哈利波特影城 → 麻布台 → 澀谷",
      items: [
        {
          time: "12:45",
          shop: "華納兄弟哈利波特影城",
          category: "飲食",
          amount: 1800,
          currency: "JPY",
          note: "奶油啤酒特別版 ¥1,000＋薄荷口味 ¥800",
        },
        {
          time: "19:53",
          shop: "LUNA EARTH SHIBUYA109 店",
          category: "購物",
          amount: 2090,
          currency: "JPY",
          note: "鈦耳針、勾式耳環、腳鍊共 5 件",
        },
        {
          time: "20:24",
          shop: "東急 Foodshow 澀谷・東京牛奶起司工房",
          category: "伴手禮",
          amount: 3888,
          currency: "JPY",
          note: "三盒各 ¥1,200＋外税 ¥288",
        },
        {
          time: "21:00",
          shop: "ビックカメラ 渋谷ハチ公口店",
          category: "購物",
          amount: 6564,
          currency: "JPY",
          note: "Chromecast，免稅 5%",
        },
        {
          time: "22:16",
          shop: "LAWSON 淺草 Broadway 店",
          category: "飲食",
          amount: 260,
          currency: "JPY",
          note: "迷你巧克力餅乾 ×2",
        },
      ],
    },
    {
      date: "2024-09-29",
      label: "Day 5・成田機場 → 桃園",
      items: [
        {
          time: "11:54",
          shop: "FaSoLa AKIHABARA 成田南翼 3F",
          category: "伴手禮",
          amount: 3550,
          currency: "JPY",
          note: "梅酒 720ml、日本酒 KitKat、京都香鬆 ×2",
        },
        {
          time: "12:01",
          shop: "マツモトキヨシ 成田機場第 1 航廈店",
          category: "購物",
          amount: 800,
          currency: "JPY",
          note: "CANMAKE 315 腮紅，免稅",
        },
        {
          time: "12:20",
          shop: "FaSoLa AKIHABARA 成田南翼 3F",
          category: "伴手禮",
          amount: 1000,
          currency: "JPY",
          note: "神戶 Frantz 草莓乾巧克力",
        },
      ],
    },
  ],
  grandTotal: {
    JPY: {
      total: 65506,
      breakdown: { 購物: 48803, 伴手禮: 10238, 飲食: 6465 },
    },
    // 團費 NT$64,800 屬行前一次付清，記在 budgetData，不併入當地記帳
    TWD: { total: 0, breakdown: {} },
  },
};
