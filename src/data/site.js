// Everything the page says about the game: links, roadmap, trailers, features. Change it here.

export const links = {
  steam: "https://store.steampowered.com/app/2598020/Spire_Horizon_Online/",
  site: "https://sho.mendoka.com/",
  studio: "https://www.mendoka.com/",
  kofi: "https://ko-fi.com/mendoka/tiers",
  privacy: "https://www.mendoka.com/privacy-policy",
  terms: "https://www.mendoka.com/terms-of-service",
  eula: "https://www.mendoka.com/spire-horizon-online-eula",
  email: "contact@mendoka.com",
};

export const socials = [
  { name: "Discord", url: "https://discord.gg/AmFFEHyHWq", icon: "discord" },
  { name: "YouTube", url: "https://www.youtube.com/@mendokasan", icon: "youtube" },
  { name: "X", url: "https://x.com/mendokasan", icon: "x" },
  { name: "Facebook", url: "https://www.facebook.com/people/Mendoka/100088861612335/", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/mendokasan/", icon: "instagram" },
  { name: "TikTok", url: "https://www.tiktok.com/@mendokasan", icon: "tiktok" },
  { name: "Reddit", url: "https://www.reddit.com/r/Mendoka/", icon: "reddit" },
];

export const trailers = [
  { id: "POEOPQ56UKI", title: "Official Cinematic Trailer", cover: "/media/brand/trailer-cover.jpg" },
  { id: "7MjFTJ2zT0E", title: "Official Gameplay Trailer" },
];

export const pillars = [
  {
    title: "Rise as a skeleton",
    text: "Wake up as a resurrected skeleton adventurer and set out across Aetheria with your loyal capybara at your side.",
    icon: "skull",
  },
  {
    title: "25 classes to master",
    text: "Fists, blades, spears, guns, holy light or necromancy — find the fighting style that feels like yours.",
    icon: "swords",
  },
  {
    title: "A world to explore",
    text: "From green highlands and castle towns to deserts, snowfields and the heavens above the Mainland.",
    icon: "map",
  },
  {
    title: "Adventure together",
    text: "An MMORPG on PC — team up, hunt rare creatures and fill your collection with friends.",
    icon: "party",
  },
];

export const roadmap = [
  { date: "6 December 2024", title: "Launch", text: "The game officially launches, inviting players to begin their epic journey.", image: "/media/roadmap/shot-00007.jpg" },
  { date: "20 December 2024", title: "The Forest", text: "The Forest zone in the Mainland unlocks, introducing a new storyline.", image: "/media/roadmap/shot-00056.jpg" },
  { date: "10 January 2025", title: "The Desert", text: "The Desert zone in the Mainland unlocks, with a new storyline.", image: "/media/roadmap/shot-00069.jpg" },
  { date: "31 January 2025", title: "The Snow", text: "The Snow zone in the Mainland unlocks, with a new storyline.", image: "/media/roadmap/shot-00079.jpg" },
  { date: "21 February 2025", title: "The Heaven", text: "The Heaven zone in the Mainland unlocks, concluding the final storyline.", image: "/media/roadmap/shot-00060.jpg" },
  { date: "14 March 2025", title: "Full release", text: "The grand finale arrives with the full release, completing your epic journey.", image: "/media/roadmap/shot-00059.jpg" },
];

const shot = (n, alt) => ({ src: `/media/shots/sho-${n}.jpg`, thumb: `/media/shots/sho-${n}-thumb.jpg`, alt });
export const gallery = [
  shot("00007", "A skeleton and a capybara overlooking the castle town"),
  shot("00029", "Facing a horned beast in the forest"),
  shot("00012", "Fishing — with a shark looking back"),
  shot("00055", "Spells, fire and a curious capybara"),
  shot("00037", "A rocky foe by the river"),
  shot("00063", "Potions and mushrooms in the woods"),
  shot("00069", "Riding through the desert"),
  shot("00079", "Flying over the snowfields"),
  shot("00039", "Winged adventurers over the rooftops"),
  shot("00064", "The town square"),
  shot("00056", "Monster hunting in the forest"),
  shot("00074", "Desert battle"),
];

export const cards = Array.from({ length: 24 }, (_, i) => `/media/cards/card-${String(i).padStart(2, "0")}.webp`);
