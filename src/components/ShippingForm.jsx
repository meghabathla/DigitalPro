import React, { useState } from "react";
import { StyledShippingForm } from "../styles/Styles";

function ShippingForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country: "",
    zipcode: "",
    sameAddress: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <StyledShippingForm>
      <section>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <br />
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="address">Address:</label>
          <br />
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </section>
      <section>
        <div>
          <label htmlFor="country">Country:</label>
          <br />
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <br />
          <input
            type="text"
            id="city"
            name="city"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="zipcode">Zip Code:</label>
          <br />
          <input
            type="text"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleChange}
            required
          />
        </div>
      </section>
      <div className="checkbox">
        <input
          type="checkbox"
          name="sameAddress"
          checked={formData.sameAddress}
          onChange={handleChange}
        />
        <label>My shipping and billing addresses are the same</label>
      </div>
    </StyledShippingForm>
  );
}

export default ShippingForm;
