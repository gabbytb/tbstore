import { useParams } from "react-router-dom";
import { Nav } from "../../components";
import { storeItemHats, } from "../../constants";






const HatDetails = () => {

    const productLink = useParams();
    const product = storeItemHats.find(p => p.linkURI === decodeURIComponent(productLink.linkURI));

    
    if (!product) {
        return (
            <>
                <Nav />
                <main className="absolute top-0 w-full">
                    <section className="text-center pt-56 ">
                        <div>Product not  found!</div>
                    </section>
                </main>
            </>
        );
    };


    return (
        <>
            <Nav />
            <main className="absolute top-0 w-full">
                <div className="p--x-12 pt-56">

                        <section className="w-7/12">
                            <div className="product-img-wrap">
                                <img src={product.productImg} alt={product.productDescription} />
                            </div>
                            <div className="flex flex-col gap-y-4 product-info-wrap">
                                <h4>{product.productDescription}</h4>
                                <p>{product.productDetails}</p>
                                <small>{product.warrantyInfo}</small>
                            </div>
                        </section>


                        <aside className="w-1/4">
                            
                        </aside>

                </div>
            </main>
        </>
    );
};

export default HatDetails;