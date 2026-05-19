// Exhibition records for the v0.5 static site.
// These entries keep exhibitions as content/trust assets while collections remain
// the primary commerce and inquiry path.

const EXHIBITIONS = [
  {
    id: "london-2026",
    titleZh: "以物会心",
    titleEn: "To Encounter the Mind through Objects",
    city: "London",
    cityZh: "伦敦",
    year: "2026",
    venue: "Somerset House",
    dateRange: "Sep 16–27, 2026",
    area: "1,000㎡",
    workCount: "60+ Selected Works",
    modes: "Web · VR · Mobile",
    status: "featured",
    image: "assets/hero/jian-ware-bowl-hero.jfif",
    summaryZh: "在 AI 时代重新发现手作之美，让非遗作品成为观众觉察内心、安顿身心的媒介。",
    summaryEn: "Rediscovering the beauty of handwork in the age of AI, where works become a medium for inner awareness and restoration.",
    href: "exhibition-london-2026.html",
    digitalTwinHref: "vr-preview/",
    chapters: [
      {
        nameZh: "澄心",
        nameEn: "Clear the Mind",
        keywordsZh: "清简、通透、沉淀、自省",
        keywordsEn: "clarity, transparency, stillness, introspection",
        categoriesZh: "素色瓷、茶酒器具、玻璃、水晶、琉璃",
        categoriesEn: "plain ceramics, tea and wine vessels, glass, crystal, liuli"
      },
      {
        nameZh: "修心",
        nameEn: "Cultivate the Mind",
        keywordsZh: "礼制、秩序、雕琢、自律",
        keywordsEn: "ritual, order, refinement, discipline",
        categoriesZh: "礼器、礼服、家具、金工、雕刻、造型作品",
        categoriesEn: "ritual vessels, ceremonial dress, furniture, metalwork, carving, sculptural works"
      },
      {
        nameZh: "养心",
        nameEn: "Nourish the Mind",
        keywordsZh: "感官滋养、生活艺术、精神安顿",
        keywordsEn: "sensory nourishment, art of living, spiritual restoration",
        categoriesZh: "丝竹、戏曲、饮食、中医、香道、花艺、纤维装置",
        categoriesEn: "music, opera, food culture, Chinese medicine, incense, floral art, fiber installation"
      }
    ]
  },
  {
    id: "milan-2025",
    titleZh: "历史绵延，社交不止",
    titleEn: "A Narrative of Social Life",
    city: "Milan",
    cityZh: "米兰",
    year: "2025",
    venue: "Palazzo Serbelloni, Milan, Italy",
    dateRange: "Oct 3–12, 2025",
    status: "archive",
    image: "assets/hero/long-spring-children.jpg",
    summaryZh: "以社交文化为主线，通过宴会、雅集、茶会与戏剧四个社交场景呈现中国非遗与当代设计的跨文化表达。",
    summaryEn: "A historical edition organized around social life, presenting Chinese heritage and contemporary design through banquet, salon, tea gathering and opera scenes.",
    href: "exhibition-milan-2025.html"
  },
  {
    id: "paris-2024",
    titleZh: "人与自然 / 五行",
    titleEn: "Man and Nature / Five Elements",
    city: "Paris",
    cityZh: "巴黎",
    year: "2024",
    venue: "Musée des Arts Décoratifs, Paris",
    dateRange: "July 5–19, 2024",
    status: "archive",
    image: "assets/bg-scene.png",
    summaryZh: "新生万物国际巡展第一站，以中国“五行”哲学为框架，连接传统工艺、自然观与当代设计。",
    summaryEn: "The first international touring edition, using the Chinese Five Elements as a framework for craft, nature and contemporary design.",
    href: "exhibition-paris-2024.html"
  }
];

if (typeof window !== "undefined") {
  window.EXHIBITIONS = EXHIBITIONS;
}

if (typeof module !== "undefined") {
  module.exports = { EXHIBITIONS };
}
