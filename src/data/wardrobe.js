import { createProduct } from "./productFactory";

import pax from "../assets/products/wardrobe/ikea-pax.jpg";
import pax1 from "../assets/products/wardrobe/ikea-pax-1.jpg";
import pax2 from "../assets/products/wardrobe/ikea-pax-2.jpg";
import slimline from "../assets/products/wardrobe/godrej-slimline.jpg";
import slimline1 from "../assets/products/wardrobe/godrej-slimline-1.jpg";
import slimline2 from "../assets/products/wardrobe/godrej-slimline-2.jpg";
import freedom from "../assets/products/wardrobe/nilkamal-freedom-plus.jpg";
import freedom1 from "../assets/products/wardrobe/nilkamal-freedom-plus-1.jpg";
import freedom2 from "../assets/products/wardrobe/nilkamal-freedom-plus-2.jpg";

export const wardrobeProducts = [
  createProduct({
    id: 201,

    name: "PAX Wardrobe",

    brand: "IKEA",

    category: "Wardrobe",

    price: 35999,

    originalPrice: 41999,

    image: pax,

    images: [pax, pax1, pax2],

    rating: 4.7,

    reviews: 304,

    stock: 8,

    featured: true,

    description:
      "A spacious modular wardrobe with customizable interiors and a modern Scandinavian design.",

    specifications: {
      material: "Wood",
      weight: "68kg",
      color: "Oak",
    },
  }),

  createProduct({
    id: 202,

    name: "Slimline Wardrobe",

    brand: "Godrej Interio",

    category: "Wardrobe",

    price: 28999,

    originalPrice: 32999,

    image: slimline,

    images: [slimline, slimline1, slimline2],

    rating: 4.5,

    reviews: 218,

    stock: 12,

    featured: true,

    description:
      "Premium steel wardrobe with durable construction, ample storage, and a sleek contemporary finish.",

    specifications: {
      material: "Steel",
      weight: "72kg",
      color: "Grey",
    },
  }),

  createProduct({
    id: 203,

    name: "Freedom Plus",

    brand: "Nilkamal",

    category: "Wardrobe",

    price: 8999,

    originalPrice: 10999,

    image: freedom,

    images: [freedom, freedom1, freedom2],

    rating: 4.4,

    reviews: 159,

    stock: 20,

    featured: false,

    description:
      "Lightweight multi-purpose wardrobe offering practical storage for everyday home organization.",

    specifications: {
      material: "MDF",
      weight: "45kg",
      color: "Ivory",
    },
  }),
];
