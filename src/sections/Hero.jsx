// import { useEffect, useState } from "react";
import { 
    storeItems, storeItemsTwo,
} from "../constants";
import { ShoeItemsCard, } from "../components";






const Hero = () => {


    return (
        <section className='section-1-hero px-12'>
            <div>
                <div className='mt-8 mb-12 text-center page-title'>
                    <h1>Shop Products </h1>
                </div>
                
                <div className='grid grid-rows-3 gap-16 rid-flow-col min-h-max'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-16">
                        {
                            storeItems.map((item) => {
                                return (
                                    <ShoeItemsCard key={item} {...item} />
                                );
                            })
                        }
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16">
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
