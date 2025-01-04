import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2z33cri', 'template_yt51o99', form.current, {
        publicKey: 'gtnTb8j8w72CnOm7Y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-gray-800 text-gray-300 rounded-xl shadow-xl">
      <h1 className="text-4xl font-bold text-accent text-center mb-6 animate__animated animate__fadeIn">
        Contact Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="space-y-4 animate__animated animate__fadeIn animate__delay-1s">
          <div className="flex items-center space-x-4">
            <span className="font-semibold text-accent">Email:</span>
            <a
              href="mailto:imtiaz@example.com"
              className="text-blue-400 hover:text-blue-600"
            >
              imtiaz@example.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold text-accent">Phone:</span>
            <p className="text-gray-300">+1 (234) 567-8901</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-semibold text-accent">WhatsApp:</span>
            <a
              href="https://wa.me/+12345678901"
              target="_blank"
              className="text-green-400 hover:text-green-600"
            >
              +1 (234) 567-8901
            </a>
          </div>
        </div>

        {/* Message Form Section */}
        <div className="bg-gray-700 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-accent mb-6 text-center">
            Send Me a Message
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-200">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 mt-2 bg-gray-800 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-accent"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <input
                type="submit"
                value="Send"
                className="w-full mt-4 py-3 bg-accent text-gray-800 font-semibold rounded-lg hover:bg-accent transition duration-300"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
