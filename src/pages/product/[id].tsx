import { GetStaticProps } from "next";
import Head from "next/head";
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

  return (
    <>
      <Head>
        <title>{product.name} | Shop</title>
      </Head>
      <ProductDetails product={product} />;
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.id;

  const product = await stripe.products.retrieve(productId as string, {
    expand: ["default_price"]
  });

  const priceStripe = product.default_price as Stripe.Price;

  const priceFormatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(Number(priceStripe.unit_amount) / 100);

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: priceFormatted,
        defaultPriceId: priceStripe.id
      }
    },
    revalidate: 60 * 60 * 2 // 2 hours
  };
};
