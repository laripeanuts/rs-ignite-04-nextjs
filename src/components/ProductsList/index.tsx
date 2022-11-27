import { useKeenSlider } from "keen-slider/react";
import { Product } from "../Product/index";

import { ProductsType } from "../../@types/Products";

import "keen-slider/keen-slider.min.css";
import { ProductsListStyled } from "./styles";

interface ProductListProps {
  products?: ProductsType[];
}

export const ProductsList = ({ products }: ProductListProps) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32
    },
    loop: true
  });

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
