import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storeItemShoes, } from "../constants";





const ProductsCard = () => {
  
    
    const [shoeItems, setShoeItems] = useState(storeItemShoes);
    console.log("Shoe Items: ", shoeItems);




    useEffect(() => {
        function myFunction() {
            for (var n = 0; n < shoeItems.length; n++) {
                if (n < shoeItems.length) {
            
                    // var prodRows = document.querySelectorAll("#productShoe .shoes--row .product--details .product-info-wrap h4");
                    // console.log("Product Rows: ", prodRows);

                    // for (var i = 0; i < prodRows.length; i++) {
                    //     if (n === i) {
                    //         // console.log('Active i: ', i);
                    //     } 
                    // }

                    // } else {
                    //     console.log('Other Shoe Item: ', n);

                    //     // console.log('Other Index of ShoeItems: ', n);
                    //     // console.log('Shoe Item: ', shoeItems[n]);

                    // }
                }
            };
        };
        myFunction();
    }, [shoeItems]);



    return (
        <>
            <div id="productShoe" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-14 gap-y-16">
                {storeItemShoes.map((shoe) => {
                    return (
                        <div key={shoe.productDescription} className="shoes--row">
                            <Link to={`/product/shoe/${encodeURIComponent(shoe.linkURI)}`} alt={shoe.productDescription} className="flex flex-col shadow-2xl product--details">
                                {shoe.productImg.map((item, index) => {
                                    if (index === 0) {
                                        return (
                                            <div key={index} className="products-img-wrap">
                                                <img src={item} alt={item} />
                                            </div>
                                        );
                                    }
                                })}
                                <div className="py-10 px-8 flex flex-col gap-6 min-h-56 product-info-wrap">
                                    <h4>{shoe.productDescription}</h4>
                                    <small>${shoe.productPrice}</small>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductsCard;
