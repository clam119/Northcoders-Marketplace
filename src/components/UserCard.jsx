import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function User ({username, avatar_url, kudos}) {
  const { setUsername } = useContext(UserContext);
  const handleClick = () => {
    setUsername(username);
  }

    return (
      <>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 max-w-md ">
  <img src={avatar_url} className="w-16 h-16 md:w-40 md:h-auto md:rounded-none rounded-full mx-left" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockcaption>
      <h1 className="text-sky-700 dark:text-sky-400 font-bold">
       { username }
      </h1>
    </blockcaption>
    <figcaption className="font-medium">
 <div className="text-slate-500 pt-auto">
        Kudos: { kudos }
      </div>
      <Link to= "/"> <button onClick={handleClick} type="button" className="block py-1 pr-4 pl-3 text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-700">Login</button> </ Link>
     {/* <div className="text-slate-500">
        Items Selling
      </div>
      <div className="text-slate-500">
        Items In Basket
      </div> */}
    </figcaption>
  </div>
</figure>
  </> 
    )

}

