import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import { stripe } from "lib/stripe";
import Stripe from "stripe";

import { ProductDetails } from "components/ProductDetails";
import { ProductDetailsLoading } from "components/ProductDetailsLoading";

import { ProductsType } from "../../@types/Products";

interface ProductPageProps {
  product: ProductsType;
}

export default function ProductPage({ product }: ProductPageProps) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <ProductDetailsLoading />;
  }

  return <ProductDetails product={product} />;
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id;

  const response = await stripe.products.retrieve(productId as string, {
    expand: ["default_price"]
  });

  const priceStripe = response.default_price as Stripe.Price;

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(priceStripe.unit_amount) / 100);

  const product: ProductsType = {
    id: response.id,
    name: response.name,
    description: response.description,
    price: priceFormatted,
    image: response.images[0]
  };

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 2 // 2 hours
  };
};
