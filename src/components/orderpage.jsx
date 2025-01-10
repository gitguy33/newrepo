import React, { useState } from 'react';
import './OrderPage.css';

const Order = () => {
    const [showModal, setShowModal] = useState(false);

    const handleProceedToPay = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <form>
                <div className="place-order-left">
                    <p className="title">Delivery information</p>
                    <div className="multi-fields">
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                    </div>
                    <input type="email" placeholder='Email Address' />
                    <input type="text" placeholder='Street' />
                    <div className="multi-fields">
                        <input type="text" placeholder='City'/>
                        <input type="text" placeholder='State'/>
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder='Zip code'/>
                        <input type="text" placeholder='Country'/>
                    </div>
                    <input type="text" placeholder='Phone' />
                </div>
                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Total</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>₹ 100</p>
                            </div>
                            <hr/>
                            <div className="cart-total-details">
                                <p>Delivery Charge</p>
                                <p>₹ 20</p>
                            </div>
                            <hr/>
                            <div className="cart-total-details">
                                <b>Total</b>
                                <p>₹ 120</p>
                            </div>
                        </div>
                        <button type="button" className="proceed-button" onClick={handleProceedToPay}>Proceed to Pay</button>
                    </div>
                </div>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Enter Payment Details</h2>
                        <input type="text" placeholder="Card Number" />
                        <input type="text" placeholder="CVV" />
                        <input type="text" placeholder="Expiry Date" />
                        <button className="submit-button">Submit Payment</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Order;