import { useState, useEffect } from "react";
import { Nav } from "../components";
import { 
    storeItemsOne, 
} from "../constants";
import { ShoeItemsCard, } from "../components";
import { shoe1 } from "../assets/images";








const ProductDescription = () => {


    const [activeImage, setActiveImage] = useState(shoe1);

    useEffect(() => {
        function changeActiveImage() {
            setActiveImage(activeImage);
        };
        changeActiveImage();
    }, [activeImage]);



    return (
        <>
            <Nav />
            <section>
                <div>
                    <div>
                        <img src={activeImage} alt="bg_img" />
                    </div>


                    <div className='grid grid-rows-3 gap-16 rid-flow-col min-h-max'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                            {
                                storeItemsOne.map((item) => {
                                    return (
                                        <div key={item.productDescription}>
                                            <ShoeItemsCard 
                                                exactItem={item}
                                                activeImage={activeImage}
                                                changeActiveImage={(item) => setActiveImage(item)}
                                            />
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>


                </div>
            </section>
        </>
    );
};

export default ProductDescription;
