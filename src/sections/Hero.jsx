import { useEffect, useState } from "react";
import { 
    storeItems, 
    storeItemsTwo,
} from "../constants";
import { ButtonComponent, ShoeItemsCard, } from "../components";
import { shoe1 } from "../assets/images";







const Hero = () => {


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
        <section className='section-1-hero px-12'>
            <div className="flex flex-col sm:flex-col lg:flex-row justify-between mt-8 hero--top">
                <div className="w-140 lg:basis-1/4 space-y-12 mt-20">
                    <h1>Travelbeta <br />Online Store</h1>

                    <form className="flex justify-between shadow-lg px-6 py-3">
                        <input className="min-w-96" type="text" placeholder="search..." name="itemName" onChange={(e) => setItemName(e.target.value)}/>
                        <ButtonComponent
                            btnType="submit" 
                            btnProps="capitalize rounded-lg py-4 px-8 w-48"
                            btnText="submit"sss
                        />
                    </form>
                </div>

                <div>
                    <img src={activeImage} alt="bg_img" />
                </div>
            </div>



            <div className="hero--bottom">
                <div className='mt-8 mb-12 text-center hero--title'>
                    <h1>Shop Products </h1>
                </div>
                
                <div className='grid grid-rows-3 gap-16 rid-flow-col min-h-max'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
                        {
                            storeItems.map((item) => {
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
        </section>
    );
}

export default Hero
