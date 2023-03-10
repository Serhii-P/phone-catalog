import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import { useFavourites } from '../../components/context/FavouritesContext';
import { useShoppingCart } from '../../components/context/ShoppingCartContext';
import { Product } from '../../types';
import styles from './FavoritesPage.module.scss';

type FavoritesPageProps = {
  productList: Product[];
}

const FavoritesPage = ({ productList }: FavoritesPageProps) => {
  const { addToCart, cartItems } = useShoppingCart();
  const { favItems, removeFromFavourites } = useFavourites();

  const addToCartHandler = (id: string) => {
    addToCart(id);
  }

  const findElement = (id: string) => {
    return cartItems.find(elem => elem.id === id)
  }

  return (
    <div className={styles.root}>
      <BackButton />
      {favItems?.length < 1 && <h1>No favourite items yet...</h1>}

      {favItems.map((product) => (
        <div className={styles.item} key={product.id}>
          <div className={styles.content}>
            <button
              type="button"
              disabled={false}
              className={styles.remove}
              onClick={() => removeFromFavourites(product?.id)}
            />
            <img src={product?.imageUrl} alt="Gadget" />

            <p>{product?.name}</p>
          </div>
          <button
            type="button"
            className={`${styles.cartButton} 
            ${findElement(product?.id)
                ? styles.addToCart
                : styles.addedToCart
              }`}
            disabled={findElement(product?.id) ? true : false}
            onClick={() => addToCartHandler(product?.id)}
          >
            {findElement(product?.id)
              ? "Added to cart"
              : "Add to cart"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default FavoritesPage