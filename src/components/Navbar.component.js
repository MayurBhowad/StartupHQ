import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="bg-white p-5 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer text-green-500"><Link to="/" >StartUpHQ</Link></h1>
            </div>
            <div>
                <ul className="hidden sm:flex pr--2">
                    <li className="px-2 cursor-pointer hover:text-green-500" ><Link to="/" >Home</Link></li>
                    <li className="px-2 cursor-pointer hover:text-green-500">Contact</li>
                    <li className="px-2 cursor-pointer hover:text-green-500">User</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
