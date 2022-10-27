import ItemCard from './ItemCard';
import * as API from '../utils/api';
import { useContext, useState, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import { BasketContext } from './context/BasketContext';

export default function Marketplace() {
    const { username } = useContext(UserContext);
    const { setFinalPrice } = useContext(BasketContext)
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        API.fetchAllItems()
        .then((itemsData) => {
            setItems(itemsData);
            setFinalPrice(0);
            setIsLoading(false);
        });
    }, [username, setFinalPrice])

    if(isLoading) return (
        <h1> Currently Loading Items </h1>
    )
    return(
        <ul className=" grid grid-cols-3 gap-0.5 justify-center space-y-2 my-2 ">
            {items.map(({ item_id, item_name, img_url, description, price, category_name }) => {
                return <li key={item_id}> <ItemCard item_id={item_id} item_name={item_name} img_url={img_url} description={description} price={price} category_name={category_name} /></li>
            })}
        </ul>
    )
}