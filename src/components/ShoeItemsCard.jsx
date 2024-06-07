import { Link } from "react-router-dom";




const ShoeItemsCard = ({ linkURI, productDescription, productDetails, productImg, warrantyInfo }) => {
  
  
    // function clickFunction() {
    //     if (activeImage !== exactItem.productImg) {
    //       onChangeFunction(exactItem.productImg);
    //     };
    // };


    return (
      <Link to={linkURI} alt={productDescription} className="flex flex-col product--details shadow-lg rounded-xl">
          <div className="product-img-wrap">
              <img src={productImg} alt={productDescription} />
          </div>
          <div className="flex flex-col gap-y-4 product-info-wrap">
              <h4>{productDescription}</h4>
              <p>{productDetails}</p>
              <small>{warrantyInfo}</small>
          </div>
      </Link>
    );
};

export default ShoeItemsCard;
