import styles from './product_cart.module.scss';

function ProductCart({ product, onToggleLike }) {
  const { id, title, time, type, image, liked } = product;

  return (
    <article className={styles.product_cart}>
      <div className={styles.product_cart__media}>
        <img className={styles.product_cart__image} src={image} alt={title} />
        <button
          type="button"
          className={`${styles.product_cart__like} ${liked ? styles.product_cart__like_active : ''}`}
          onClick={() => onToggleLike(id)}
          aria-pressed={liked}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
        >
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 2.8 5 6.1 5c2 0 3.3 1.1 3.9 2.1C10.6 6.1 11.9 5 13.9 5c3.3 0 5.2 3.4 3.7 6.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
      </div>

      <h3 className={styles.product_cart__title}>{title}</h3>

      <ul className={styles.product_cart__meta}>
        <li>🕒 {time}</li>
        <li>🍴 {type}</li>
      </ul>
    </article>
  );
}

export default ProductCart;
