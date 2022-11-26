import { Roboto } from "@next/font/google";

import { ProductsList } from "components/ProductsList";

import { Main } from "styles";

const customFont = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <Main className={customFont.className}>
      <ProductsList />
    </Main>
  );
}
