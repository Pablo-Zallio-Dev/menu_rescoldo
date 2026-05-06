export type Allergen =
  | "Pescado"
  | "Lácteos"
  | "Gluten"
  | "Huevo"
  | "Crustáceos"
  | "Frutos Secos";

export type PriceUnit = "kg" | "copa";

export type MenuItem = {
  name: string;
  price: number;
  currency: string;
  description: string;
  allergens: Allergen[];
  priceUnit?: PriceUnit; // opcional, solo en algunos platos
};

export type MenuCategory = {
  category: string;
  subtitle: string;
  image: string;
  items: MenuItem[];
};

export type Menu = {
  menu: MenuCategory[];
};