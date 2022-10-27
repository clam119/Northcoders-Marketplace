// Component Source: https://tailwindcomponents.com/component/free-tailwind-css-product-details-component
import * as API from '../utils/api';
import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { BasketContext } from './context/BasketContext';

export default function SingleItem () {
    const { basket, setBasket, finalPrice, setFinalPrice } = useContext(BasketContext);
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { item_name, img_url, description, price, category_name } = item;
    let { item_id } = useParams();
    
    const addToBasket = () => {

        setBasket((currentItems) => {
            const copyOfCurrent = [...currentItems];
            copyOfCurrent.push(item);
            return copyOfCurrent;
        })

        setFinalPrice((currentPrice) => {
            return currentPrice + price + finalPrice;
        })
       
    }

    useEffect(() => {
        setIsLoading(true);
        API.fetchItemById(item_id)
        .then((itemData) => {
            setItem(itemData);
            setIsLoading(false);
        });
    }, [item_id]);

    if(isLoading) return (
        <h1> Currently Loading Item </h1>
    )

    else return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="min-h-fit max-h-screen xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <img className="w-full" alt={description} src={img_url} />
            </div>

            <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                <div className="border-b border-gray-200 pb-6">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">Category: { category_name } </p>
                    <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2"> { item_name } </h1>
                </div>
                <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Description</p>
                <div className="flex items-center justify-center">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{ description }</p>
                </div>

                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">Price</p>
                <div className="flex items-center justify-center">
                    <p className="text-sm leading-none text-gray-600 dark:text-gray-300">{ `£${price}.00` }</p>
                </div>
                
            </div>
                <button onClick={addToBasket} className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700">
                    <svg className="mr-3 text-white dark:text-gray-900" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4.66699 4.83333V4.84166" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.333 11.5V11.5083" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>Add To Cart
                </button>
            </div>        
        </div>
    )
}