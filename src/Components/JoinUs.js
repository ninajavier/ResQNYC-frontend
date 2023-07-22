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
  return (
    <div>
      <h1>This is to Join Us Form</h1>
    </div>
  );
};

export default JoinUs;
