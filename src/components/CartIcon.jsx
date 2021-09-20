import React from 'react'

function CartIcon({animate, cartItemCount}) {
    return (
        <div className={`fixed bottom-0 right-0 p-4 bg-indigo-600 rounded-full m-4 cursor-pointer hover:bg-indigo-700 ${animate}`}>
            <div className="count-item bg-red-500 w-6 h-6 text-center rounded-full absolute top-0 left-0 text-white">
                {cartItemCount}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
        </div>
    )
}

export default CartIcon
