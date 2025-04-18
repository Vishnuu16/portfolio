import React from "react";
import themeimg from "../../assets/theme_pattern.svg";
import mailicon from "../../assets/mail_icon.svg";
import locationicon from "../../assets/location_icon.svg";
import callicon from "../../assets/call_icon.svg";

const Contact = () => {
  const contactDetails = [
    { icon: mailicon, dataa: "vvarthan351@gmail.com" },
    { icon: callicon, dataa: "+91 7826008626" },
    { icon: locationicon, dataa: "Chennai, TamilNadu" },
  ];
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "dcbbeaf1-067b-4144-adc5-01cc4490ddd4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-12 sm:gap-16 my-12 sm:my-20 mx-4 sm:mx-[170px]"
    >
      {/* Header */}
      <div className="relative text-center">
        <h1 className="px-6 font-semibold text-4xl sm:text-5xl">Get in Touch</h1>
        <img
          className="absolute bottom-1 right-2 -z-1"
          src={themeimg}
          alt="Theme"
          width="110px"
        />
      </div>

      {/* Contact Content */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 w-full">
        {/* Left - Contact Info */}
        <div className="flex flex-col gap-8 sm:gap-10 max-w-[700px] sm:max-w-none">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-[#BFC4D0] text-xl sm:text-2xl leading-[35px]">
            I’m currently available to take on new projects. Send me a message
            about anything you’d like to collaborate on.
          </p>
          <div className="flex flex-col gap-6 text-lg sm:text-xl text-white">
            {contactDetails.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={item.icon} alt="" className="w-6 h-6" />
                <p>{item.dataa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-lg">
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            <label className="text-white text-lg font-medium">Your Name</label>
            <input
              className="h-[60px] sm:h-[70px] px-6 rounded-lg bg-[#1F2937] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label className="text-white text-lg font-medium">Your Email</label>
            <input
              className="h-[60px] sm:h-[70px] px-6 rounded-lg bg-[#1F2937] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label className="text-white text-lg font-medium">Your Message</label>
            <textarea
              className="p-4 rounded-lg bg-[#1F2937] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              name="message"
              placeholder="Enter your message here"
              required
            ></textarea>

            <button
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full py-3 px-8 mt-2 hover:scale-105 transition-transform duration-300"
              type="submit"
            >
              Submit
            </button>
          </form>
          <span className="text-green-400 font-semibold">{result}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
