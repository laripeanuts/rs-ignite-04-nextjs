import { useState } from "react";

import axios from "axios";
import Image from "next/image";

import { ProductsType } from "../../@types/Products";

import { DetailWrapper, ImageWrapper, ProductWrapper } from "./styles";

interface ProductWrapperProps {
  product: ProductsType;
}

export const ProductDetails = ({ product }: ProductWrapperProps) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleCheckout = async () => {
    setIsRedirecting(true);

    try {
      const response = await axios.post("api/checkout", {
        priceId: product.defaultPriceId
      });
      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      // Conectar com uma ferramenta de monitoramento de erros (Datadog, Sentry, Bugsnag, etc)

      alert("Erro ao fazer a compra");
      console.log(error);
      setIsRedirecting(false);
    }
  };

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

        <button disabled={isRedirecting} type="button" onClick={handleCheckout}>
          Comprar
        </button>
      </DetailWrapper>
    </ProductWrapper>
  );
};
