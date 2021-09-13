import React from 'react'

function Navbar() {
    return (
        <div className="bg-white p-5 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold cursor-pointer text-green-500">StartUpHQ</h1>
            </div>
            <div>
                <ul className="hidden sm:flex pr--2">
                    <li className="px-2 cursor-pointer" >Home</li>
                    <li className="px-2 cursor-pointer">Contact</li>
                    <li className="px-2 cursor-pointer">User</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
