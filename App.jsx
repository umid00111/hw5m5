import { useState } from 'react';
import ProductCart from './components/product_cart';
import { categories, products as initialProducts, moreProducts as initialMore } from './data/products';
import styles from './App.module.scss';

const PROMO_POSITION = 5; 

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [moreProducts, setMoreProducts] = useState(initialMore);

  const toggle = (setList) => (id) =>
    setList((list) => list.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));

  const likedCount = [...products, ...moreProducts].filter((p) => p.liked).length;

  return (
    <main className={styles.page}>
      <h2 className={styles.page__heading}>Categories</h2>
      <ul className={styles.categories}>
        {categories.map(({ id, title, image }) => (
          <li key={id} className={styles.categories__item}>
            <img src={image} alt="" />
            <span>{title}</span>
          </li>
        ))}
      </ul>

      <section className={styles.intro}>
        <h1>Simple and tasty recipes</h1>
        <p>Favorites: {likedCount}</p>
      </section>

      <div className={styles.grid}>
        {products.map((product, index) => (
          <div key={product.id} className={styles.grid__cell}>
            <ProductCart product={product} onToggleLike={toggle(setProducts)} />
            {index === PROMO_POSITION - 1 && (
              <aside className={styles.promo}>
                <p>Don't forget to eat healthy food</p>
                <span>www.foodieland.com</span>
              </aside>
            )}
          </div>
        ))}
      </div>

      <h2 className={styles.page__heading}>Try this delicious recipe to make your day</h2>
      <div className={`${styles.grid} ${styles.grid_four}`}>
        {moreProducts.map((product) => (
          <ProductCart key={product.id} product={product} onToggleLike={toggle(setMoreProducts)} />
        ))}
      </div>
    </main>
  );
}

export default App;
