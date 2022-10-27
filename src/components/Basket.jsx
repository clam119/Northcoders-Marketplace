// https://tailwindcomponents.com/component/tailwind-css-404-error-page - 404 Error Source
// https://tailwindcomponents.com/component/free-tailwind-css-shopping-carts-component - Shopping Cart Source
import { useContext, useEffect, useState } from 'react';
import { BasketContext } from './context/BasketContext';
import { UserContext } from './context/UserContext';
import { Link } from 'react-router-dom';
export default function Basket () {
    const { username } = useContext(UserContext);
    const { basket, setBasket, finalPrice} = useContext(BasketContext);
    const [ isEmpty, setIsEmpty ] = useState(true);

    if(basket.length === 0) {
        return (
            <div className=" min-h-screen w-full">
                <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                    <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                        <div className="relative">
                            <div className="absolute">
                                <div className="">
                                    <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                        Looks like your basket is empty
                                    </h1>
                                    <p className="my-2 text-gray-800">Let's fix that! 
                                    Check out our marketplace to get started.</p>
                                    <Link to="/marketplace"> <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button> </Link>
                                </div>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                            </div>
                        </div>
                    </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
            </div>
        )
    }

else 

    return (   
        
    <div className=" w-full" id="chec-div">
    <div className="object-fill" id="checkout">
        <div className="flex items-end lg:flex-row flex-col justify-end" id="cart">
        <div className="md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-y-hidden overflow-x-hidden lg:h-screen h-auto" id="scroll">
            <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Items</p>
            <div className="grid grid-cols-2 gap-5 border-gray-50" >
                {basket.map(({ item_name, description, img_url, price }) => {
                    return (
                    <>
                    <div className="md:w-4/12 2xl:w-1/4 w-full">
                     <img src={img_url} alt="Black Leather Bag" className="h-full object-center object-cover md:block hidden" />
                    </div>
                    <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <div className="flex items-center justify-between w-full pt-1">
                            <p className="text-base font-black leading-none text-gray-800 dark:text-white">{ item_name }</p>
                        </div>
                        <p className="w-full text-xs leading-3 text-gray-600 dark:text-white">{ description }</p>
                    <div className="flex items-center justify-between pt-5">
                    <div className="flex itemms-center">
                        <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">REMOVE HERE</p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">{`£${price}.00`}</p> 
                    </div>
                    </div>
                    </>)
                })}
            </div>
            </div>
        <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
            <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
            <div>
                <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
                <div className="flex items-center justify-between pt-16">
            </div>
            <div>
                <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{`£${finalPrice}.00`}</p>
                </div>
                <button className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
            </div>
            </div>
        </div>
            </div>
            </div>
    </div>
    </div>
        )


       
  
}