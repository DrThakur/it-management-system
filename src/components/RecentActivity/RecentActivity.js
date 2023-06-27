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

  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/recent-activity");
  };

  const visibleActivities = showAll ? activityData : activityData.slice(0, 5);

  return (
    <div className="bg-white p-4 shadow rounded-lg h-108">
      <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
      <div className="overflow-x-auto">
        <div
          className="max-h-72 overflow-y-auto"
          style={{ scrollbarWidth: "thin" }}
        >
          <table className="table-auto w-full">
            <thead className="sticky top-0">
              <tr className="bg-gray-200 text-gray-600">
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Admin</th>
                <th className="py-2 px-4">Action</th>
                <th className="py-2 px-4">Item</th>
                <th className="py-2 px-4">Target</th>
              </tr>
            </thead>
            <tbody>
              {visibleActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="py-2 px-4">{activity.date}</td>
                  <td className="py-2 px-4">{activity.admin}</td>
                  <td className="py-2 px-4">{activity.action}</td>
                  <td className="py-2 px-4">{activity.item}</td>
                  <td className="py-2 px-4">{activity.target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {!showAll && activityData.length > 5 && (
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
