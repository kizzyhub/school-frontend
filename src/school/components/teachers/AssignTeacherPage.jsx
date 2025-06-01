import React, { useState } from 'react';

const AssignTeacherPage = () => {
  const [assignment, setAssignment] = useState({
    recipient: '',
    title: '',
    description: '',
    dueDate: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const handleFileChange = (e) => {
    setAssignment({ ...assignment, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-10 pb-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-2xl p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Assign Assignment</h2>

        <label className="block mb-2 font-medium text-gray-700">
          Assign to
        </label>
        <select
          name="recipient"
          value={assignment.recipient}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select student or class</option>
          <option value="classA">Class A</option>
          <option value="student1">Student 1</option>
        </select>

        <label className="block mb-2 font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={assignment.title}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={assignment.description}
          onChange={handleChange}
          placeholder="Enter assignment description"
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          rows="3"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">Due date</label>
        <input
          type="date"
          name="dueDate"
          value={assignment.dueDate}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md"
          required
        />

        <label className="block mb-2 font-medium text-gray-700">
          Upload file
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Assign
        </button>
      </form>
    </div>
  );
};

export default AssignTeacherPage;
