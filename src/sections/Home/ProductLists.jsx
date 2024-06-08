import { ProductsCard } from "../../components";






const ProductLists = () => {
  

    return (
        <section className='section-2-product-slide w-full h-full'>
            <div className='home-container'>
                <div className="hero--bottom">


                    <div className='pt-36 pb-24 text-center hero--title'>
                        <h1>Sport Wears </h1>
                    </div>

                    
                    <div className='grid grid-rows-3 gap-16  min-h-max'>
                        <ProductsCard />   
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProductLists;
