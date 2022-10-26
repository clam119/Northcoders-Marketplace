
export default function Item ({item_name, description, img_url, price, category_name}) {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-md ">
            <img src={img_url} className="w-16 h-16 md:w-40 md:h-auto md:rounded-none rounded-full mx-left" alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockcaption>
                         <h1 className="text-sky-700 dark:text-sky-400 font-bold">{item_name}</h1>
                    </blockcaption>
                <figcaption className="font-medium">
              <div className="text-slate-500">Description: {description}</div>
            <div className="text-slate-500 pt-auto">{`£${price}.00`}</div>
        <div className="text-slate-500">Category: {category_name}</div>
    </figcaption>
  </div>
</figure>
    )
}

