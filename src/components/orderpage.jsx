import React, { useState } from 'react';
import './OrderPage.css';
import truck from './images/freepik__background__47830.png'

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
        <div className='outer_border'>
            <form>
                <div className="place-order-left">
                    <h2 className="title">Enter delivery information</h2>
                    <div className='order_outer'>
                    <div className="order_fields1" style={{float:"left",margin_right:"20px"}}>
                        <label className='orderinput_label'> First Name</label>
                        <input className='order_input' type="text" placeholder='First Name'/>
                    </div>
                    <div style={{float:"inherit"}}>
                        <label className='orderinput_label'>Last Name</label>
                        <input className='order_input' type="text" placeholder='Last Name'/>
                    </div>
                    <div className="order_fields2" style={{float:"left",margin_right:"20px"}}>
                        <label className='orderinput_label'> Enter Email</label>
                        <input className='order_input' type="email" placeholder='Email Address'/>
                    </div>
                    <div style={{float:"inherit"}}>
                        <label className='orderinput_label'>Enter Street</label>
                        <input className='order_input' type="text" placeholder='Street'/>
                    </div>
                    <div className="order_fields3" style={{float:"left",margin_right:"20px"}}>
                        <label className='orderinput_label'> Enter City</label>
                        <input className='order_input' type="text" placeholder='City' />
                    </div>
                    <div style={{float:"t"}}>
                        <label className='orderinput_label'>Enter State</label>
                        <input className='order_input' type="text" placeholder='state'/>
                    </div>
                    <div className="order_fields4" style={{float:"left",margin_right:"20px"}}>
                        <label className='orderinput_label'> Enter Zip code</label>
                        <input className='order_input' type="text" placeholder='Zip code'/>
                    </div>
                    <div style={{float:"inherit"}}>
                        <label className='orderinput_label'>Enter Country</label>
                        <input className='order_input' type="text" placeholder='Country'/>
                    </div>
                    <div className="order_fields5" style={{float:"left",margin_right:"20px"}}>
                        <label className='orderinput_label'> Enter phone number</label>
                        <input className='order_input' type="text" placeholder='Phone number'/>
                    </div>
                    </div>
                </div>
                <div className="order_price">
                    <div className="cart-total">
                        <h2>Order</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Items                     ₹ 100</p>
                            </div>
                            <div className="cart-total-details">
                                <p>Delivery Charge : ₹ 20</p>
                            </div>
                            <div className="cart-total-details">
                                <p>Sub Total: ₹ 120</p>
                            </div>
                            <button type="button" className="proceed-button" onClick={handleProceedToPay}>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
                
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2 style={{textAlign:"center"}}>Enter Payment Details</h2>
                        <label style={{float:"left"}}>Enter Fullname 
                        <input style={{float:"inherit"}} type="text" placeholder="Enter Fullname" className='payment_input1'/></label>
                        <label style={{float:"left",}}>Card Number
                        <input style={{float:"inherit"}} type="number" placeholder="0000 0000 0000 0000" className='payment_input1' /></label>
                        <label style={{float:"right"}}>Expiry Date
                        <input style={{float:"inherit"}} type="text" placeholder="mm/yy" className='payment_input2'/></label>
                        <label style={{float:"right"}}>CVV
                        <input style={{float:"inherit"}} type="text" placeholder="CVV" className='payment_input3'/></label>
                        
                        <button className="submit-button">Submit Payment</button>
                    </div>
                </div>
            )}
            <img src={truck}  className='truck_image' alt='#'/>
            </div>
        </div>
    );
};

export default Order;