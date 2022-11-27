import { DetailWrapper, ImageWrapper, ProductWrapper } from "./styles";

export const ProductDetailsLoading = () => {
  return (
    <ProductWrapper>
      <ImageWrapper></ImageWrapper>
      <DetailWrapper>
        <div className="info">
          <div className="title"></div>
          <div className="price"></div>
          <div className="description"></div>
        </div>
        <div className="button"></div>
      </DetailWrapper>
    </ProductWrapper>
  );
};
