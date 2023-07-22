import React from "react";

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    dateOfBirth: "",
    availability: "",
    skills: "",
    interests: "",
    volunteerExperience: "",
    professionalExperience: "",
    motivation: "",
    goals: "",
    references: "",
    emergencyContact: "",
    backgroundCheckConsent: false,
  });

  const textHandler = (e) => {};

  const checkBoxHandler = (e) => {};

  const submitHandler = (e) => {};
  return (
    <form onSubmit={submitHandler}>
      {/* Your form fields go here */}
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={textHandler}
        placeholder="Full Name"
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={textHandler}
        placeholder="yourEmail@domain.com"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={textHandler}
        placeholder="000-000-000"
        required
      />
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={textHandler}
        placeholder="000-000-000"
        required
      />
      <input
        type="checkbox"
        name="backgroundCheckConsent"
        checked={formData.backgroundCheckConsent}
        onChange={checkBoxHandler}
      />
      <label htmlFor="backgroundCheckConsent">
        I consent to a background check.
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JoinUs;
