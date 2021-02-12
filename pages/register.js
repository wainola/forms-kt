import React from 'react';

export default function Register() {
  return (
    <div>
      <div>
        <h2>Register</h2>
      </div>
      <div>
        <form>
          <div>
            <label htmlFor="dni">DNI</label>
            <input type="text" placeholder="dni" id="dni" />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" id="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input type="tel" placeholder="Phone number" id="phone" />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input type="text" placeholder="Country" id="country" />
          </div>
          <div>
            <label htmlFor="region">Region</label>
            <input type="text" placeholder="Region" id="region" />
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}
