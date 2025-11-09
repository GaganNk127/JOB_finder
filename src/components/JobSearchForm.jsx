import React, { useState } from "react";

export default function JobSearchForm({ onSearch }) {
  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ education, location, resume });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="backdrop-blur-md bg-gray-800/70 shadow-2xl rounded-2xl p-6 w-full max-w-2xl border border-gray-700"
    >
      <div className="grid gap-4">
        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Education / Skill
          </label>
          <input
            type="text"
            placeholder="e.g., React Developer, Data Analyst"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Location
          </label>
          <input
            type="text"
            placeholder="e.g., Chicago, New York"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 bg-gray-900 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-gray-300 font-medium mb-1">
            Upload Resume
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setResume(e.target.files[0])}
            className="w-full border border-gray-700 bg-gray-900 rounded-lg p-2 text-gray-300"
          />
        </div>

        <button
          type="submit"
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200 font-semibold shadow-md"
        >
          Find Best Jobs 🚀
        </button>
      </div>
    </form>
    );
}