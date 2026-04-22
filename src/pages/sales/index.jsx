import styles from './styles.module.css';
import Breadcrumbs from '../../components/ui/breadCrumbs';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/slices/productsSlice';
import ProductItem from '../../components/productItem';
import Headline from '../../components/headline';
import Filters from '../../components/filters/filters';

function Sales() {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector((state) => state.products);

  const [filters, setFilters] = useState({
    priceFrom: '',
    priceTo: '',
    sort: 'default',
  });

  const filteredProducts = products
    .filter((p) => {
      const price = p.discont_price ?? p.price;
      if (filters.priceFrom && price < Number(filters.priceFrom)) return false;
      if (filters.priceTo && price > Number(filters.priceTo)) return false;
      if (filters.discounted && p.discont_price === null) return false;
      return true;
    })
    .sort((a, b) => {
      const priceA = a.discont_price ?? a.price;
      const priceB = b.discont_price ?? b.price;
      if (filters.sort === 'asc') return priceA - priceB;
      if (filters.sort === 'desc') return priceB - priceA;
      return 0;
    });

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  return (
    <div className={styles.container}>
      <Breadcrumbs items={[{ title: 'Main page', path: '/' }, { title: 'All sales' }]} />
      <div className={styles.titleDiv}>
        <Headline title={'Discounted items'} />
      </div>
      <div>
        <Filters filters={filters} setFilters={setFilters} hideDiscount />
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productsCards}>
          {filteredProducts
            ?.filter((product) => product.discont_price !== null)
            .map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          {isError && <p className={styles.errorMessage}>{message}</p>}
        </div>
      )}
    </div>
  );
}

export default Sales;
