import styles from './styles.module.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchProducts } from '../../../redux/slices/productsSlice';

import Headline from '../../headline';
import LinkButton from '../../ui/linkButton';
import ProductItem from '../../productItem';

function Sales() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading, isError, message } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const setNavigate = (path) => {
    navigate(`/${path}`);
  };


  return (
    <section className={styles.sales}>
      <div className={styles.container}>
        <div className={styles.productsWrapper}>
          <Headline title={'Sale'} />
          <span className={styles.line} />
          <LinkButton onClick={() => setNavigate('/sales')} title={'All sales '} />
        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles.productsCards}>
            {products
              ?.filter((product) => product.discont_price !== null)
              .slice(0, 4)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
              {isError && <p className={styles.errorMessage}>{message}</p>}
          </div>
        )}
      </div>
    </section>
  );
}

export default Sales;
