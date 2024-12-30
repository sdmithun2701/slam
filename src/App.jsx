import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    countryCode: "+1",
    school: "",
    memories: "",
    gender: "",
    dob: "",
    favoriteColor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Slam Book Data:", formData);
    alert(`Slam Book Submitted!
Name: ${formData.name}
Address: ${formData.address}
Phone: ${formData.countryCode} ${formData.phone}
School: ${formData.school}
Memories: ${formData.memories}
Gender: ${formData.gender}
Date of Birth: ${formData.dob}
Favorite Color: ${formData.favoriteColor}`);
  };

  return (
    <div className="background-container">
      <div className="form-container">
        <div className="form-title">
          <h1>Slam Form</h1>
        </div>
        <form onSubmit={handleSubmit} className="styled-form">
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Phone No:
              <div style={{ display: "flex" }}>
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="country-code"
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </label>
          </div>
          <div className="form-group">
            <label>
              Memories:
              <textarea
                name="memories"
                value={formData.memories}
                onChange={handleChange}
              ></textarea>
            </label>
          </div>
          <div className="form-group">
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <fieldset className="form-group">
            <legend>Gender:</legend>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={"handle change"}
                  required
                />
                Male
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  required
                />
                Female
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  onChange={handleChange}
                  required
                />
                Other
              </label>
            </div>
          </fieldset>
          <div className="form-group">
            <label>
              School:
              <select
                name="school"
                value={formData.school}
                onChange={handleChange}
                required
              >
                <option value="">Select your school</option>
                <option value="Kongu Engineering College">Kongu Engineering College</option>
                <option value="Nandha Engineering College">Nandha Engineering College</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label>
              Favorite Color:
              <input
                type="color"
                name="favoriteColor"
                value={formData.favoriteColor}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;