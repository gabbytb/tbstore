import { Link } from "react-router-dom";
import { storeItemShoes, storeItemHats } from "../constants";





const ProductsCard = () => {
  
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                {storeItemShoes.map((shoe) => {
                    return (
                        <div>
                            <Link to={`/product/shoe/${encodeURIComponent(shoe.linkURI)}`} alt={shoe.productDescription} className="flex flex-col product--details shadow-lg rounded-xl">
                                <div className="product-img-wrap">
                                    <img src={shoe.productImg} alt={shoe.productDescription} />
                                </div>
                                <div className="flex flex-col gap-y-4 product-info-wrap">
                                    <h4>{shoe.productDescription}</h4>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                {storeItemHats.map((hat) => {
                    return (
                        <div>
                            <Link to={`/product/hat/${encodeURIComponent(hat.linkURI)}`} alt={hat.productDescription} className="flex flex-col product--details shadow-lg rounded-xl">
                                <div className="product-img-wrap">
                                    <img src={hat.productImg} alt={hat.productDescription} />
                                </div>
                                <div className="flex flex-col gap-y-4 product-info-wrap">
                                    <h4>{hat.productDescription}</h4>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductsCard;
