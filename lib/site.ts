/** Placeholder business details. Replace before launch. */
export const site = {
  name: "Zayn Coffee",
  shortName: "ZAYN",
  tagline: "Coffee worth slowing down for.",
  description: "Specialty coffee, good food and slow moments in Hilongos.",
  /** Placeholder. Swap for the real production domain before launch. */
  url: "https://zayncoffee.example.com",
  town: "Hilongos",
  address: "Brgy. Eastern Pob., Hilongos, Leyte",
  hours: [
    { days: "Monday to Saturday", time: "6:30am - 7:30pm" },
    { days: "Sunday", time: "Closed" },
  ],
  phone: "0915 807 0601",
  social: [
    { label: "Instagram", href: "https://www.instagram.com/zayn.coffeeph/" },
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100090312834866" },
  ],
  directionsHref: "https://www.google.com/maps/search/?api=1&query=Brgy.+Eastern+Pob.,+Hilongos,+Leyte",
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Story", href: "#story" },
    { label: "Coffee", href: "#craft" },
    { label: "Visit", href: "#visit" },
  ],
} as const;
