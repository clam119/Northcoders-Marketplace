import { useContext, useEffect } from 'react';
import { BasketContext } from './context/BasketContext';
import { UserContext } from './context/UserContext';

export default function DropdownCart ({product_name, description, price, img_url}) {
    const { username } = useContext(UserContext);
    const { basket, setBasket } = useContext(BasketContext);

    useEffect(() => {
        setBasket([]);
    }, [username])

    return(
      
    <div className="flex justify-center">
        <div className="relative ">
            <div className="flex flex-row cursor-pointer truncate p-2 px-4  rounded">
                <div></div>
                <div className="flex flex-row-reverse ml-2 w-full">
                    <div slot="icon" className="relative">
                        <div className="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">{basket.length}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart w-6 h-6 mt-2">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
</div>
    )
}