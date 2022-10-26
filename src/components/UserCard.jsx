export default function User () {
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-md ">
  <img src="https://images.prismic.io/northcoders/5ffa1ae0-0e83-47aa-a5f2-d4b6ef24af5a_Paul+R.jpg" className="w-16 h-16 md:w-40 md:h-auto md:rounded-none rounded-full mx-left" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockcaption>
      <h1 className="text-sky-700 dark:text-sky-400 font-bold">
       Christopher Lam
      </h1>
    </blockcaption>
    <figcaption className="font-medium">
 <div className="text-slate-500 pt-auto">
        Kudos
      </div>
     <div className="text-slate-500">
        Items Ordered
      </div>
      <div className="text-slate-500">
        Items In Basket
      </div>
    </figcaption>
  </div>
</figure>
    )

}

