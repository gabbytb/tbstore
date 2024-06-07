import { Link } from "react-router-dom";




const ShoeItemsCard = ({ linkURI, productDescription, productDetails, productImg, warrantyInfo }) => {
  
  
    // function clickFunction() {
    //     if (activeImage !== exactItem.productImg) {
    //       onChangeFunction(exactItem.productImg);
    //     };
    // };


    return (
      <Link to={linkURI} alt={productDescription} className="flex flex-col product--details">
          <div className="product-img-wrap">
              <img src={productImg} alt={productDescription} />
          </div>
          <div className="product-info-wrap">
              <h4>{productDescription}</h4>
              <p>{productDetails}</p>
              <small>{warrantyInfo}</small>
          </div>
      </Link>
    );
};

export default ShoeItemsCard;
