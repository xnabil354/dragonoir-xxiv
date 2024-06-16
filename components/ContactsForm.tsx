"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { RingLoader } from "react-spinners";
import { useReCaptcha } from 'next-recaptcha-v3';

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

const BOT_TOKEN = "your_bot_token";
const CHAT_ID = "your_chat_id";
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const { executeRecaptcha } = useReCaptcha();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      setIsLoading(false);
      return;
    }

    try {
      const token = await executeRecaptcha('submit');
      const message = formatMessage(formData);

      const isHuman = await verifyRecaptchaToken(token);

      if (isHuman) {
        await sendMessageToTelegram(message);
        setFormData(initialFormData);
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully, Thank You!.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        throw new Error("reCAPTCHA verification failed. Please try again.");
      }
    } catch (error: unknown) {
      const customError = error as Error;
      Swal.fire({
        title: "Error!",
        text: customError.message || "There was an error sending your message. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyRecaptchaToken = async (token: string) => {
    const response = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    return data.success;
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
*New Contact Form Submission* 📬

*Name*: ${formData.name}
*Subject*: ${formData.subject}
*Class*: ${formData.kelas}
*Message*: ${formData.message}
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