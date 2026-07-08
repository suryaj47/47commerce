import { createProduct } from "./productFactory";

import airpods from "../assets/products/electrical/apple-airpods-pro2.jpg";
import galaxy from "../assets/products/electrical/samsung-galaxy-s25-ultra.jpg";
import sony from "../assets/products/electrical/sony-wh1000xm6.jpg";

export const electricalProducts = [
  createProduct({
    id: 1,

    name: "AirPods Pro 2",

    brand: "Apple",

    category: "Electrical",

    price: 24999,

    originalPrice: 27999,

    image: airpods,

    images: [airpods, airpods, airpods],

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

    images: [galaxy, galaxy, galaxy],

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

    images: [sony, sony, sony],

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
