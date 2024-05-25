import React from "react";

const UserDashboard = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Total Sales</h2>
            <p className="text-3xl font-bold text-blue-500">$244</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Total Cost</h2>
            <p className="text-3xl font-bold text-green-500">$199.4</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Total Users</h2>
            <p className="text-3xl font-bold text-yellow-500">900</p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Total Products</h2>
            <p className="text-3xl font-bold text-red-500">500</p>
          </div>
        </div>
      </main>
      {/* Table */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-left border-b-2 border-gray-300 py-2">
                Order ID
              </th>
              <th className="text-left border-b-2 border-gray-300 py-2">
                Customer
              </th>
              <th className="text-left border-b-2 border-gray-300 py-2">
                Date
              </th>
              <th className="text-left border-b-2 border-gray-300 py-2">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-gray-300 py-2">123456</td>
              <td className="border-b border-gray-300 py-2">John Doe</td>
              <td className="border-b border-gray-300 py-2">2024-05-25</td>
              <td className="border-b border-gray-300 py-2">$150</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">123457</td>
              <td className="border-b border-gray-300 py-2">Jane Smith</td>
              <td className="border-b border-gray-300 py-2">2024-05-24</td>
              <td className="border-b border-gray-300 py-2">$200</td>
            </tr>
            <tr>
              <td className="border-b border-gray-300 py-2">123458</td>
              <td className="border-b border-gray-300 py-2">Mike Johnson</td>
              <td className="border-b border-gray-300 py-2">2024-05-23</td>
              <td className="border-b border-gray-300 py-2">$180</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Bar Chart */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Sales by Month</h2>
        <div className="flex items-center">
          <div className="w-16 text-gray-500 mr-4">January</div>
          <div className="flex-1 bg-gray-200 h-8 rounded-lg">
            <div
              className="bg-blue-500 h-full rounded-lg"
              style={{ width: "40%" }}
            ></div>
          </div>
          <div className="ml-4 text-gray-700">40%</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-16 text-gray-500 mr-4">February</div>
          <div className="flex-1 bg-gray-200 h-8 rounded-lg">
            <div
              className="bg-blue-500 h-full rounded-lg"
              style={{ width: "60%" }}
            ></div>
          </div>
          <div className="ml-4 text-gray-700">60%</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-16 text-gray-500 mr-4">March</div>
          <div className="flex-1 bg-gray-200 h-8 rounded-lg">
            <div
              className="bg-blue-500 h-full rounded-lg"
              style={{ width: "80%" }}
            ></div>
          </div>
          <div className="ml-4 text-gray-700">80%</div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
