import { ProductsCard } from "../../components";






const ProductLists = () => {
  

    return (
        <section className='section-2-product-slide w-full h-full'>
            <div className='pt-12 pb-40 p--x-12'>
                <div className="products--wrapper">


                    <div className='pt-36 pb-24 text-center product-slide--title'>
                        <h2>Sport Wears </h2>
                    </div>

                    
                    <div className='grid grid-rows-3 gap-16 min-h-max'>
                        <ProductsCard />   
                    </div>


                </div>
            </div>
        </section>
    );
};

export default ProductLists;
