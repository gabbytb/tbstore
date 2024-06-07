import { Link } from "react-router-dom";






const ShoeItemsCard = ({ activeImage, exactItem, changeActiveImage }) => {
  
  
    function clickFunction() {
        if (activeImage !== exactItem.productImg ) {
            changeActiveImage(exactItem.productImg);
        };
    };


    return (
      <Link to={exactItem.linkURI} alt={exactItem.productDescription} className="flex flex-col product--details shadow-lg rounded-xl" onClick={clickFunction}>
          <div className="product-img-wrap">
              <img src={exactItem.productImg} alt={exactItem.productDescription} />
          </div>
          <div className="flex flex-col gap-y-4 product-info-wrap">
              <h4>{exactItem.productDescription}</h4>
              <p>{exactItem.productDetails}</p>
              <small>{exactItem.warrantyInfo}</small>
          </div>
      </Link>
    );
};

export default ShoeItemsCard;
