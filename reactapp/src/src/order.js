import React, { useState } from 'react';
import './order.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Orders() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePurchase = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };
 
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      pro_name: "",
      pro_id: "",
      quantity: ""
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!formData.firstName || !formData.lastName || !formData.address || !formData.city || !formData.pro_name || !formData.pro_id || !formData.quantity) {
        alert("Please fill in all the required fields.");
        return;
      }
      axios.post("http://127.0.0.1:8080/order/orders", formData)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
        setFormData({
          firstName: "",
          lastName: "",
          address: "",
          city: "",
          productname: "",
          productid: "",
          quantity: ""
        });
      })
      .catch(error => {
        console.error("Error submitting form:", error);
      });
    
  }  ;

  return (
    <div className="Main">
      <div class="wrap">
        <div class="contain">
          <form className='form'action="" onSubmit={handleSubmit}>
            <h1>
              <i class="fas fa-shipping-fast"></i>
              Shipping Details
            </h1>
            <div class="name">
              <div>
                <label for="f-name">First Name</label>
                <input type="text" name="first_name" />
              </div>
              <div>
                <label for="l-name">Last Name</label>
                <input type="text" name="last_name" />
              </div>
            </div>
            <div class="street">
              <label for="name">Street</label>
              <input type="text" name="street" />
            </div>
            <div class="address-info">
              <div>
                <label for="city">City</label>
                <input type="text" name="city" />
              </div>
              <div>
                <label for="state">Product Name</label>
                <input type="text" name="product_name" />
              </div>
              <div>
                <label for="zip">Product ID</label>
                <input type="text" name="product_id" />
              </div>
            </div>
            <h1>
              <i class="far fa-credit-card"></i> Order Details
            </h1>
            <div class="cc-num">
              <label for="card-num">Quantity</label>
              <input type="text" name="quantity" />
            </div>
            <div className="btns">
              <button onClick={handleSubmit}>Purchase</button>
              {showPopup && (
                // Add your popup code here
                // For example:
                  <div class='popup'>
                    Thank you for your purchase!
                  </div>
              )}
              <br/>
              <Link to="/home">
                <button>Back to Home</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Orders;
