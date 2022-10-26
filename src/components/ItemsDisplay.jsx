// import { useState, useEffect } from 'react';

// export default function ItemsDisplay () {

//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
    
//     useEffect(() => {
//         setIsLoading(true)
//         fetchAllItems()
//         .then(({items}) => {
//             setItems(items[0]);
//         })
//         setIsLoading(false)
//     }, [])

//     if(items.length=== 0) {return (<h2>Loading...</h2>)}

//     else {
//         const [description, price, category_name, item_name] = items;
//         return(
//             <ul>
//                 <Item items={description, price, category_name, item_name} />
//             <ul>

//         )
//     }

// }