import React from "react";
import { MapPin, Building2, Briefcase, ExternalLink } from "lucide-react";

export default function JobCard({ job }) {
  return (
    <div className="relative bg-gradient-to-brown from-gray-800 via-gray-900 to-black border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:border-blue-500 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {job.job_title}
        </h3>
        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/30 transition-all"
        >
          <ExternalLink className="w-5 h-5 text-blue-400" />
        </a>
      </div>

      {/* Employer */}
      <div className="flex items-center mt-2 text-gray-400">
        <Building2 className="w-4 h-4 mr-2 text-gray-500" />
        <p className="text-sm">{job.employer_name || "Unknown Employer"}</p>
      </div>

      {/* Location */}
      <div className="flex items-center mt-1 text-gray-500">
        <MapPin className="w-4 h-4 mr-2 text-gray-600" />
        <p className="text-sm">
          {job.job_city}, {job.job_country}
        </p>
      </div>

      {/* Description */}
      <p className="mt-4 text-gray-300 text-sm line-clamp-3 leading-relaxed">
        {job.job_description || "No description available."}
      </p>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center text-gray-400 text-xs">
          <Briefcase className="w-4 h-4 mr-1 text-gray-500" />
          <span>Full-time</span>
        </div>

        <a
          href={job.job_apply_link}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-500 transition-all shadow-md"
        >
          Apply Now →
        </a>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-blue-400 blur-2xl transition-opacity"></div>
    </div>
  );
}
