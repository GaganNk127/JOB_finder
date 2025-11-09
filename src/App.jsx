import React, { useState } from "react";
import JobSearchForm from "./components/JobSearchForm";
import JobCard from "./components/JobCard";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchJobs = async ({ education, location, entrylevel="fresher" }) => {
    setLoading(true);
    const query = `${education} jobs in ${location} and ${entrylevel}`;
    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(
      query
    )}&page=1&num_pages=1&country=us&date_posted=all`;

    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "28061e2154mshc737270d165ac9ep163b55jsneffcc4f8847b",
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setJobs(data.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400 drop-shadow-md">
        🎯 Smart Job Finder
      </h1>

      <JobSearchForm onSearch={fetchJobs} />

      {loading && (
        <p className="mt-6 text-gray-400 animate-pulse">Fetching jobs...</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      <footer>
      <p className="mt-12 text-gray-500 text-sm">
        &copy; 2025 Gagan Naik. All rights reserved.
      </p>
      </footer>
    </div>
  );
}
