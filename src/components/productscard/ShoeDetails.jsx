import { useParams } from "react-router-dom"; 
import { ButtonComponent, Nav } from "../../components";
import { storeItemShoes } from "../../constants";
import { useEffect, useState } from "react";






const ShoeDetails = () => {

    const productLink = useParams();
    const product = storeItemShoes.find(p => p.linkURI === decodeURIComponent(productLink.linkURI));
    
    const [activeImage, setActiveImage] = useState();



    useEffect(() => {
        var imgs = product.productImg;
        for (var i = 0; i < imgs.length; i++) {
            // console.log("I is: ", i);
            // console.log("I is: ", imgs[i]);
            setActiveImage(imgs[i]);
            console.log("Active Image: ", activeImage);
        }
    }, [product]);




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
                <div className="p--x-12 pt-56 flex flex-row justify-center gap-32">

                        <section className="flex flex-col gap-y-12 basis-5/12">
                            <div className="h-140">
                                <img className="h-full w-full" src={activeImage} alt="active slide" />
                            </div>
                            <div className="gap-4 product-img-wrap">
                                {product.productImg.map((item) => {
                                    return (
                                        <div key={item} className="flex w-1/4 h-56 product-item-img">
                                            <img src={item} alt={item}  />
                                        </div>
                                    );
                                })}
                            </div>
                        </section>


                        <aside className="w-4/12 pt-10">
                            <div className="flex flex-col gap-y-8 product-info-wrap single-product-info-wrap">
                                <h4>{product.productDescription}</h4>
                                <h6>Product Description: 
                                    <p>{product.productDetails}</p>
                                </h6> 
                                <small>Warranty: <span className="text-black text-3xl">{product.warrantyInfo}</span></small>
                                <ButtonComponent
                                    btnProps="flex bg-red-600 hover:bg-green-500 focus:bg-green-500 justify-center py-4 px-6 w-72 capitalize text-2xl rounded-full text-white font-semibold"
                                    btnText="order now" 
                                />
                            </div>
                        </aside>

                </div>
            </main>
        </>
    );
};

export default ShoeDetails;
