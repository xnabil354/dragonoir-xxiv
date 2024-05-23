'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import { RingLoader } from 'react-spinners';

interface FormData {
  name: string;
  subject: string;
  kelas: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  subject: '',
  kelas: '',
  message: '',
};

const BOT_TOKEN = '7190175151:AAHaGL4M2Q71UB93NPUJ0sOAy29WSUjp1w4';
const CHAT_ID = '1365766425';
const TELEGRAM_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(async () => {
      const message = `
*New Contact Form Submission Dragonoir* 📬

*Name*: ${formData.name}
*Subject*: ${formData.subject}
*Class*: ${formData.kelas}
*Message*:${formData.message}`;

      await fetch(TELEGRAM_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      });

      setFormData(initialFormData);
      setIsLoading(false);

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully, Thank You!.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
      <FormField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
      />
      <FormField
        label="Class"
        name="kelas"
        value={formData.kelas}
        onChange={handleChange}
      />
      <FormField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        isTextarea
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center font-mono"
        disabled={isLoading}
      >
        {isLoading ? <RingLoader size={30} color="#ffffff" /> : 'Send Now!'}
      </button>
    </form>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextarea?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, name, value, onChange, isTextarea = false }) => (
  <div>
    <label className="block text-gray-700 font-mono">{label}</label>
    {isTextarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        required
      />
    )}
  </div>
);

export default ContactForm;
