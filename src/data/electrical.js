import { createProduct } from "./productFactory";

import airpods from "../assets/products/electrical/apple-airpods-pro2.jpg";
import airpods1 from "../assets/products/electrical/apple-airpods-pro2-1.jpg";
import airpods2 from "../assets/products/electrical/apple-airpods-pro2-2.jpg";
import galaxy from "../assets/products/electrical/samsung-galaxy-s25-ultra.jpg";
import galaxy1 from "../assets/products/electrical/samsung-galaxy-s25-ultra-1.jpg";
import galaxy2 from "../assets/products/electrical/samsung-galaxy-s25-ultra-2.jpg";
import sony from "../assets/products/electrical/sony-wh1000xm6.jpg";
import sony1 from "../assets/products/electrical/sony-wh1000xm6-1.jpg";
import sony2 from "../assets/products/electrical/sony-wh1000xm6-2.jpg";

export const electricalProducts = [
  createProduct({
    id: 1,

    name: "AirPods Pro 2",

    brand: "Apple",

    category: "Electrical",

    price: 24999,

    originalPrice: 27999,

    image: airpods,

    images: [airpods, airpods1, airpods2],

    rating: 4.8,

    reviews: 542,

    stock: 15,

    featured: true,

    description: "Industry-leading noise cancellation with immersive sound.",

    specifications: {
      material: "Aluminum",
      weight: "0.25kg",
      color: "White",
    },
  }),

  createProduct({
    id: 2,

    name: "Galaxy S25 Ultra",

    brand: "Samsung",

    category: "Electrical",

    price: 129999,

    originalPrice: 139999,

    image: galaxy,

    images: [galaxy, galaxy1, galaxy2],

    rating: 4.7,

    reviews: 784,

    stock: 10,

    featured: true,

    description: "Samsung flagship smartphone with AI features.",

    specifications: {
      material: "Glass",
      weight: "0.22kg",
      color: "Phantom Black",
    },
  }),

  createProduct({
    id: 3,

    name: "WH-1000XM6",

    brand: "Sony",

    category: "Electrical",

    price: 34999,

    originalPrice: 37999,

    image: sony,

    images: [sony, sony1, sony2],

    rating: 4.6,

    reviews: 412,

    stock: 18,

    featured: false,

    description: "Premium wireless noise-cancelling headphones.",

    specifications: {
      material: "Plastic",
      weight: "0.24kg",
      color: "Black",
    },
  }),
];
