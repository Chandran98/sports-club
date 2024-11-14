// FeaturesSection.js
import React from "react";
import { FaGraduationCap, FaUser, FaBrain, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-orange-500" size={32} />,
    title: "ENHANCED COGNITIVE PROCESSING",
    description: "Our programs boost children's cognitive processes, enabling faster and more accurate decision-making.",
  },
  {
    icon: <FaChartLine className="text-green-500" size={32} />,
    title: "SKYROCKETED CONFIDENCE",
    description: "Watch your child's confidence soar as they overcome academic hurdles and achieve their goals.",
  },
  {
    icon: <FaGraduationCap className="text-black" size={32} />,
    title: "SUPERIOR ACADEMIC PERFORMANCE",
    description: "With improved focus & enhanced skills, your child's academic performance will reach new heights.",
  },
  {
    icon: <FaUser className="text-orange-500" size={32} />,
    title: "ABACUS LEARNING",
    description: "With our comprehensive Abacus Learning program, children experience improved cognitive development.",
  },
];

const FeaturesSection = () => {
  return (
    <div className="flex flex-wrap justify-center bg-gray-50 py-8 px-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="w-56 h-64 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4 border-t-4 border-indigo-500 hover:border-indigo-700 transform hover:scale-105 transition-transform duration-300"
        >
          <div className="flex items-center justify-center bg-gray-100 rounded-full p-3 mb-4">
            {feature.icon}
          </div>
          <h3 className="text-center text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-center text-sm text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesSection;
