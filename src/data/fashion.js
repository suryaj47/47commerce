import { createProduct } from "./productFactory";

import airforce from "../assets/products/fashion/nike-air-force-1.jpg";
import airforce1 from "../assets/products/fashion/nike-air-force-1-1.jpg";
import airforce2 from "../assets/products/fashion/nike-air-force-1-2.jpg";
import samba from "../assets/products/fashion/adidas-samba-og.jpg";
import samba1 from "../assets/products/fashion/adidas-samba-og-1.jpg";
import samba2 from "../assets/products/fashion/adidas-samba-og-2.jpg";
import levis from "../assets/products/fashion/levis-511.jpg";
import levis1 from "../assets/products/fashion/levis-511-1.jpg";
import levis2 from "../assets/products/fashion/levis-511-2.jpg";

export const fashionProducts = [
  createProduct({
    id: 101,

    name: "Air Force 1",

    brand: "Nike",

    category: "Fashion",

    price: 8999,

    originalPrice: 10999,

    image: airforce,

    images: [airforce, airforce1, airforce2],

    rating: 4.8,

    reviews: 210,

    stock: 12,

    featured: true,

    description: "Classic sneakers with premium leather construction.",

    specifications: {
      material: "Leather",
      weight: "0.95kg",
      color: "White",
    },
  }),

  createProduct({
    id: 102,

    name: "Samba OG",

    brand: "Adidas",

    category: "Fashion",

    price: 10999,

    originalPrice: 12999,

    image: samba,

    images: [samba, samba1, samba2],

    rating: 4.7,

    reviews: 180,

    stock: 9,

    featured: true,

    description: "Retro-inspired sneakers with iconic design details.",

    specifications: {
      material: "Suede",
      weight: "0.88kg",
      color: "Black",
    },
  }),

  createProduct({
    id: 103,

    name: "511 Slim",

    brand: "Levi's",

    category: "Fashion",

    price: 3499,

    originalPrice: 4999,

    image: levis,

    images: [levis, levis1, levis2],

    rating: 4.5,

    reviews: 130,

    stock: 22,

    featured: false,

    description: "Comfortable slim-fit jeans with stretch for all-day wear.",

    specifications: {
      material: "Denim",
      weight: "0.65kg",
      color: "Blue",
    },
  }),
];
