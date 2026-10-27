window.TRIP_DATA = {
  title: "岡山鳥取八日自由行",
  subtitle: "2026.11.08 － 2026.11.15",
  startDate: "2026-11-08",
  currencyRate: 0.215, // JPY to TWD

  // 1. 行程小提醒 (資源頁頂部收合卡片 1)
  tripTips: [
    {
      title: "一、 氣候與日照（最容易忽視的時間魔鬼）",
      content: `11 月中旬日落極早（約 17:00 就黑透）：
• Day 4（宍道湖夕陽）：16:30 就必須抵達湖畔（島根縣立美術館外步道）卡位，17:00 後太陽就完全落山了。
• Day 6（宮島退潮）：16:30 左右退潮走到大鳥居時，剛好是夕陽斜射的時間，拍合照會呈現金黃色光澤，但 17:10 之後天色會快速變暗，記得把握這半小時拍照。
• Day 7（岡山後樂園）：後樂園 17:00 閉園，但 16:15 之後園區體感光線就會變暗，陪長輩逛時建議 14:00~15:30 之間在園內散步光線最美。`
    },
    {
      title: "二、 神社巡禮的隱藏道具與「神在月」應對",
      content: `出雲大社「稻佐之濱換御砂」（Day 5）：
• 必帶裝備：請隨身準備 1 個乾淨的小夾鏈袋 與 1 把小塑塑湯匙。
• 流程：先在稻佐之濱用湯匙挖一小袋沙子，帶到出雲大社後方的「素鵞社（そがのやしろ）」，將自己的沙子倒入建築底部的沙箱，再挖取等量的加持「御砂」帶回家避邪。沒有帶袋子現場會非常狼狽。

11 月「神在月」人潮應對：
• 日本全國神明在農曆十月（公曆 11 月）聚集出雲，這是出雲大社一年中人潮最爆滿的月份。
• 行李寄放備案：JR 出雲市站的寄物櫃非常容易早期客滿，若滿格，直接走進站內的「觀光案內所」，那裡提供人工寄物服務（一件約 500~700 日圓）。
• 八雲蕎麥麵：參道上的「蕎麦処八雲」午餐排隊時間可能拉長，建議 13:30 稍微避開正餐尖峰過去。`
    },
    {
      title: "三、 交通 Pass 與票券隱藏規則",
      content: `宮島訪問稅（100 日圓 / 人）：
• 雖然 JR Pass 免費涵蓋了 JR 宮島渡輪，但廣島縣自 2023 年起徵收「宮島訪問稅」。
• 搭船前：持 Pass 過閘門前，需在宮島口碼頭的售票機單獨購買 100 日圓的訪問稅票（或直接刷 ICOCA / Suica 過指定閘門扣款）。

山陽新幹線 Nozomi（希望號）全涵蓋：
• 您的「JR 山陽&山陰 Area Pass」與全日本 Pass 不同，可以免費搭乘山陽新幹線上的 Nozomi / Mizuho 最高等級列車（岡山 ↔ 廣島僅需 36 分鐘），班次極多，隨到隨搭。

273 系新型特急 Yakumo（八雲號）暈車提醒：
• Day 5 橫跨山區搭乘的全新八雲號雖已改進為 3D 電腦控制擺式列車，但伯備線山路多彎，若同行長輩或您個人平時搭山路公車會暈車，請務必隨身準備暈車藥。`
    },
    {
      title: "四、 景點優惠與秋季人潮",
      content: `足立美術館（Day 4）：
• 現場購票時，請務必隨身攜帶並出示 外國護照正本，門票可享外國遊客專屬折扣（原價 2,300 日圓優惠至約 1,150~1,650 日圓）。

宮島纜車（Day 6）：
• 11 月中旬是宮島紅葉季的頂峰，纜車排隊時間會比平時長。建議 15:00 搭纜車上山後，在獅子岩展望台賞景即可，下山時預留 20 分鐘排隊緩衝時間，避免卡在山頂。`
    },
    {
      title: "五、 Day 8 返程與岡山機場接駁細節",
      content: `岡山站 ➔ 岡山機場交通（非 JR，需另付費）：
• 岡山機場沒有軌道電車，必須在 JR 岡山站西口 21 號公車乘車處 搭乘「岡山機場特急巴士（岡電巴士 / 兩備巴士）」。
• 車程與票價：單程約 30 分鐘，票價 780 日圓（可刷 IC 卡或付現金）。

航班時間銜接（Tigerair IT215 15:25 起飛）：
• 建議搭乘 12:50 或 13:10 從岡山站西口出發的巴士，約 13:20~13:40 抵達機場。
• 機場規模較小，開櫃報到速度快，這個時間抵達能非常悠閒地辦理行李託運與安檢。

伴手禮採購策略：
• 岡山機場過海關後的免稅店規模非常小、品項有限。若要購買大量的麝香葡萄甜點、藥妝或名產，請務必在 Day 7 岡山站地下街、AEON Mall 或 Bic Camera 提前買齊裝箱，不要寄望留到機場買。`
    }
  ],

  // 2. JR Pass 搭乘與劃位懶人包 (資源頁頂部收合卡片 2)
  jrPassNote: [
    {
      title: "1. 自由席（自由座）／普通電車",
      detail: "• 進出車站：直接將 JR Pass 實體磁卡插入自動閘門，通過後記得取出卡片。\n• 搭乘方式：免劃位、不用換票，直接上車找自由席座位搭乘即可。"
    },
    {
      title: "2. 指定席（對號座）",
      detail: "• 劃位方式：持 Pass 實體卡至車站「綠色售票機（機台）」免費劃位，領取「指定席券」。\n• 進出車站：進出改札口一樣只插 JR Pass 實體卡！劃好的指定席券隨身攜帶，供對號入座及車長驗票即可。\n• 沒趕上車：完全沒關係！Pass 本身不會失效也不會有罰款，可直接搭下一班車的自由席，或隨時去售票機重新劃下一班指定席。"
    },
    {
      title: "3. 大型行李與劃位策略",
      detail: "• 沒拉行李時：隨時彈性搭自由席或劃位皆可。\n• 有拉大型行李時：建議提前去售票機劃位，鎖定指定席座位或行李架位置（特別是 Day 5 的特急八雲號）。\n• 提早劃位：第一天在岡山站領取 Pass 後，即可一次在機台把 7 天內所有需要的班次劃好位。劃位次數無限制且完全免費。"
    },
    {
      title: "4. 非 JR 交通與注意事項",
      detail: "• 公車與路面電車：不可使用 Pass，上下車直接刷西瓜卡（Suica / ICOCA）扣款即可。\n• 宮島訪問稅：搭乘 JR 宮島渡輪時，需另刷西瓜卡或投現 100 日圓支付宮島訪問稅。"
    }
  ],

  // 3. 8 日交通 Pass / IC卡攻略小筆記 (資源頁頂部收合卡片 3)
  transportNote: [
    {
      day: "📅 Day 1（11/08 週日）",
      items: [
        { name: "岡山機場 ➔ JR 岡山站（機場特急巴士）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡（單程 780 日圓，上車/下車刷卡）。" },
        { name: "JR 岡山站 ➔ JR 鳥取站（特急 Super Inaba）", note: "⭕ JR Pass 全額免費（包含智頭急行線路段，Pass 已全包，可劃指定席）。" }
      ]
    },
    {
      day: "📅 Day 2（11/09 週一）",
      items: [
        { name: "鳥取市區／白兔神社／浦富海岸／賀露港／鳥取砂丘／鳥取城跡（市區與路線公車、100 日圓循環公車「くる梨」）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡（日之丸巴士、日本交通巴士與循環公車全面支援 IC 卡）。" }
      ]
    },
    {
      day: "📅 Day 3（11/10 週二）",
      items: [
        { name: "JR 鳥取站 ➔ JR 由良站（柯南站）（JR 山陰本線普通電車）", note: "⭕ JR Pass 全額免費。" },
        { name: "JR 由良站 ➔ JR 米子站 ➔ JR 境港站（JR 山陰本線＋JR 境線鬼太郎列車）", note: "⭕ JR Pass 全額免費。" }
      ]
    },
    {
      day: "📅 Day 4（11/11 週三）",
      items: [
        { name: "JR 境港站 ➔ JR 米子站 ➔ JR 安來站（JR 境線＋JR 山陰本線）", note: "⭕ JR Pass 全額免費。" },
        { name: "JR 安來站 ↔ 足立美術館（接駁巴士）", note: "❌ 不可用 Pass｜🆓 免費搭乘（館方免費接駁車，不需刷卡或付費）。" },
        { name: "JR 安來站 ➔ JR 松江站 ➔ JR 米子站（JR 山陰本線）", note: "⭕ JR Pass 全額免費。" },
        { name: "松江市區觀光（松江 Lake Line 觀光巴士／市區公車）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡。" }
      ]
    },
    {
      day: "📅 Day 5（11/12 週四）",
      items: [
        { name: "JR 米子站 ➔ JR 出雲市站（JR 山陰本線 / 特急）", note: "⭕ JR Pass 全額免費。" },
        { name: "JR 出雲市站 ↔ 稻佐之濱／出雲大社（一畑巴士）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡。" },
        { name: "JR 出雲市站 ➔ JR 岡山站（全新 273 系特急 Yakumo 八雲號）", note: "⭕ JR Pass 全額免費（可免費劃指定席/特大行李席）。" }
      ]
    },
    {
      day: "📅 Day 6（11/13 週五）",
      items: [
        { name: "JR 岡山站 ↔ JR 廣島站 ↔ JR 宮島口站（山陽新幹線 Nozomi / Sakura ＋ JR 山陽本線）", note: "⭕ JR Pass 全額免費（新幹線可隨到隨搭或劃指定席）。" },
        { name: "JR 宮島口 ↔ 宮島棧橋（JR 宮島渡輪）", note: "⭕ JR Pass 全額免費船票。" },
        { name: "⚠️ 特別注意：廣島縣「宮島訪問稅」（100 日圓/人）不含在 Pass 內，於碼頭閘門直接刷西瓜卡扣款 或於售票機投現購買稅票即可。", note: "" },
        { name: "宮島纜車（登彌山）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡（售票窗口/機台可直接刷 IC 卡支付纜車票）。" }
      ]
    },
    {
      day: "📅 Day 7（11/14 週六）",
      items: [
        { name: "JR 岡山站 ↔ JR 倉敷站（JR 山陽本線）", note: "⭕ JR Pass 全額免費。" },
        { name: "倉敷美觀川舟（搭船體驗）", note: "❌ 非大眾交通｜💰 現場現金購票（500 日圓/人，於倉敷館觀光案內所購買）。" },
        { name: "JR 岡山站 ↔ 後樂園／岡山城（岡電路面電車／市公車）", note: "❌ 不可用 Pass｜⭕ 刷西瓜卡（上下車刷卡）。" }
      ]
    },
    {
      day: "📅 Day 8（11/15 週日 - Pass 已過期）",
      items: [
        { name: "JR 岡山站 ➔ JR 備前一宮站 ➔ JR 吉備津站 ➔ JR 岡山站（JR 吉備線 / 桃太郎線）", note: "❌ Pass 已過期｜⭕ 刷西瓜卡（單程約 150~210 日圓，進出站直接刷 IC 卡閘門）。" },
        { name: "JR 岡山站西口 ➔ 岡山機場（機場特急巴士）", note: "❌ Pass 已過期｜⭕ 刷西瓜卡（單程 780 日圓，上車/下車刷卡）。" }
      ]
    }
  ],

  days: [
    {
      dayNum: 1,
      dateNum: "08",
      monthNum: "11月",
      weekDay: "SUN",
      kanjiNum: "壹",
      fullDate: "11月08日",
      dayOfWeek: "日曜日",
      headline: "抵著 · 岡山市區與鳥取前哨",
      location: "岡山/鳥取",
      lat: 34.6617,
      lon: 133.9350,
      summaryFlow: "✈️ 桃園機場 ➔ 🛃 出關 ➔ 🚌 機場巴士 ➔ 🎫 兌換Pass ➔ 🍱 晚餐(牛排吉備/讚岐烏龍麵) ➔ 🚆 Super Inaba 特急 ➔ 🏨 APA 鳥取站南口",
      vjwAddress: "APA Hotel Tottori Ekimae Minami\n2 Chome-138-2 Tomiyasu, Tottori, 680-0845日本\nTEL: +81570095811",
      flight: "去程 · 虎航 IT714 | TPE 13:05 ➔ OKJ 16:30 · 2h25m",
      spots: [
        {
          time: "13:05 - 16:30",
          tag: "航班",
          title: "✈️ 桃園國際機場 ➔ 岡山桃太郎機場",
          desc: "搭乘台灣虎航 IT714 航班。飛行時間約 2 小時 25 分鐘。",
          navLink: "https://www.tigerairtw.com/"
        },
        {
          time: "16:30 - 17:15",
          tag: "入境",
          isSub: true,
          title: "🛃 抵達岡山機場、下飛機與辦理出關",
          desc: "辦理入境審查、提取行李、過海關。",
          navLink: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/",
          tip: "請預先填寫好 Visit Japan Web 入境卡與海關申報。"
        },
        {
          time: "17:15 - 17:25",
          tag: "購票",
          isSub: true,
          title: "🎫 前往機場巴士站與購票",
          desc: "出關後至入境大廳外 2 號巴士站牌購票（可刷電子卡或現場購票，單程約 780 日圓）。",
          cost: "1,000円 (可刷 Suica / ICOCA)"
        },
        {
          time: "17:30 - 18:00",
          tag: "移動",
          title: "🚌 岡山機場 ➔ JR 岡山站",
          desc: "搭乘岡山機場接駁巴士（岡電巴士）。車程約 30 分鐘，直達 JR 岡山站西口。(巴士會彈性配合國際線到達班次發車)"
        },
        {
          time: "18:00 - 18:40",
          tag: "票券",
          isSub: true,
          title: "🎫 兌換 JR Pass 7 日券與劃位",
          desc: "至 JR 岡山站綠色窗口（みどりの窓口）或售票機兌換 JR 山陰&山陽 7日 Pass。\n💡 班次彈性：Super Inaba 特急預設 19:46，若提早出關可改劃 17:24 班次。",
          navLink: "https://mydia.jr-odekake.net/cgi-bin/mydia.cgi"
        },
        {
          time: "18:40 - 20:00",
          tag: "美食",
          title: "🍱 岡山站內享用晚餐與休息",
          desc: "於岡山車站地下街或站內餐廳享用晚餐，採買車上享用的飲料/宵夜。",
          navLink: "https://maps.app.goo.gl/q75Nxkjw6YVH3dqSA",
          options: [
            {
              name: "參考選項 1：牛排吉備",
              desc: "岡山站內品嚐在地美味鐵板牛排。"
            },
            {
              name: "參考選項 2：讚岐男子烏龍麵",
              desc: "平價道地的香川讚岐烏龍麵。"
            }
          ]
        },
        {
          time: "20:00 - 20:19",
          tag: "移動",
          isSub: true,
          title: "🚶 前往月台等候",
          desc: "前往特急月台（第 1、2 月台）。"
        },
        {
          time: "20:19 - 22:10",
          tag: "特急",
          title: "🚆 JR 岡山站 ➔ JR 鳥取站",
          desc: "搭乘 Super Inaba 特急 11號 車程約 1 小時 51 分鐘，直達鳥取站。（Pass 全額涵蓋）",
          cost: "Pass 全額涵蓋",
          tip: "💡 列車折返提醒：搭乘特急 Super Inaba 號行駛至「上郡站」時列車會進行折返（Switchback），屆時全車乘客會順應方向將座椅轉向，屬於正常行駛流程。\n💡 特大行李規定：山陰地區特急列車（如 Super Inaba）無東海道/山陽新幹線之特大行李強制預約限制，行李直接攜帶上車擺放即可。"
        },
        {
          time: "22:10",
          tag: "抵達",
          isSub: true,
          title: "🚉 抵達 JR 鳥取站",
          desc: "抵達鳥取站北口/南口。"
        },
        {
          time: "22:15 - 22:20",
          tag: "住宿",
          title: "🏨 車站 ➔ 飯店 Check-in",
          desc: "前往鳥取站前飯店 APA 飯店-鳥取站前南 (APA Hotel Tottori Ekimae Minami)\n地址：2 Chome-138-2 Tomiyasu, Tottori, 680-0845日本\nTEL: +81570095811",
          navLink: "https://maps.google.com/?q=APA+Hotel+Tottori+Ekimae+Minami"
        }
      ]
    },
    {
      dayNum: 2,
      dateNum: "09",
      monthNum: "11月",
      weekDay: "MON",
      kanjiNum: "貳",
      fullDate: "11月09日",
      dayOfWeek: "月曜日",
      headline: "壯麗 · 觀光計程車與萬葉牛燒肉",
      location: "鳥取",
      lat: 35.5011,
      lon: 134.2351,
      summaryFlow: "🏨 飯店 ➔ 🚕 觀光計程車(⛩️白兔神社 ➔ 🌊浦富海岸 ➔ 🐫鳥取砂丘) ➔ 🔀 市區三選一 ➔ 🥩 萬葉牛燒肉 ➔ 🛍️ AEON 超市",
      spots: [
        {
          time: "09:20 - 09:25",
          tag: "移動",
          isSub: true,
          title: "🚶 APA 鳥取站南口 ➔ 鳥取站北口",
          desc: "從飯店出發，穿過 JR 鳥取站南北自由通道至北口（約 150 公尺，步行 3 分鐘）。"
        },
        {
          time: "09:25 - 09:40",
          tag: "服務",
          isSub: true,
          title: "📝 申請觀光計程車（3小時方案）",
          desc: "至北口「國際遊客服務中心」出示護照，申請 3 小時 6,000 日圓包車，並指定於砂丘解散。",
          cost: "6,000円 (現金支付給司機)"
        },
        {
          time: "09:40 - 12:40",
          tag: "包車",
          title: "🚕 3小時觀光計程車巡禮",
          desc: "路線：鳥取站 ➔ 白兔神社＆白兔海岸（停 40 分） ➔ 浦富海岸（停 40 分） ➔ 鳥取砂丘（落客解散）。",
          navLink: "https://www.city.tottori.lg.jp/page/5330.html",
          cost: "6,000円"
        },
        {
          time: "10:00 - 10:40",
          tag: "神社",
          isSub: true,
          title: "⛩️ 白兔神社",
          desc: "包車景點：鳥取沙丘路線 C。"
        },
        {
          time: "11:15 - 12:25",
          tag: "景點",
          isSub: true,
          title: "🌊 浦富海岸",
          desc: "包車景點：欣賞絕美海蝕奇岩與透明度極高的山陰海岸。"
        },
        {
          time: "12:40 - 15:00",
          tag: "景點",
          title: "🐫 鳥取砂丘 ＋ 輕食午餐",
          desc: "見晴之丘展望台搭纜車、登砂丘馬背看海、買 Totto Purin 布丁、搭纜車，於 Takahama Café 喝咖啡吃輕食。",
          cost: "纜車來回 500円"
        },
        {
          time: "15:00 - 18:00",
          tag: "彈性",
          title: "🔀 下午彈性行程（三選一）",
          desc: "依當天心情與紅葉狀況三選一：",
          options: [
            {
              name: "選項 1：賀露港買壽司 ＋ 柯南機場",
              desc: "砂丘搭計程車至賀露港逛逛吃壽司 ➔ 轉計程車至柯南機場拍 3D 壁畫與金龜車 ➔ 搭機場巴士回鳥取站。（計程車車資：砂丘至賀露港約 2,500円，賀露港至機場約 1,200円）"
            },
            {
              name: "選項 2：鳥取城跡（久松公園）古蹟散步",
              desc: "砂丘搭公車回鳥取站（20分） ➔ 轉乘 100 日圓循環公車（10分）至鳥取城跡看天球丸石垣與仁風閣外觀。（公車可刷西瓜卡，後門上車，上下車皆需刷卡）"
            },
            {
              name: "選項 3：若櫻町山區賞楓（秋季限定）",
              desc: "若當天「不動院岩屋堂」紅葉見頃，於鳥取站申請包車前往若櫻町拍紅葉與古剎。（適用計程車方案9：若櫻宿歷史漫遊路線）"
            }
          ],
          tip: "💡 下午彈性決策：當天早上出發前可先查詢「若櫻町紅葉」情報，若未紅則優先推薦 選項 1（柯南機場） 或 選項 2（鳥取城跡）。"
        },
        {
          time: "18:00 - 18:30",
          tag: "移動",
          isSub: true,
          title: "🚌 返抵 JR 鳥取站前商圈",
          desc: "抵達鳥取站前，準備享用燒肉大餐。"
        },
        {
          time: "18:30",
          tag: "美食",
          title: "🥩 晚餐：鳥取名物「萬葉牛燒肉」",
          desc: "於「燒肉牛王 鳥取總店」享用鳥取頂級黑毛和牛「萬葉牛」燒肉大餐。",
          navLink: "https://maps.app.goo.gl/NAsLPS5ftU8erE2j7"
        },
        {
          time: "20:30",
          tag: "購物",
          title: "🛍️ AEON 鳥取店（超市）大採購",
          desc: "步行至車站南口旁邊的 AEON 鳥取店（大型超市，營業至 22:00），採買當季日本水果（麝香葡萄/草莓）、零食與宵夜。"
        },
        {
          time: "21:30",
          tag: "休息",
          isSub: true,
          title: "🏨 回飯店休息",
          desc: "從 AEON 提戰利品步行 3 分鐘直接返回 APA 飯店 鳥取站南口休息！\n💡 住宿地點：APA 飯店 鳥取站南口（連住第 2 晚，免搬行李）。"
        }
      ]
    },
    {
      dayNum: 3,
      dateNum: "10",
      monthNum: "11月",
      weekDay: "TUE",
      kanjiNum: "參",
      fullDate: "11月10日",
      dayOfWeek: "火曜日",
      headline: "柯南 · 溫泉體驗與夜鳴拉麵",
      location: "鳥取/境港",
      lat: 35.5464,
      lon: 133.2304,
      summaryFlow: "☕ 砂場咖啡早餐 ➔ 🚆 Super Hakuto 特急 ➔ 🕵️ 由良柯南小鎮(午餐) ➔ 🚃 鬼太郎電車 ➔ ♨️ 入住境港御宿野乃 ➔ 🍜 夜鳴拉麵",
      spots: [
        {
          time: "08:30 - 09:40",
          tag: "美食",
          title: "☕ 彈性起床 ＆ 早餐",
          desc: "彈性安排：可去鳥取站前「砂場咖啡」吃朝顏早餐，或在 APA 飯店睡飽、收拾行李。",
          navLink: "https://maps.app.goo.gl/m7k23HD1VQDiQnkr6"
        },
        {
          time: "09:40 - 10:00",
          tag: "移動",
          isSub: true,
          title: "🚶 APA 鳥取站南口退房 ➔ 鳥取站",
          desc: "辦理退房，拉著行李步行 2 分鐘穿過車站自由通道至北口，進站準備搭車。"
        },
        {
          time: "10:14 - 10:43",
          tag: "特急",
          isSub: true,
          title: "🚆 JR 鳥取站 ➔ JR 倉吉站",
          desc: "搭乘 JR 特急 Super Hakuto 1號 直達倉吉（Pass 全額涵蓋，車程 29 分鐘，舒適有行李架）。"
        },
        {
          time: "10:43 - 11:06",
          tag: "轉乘",
          isSub: true,
          title: "⏳ 倉吉站內悠閒轉乘（23分鐘）",
          desc: "倉吉站內悠閒轉乘。"
        },
        {
          time: "11:06 - 11:15",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 倉吉站 ➔ JR 由良站（柯南站）",
          desc: "搭乘 JR 山陰本線普通車直達由良站（Pass 全額涵蓋，車程 9 分鐘）。"
        },
        {
          time: "11:15 - 11:25",
          tag: "寄物",
          isSub: true,
          title: "🧳 抵達由良站、寄放行李",
          desc: "將大行李寄放在由良站內置物櫃或站前觀光案內所。"
        },
        {
          time: "11:25 - 14:50",
          tag: "景點",
          title: "🕵️ 【由良柯南小鎮巡禮 ＋ 午餐】（3.5h）",
          desc: "沿柯南大道拍照 ➔ 米花商店街（白羅咖啡廳享用安室透火腿三明治與午餐） ➔ 青山剛昌故鄉館參觀。",
          navLink: "https://gogojp.tw/2017-06-27-277/"
        },
        {
          time: "14:50 - 14:55",
          tag: "移動",
          isSub: true,
          title: "🚌 青山剛昌故鄉館 ➔ 由良站",
          desc: "於故鄉館門口搭北榮町社區巴士/計程車（約 200 日圓，5 分鐘）直達由良站取行李，準備搭車。"
        },
        {
          time: "15:06 - 16:14",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 由良站 ➔ JR 米子站",
          desc: "搭乘 JR 山陰本線普通電車前往米子站（Pass 全額涵蓋，車程約 68 分鐘）。"
        },
        {
          time: "16:14 - 16:25",
          tag: "轉乘",
          isSub: true,
          title: "📸 米子站月台轉乘拍照",
          desc: "於米子站月台轉乘（0號鬼太郎月台），拍照欣賞鬼太郎主題車站造景。"
        },
        {
          time: "16:25 - 17:15",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 米子站 ➔ JR 境港站",
          desc: "搭乘 JR 境線（鬼太郎列車）直達境港（Pass 全額涵蓋，車程約 50 分鐘）。"
        },
        {
          time: "17:15 - 18:30",
          tag: "住宿",
          title: "♨️ 【入住 御宿野乃 境港】",
          desc: "出站即達飯店！辦理 Check-in，體驗全館榻榻米、泡頂級溫泉、享用免費冰棒，穿作務衣逛門口的水木茂大道。\n💡 住宿地點：御宿野乃 境港（日式溫泉飯店，全館榻榻米）。",
          navLink: "https://maps.google.com/?q=Onyado+Nono+Sakaiminato"
        },
        {
          time: "18:30 - 20:30",
          tag: "美食",
          title: "🍱 【晚餐：彈性留白 / 當天決定】",
          desc: "自由安排！看當天想吃居酒屋、海鮮丼或請飯店櫃檯協助叫計程車/推薦餐廳。"
        },
        {
          time: "20:30 之後",
          tag: "美食",
          isSub: true,
          title: "🍜 散步回飯店 ＋ 享用夜鳴拉麵",
          desc: "享受野乃夜間溫泉與頂級設施，21:30 後可免費享用野乃專屬「夜鳴醬油拉麵」宵夜！\n💡 柯南電車官方查詢：出發前 1~3 天可上「鳥取縣廳 柯南列車運行時刻表」網站，確認當日彩繪車行駛班次。"
        }
      ]
    },
    {
      dayNum: 4,
      dateNum: "11",
      monthNum: "11月",
      weekDay: "WED",
      kanjiNum: "肆",
      fullDate: "11月11日",
      dayOfWeek: "水曜日",
      headline: "水都 · 大山/足立與國寶松江城",
      location: "境港/米子/松江",
      lat: 35.4281,
      lon: 133.3311,
      summaryFlow: "🍱 境港野乃早餐 ➔ 🚃 鬼太郎電車 ➔ ⛰️ 大山包車 / 🎨 足立美術館 ➔ 🚆 特急 Yakumo ➔ 🏯 松江城 ➔ 🌅 宍道湖日落 ➔ 🏨 東橫INN 米子",
      spots: [
        {
          time: "08:00 - 09:30",
          tag: "美食",
          title: "🍱 【御宿野乃 境港】奢華早餐",
          desc: "08:00 起床，享用野乃招牌勝手丼（海鮮自選丼飯）、海鮮炸物與日式早餐吃到飽。"
        },
        {
          time: "09:30 - 10:27",
          tag: "退房",
          isSub: true,
          title: "🚶 退房 ➔ 前往 JR 境港站",
          desc: "辦理退房，提行李步行 1 分鐘至 JR 境港站。"
        },
        {
          time: "10:27 - 11:11",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 境港站 ➔ JR 米子站",
          desc: "搭乘 JR 境線（鬼太郎列車）前往米子站（Pass 全額涵蓋，車程 44 分鐘）。"
        },
        {
          time: "11:11 - 11:30",
          tag: "服務",
          isSub: true,
          title: "📝 抵達米子站、申請觀光計程車",
          desc: "於車站出站（若需寄存部分行李可利用置物櫃），至觀光案內所/指定地點尋找計程車。"
        },
        {
          time: "11:30 - 14:30",
          tag: "包車",
          title: "🚕 大山觀光計程車 / 🎨 足立美術館（二選一）",
          desc: "選擇大山觀光包車，或參觀連續 20 年日本第一庭園的足立美術館。",
          options: [
            {
              name: "選項 1：【大山觀光計程車 B-3路線】（3h）",
              desc: "米子站 ➔ 大山牧場（牛奶之鄉看大山絕景、吃超濃牛奶霜淇淋） ➔ 大山G啤酒館（採買金賞精釀啤酒） ➔ 返抵米子站。（預約時需於表單註記行李件數，司機會將大行李妥善放於後車廂）",
              navLink: "https://daisenwonder-jp.translate.goog/taxi/?_x_tr_sl=ja&_x_tr_tl=zh-TW&_x_tr_hl=ja"
            },
            {
              name: "選項 2：足立美術館參觀",
              desc: "成人 2,500 日圓，可當日購票。JR 米子站 ➔ （JR 山陰本線）直達 JR 安來站 ➔ 轉乘免費接駁車 (20分鐘) 直達足立美術館。",
              navLink: "https://www.adachi-museum.or.jp/shuttle-bus"
            }
          ]
        },
        {
          time: "14:28 - 14:54",
          tag: "特急",
          title: "🚆 米子站 ➔ 松江站 交通三選一",
          desc: "選擇合適班次移動：",
          options: [
            {
              name: "選項 1【首選】：JR 特急 Yakumo 15號",
              desc: "14:28 - 14:54，車程僅 26 分鐘，Pass 全包可劃位（若搭乘此班，15:00 即可接公車前往松江城）。"
            },
            {
              name: "選項 2【備案 1】：JR 山陰本線（普通）",
              desc: "14:37 - 15:12，普通車直達松江站（Pass 全包，車程 35 分鐘）。"
            },
            {
              name: "選項 3【備案 2】：JR 特急 Super Oki 4號",
              desc: "14:57 - 15:19，特急直達松江站（Pass 全包，車程 22 分鐘）。"
            }
          ],
          tip: "💡 特急彈性選擇：米子至松江段班次密集，憑 JR Pass 可自由劃位搭乘 Yakumo 或 Super Oki。"
        },
        {
          time: "15:00 - 15:15",
          tag: "公車",
          isSub: true,
          title: "🚌 松江站 ➔ 松江城",
          desc: "於松江站北口搭乘 31 號公車或 Lake Line 循環公車至「國寶松江城大手前」下車（車程約 10-15 分鐘，可刷西瓜卡）。"
        },
        {
          time: "15:15 - 16:30",
          tag: "名勝",
          title: "🏯 【國寶 松江城】天守閣登閣",
          desc: "登頂日本現存十二天守之一的松江城天守閣，遠眺松江水都與宍道湖全景。\n門票 1,200 日圓，亦可於戶外園區散步看護城河。",
          navLink: "https://maps.google.com/?q=Matsue+Castle"
        },
        {
          time: "16:30 - 16:45",
          tag: "移動",
          isSub: true,
          title: "🚌 松江城 ➔ 島根縣立美術館",
          desc: "搭乘公車或計程車前往 島根縣立美術館 戶外宍道湖畔公園。"
        },
        {
          time: "16:45 - 17:20",
          tag: "絕景",
          title: "🌅 【宍道湖日落】欣賞絕美夕陽",
          desc: "於湖畔草坪公園欣賞「日本夕陽百選」落日絕景（11 月日落時間約 16:30 左右）。"
        },
        {
          time: "17:30 - 18:10",
          tag: "移動",
          isSub: true,
          title: "🚌 湖畔公園 ➔ JR 松江站 ➔ JR 米子站",
          desc: "搭公車回松江站，轉乘特急列車（約 20-25 分鐘）返抵 JR 米子站。"
        },
        {
          time: "18:15 - 18:30",
          tag: "住宿",
          isSub: true,
          title: "🏨 入住 Toyoko Inn Yonago ekimae",
          desc: "提行李至車站旁的 Toyoko Inn Yonago ekimae 辦理 Check-in。\n💡 住宿地點：Toyoko Inn Yonago ekimae（位於 JR 米子站前，步行 2 分鐘即可抵達）。",
          navLink: "https://maps.google.com/?q=Toyoko+Inn+Yonago-ekimae"
        },
        {
          time: "18:30 之後",
          tag: "美食",
          title: "🍗 米子站前享用晚餐",
          desc: "於米子站前商圈享用在地居酒屋、山陰海鮮或大山雞料理。（如果要在松江吃完晚餐再回去也可以）"
        }
      ]
    },
    {
      dayNum: 5,
      dateNum: "12",
      monthNum: "11月",
      weekDay: "THU",
      kanjiNum: "伍",
      fullDate: "11月12日",
      dayOfWeek: "木曜日",
      headline: "神話 · 出雲大社參拜與橫跨山陽",
      location: "出雲/岡山",
      lat: 35.3606,
      lon: 132.7553,
      summaryFlow: "米子 ➔ 🧳 出雲市站寄行李 ➔ ⛩️ 稻佐之濱 ➔ ⛩️ 出雲大社 ➔ 🍜 蕎麦処八雲 ➔ 🚆 新型特急 Yakumo ➔ 🏨 Hotel Abest 岡山 ➔ 🥩 Yakiniku Griglia 燒肉",
      spots: [
        {
          time: "08:00 - 09:10",
          tag: "退房",
          isSub: true,
          title: "🍱 早餐 ＆ 退房",
          desc: "享用東橫 INN 免費早餐，辦理退房提行李至 JR 米子站。"
        },
        {
          time: "09:23 - 10:18",
          tag: "特急",
          isSub: true,
          title: "🚆 JR 米子站 ➔ JR 出雲市站",
          desc: "搭乘 JR 特急 Yakumo 3號 直達出雲市（Pass 全額涵蓋，車程 55 分鐘）。"
        },
        {
          time: "10:18 - 10:30",
          tag: "寄物",
          isSub: true,
          title: "🧳 JR 出雲市站寄放行李",
          desc: "【關鍵步驟】出站後立即將大行李寄放在 JR 出雲市站置物櫃/人工寄物處。"
        },
        {
          time: "10:30 - 11:00",
          tag: "移動",
          isSub: true,
          title: "🚌 JR 出雲市站 ➔ 出雲大社",
          desc: "【機動應變】首選站前 1 號月台一畑巴士直達正門（車程約 25 分）；若趕上電車亦可搭乘一畑電車（可刷西瓜卡）。"
        },
        {
          time: "11:00 - 11:40",
          tag: "景點",
          title: "🌊 【稻佐之濱】聖地巡禮",
          desc: "抵達出雲大社後，先前往稻佐之濱欣賞神明登陸之海岸絕景與拿取御砂。",
          navLink: "https://maps.google.com/?q=Inasa+Beach"
        },
        {
          time: "11:45 - 13:45",
          tag: "神社",
          title: "⛩️ 【出雲大社 ＆ 北島國造館參拜】",
          desc: "1. 參觀本殿、拜殿、巨大注連繩。\n2. 前往北島國造館購買「神在月限定龍蛇神御朱印帳」與限定朱印（集滿境內三印）。",
          navLink: "https://maps.google.com/?q=Izumo+Taisha"
        },
        {
          time: "13:45 - 14:45",
          tag: "美食",
          title: "🍜 午餐：蕎麦処八雲",
          desc: "於出雲大社鳥居旁的 蕎麦処八雲 享用在地名物「三段割子蕎麥麵」。",
          navLink: "https://maps.app.goo.gl/jHaXvbv56M23g9ax7"
        },
        {
          time: "14:20 - 14:45",
          tag: "電車",
          isSub: true,
          title: "🚃 【備案電車】出雲大社前 ➔ 電鐵出雲市",
          desc: "【備案】若提早吃完午餐，可搭 14:20 電車接 15:35 的特急 Yakumo 返岡山。"
        },
        {
          time: "15:20 - 15:43",
          tag: "電車",
          isSub: true,
          title: "🚃 【主方案】出雲大社前 ➔ 電鐵出雲市",
          desc: "【主力班次】悠閒搭乘一畑電車返抵電鐵出雲市站，步行至隔壁 JR 站取回大行李。"
        },
        {
          time: "15:45 - 16:41",
          tag: "準備",
          isSub: true,
          title: "🧳 JR 出雲市站取行李 ＆ 進站",
          desc: "取回寄放的大行李，購買點心飲料後至月台等候特急。"
        },
        {
          time: "16:41 - 19:48",
          tag: "特急",
          title: "🚆 【橫跨山陰山陽】JR 出雲市 ➔ JR 岡山",
          desc: "【重點體驗】搭乘 273 系全新特急 Yakumo 26號 橫跨山區直達岡山（Pass 全包需劃位，車程 3 小時 7 分鐘）。",
          tip: "💡 特急特大行李席：出雲市站劃位時，務必確認劃到帶有特大行李置物空間的座位號碼。"
        },
        {
          time: "19:50 - 20:10",
          tag: "住宿",
          isSub: true,
          title: "🏨 入住 Hotel Abest Grande Okayama",
          desc: "出 JR 岡山站走地下街直達 Hotel Abest Grande Okayama 辦理 Check-in。\n💡 住宿地點：Hotel Abest Grande Okayama（岡山市北區站前町 1-8-5，位於 ICOT NICOZ 大樓內）。",
          navLink: "https://maps.google.com/?q=Hotel+Abest+Grande+Okayama"
        },
        {
          time: "20:30",
          tag: "美食",
          title: "🥩 晚餐：Yakiniku Griglia 燒肉放題",
          desc: "飯店步行三分鐘，享用歡樂燒肉放題！",
          navLink: "https://maps.app.goo.gl/q13iM2UYkCDsi53CA"
        }
      ]
    },
    {
      dayNum: 6,
      dateNum: "13",
      monthNum: "11月",
      weekDay: "FRI",
      kanjiNum: "陸",
      fullDate: "11月13日",
      dayOfWeek: "金曜日",
      headline: "廣島 · 宮島大鳥居與彌山美景",
      location: "廣島/宮島",
      lat: 34.3963,
      lon: 132.4594,
      summaryFlow: "岡山 ➔ 🚄 新幹線至廣島 ➔ ⛴️ JR渡輪至宮島 ➔ ⛩️ 嚴島神社 ➔ 🦪 牡蠣午餐 ➔ 🍁 紅葉饅頭體驗 ➔ 🚠 彌山纜車 ➔ 🌅 退潮大鳥居 ➔ 🥞 廣島燒",
      spots: [
        {
          time: "08:30 - 09:15",
          tag: "出發",
          isSub: true,
          title: "🚶 睡到飽 ＆ 岡山出發",
          desc: "08:30 輕鬆起床退房/出門，步行至 JR 岡山站新幹線月台。"
        },
        {
          time: "09:26 - 10:02",
          tag: "新幹線",
          isSub: true,
          title: "🚄 JR 岡山站 ➔ JR 廣島站",
          desc: "搭乘山陽新幹線 (Nozomi 3號) 極速移動至廣島（Pass 全包，車程 36 分鐘）。"
        },
        {
          time: "10:15 - 10:42",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 廣島站 ➔ JR 宮島口站",
          desc: "站內轉乘 JR 山陽本線電車至宮島口站（Pass 全包，車程 27 分鐘）。"
        },
        {
          time: "10:55 - 11:10",
          tag: "渡輪",
          isSub: true,
          title: "⛴️ 宮島口碼頭 ➔ 宮島棧橋",
          desc: "搭乘 JR 宮島渡輪登島（Pass 全包，航程 10 分鐘，選擇靠鳥居側船隻）。",
          cost: "碼頭閘門需付宮島訪問稅 100円 (可刷西瓜卡)"
        },
        {
          time: "11:15 - 12:30",
          tag: "名勝",
          title: "⛩️ 【滿潮景致】嚴島神社 ＆ 海上大鳥居",
          desc: "登島後先參觀國寶嚴島神社與朱紅色海上大鳥居，拍攝水上神社全景（11:00-12:30 滿潮尾聲 ~ 中潮，能拍到水上神社全景）。",
          navLink: "https://maps.google.com/?q=Itsukushima+Shrine"
        },
        {
          time: "12:30 - 13:45",
          tag: "美食",
          title: "🦪 【表參道商店街午餐 ＆ 掃街】",
          desc: "享用宮島名物：現烤生蠔／牡蠣、穴子魚（星鰻）飯、炸紅葉饅頭。"
        },
        {
          time: "13:45 - 14:45",
          tag: "體驗",
          title: "🍁 【手作紅葉饅頭體驗】",
          desc: "前往表參道老舖（如「山田屋」）體驗親手烤紅葉饅頭（約 45-60 分鐘，需預約）。",
          tip: "💡 若山田屋預約已滿，宮島傳統產業會館也可以體驗做饅頭，可電話預約。"
        },
        {
          time: "14:45 - 15:00",
          tag: "接駁",
          isSub: true,
          title: "🚌 商店街 ➔ 紅葉谷公園接駁站 ➔ 纜車站",
          desc: "散步至紅葉谷公園，搭乘免費接駁公車直達纜車紅葉谷站（免爬陡坡）。"
        },
        {
          time: "15:00 - 16:30",
          tag: "纜車",
          title: "🚠 【彌山纜車】獅子岩展望台看海景",
          desc: "搭乘兩段纜車直達獅子岩站，在展望台俯瞰瀨戶內海多島美景（不爬山，看完景直接搭纜車原路下山）。",
          cost: "纜車可刷西瓜卡",
          tip: "💡 纜車省力亮點：纜車只搭到獅子岩站欣賞展望風格，不需再往彌山山頂徒步，體力負擔極低。"
        },
        {
          time: "16:30 - 17:15",
          tag: "絕景",
          title: "🌅 【退潮體驗】大鳥居正下方走走",
          desc: "返抵海邊（16:00-17:00 退潮/乾潮），此時海水正好退去，可以直接走下沙灘到大鳥居正下方合影！"
        },
        {
          time: "17:25 - 17:40",
          tag: "渡輪",
          isSub: true,
          title: "⛴️ 宮島棧橋 ➔ 宮島口",
          desc: "搭渡輪告別宮島返回宮島口碼頭。"
        },
        {
          time: "17:50 - 18:20",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 宮島口站 ➔ JR 廣島站",
          desc: "搭乘電車返回 JR 廣島站。"
        },
        {
          time: "18:25 - 19:45",
          tag: "美食",
          title: "🥞 【廣島晚餐】正宗廣島燒",
          desc: "於廣島站內（ekie 大樓「廣島燒街」：麗ちゃん 或 みっちゃん）享用正宗廣島燒。"
        },
        {
          time: "20:00 之後",
          tag: "新幹線",
          isSub: true,
          title: "🚄 JR 廣島站 ➔ JR 岡山站",
          desc: "新幹線車次極多（如 20:00 或 20:30），隨到隨搭，40 分鐘即返抵岡山回飯店休息！\n💡 住宿地點：Hotel Abest Grande Okayama（連住第 2 晚，位於岡山站前）。",
          tip: "💡 新幹線彈性：廣島回岡山的新幹線每小時有 4~6 班以上，晚餐吃完直接去月台搭車即可，完全不用追車。"
        }
      ]
    },
    {
      dayNum: 7,
      dateNum: "14",
      monthNum: "11月",
      weekDay: "SAT",
      kanjiNum: "柒",
      fullDate: "11月14日",
      dayOfWeek: "土曜日",
      headline: "水鄉 · 倉敷美觀川舟與後樂園漫步",
      location: "倉敷/岡山",
      lat: 34.5960,
      lon: 133.7712,
      summaryFlow: "岡山 ➔ 🚃 電車至倉敷 ➔ ⛩️ 阿智神社 ➔ 🍮 有鄰庵午餐 ➔ 🚣 倉敷川舟 ➔ 🌳 岡山後樂園 ➔ 🏯 岡山城 ➔ 🍜 麵酒一照庵",
      spots: [
        {
          time: "08:30 - 09:20",
          tag: "早餐",
          isSub: true,
          title: "🍱 睡到飽 ＆ 早餐",
          desc: "08:30 輕鬆起床，於飯店享用早餐 (前一天買超商)。"
        },
        {
          time: "09:23 - 09:30",
          tag: "移動",
          isSub: true,
          title: "🚶 飯店 ➔ JR 岡山站月台",
          desc: "從 Hotel Abest Grande Okayama 步行至 JR 岡山站山陽本線月台。"
        },
        {
          time: "09:30 - 09:47",
          tag: "電車",
          isSub: true,
          title: "🚃 JR 岡山站 ➔ JR 倉敷站",
          desc: "搭乘普通電車直達倉敷站（Pass 全額涵蓋，車程僅 17 分鐘）。"
        },
        {
          time: "09:50 - 10:40",
          tag: "神社",
          title: "⛩️ 【阿智神社】登高參拜",
          desc: "經惠比壽商店街走緩坡登頂，參拜阿智神社、購買「花纏守」並俯瞰美觀地區全景。",
          navLink: "https://maps.google.com/?q=Achi+Shrine+Kurashiki"
        },
        {
          time: "10:40 - 10:50",
          tag: "購票",
          isSub: true,
          title: "🎫 阿智神社 ➔ 倉敷館 觀光案內所",
          desc: "順著步道走下山，至運河中央「倉敷館」購買當日川舟船票（500日圓/人）。",
          cost: "500円 / 人"
        },
        {
          time: "11:00 - 12:00",
          tag: "美食",
          title: "🍮 【有鄰庵午餐 ＆ 商店街散步】",
          desc: "享用「有鄰庵」幸福布丁與名物午餐，順遊 mt 紙膠帶專賣店（如心庭）。",
          navLink: "https://maps.app.goo.gl/CBK3msTS7w79Qc5a8"
        },
        {
          time: "12:00 - 12:30",
          tag: "體驗",
          title: "🚣 【倉敷川舟乘船體驗】",
          desc: "於倉敷館門口搭乘傳統木舟，欣賞兩岸柳樹與白壁建築（航程 20 分鐘）。"
        },
        {
          time: "13:00 - 13:17",
          tag: "電車",
          isSub: true,
          title: "🚃 JR 倉敷站 ➔ JR 岡山站",
          desc: "搭乘普通電車返回 JR 岡山站（Pass 全包，車程僅 17 分鐘）。"
        },
        {
          time: "13:30 - 13:45",
          tag: "移動",
          isSub: true,
          title: "🚃 JR 岡山站 ➔ 後樂園",
          desc: "於站前搭乘路面電車至「城下」站下車，步行至後樂園。（路面電車不可使用 JR Pass，可刷西瓜卡）"
        },
        {
          time: "13:45 - 15:30",
          tag: "名勝",
          title: "🌳 【岡山後樂園】優雅散步",
          desc: "【時間極度充裕】留足近 2 小時遊覽日本三大名園之一的庭園與秋季紅葉。",
          navLink: "https://maps.google.com/?q=Korakuen+Garden"
        },
        {
          time: "15:30 - 16:30",
          tag: "古城",
          title: "🏯 【黑色 岡山城】天守閣 ＆ 外觀",
          desc: "跨過月見橋欣賞金烏城黑色外牆與金箔瓦片（時間充裕亦可登頂參觀展覽）。",
          navLink: "https://maps.google.com/?q=Okayama+Castle"
        },
        {
          time: "16:45 之後",
          tag: "美食",
          title: "🍜 晚餐：麵酒一照庵 岡山本店 ＆ 大採購 🛒",
          desc: "搭路面電車回岡山站，享用「麵酒一照庵 岡山本店」（雞白湯 + 雞皮餃子），並於岡山車站商圈大採購。",
          navLink: "https://maps.app.goo.gl/yrDxDiZWQoackBUF6"
        }
      ]
    },
    {
      dayNum: 8,
      dateNum: "15",
      monthNum: "11月",
      weekDay: "SUN",
      kanjiNum: "捌",
      fullDate: "11月15日",
      dayOfWeek: "日曜日",
      headline: "桃太郎 · 吉備雙社大迴廊與歸途",
      location: "岡山",
      lat: 34.6617,
      lon: 133.9350,
      summaryFlow: "岡山 ➔ ⛩️ 吉備津彥神社 ➔ ⛩️ 吉備津神社大迴廊 ➔ 🛍️ 岡山最後採買 ➔ ✈️ 岡山機場返台",
      flight: "回程 · 虎航 IT215 | OKJ 15:25 ➔ TPE 17:30 · 2h05m",
      spots: [
        {
          time: "08:30 - 09:00",
          tag: "寄物",
          isSub: true,
          title: "🧳 退房 ＆ 岡山站寄放行李",
          desc: "辦理退房，將行李寄存在 Hotel Abest Grande Okayama 或 JR 岡山站置物櫃。"
        },
        {
          time: "09:03 - 09:15",
          tag: "電車",
          isSub: true,
          title: "🚃 JR 岡山站 ➔ JR 備前一宮站",
          desc: "搭乘 JR 吉備線（桃太郎線）電車前往備前一宮站（車程約 12 分鐘）。\n💡 第八天沒有 JR Pass，整天刷西瓜卡即可。"
        },
        {
          time: "09:18 - 10:10",
          tag: "神社",
          title: "⛩️ 【吉备津彦神社】元祖參拜",
          desc: "出站步行 3 分鐘即抵達！參拜桃太郎原型神社、欣賞千年平安杉與古老石燈籠。",
          navLink: "https://maps.google.com/?q=Kibitsuhiko+Shrine",
          tip: "💡 順路亮點：先到備前一宮站看吉備津彥神社，再搭 4 分鐘電車到吉備津站看吉備津神社的大迴廊，完全不走回頭路！"
        },
        {
          time: "10:15 - 10:20",
          tag: "電車",
          isSub: true,
          title: "🚃 JR 備前一宮站 ➔ JR 吉備津站",
          desc: "搭乘電車僅 1 站直達吉備津站（車程 4 分鐘）。"
        },
        {
          time: "10:25 - 11:35",
          tag: "神社",
          title: "⛩️ 【吉备津神社】大迴廊巡禮",
          desc: "步行 10 分鐘至神社，參觀 400 公尺國寶木造大迴廊、採買桃太郎御守與朱印。",
          navLink: "https://maps.google.com/?q=Kibitsu+Shrine"
        },
        {
          time: "11:46 - 12:05",
          tag: "電車",
          isSub: true,
          title: "🚃 JR 吉備津站 ➔ JR 岡山站",
          desc: "搭乘電車返回 JR 岡山站（車程約 18 分鐘）。"
        },
        {
          time: "12:10 - 13:30",
          tag: "美食",
          title: "🛍️ 【岡山午餐 ＆ 最後大採購】",
          desc: "取回行李，於岡山站內/地下街享用午餐（推薦：醬汁豬排丼或千屋牛燒肉），做離境前的最後補貨。"
        },
        {
          time: "13:30 之後",
          tag: "機場",
          isSub: true,
          title: "🚌 前往機場 / 搭新幹線返程",
          desc: "依據航班或返程新幹線班次前往岡山機場或關西機場，圓滿結束 8 天山陰山陽之旅！"
        },
        {
          time: "15:25 - 17:30",
          tag: "航班",
          title: "✈️ 岡山桃太郎機場 ➔ 桃園國際機場",
          desc: "搭乘虎航 IT215 航班返抵國門（飛行時間約 2 小時 5 分鐘）。"
        }
      ]
    }
  ],
  prepareList: [
    "護照（效期 6 個月以上）",
    "Visit Japan Web 入境審查 QR Code 截圖",
    "JR 山陰&山陽 7日 Pass 兌換券",
    "日圓現金（備用/觀光計程車費用約 6,000円）",
    "網卡 / eSIM 網路設定完畢",
    "保暖外套與隨身折傘（山陰海邊溫差較大）",
    "相機 / 手機行動電源與充電線"
  ],
  resources: [
    {
      title: "Visit Japan Web 官網",
      desc: "填寫日本入境與海關申報手續",
      url: "https://services.digital.go.jp/zh-cmn-hant/visit-japan-web/"
    },
    {
      title: "JR 西日本時刻表與劃位",
      desc: "特急 Super Inaba / 八雲號 / 新幹線時刻查詢",
      url: "https://mydia.jr-odekake.net/cgi-bin/mydia.cgi"
    },
    {
      title: "鳥取觀光計程車方案官網",
      desc: "鳥取 3 小時 6,000円 外國人優惠包車介紹",
      url: "https://www.city.tottori.lg.jp/page/5330.html"
    },
    {
      title: "大山觀光計程車官網",
      desc: "米子出發大山牧場與精釀啤酒館路線",
      url: "https://daisenwonder-jp.translate.goog/taxi/?_x_tr_sl=ja&_x_tr_tl=zh-TW&_x_tr_hl=ja"
    },
    {
      title: "足立美術館接駁車時刻表",
      desc: "安來站免費接駁車班次查詢",
      url: "https://www.adachi-museum.or.jp/shuttle-bus"
    },
    {
      title: "蕎麦処八雲 (出雲大社)",
      desc: "出雲大社鳥居旁三段割子蕎麥麵名店",
      url: "https://maps.app.goo.gl/jHaXvbv56M23g9ax7"
    },
    {
      title: "麵酒一照庵 岡山本店",
      desc: "岡山在地人氣雞白湯拉麵與雞皮餃子",
      url: "https://maps.app.goo.gl/yrDxDiZWQoackBUF6"
    }
  ]
};
