import { GetServerSideProps } from "next";
import Image from "next/image";
import Stripe from "stripe";

import { stripe } from "lib/stripe";
import Link from "next/link";

import { ImageWrapper, SuccessWrapper } from "./styles";

type SuccessProps = {
  custumerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
};

export default function Success({ custumerName, product }: SuccessProps) {
  return (
    <SuccessWrapper>
      <h1>Compra efetuada com sucesso!</h1>

      <ImageWrapper>
        <Image
          src={product.imageUrl}
          width={120}
          height={110}
          alt={product.name}
        />
      </ImageWrapper>

      <p>
        Obrigado por comprar com a gente <strong>{custumerName}</strong>! Sua
        <strong>{product.name}</strong> já está a caminho.
      </p>
      <Link href="/">Comprar outra blusa</Link>
    </SuccessWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"]
  });

  const customerName = session.customer_details?.name;
  const product = session.line_items?.data[0].price.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0]
      }
    }
  };
};
