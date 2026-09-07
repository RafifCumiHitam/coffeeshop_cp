export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface MenuCategory {
  id: string;
  name: string;
}

export const categories: MenuCategory[] = [
  { id: "all", name: "All" },
  { id: "espresso", name: "Espresso" },
  { id: "filter", name: "Filter Coffee" },
  { id: "non-coffee", name: "Non-Coffee" },
  { id: "pastry", name: "Pastry" },
  { id: "food", name: "Food" },
];

export const menuItems: MenuItem[] = [
  // Espresso
  {
    id: "esp-01",
    name: "Classic Espresso",
    description: "A bold, concentrated shot of our house blend with rich crema",
    price: 28000,
    category: "espresso",
  },
  {
    id: "esp-02",
    name: "Caffè Latte",
    description: "Silky steamed milk paired with a double shot of espresso",
    price: 38000,
    category: "espresso",
  },
  {
    id: "esp-03",
    name: "Flat White",
    description: "Velvety microfoam over a ristretto double shot, creamy and bold",
    price: 40000,
    category: "espresso",
  },
  {
    id: "esp-04",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and thick foam — a timeless classic",
    price: 38000,
    category: "espresso",
  },
  {
    id: "esp-05",
    name: "Oat Milk Latte",
    description: "Our signature latte made with creamy oat milk for a plant-based twist",
    price: 45000,
    category: "espresso",
  },
  {
    id: "esp-06",
    name: "Caramel Macchiato",
    description: "Vanilla-infused steamed milk, marked with espresso and caramel drizzle",
    price: 45000,
    category: "espresso",
  },

  // Filter Coffee
  {
    id: "flt-01",
    name: "Pour Over V60",
    description: "Single origin, hand-poured for a clean and bright cup with floral notes",
    price: 42000,
    category: "filter",
  },
  {
    id: "flt-02",
    name: "Cold Brew",
    description: "Steeped for 18 hours, smooth and naturally sweet with low acidity",
    price: 40000,
    category: "filter",
  },
  {
    id: "flt-03",
    name: "Aeropress",
    description: "Full-bodied immersion brew with a concentrated, espresso-like character",
    price: 38000,
    category: "filter",
  },
  {
    id: "flt-04",
    name: "Japanese Iced Coffee",
    description: "Hot-brewed directly over ice, locking in bright aromatics and clarity",
    price: 42000,
    category: "filter",
  },

  // Non-Coffee
  {
    id: "nc-01",
    name: "Matcha Latte",
    description: "Ceremonial-grade matcha whisked with steamed milk — earthy and smooth",
    price: 42000,
    category: "non-coffee",
  },
  {
    id: "nc-02",
    name: "Houjicha Latte",
    description: "Roasted Japanese green tea with a warm, nutty aroma over silky milk",
    price: 42000,
    category: "non-coffee",
  },
  {
    id: "nc-03",
    name: "Hot Chocolate",
    description: "Rich Belgian cocoa blended with steamed milk and a touch of vanilla",
    price: 38000,
    category: "non-coffee",
  },
  {
    id: "nc-04",
    name: "Fresh Lemonade",
    description: "House-pressed lemons with raw honey, served over crushed ice",
    price: 32000,
    category: "non-coffee",
  },

  // Pastry
  {
    id: "pst-01",
    name: "Butter Croissant",
    description: "Flaky, golden layers of French-style laminated dough, baked fresh daily",
    price: 28000,
    category: "pastry",
  },
  {
    id: "pst-02",
    name: "Almond Croissant",
    description: "Filled with frangipane cream, topped with sliced almonds and powdered sugar",
    price: 35000,
    category: "pastry",
  },
  {
    id: "pst-03",
    name: "Cinnamon Roll",
    description: "Soft brioche swirl with cinnamon spice and cream cheese glaze",
    price: 32000,
    category: "pastry",
  },
  {
    id: "pst-04",
    name: "Banana Bread",
    description: "Moist, walnut-studded loaf with a caramelized top, served warm",
    price: 30000,
    category: "pastry",
  },

  // Food
  {
    id: "fd-01",
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough with chili flakes, pickled onion, and a poached egg",
    price: 52000,
    category: "food",
  },
  {
    id: "fd-02",
    name: "Grilled Cheese Sandwich",
    description: "Aged cheddar and gruyère on thick-cut sourdough, pressed until golden",
    price: 48000,
    category: "food",
  },
  {
    id: "fd-03",
    name: "Granola Bowl",
    description: "House-made granola with Greek yogurt, seasonal fruits, and drizzled honey",
    price: 45000,
    category: "food",
  },
  {
    id: "fd-04",
    name: "Eggs Benedict",
    description: "Poached eggs and smoked salmon on an English muffin with hollandaise",
    price: 58000,
    category: "food",
  },
];

export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}`;
}
