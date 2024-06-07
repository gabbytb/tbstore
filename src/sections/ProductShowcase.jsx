import { useEffect, useState } from "react";
import { shoe1 } from "../assets/images";
import { 
    storeItemsOne, 
    storeItemsTwo,
} from "../constants";
import { ShoeItemsCard, } from "../components";




const ProductShowcase = () => {

    const [activeImage, setActiveImage] = useState(shoe1);


    const [itemName, setItemName] = useState('');
    console.log("Input Entered for Item Name: ", itemName);


    useEffect(() => {
        function changeActiveImage() {
            setActiveImage(activeImage);
        };
        changeActiveImage();
    }, [activeImage]);


    return (
        <section className='section-2-product-slide w-full h-full'>
            <div className='section-2-product-slide--container'>
                <div className="hero--bottom">
                    <div className='pt-36 pb-24 text-center hero--title'>
                        <h1>Sport Wears </h1>
                    </div>
                    
                    <div className='grid grid-rows-3 gap-16  min-h-max'>
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

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                            {
                                storeItemsTwo.map((item) => {
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
            </div>
        </section>
    );
}

export default ProductShowcase
