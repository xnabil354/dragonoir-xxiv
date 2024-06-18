"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { RingLoader } from "react-spinners";
import Turnstile from 'react-turnstile';

interface FormData {
  name: string;
  subject: string;
  kelas: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  subject: "",
  kelas: "",
  message: "",
};

const BOT_TOKEN = "7190175151:AAHaGL4M2Q71UB93NPUJ0sOAy29WSUjp1w4";
const CHAT_ID = "1365766425";
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!token) {
      Swal.fire({
        title: "Error!",
        text: "Please complete the CAPTCHA.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setIsLoading(false);
      return;
    }

    try {
      const message = formatMessage(formData);
      await sendMessageToTelegram(message);
      setFormData(initialFormData);
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully, Thank You!.",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      console.error("Error submitting the form:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error sending your message. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 shadow-md rounded-lg space-y-4"
    >
      {["name", "subject", "kelas", "message"].map((field) => (
        <FormField
          key={field}
          label={capitalizeFirstLetter(field)}
          name={field}
          value={formData[field as keyof FormData]}
          onChange={handleChange}
          isTextarea={field === "message"}
        />
      ))}
      <div className="mt-4">
        <Turnstile
          sitekey="0x4AAAAAAAcvvnfdGv7Urzre"
          onVerify={(token) => setToken(token)}
          className="turnstile-captcha scale-75"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-mono bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-500"
        disabled={isLoading}
      >
        {isLoading ? <RingLoader size={30} color="#ffffff" /> : "Send Now!"}
      </button>
    </form>
  );
};

const formatMessage = (formData: FormData) => `
New Contact Form Submission Dragonoir 📬

Name: ${formData.name}
Subject: ${formData.subject}
Class: ${formData.kelas}
Message: ${formData.message}
`;

const sendMessageToTelegram = async (message: string) => {
  await fetch(TELEGRAM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      parse_mode: "Markdown",
    }),
  });
};

const capitalizeFirstLetter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  isTextarea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  value,
  onChange,
  isTextarea = false,
}) => (
  <div>
    <label className="block text-gray-700 font-mono">{label}</label>
    {isTextarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gradient-to-r from-gray-100 to-gray-200"
        required
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 bg-gradient-to-r from-gray-100 to-gray-200"
        required
      />
    )}
  </div>
);

export default ContactForm;
