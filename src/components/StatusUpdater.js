'use client';

import { useState, useEffect } from 'react';
import { useUserContext } from '../context/UserContext';
import { useFavorContext } from '../context/FavorContext';

export default function StatusUpdater() {
  const { user } = useUserContext();
  const { addFavor } = useFavorContext();
  const [initials, setInitials] = useState('XT');
  const [formData, setFormData] = useState({
    title: '',
    payment: '',
    description: '',
  });

  useEffect(() => {
    if (user) {
      const firstNameInit = user.first_name.charAt(0);
      const lastNameInit = user.last_name.charAt(0);
      setInitials(`${firstNameInit}${lastNameInit}`);
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
      addFavor(
        formData.title,
        formData.payment,
        formData.description,
        user.first_name,
        user.last_name
      );
      setFormData({ title: '', payment: '', description: '' });
    }
  };

  return (
    <div className="inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <form className="flex items-start space-x-4" onSubmit={handleSubmit}>
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
              {initials}
            </div>
          </div>
          <div className="flex-1 space-y-4 w-full">
            <input
              type="text"
              placeholder="Favor Title"
              name="title"
              maxLength="20"
              required
              className="w-full p-2 border rounded-md"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Payment $$"
              name="payment"
              maxLength="20"
              required
              className="w-full p-2 border rounded-md"
              value={formData.payment}
              onChange={handleChange}
            />
            <textarea
              placeholder="Description"
              name="description"
              maxLength="300"
              required
              className="w-full p-2 border rounded-md h-40"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
