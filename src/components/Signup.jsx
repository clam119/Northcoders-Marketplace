import * as API from '../utils/api';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup () {
    const navigate = useNavigate();
    const [err, setErr] = useState(null);
    const [isComplete, setIsComplete] = useState(false);
    const [usersList, setUsersList] = useState([]);

    //States For User Input 
    const [newUser, setNewUser] = useState('');
    const [newImgUrl, setNewImgUrl] = useState('');

    //Fetch current list of users so I can push new user to it
    useEffect(() => {
        API.fetchAllUsers()
        .then((users) => {
            setUsersList(users);
        })
    }, [])

    //Once Username & Avatar URL Input - Invoke CreateUser function from API
    const handleSubmit = (event) => {
        event.preventDefault();
        
        API.createUser(newUser, newImgUrl)
        .then((newUserData) => {
            setUsersList((currentUsers) => {
                const copyOfCurrentUser = [...currentUsers];
                copyOfCurrentUser.push(newUserData)
                setIsComplete(true);
                setErr(null);
                navigate("/login");
                return copyOfCurrentUser;
            })
        })
        .catch((err) => {
            setErr(err);
        })
    }

    const handleUsernameChange = (event) => {
        setNewUser(event.target.value);
    }

    const handleImgUrlChange = (event) => {
        setNewImgUrl(event.target.value);
    }

    return (
         <div className="flex min-h-fit bg-white">

        <div className="max-h-50 w-1/2 bg-cover md:block hidden" style={{ 
            backgroundImage: "url(" + "https://images.prismic.io/northcoders/dac82a9c-2274-48d2-b0a6-5f4d02469a87_Meta+Image.jpg?auto=compress%2Cformat&rect=0%2C0%2C1200%2C627&w=1500&h=784&fit=max&q=60" + ")",   
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}></div>

        <div className="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">

            <div className="text-left p-0 font-sans">
                
                <h1 className=" text-gray-800 text-3xl font-medium">Become a Northcoderian For Free</h1>
                <h3 className="p-1 text-gray-700">Find your old items a new forever home!</h3>
            </div>

            <form onSubmit={handleSubmit} className="p-0">
                <div className="mt-5">
                    <input onChange={ handleUsernameChange } aria-label="Enter your username" id="username" type="text" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Username"/>
                </div>
                <div className="mt-5">
                    <input onChange={ handleImgUrlChange } aria-label="Enter your avatar image link" type="link" className="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Avatar URL"/>
                </div>

                <div className="mt-10">
                    <button className="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"> Sign Up </button> 
                </div>
            </form>
            <Link to ="/login" className="" href="/login" data-test="Link"><span className="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></Link>
        </div>
    </div>
    )
   
}

