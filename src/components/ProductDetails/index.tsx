import Image from "next/image";

import { ProductsType } from "../../@types/Products";

import { DetailWrapper, ImageWrapper, ProductWrapper } from "./styles";

interface ProductWrapperProps {
  product: ProductsType;
}

export const ProductDetails = ({ product }: ProductWrapperProps) => {
  return (
    <ProductWrapper>
      <ImageWrapper>
        <Image
          src={product.image}
          alt={product.name}
          width={520}
          height={480}
        />
      </ImageWrapper>
      <DetailWrapper>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button type="button">Comprar</button>
      </DetailWrapper>
    </ProductWrapper>
  );
};
