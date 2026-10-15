
const IMG_EXT = 'svg';
const img = (name) => `/images/${name}.${IMG_EXT}`;

export const categories = [
  { id: 1, title: 'Breakfast', image: img('cat-breakfast') },
  { id: 2, title: 'Vegan', image: img('cat-vegan') },
  { id: 3, title: 'Meat', image: img('cat-meat') },
  { id: 4, title: 'Dessert', image: img('cat-dessert') },
  { id: 5, title: 'Lunch', image: img('cat-lunch') },
  { id: 6, title: 'Chocolate', image: img('cat-chocolate') },
];

export const products = [
  { id: 1, title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', type: 'Snack', image: img('burger'), liked: true },
  { id: 2, title: 'Fresh Lime Roasted Salmon with Ginger Sauce', time: '30 Minutes', type: 'Fish', image: img('salmon'), liked: false },
  { id: 3, title: 'Strawberry Oatmeal Pancake with Honey Syrup', time: '30 Minutes', type: 'Breakfast', image: img('pancake'), liked: false },
  { id: 4, title: 'Fresh and Healthy Mixed Mayonnaise Salad', time: '30 Minutes', type: 'Healthy', image: img('salad'), liked: true },
  { id: 5, title: 'Chicken Meatballs with Cream Cheese', time: '30 Minutes', type: 'Meat', image: img('meatballs'), liked: false },
  { id: 6, title: 'Fruity Pancake with Orange & Blueberry', time: '30 Minutes', type: 'Sweet', image: img('fruity-pancake'), liked: true },
  { id: 7, title: 'The Best Easy One Pot Chicken and Rice', time: '30 Minutes', type: 'Snack', image: img('chicken-rice'), liked: false },
  { id: 8, title: 'The Creamiest Creamy Chicken and Bacon Pasta', time: '30 Minutes', type: 'Noodles', image: img('pasta'), liked: false },
];

export const moreProducts = [
  { id: 9, title: 'Mixed Tropical Fruit Salad with Superfood Boosts', time: '30 Minutes', type: 'Healthy', image: img('fruit-salad'), liked: true },
  { id: 10, title: 'Big and Juicy Wagyu Beef Cheeseburger', time: '30 Minutes', type: 'Western', image: img('steak'), liked: false },
  { id: 11, title: 'Healthy Japanese Fried Rice with Asparagus', time: '30 Minutes', type: 'Healthy', image: img('fried-rice'), liked: false },
  { id: 12, title: 'Cauliflower Walnut Vegetarian Taco Meat', time: '30 Minutes', type: 'Eastern', image: img('taco'), liked: false },
  { id: 13, title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing', time: '30 Minutes', type: 'Healthy', image: img('rainbow-salad'), liked: true },
  { id: 14, title: 'Barbeque Spicy Sandwiches with Chips', time: '30 Minutes', type: 'Snack', image: img('sandwich'), liked: false },
  { id: 15, title: 'Firecracker Vegan Lettuce Wraps - Spicy!', time: '30 Minutes', type: 'Seafood', image: img('wraps'), liked: false },
  { id: 16, title: 'Chicken Ramen Soup with Mushroom', time: '30 Minutes', type: 'Japanese', image: img('ramen'), liked: true },
];
