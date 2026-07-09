export const createProduct = ({
  id,
  name,
  brand,
  category,
  price,
  originalPrice,
  image,
  images = [],
  rating = Number((4.5 + Math.random() * 0.5).toFixed(1)),
  reviews = Math.floor(Math.random() * 900 + 100),
  stock = Math.floor(Math.random() * 20 + 5),
  featured = false,
  description = "",
  specifications = {},
}) => ({
  id,
  name,
  brand,
  category,
  price,
  originalPrice,
  image,
  featured,
  description,
  rating,
  reviews,
  stock,
  specifications,
  images:
    Array.isArray(images) && images.length
      ? images.slice(0, 3)
      : [image, image, image],
});
