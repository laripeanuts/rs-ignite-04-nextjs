import { Product } from "../Product/index";

import tShirt01 from "../../assets/shirt-01.png";
import tShirt02 from "../../assets/shirt-02.png";
import tShirt03 from "../../assets/shirt-03.png";
import tShirt04 from "../../assets/shirt-04.png";
import tShirt05 from "../../assets/shirt-05.png";

import { ProductsListStyled } from "./styles";

export const ProductsList = () => {
  return (
    <ProductsListStyled>
      <Product img={tShirt01} code="01" price="R$ 39,90" />
      <Product img={tShirt02} code="02" price="R$ 59,90" />
      <Product img={tShirt03} code="03" price="R$ 49,90" />
      <Product img={tShirt04} code="04" price="R$ 59,90" />
      <Product img={tShirt05} code="05" price="R$ 99,90" />
    </ProductsListStyled>
  );
};
