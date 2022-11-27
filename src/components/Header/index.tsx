import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/store-logo.svg";

import { HeaderStyled } from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <Link href="/">
        <Image src={Logo} alt="logo" />
        <h1>T-Shop</h1>
      </Link>
    </HeaderStyled>
  );
};
