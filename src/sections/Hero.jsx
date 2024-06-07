// import { ButtonComponent, } from "../components";






const Hero = () => {

    return (
        <section className='section-1-hero w-full h-full'>
            <div className='section-1-hero--container'>
                <div className="flex flex-row justify-between items-start lg:items-center hero--top">
                    <div className="w-140 lg:basis-2/4 space-y-12">
                        <h1>Travelbeta <br />Online Store</h1>

                        {/* <form className="flex justify-between shadow-lg px-6 py-3">
                            <input className="min-w-96" type="text" placeholder="search..." name="itemName" />
                            onChange={(e) => setItemName(e.target.value)}
                            <ButtonComponent
                                btnType="submit" 
                                btnProps="capitalize rounded-lg py-4 px-8 w-48"
                                btnText="submit"sss
                            />
                        </form> */}
                    </div>

                    {/* <div className="w-full lg:w-154 h-140 hidden lg:inline-flex">
                        <img src={activeImage} alt="bg_img" />
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Hero
