import React from 'react'
import {useState} from 'react'

const AssignmentSubmission = () => {
  const [assignment, setAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    file: null,
  })
  const handleChange = (e) => {
    const { name, value, file } = e.target
    setAssignment((prev) => ({
      ...prev,
      [name]: file ? [0] : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
        
    
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
          Submit Your Assignment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={assignment.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-1">Course Title</label>
            <input
              type="text"
              name="courseTitle"
              value={assignment.courseTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-1">Assignment Title</label>
            <input
              type="text"
              name="assignmentTitle"
              value={assignment.assignmentTitle}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-slate-700 mb-1">Upload File</label>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Submit Assignment
          </button>
        </form>
      </div>
    </div>
  )
}

export default AssignmentSubmission