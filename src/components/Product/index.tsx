import Image, { StaticImageData } from "next/image";
import { ProductStyled } from "./styles";

interface ProductProps {
  img: StaticImageData;
  code: string;
  price: string;
}

export const Product = ({ img, code, price }: ProductProps) => {
  return (
    <ProductStyled>
      <Image src={img.src} alt={`Camisa ${code}`} width={520} height={480} />
      <footer>
        <strong>{`Camisa ${code}`}</strong>
        <span>{price}</span>
      </footer>
    </ProductStyled>
  );
};
