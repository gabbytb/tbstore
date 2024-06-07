// import { useEffect, useState } from "react";
import { 
    storeItems, storeItemsTwo,
} from "../constants";
import { ShoeItemsCard, } from "../components";






const Hero = () => {


    return (
        <section className='section-1-hero px-12'>
            <div>
                <div className='page-title'>
                    <h1>Welcome to travelbeta <br />Online store</h1>
                </div>
                
                <div className='grid grid-rows-3 grid-flow-col min-h-max'>
                    <div className="grid grid-cols-4">
                        {
                            storeItems.map((item) => {
                                return (
                                    <ShoeItemsCard key={item} {...item} />
                                );
                            })
                        }
                    </div>
                    <div className="grid grid-cols-4">
                        {
                            storeItemsTwo.map((item) => {
                                return (
                                    <ShoeItemsCard key={item.productDetails} {...item} />
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
