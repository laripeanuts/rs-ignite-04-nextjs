import { Inter } from "@next/font/google";
import Head from "next/head";
import Stripe from "stripe";

import { GetStaticProps } from "next/types";
import { ProductsType } from "../@types/Products";

import { ProductsList } from "components/ProductsList";
import { stripe } from "lib/stripe";

import { Main } from "styles";

const customFont = Inter({ subsets: ["latin"], weight: ["400", "700"] });

interface HomeProps {
  products: ProductsType[];
}

export default function Home({ products }: HomeProps) {
  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>

      <Main className={customFont.className}>
        <ProductsList products={products} isLoading={products ? false : true} />
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"]
  });

  const products = response.data.map((product) => {
    const priceStripe = product.default_price as Stripe.Price;
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(Number(priceStripe.unit_amount) / 100);

    return {
      id: product.id,
      name: product.name,
      price: priceFormatted,
      image: product.images[0],
      description: product.description
    };
  });

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  };
};
