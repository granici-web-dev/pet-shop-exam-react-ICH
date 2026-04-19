import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { fetchCategories } from '../../redux/slices/categoriesSlice';
import Breadcrumbs from '../../components/ui/breadCrumbs';
import Button from '../../components/ui/button'
import styles from './styles.module.css';
import { addToCart } from '../../redux/slices/cartSlice';

function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);
  const [count, setCount] = useState(1);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const { items } = useSelector((state) => state.cart);

  const product = products?.find((p) => p.id === Number(productId));
  const isInCart = items.some((item) => item.id === product?.id);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const productCategory = category?.find((c) => c.id === product?.categoryId);

  if (!product) return <p>Loading...</p>;

  const hasDiscount = product.discont_price !== null;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.discont_price / product.price) * 100)
    : 0;

  const BASE_URL = 'http://127.0.0.1:3333';

  return (
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { title: 'Main page', path: '/' },
          { title: 'Categories', path: '/categories' },
          { title: productCategory?.title || '', path: `/categories/${productCategory?.id}` },
          { title: product.title },
        ]}
      />

      <div className={styles.productDetails}>
        <div className={styles.imageSection}>
          <img
            className={styles.mainImage}
            src={`${BASE_URL}${product.image}`}
            alt={product.title}
          />
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.title}</h1>

          <div className={styles.priceBlock}>
            <span className={styles.currentPrice}>
              ${hasDiscount ? product.discont_price : product.price}
            </span>
            {hasDiscount && (
              <>
                <span className={styles.oldPrice}>${product.price}</span>
                <span className={styles.discountBadge}>-{discountPercent}%</span>
              </>
            )}
          </div>

          <div className={styles.cartControls}>
            <div className={styles.counter}>
              <button disabled={isInCart} onClick={() => setCount(Math.max(1, count - 1))}>
                −
              </button>
              <span>{count}</span>
              <button disabled={isInCart} onClick={() => setCount(count + 1)}>
                +
              </button>
            </div>
            <Button
              className={styles.addToCart}
              title={isInCart ? 'Added' : 'Add to cart'}
              isAdded={isInCart}
              onClick={() => {
                if (!isInCart) dispatch(addToCart({ ...product, count }));
              }}
            />
          </div>

          <div className={styles.description}>
            <h3>Description</h3>
            <p className={showFullDesc ? styles.fullText : styles.clampedText}>
              {product.description}
            </p>
            <button className={styles.readMore} onClick={() => setShowFullDesc(!showFullDesc)}>
              {showFullDesc ? 'Show less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
