import React from 'react'
import Categories from '../components/Categories/Categories';
import GallerySlider from '../components/GallerySlider/GallerySlider'
import ProductsSlider from '../components/ProductsSlider/ProductsSlider';
import { Product, PropertyByCategory } from '../types';

type Props = {
  productList: Product[];
  productByCategory: PropertyByCategory
};

const HomePage: React.FC<Props> = ({ productList, productByCategory }) => {
  const newModel = productList?.filter((product: Product) => product.discount === 0)
    .sort((a: Product, b: Product) => b.price - a.price)
  return (
    <div>
      <GallerySlider />
      <div className="hotPrices">
        <ProductsSlider
          title="Hot prices"
          list={productList?.filter((product) => product.discount !== 0)}
        />
      </div>
      <Categories productByCategory={productByCategory} />
      <ProductsSlider
        title="Brand new models"
        list={newModel}
      />
    </div>
  )
}

export default HomePage