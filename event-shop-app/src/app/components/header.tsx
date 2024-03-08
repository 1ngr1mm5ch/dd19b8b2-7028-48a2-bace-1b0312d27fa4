"use client"

import { useState } from "react";

const Header: React.FC = () => {
    const [checkout, setShowCheckout] = useState<boolean>(false)

    const showCheckout = () =>{
        setShowCheckout(true)
    }

    const closeCheckout = () =>{
        setShowCheckout(false)
    }

    return(
        <header>
            <div className="header-container">
                <div className="search-filter-container">
                    <div>
                        <input className="search-input" />
                    </div>
                    <div>
                        <button className="filter-button">Filter</button>
                    </div>
                </div>
                <div className="checkout-container" >
                    <button className="checkout-button" onClick={showCheckout}>Checkout</button>
                </div>

                {checkout && 
                    <dialog open className="basket">
                        <div className="checkout-header">
                            <h2>Checkout</h2>   
                            <button className="close-button" onClick={closeCheckout}>X</button>
                        </div> 
                        <div className="checkout-overview">
                            <div className="checkout-item">
                                <div>Title</div>
                                <div>date</div>
                                <div>location</div>
                            </div>
                            <div className="checkout-item">
                                <div>Title</div>
                                <div>date</div>
                                <div>location</div>
                            </div>
                        </div>
                    </dialog>
                }
            </div> 
        </header>
    )
}

export default Header;