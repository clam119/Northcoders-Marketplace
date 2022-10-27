import { Link } from 'react-router-dom';

export default function Item ({item_id, item_name, description, img_url, price, category_name}) {
    
    return (
        <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-md max-h-96">
            <img src={img_url} className=" object-contain max-h-max md:w-40 md:h-auto md:rounded-none rounded-full mx-left" alt="" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockcaption>
                    <Link to= {`/items/${item_id}`}> <h1 className="text-sky-700 dark:text-sky-400 font-bold">{item_name}</h1> </ Link>
                    </blockcaption>
                <figcaption className="font-medium">
              <div className="text-slate-500">Description: {description}</div>
            <div className="text-slate-500 pt-auto">{`Price: £${price}.00`}</div>
        <div className="text-slate-500">Category: {category_name}</div>
    </figcaption>
  </div>
</figure>
        </>
    )
}

