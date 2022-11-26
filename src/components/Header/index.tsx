import Image from "next/image";
import Logo from "../../assets/store-logo.svg";

import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <Image src={Logo} alt="logo" />
      <h1>T-Shop</h1>
    </HeaderStyled>
  );
};
