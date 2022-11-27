import Image from "next/image";
import Link from "next/link";
import { ProductStyled } from "./styles";

interface ProductProps {
  img: string;
  id: string;
  name: string;
  price: string;
  className?: string;
}

export const Product = ({ img, name, price, id, className }: ProductProps) => {
  return (
    <Link href={`/product/${id}`}>
      <ProductStyled className={className}>
        <Image
          src={img}
          alt={name}
          width={520}
          height={480}
          placeholder="blur"
          blurDataURL={img}
        />
        <footer>
          <strong>{name}</strong>
          <span>{price}</span>
        </footer>
      </ProductStyled>
    </Link>
  );
};
