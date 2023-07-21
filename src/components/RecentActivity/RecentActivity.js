import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecentActivity = () => {
  const activityData = [
    {
      id: 1,
      date: "2023-06-25",
      admin: "John Doe",
      action: "Asset Added",
      item: "Laptop",
      target: "Marketing Department",
    },
    {
      id: 2,
      date: "2023-06-24",
      admin: "Jane Smith",
      action: "Asset Updated",
      item: "Monitor",
      target: "IT Department",
    },
    {
      id: 3,
      date: "2023-06-23",
      admin: "Mike Johnson",
      action: "Asset Deleted",
      item: "Printer",
      target: "Finance Department",
    },
    {
      id: 4,
      date: "2023-06-23",
      admin: "Ankit Johnson",
      action: "Asset Deleted",
      item: "Printer",
      target: "Finance Department",
    },
    {
      id: 5,
      date: "2023-06-23",
      admin: "Mike Tyson",
      action: "Asset Added",
      item: "Printer",
      target: "Finance Department",
    },
    {
      id: 6,
      date: "2023-06-23",
      admin: "John Jonzz",
      action: "Asset Added",
      item: "Printer",
      target: "Finance Department",
    },
    // Add more activity items as needed
  ];
  const [showContent, setShowContent] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const handleViewAll = () => {
    navigate("/recent-activity");
  };

  const visibleActivities = showAll ? activityData : activityData.slice(0);

  return (
    <div className="bg-blue-50 p-2 shadow rounded-lg h-108 -mb-6 w-full">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold ml-2 ">Recent Activity</h2>
        <button
          className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-400 hover:bg-blue-600 text-white focus:outline-none mr-2"
          onClick={handleToggleContent}
        >
          <span className="text-3xl mb-2">{showContent ? "-" : "+"}</span>
        </button>
      </div>
      {showContent && (
        <div className="overflow-x-auto  overflow-y-auto mt-2">
          <div
            className="max-h-72 overflow-y-auto"
            style={{ scrollbarWidth: "thin" }}
          >
            <table className="table-auto w-full">
              <thead className="sticky top-0">
                <tr className="bg-gray-200 text-gray-600 border-b-2 border-gray-500">
                  <th className="bg-blue-200 py-2 px-4">Date</th>
                  <th className="bg-green-200 py-2 px-4">Admin</th>
                  <th className="bg-yellow-200 py-2 px-4">Action</th>
                  <th className="bg-pink-200 py-2 px-4">Item</th>
                  <th className="bg-red-200 py-2 px-4">Target</th>
                </tr>
              </thead>
              <tbody>
                {visibleActivities.map((activity) => (
                  <tr key={activity.id}>
                    <td className="bg-blue-200 py-2 px-4">{activity.date}</td>
                    <td className="bg-green-200 py-2 px-4">{activity.admin}</td>
                    <td className="bg-yellow-200 py-2 px-4">
                      {activity.action}
                    </td>
                    <td className="bg-pink-200 py-2 px-4">{activity.item}</td>
                    <td className="bg-red-200 py-2 px-4">{activity.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {showContent && !showAll && (
        <button
          className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleViewAll}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default RecentActivity;
