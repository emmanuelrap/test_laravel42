import React from "react";

interface ProgressBarProps {
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage }) => {
  return (
    <div className="relative h-6 w-full bg-gray-200 rounded mb-5">
      <div
        className="h-full bg-blue-500 rounded-l"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute inset-0 flex items-center justify-center text-gray-700">
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
