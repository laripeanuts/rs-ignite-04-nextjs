import { ProductLoadingWrapper } from "./styles";

export const ProductLoading = () => {
  return (
    <ProductLoadingWrapper>
      <div className="main"></div>
      <div className="bottom">
        <strong></strong>
        <span></span>
      </div>
    </ProductLoadingWrapper>
  );
};
