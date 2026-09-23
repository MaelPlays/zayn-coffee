import { images, type Photo } from "./images";

export type MenuEntry = { name: string; note: string; price: string; photo: Photo };

/** Placeholder prices (PHP). Replace with the real menu before launch. */
export const signatureMenu: MenuEntry[] = [
  {
    name: "Espresso",
    note: "Short, dense and sweet. Pulled to order, served in glass.",
    price: "₱95",
    photo: images.espresso,
  },
  {
    name: "Signature Latte",
    note: "Silky milk over a double shot, poured by hand.",
    price: "₱140",
    photo: images.latteCeramic,
  },
  {
    name: "Iced Latte",
    note: "Cold, clean and made to last the whole afternoon.",
    price: "₱150",
    photo: images.icedMachine,
  },
  {
    name: "Matcha Latte",
    note: "Whisked green tea and soft milk, lightly sweet.",
    price: "₱160",
    photo: images.matcha,
  },
];
