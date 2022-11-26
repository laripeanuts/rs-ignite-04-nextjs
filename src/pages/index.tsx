import { Roboto } from "@next/font/google";
import Stripe from "stripe";

import { GetServerSideProps } from "next/types";
import { ProductsType } from "../@types/Products";

import { ProductsList } from "components/ProductsList";
import { stripe } from "lib/stripe";

import { Main } from "styles";

const customFont = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

interface HomeProps {
  products: ProductsType[];
}

export default function Home({ products }: HomeProps) {
  return (
    <Main className={customFont.className}>
      <ProductsList products={products} />
    </Main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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

  console.log(products);

  return {
    props: {
      products
    }
  };
};
