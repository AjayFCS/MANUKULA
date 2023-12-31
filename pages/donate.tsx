import Image from "next/image";
import React, { useState } from "react";

function Donation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here for form submission
    console.log("Form submitted:", formData);
    // You can send the form data to an API, perform validation, etc.
  };

  return (
    <div className="flex flex-col items-center pt-[200px] gap-7">
      <h1 className="text-orange-500 text-[35px] text-center">May be we can&apos;t change their lives, maybe we can&apos;t take their pain, Maybe we can never feel what they are going through.<br></br> But!!!! <br></br>
      We can Be a ray of hope in their lives. <br></br> we can be a reason to ease them from their troubles.<br></br> Wr can be a reason for their smile.</h1>
      <h1 className="text-[34px] text-orange-500">Donation Detail&apos;s</h1>
      <div className="flex">
      <Image src="/donate-image.jpg" width={800} height={500} alt=""/>
      <form onSubmit={handleSubmit} className="flex flex-row gap-6 self-center">
        <div className="flex flex-col gap-10">
          <label>
            Name <span className="text-red-500">*</span>
          </label>
          <label>
            Email <span className="text-red-500">*</span>
          </label>
          <label>
            Phone <span className="text-red-500">*</span>
          </label>
          <label>Message</label>
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="rounded-md border border-orange-500 border-3 w-[500px]"
            type="text"
            name="name"
            required={true}
            placeholder="First Name and Last Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="rounded-md border border-orange-500"
            type="email"
            name="email"
            required={true}
            placeholder="Donater's Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="rounded-md border border-orange-500"
            type="tel"
            name="phone"
            required={true}
            placeholder="Donater's Contact No"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            className="rounded-md border border-orange-500"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="bg-orange-500 rounded-md px-4 py-2 text-white">
            Checkout to Payment
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Donation;
