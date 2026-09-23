export type Photo = { src: string; width: number; height: number; alt: string };

const p = (file: string, width: number, height: number, alt: string): Photo => ({
  src: `/images/${file}`,
  width,
  height,
  alt,
});

/** Single source of truth for photography. Swap a file in /public/images and update here. */
export const images = {
  logo: p("logo.jpg", 828, 828, "Zayn Coffee logo"),
  heroLatte: p("latte-heart-tray.jpg", 1086, 1448, "Heart latte art on a steel tray in dappled sunlight"),
  latteCeramic: p("latte-ceramic.jpg", 1179, 1176, "Heart latte in a speckled ceramic cup"),
  latteCheesecake: p("latte-cheesecake.jpg", 1536, 2048, "Latte and a slice of blueberry cheesecake on a wooden tray"),
  icedRoll: p("iced-latte-cinnamon-roll.jpg", 1179, 1272, "Iced latte and a cinnamon roll on a steel tray"),
  icedMachine: p("iced-latte-machine.jpg", 1536, 2048, "Iced latte in a Zayn cup on the espresso machine"),
  matcha: p("matcha-latte.jpg", 1536, 2048, "Iced matcha latte on a steel table"),
  espresso: p("espresso-glass.jpg", 1179, 1362, "Espresso in a fluted glass on a sunny windowsill"),
  barista: p("barista-pour.jpg", 1179, 1356, "Barista pouring steamed milk into a latte"),
  baristaBar: p("barista-2.jpg", 1179, 1362, "Barista's hands pulling a shot on the espresso machine, beside stacked Zayn cups and the bean grinder"),
  sandwich: p("sandwich.jpg", 2048, 1964, "Turkey and cheese sandwich on a wooden board"),
  storefrontWide: p("storefront-wide.jpg", 2048, 1536, "Zayn Coffee storefront with a white facade, cacti and a thatched bar"),
  storefrontTall: p("storefront-portrait.jpg", 1536, 2048, "White Zayn Coffee building with a large window and cacti"),
  interiorSeating: p("interior-seating.jpg", 1536, 2048, "Bright interior with a white table, rattan wall pieces and a cane bench"),
  interiorGuests: p("interior-guests.jpg", 1536, 2048, "Guests working and chatting in the softly lit cafe"),
  interiorBar: p("interior-window-bar.jpg", 1536, 2048, "Window bar with steel stools and rope pendant lights"),
} satisfies Record<string, Photo>;
