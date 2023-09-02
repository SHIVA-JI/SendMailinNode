import React, { useState } from "react";
import "./EffizientForm.css";

import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    age: "",
    highestEdu: "",
    institute: "",
    studyArea: "",
    experience: "",
    instituteCanada: "",
    userCountry: "",
    fututeGoals: "",
    eListen: "",
    eRead: "",
    eSpeak: "",
    eWrite: "",
    tuitionPaid: "",
    tuitionAmount:"",
    gic: "",
    gicAmount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:5000";
      await axios.post(url, formData);
    } catch (error) {
      console.error("Error signing up:", error);
    }
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <form id="form" onSubmit={handleSubmit}>
          <h1>Google Form!!</h1>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 email">Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputPassword1 email"
              placeholder="Your Email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 name"
              placeholder="Your name"
              name="name"
              value={formData.name}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 age">Age</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 age"
              placeholder="Your answer"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Highest Level of Education</p>
            <select
              className="form-select"
              aria-label="Default select example"
              id="edu"
              name="highestEdu"
              required
              value={formData.highestEdu}
              onChange={handleChange}
              
            >
              <option>Choose</option>
              <option value="Grade-12">Grade-12</option>
              <option value="Diploma">Diploma</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="exampleInputPassword1 inst">
              Institute where you completed your highest level of education
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 inst"
              placeholder="Your answer"
              name="institute"
              value={formData.institute}
              onChange={handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="exampleInputPassword1 study">
              What did you Study
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 study"
              placeholder="Your answer"
              name="studyArea"
              required
              value={formData.studyArea}
              onChange={handleChange}
            />
          </div>
          <div className="form-group ">
            <label htmlFor="exampleInputPassword1 exp">
              Do you have any relevant work experience? Write None if no work
              experience. Provide the following details if yes:
              <br />
              <br />
              1. Job Title
              <br />
              2. Company Name
              <br />
              3. Job duties
              <br />
              <br />
              Sample Answer: I workeed as a Sales Manager at Effizient
              Immigration Inc from Jan 2022 till Feb 2023. In this role, I m
              anged sales operations, reaching out to leads, lead the outreach
              program, ensured meeting monthly targets.
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 exp"
              placeholder="Your answer"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 can">
              What Institute did you get admitted to in Canada?
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 can"
              placeholder="Your answer"
              name="instituteCanada"
              required
              value={formData.instituteCanada}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 con">
              Which Country are you applying from?
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 con"
              placeholder="Your answer"
              name="userCountry"
              required
              value={formData.userCountry}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 goals">
              What are your future goals?
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1 goals"
              placeholder="Your answer"
              name="fututeGoals"
              value={formData.fututeGoals}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 elisten">
              English Scores - Listening
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1 elisten"
              placeholder="Your answer"
              name="eListen"
              required
              value={formData.eListen}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 eread">
              English Scores - Reading
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1 eread"
              placeholder="Your answer"
              name="eRead"
              required
              value={formData.eRead}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 espeak">
              English Scores - Speaking
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1 espeak"
              placeholder="Your answer"
              name="eSpeak"
              required
              value={formData.eSpeak}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1 ewrite">
              English Scores - Writing
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1 ewrite"
              placeholder="Your answer"
              name="eWrite"
              required
              value={formData.eWrite}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tuitionPaid">
              Did you pay your first year tuition?
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tuitionPaid"
                id="tuitionPaidYes"
                value="Yes"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="tuitionPaidYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="tuitionPaid"
                id="tuitionPaidNo"
                value="No"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="tuitionPaidNo">
                No
              </label>
            </div>
          </div>
          {formData.tuitionPaid === 'Yes' && (
            <div className="form-group">
              <label htmlFor="tuitionAmount">How much tuition fee did you pay?</label>
              <input
                type="number"
                className="form-control"
                id="tuitionAmount"
                placeholder="Your answer"
                name="tuitionAmount"
                value={formData.tuitionAmount}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="gic">Did you do a GIC?</label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gic"
                id="gicYes"
                value="Yes"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gicYes">
                Yes
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gic"
                id="gicNo"
                value="No"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gicNo">
                No
              </label>
            </div>
          </div>
          {formData.gic === 'Yes' &&
            <div className="form-group">
              <label htmlFor="gicAmount">How much did you pay towards GIC?</label>
              <input
                type="number"
                className="form-control"
                id="gicAmount"
                placeholder="Your answer"
                name="gicAmount"
                value={formData.gicAmount}
                onChange={handleChange}
              />
            </div>}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
