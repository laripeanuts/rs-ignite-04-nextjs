import { useKeenSlider } from "keen-slider/react";
import { Product } from "../Product/index";

import { ProductsType } from "../../@types/Products";

import { ProductLoading } from "components/ProductLoading";
import "keen-slider/keen-slider.min.css";
import { ProductsListStyled } from "./styles";

interface ProductListProps {
  products?: ProductsType[];
  isLoading?: boolean;
}

export const ProductsList = ({ products, isLoading }: ProductListProps) => {
  let key = 0;
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32
    },
    loop: true
  });

  if (isLoading) {
    return (
      <ProductsListStyled ref={sliderRef} className="keen-slider">
        <ProductLoading key={key++} />
        <ProductLoading key={key++} />
        <ProductLoading key={key++} />
        <ProductLoading key={key++} />
        <ProductLoading key={key++} />
      </ProductsListStyled>
    );
  }

  return (
    <ProductsListStyled ref={sliderRef} className="keen-slider">
      {products?.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.image}
          name={product.name}
          price={product.price}
          className="keen-slider__slide"
        />
      ))}
    </ProductsListStyled>
  );
};
