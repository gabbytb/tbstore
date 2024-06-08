import { useParams } from "react-router-dom";
import { Nav } from "../../components";
import { storeItemShoes } from "../../constants";



const ShoeDetails = () => {

    const productLink = useParams();
    const product = storeItemShoes.find((p) => p.linkURI === decodeURIComponent(productLink.linkURI));


    if (!product) {
        return console.log("Product not found");
    };


    return (
        <>
            <Nav />
            <section>
                <div className="product-img-wrap">
                    <img src={product.productImg} alt={product.productDescription} />
                </div>
                <div className="flex flex-col gap-y-4 product-info-wrap">
                    <h4>{product.productDescription}</h4>
                    <p>{product.productDetails}</p>
                    <small>{product.warrantyInfo}</small>
                </div>
            </section>
        </>
    );
};

export default ShoeDetails;
