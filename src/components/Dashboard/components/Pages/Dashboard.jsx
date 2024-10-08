import { useState } from "react";
import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart, Pie } from "recharts";

const Dashboard = () => {
  const [connectNulls, setConnectNulls] = React.useState(true);
  const [totalSales, setTotalSales] = useState(10350);
  const [user, setUser] = useState(33);
  const [sales, setSales] = useState(1023);
  const [product, setProduct] = useState(26);
  const [expanses, setExpanses] = useState(2456);

  const details = [
    {
      id: 1,
      consumerName: "John Doe",
      price: 29.99,
      data: "2024-10-10",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812615/samples/smile.jpg",
    },
    {
      id: 2,
      consumerName: "Jane Smith",
      price: 49.99,
      data: "2024-10-09",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812607/samples/people/smiling-man.jpg",
    },
    {
      id: 3,
      consumerName: "Alice Johnson",
      price: 19.99,
      data: "2024-10-08",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812607/samples/people/kitchen-bar.jpg",
    },
    {
      id: 4,
      consumerName: "Michael Brown",
      price: 59.99,
      data: "2024-10-07",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812615/samples/man-portrait.jpg",
    },
    {
      id: 5,
      consumerName: "Emily Davis",
      price: 39.99,
      data: "2024-10-06",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812616/cld-sample.jpg",
    },
    {
      id: 6,
      consumerName: "David Wilson",
      price: 24.99,
      data: "2024-10-05",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812616/samples/woman-on-a-football-field.jpg",
    },
    {
      id: 7,
      consumerName: "Olivia Martinez",
      price: 34.99,
      data: "2024-10-04",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812616/samples/upscale-face-1.jpg",
    },
    {
      id: 8,
      consumerName: "Sophia Taylor",
      price: 22.99,
      data: "2024-10-03",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812616/cld-sample.jpg",
    },
    {
      id: 9,
      consumerName: "James Anderson",
      price: 44.99,
      data: "2024-10-02",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812607/samples/people/smiling-man.jpg",
    },
    {
      id: 10,
      consumerName: "Isabella Thomas",
      price: 27.99,
      data: "2024-10-01",
      image:
        "https://res.cloudinary.com/dqb5izi3a/image/upload/v1725812607/samples/people/smiling-man.jpg",
    },
  ];

  const data = [
    { name: "Group A", value: 350, fill: "#8884d8" }, // purple
    { name: "Group B", value: 280, fill: "#82ca9d" }, // green
    { name: "Group C", value: 200, fill: "#ffc658" }, // yellow
    { name: "Group D", value: 250, fill: "#ff8042" }, // orange
    { name: "Group E", value: 150, fill: "#a4de6c" }, // light green
    { name: "Group F", value: 350, fill: "#d0ed57" }, // light yellow
  ];
  return (
    <div>
      <h1 className="text-3xl  font-semibold">Dashboard</h1>
      <p>Welcome to dashboard</p>
      <div className="flex lg:flex-row md:flex-col flex-col lg:space-x-5">
        <div className="lg:w-3/4 ">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
  {/* Total Sales */}
  <div className="text-center bg-white py-6 px-4 lg:px-6 rounded-md shadow-md">
    <h1 className="text-6xl">📊</h1>
    <h3 className="text-2xl md:text-3xl">Total Sales</h3>
    <p className="text-sm">+50% Incomes</p>
    <h1 className="text-xl md:text-2xl">${totalSales}</h1>
  </div>

  {/* Daily Sales */}
  <div className="text-center bg-white py-6 px-4 lg:px-6 rounded-md shadow-md">
    <h1 className="text-6xl">💵</h1>
    <h3 className="text-2xl md:text-3xl">Daily Sales</h3>
    <p className="text-sm">-13% Sales</p>
    <h1 className="text-xl md:text-2xl">${sales}</h1>
  </div>

  {/* Daily User */}
  <div className="text-center bg-white py-6 px-4 lg:px-6 rounded-md shadow-md">
    <h1 className="text-6xl">👥</h1>
    <h3 className="text-2xl md:text-3xl">Daily User</h3>
    <p className="text-sm">+45% daily user</p>
    <h1 className="text-xl md:text-2xl">{user}</h1>
  </div>

  {/* Products */}
  <div className="text-center bg-white py-6 px-4 lg:px-8 rounded-md shadow-md">
    <h1 className="text-6xl">🛍️</h1>
    <h3 className="text-2xl md:text-3xl">Products</h3>
    <p className="text-sm">+20% products</p>
    <h1 className="text-xl md:text-2xl">{product}</h1>
  </div>

  {/* Expenses */}
  <div className="text-center bg-white py-6 px-4 lg:px-7 rounded-md shadow-md">
    <h1 className="text-6xl">📦</h1>
    <h3 className="text-2xl md:text-3xl">Expenses</h3>
    <p className="text-sm">Target Expenses</p>
    <h1 className="text-xl md:text-2xl">${expanses}</h1>
  </div>
</div>


          {/* Line Chart */}
          <h1 className="mt-10 text-2xl font-semibold mb-2">Sales Status</h1>
          <div className=" bg-white p-5 rounded-md">
            <Stack sx={{ width: "100%"  }}>
              <FormControlLabel
                checked={connectNulls}
                control={
                  <Checkbox
                    onChange={(event) => setConnectNulls(event.target.checked)}
                  />
                }
                label="connectNulls"
                labelPlacement="end"
              />
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
                series={[
                  {
                    data: [2, 5, 6.5, 3, 8, 10, 9.5, 2.5, 6, 10, 8],
                  },
                  {
                    data: [null, null, 5.5, 2, null, null, 8.5, 1.5, 5],
                    connectNulls,
                    area: true,
                  },
                ]}
                height={200}
                margin={{ top: 10, bottom: 20 }}
                skipAnimation
              />
            </Stack>
          </div>
        </div>


        <div className="mt-5">
          <h1 className="text-2xl font-semibold">Sales Category </h1>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-5">
            <h4>Vegetables & Fruits</h4>
            <p className="w-20 h-4 bg-[#8884d8]"></p>
          </div>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-2">
            <h4>See Food</h4>
            <p className="w-20 h-4 bg-[#82ca9d]"></p>
          </div>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-2">
            <h4>Dairy</h4>
            <p className="w-20 h-4 bg-[#ffc658]"></p>
          </div>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-2">
            <h4>Bakery</h4>
            <p className="w-20 h-4 bg-[#ff8042]"></p>
          </div>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-2">
            <h4>Beverages</h4>
            <p className="w-20 h-4 bg-[#a4de6c]"></p>
          </div>
          <div className="flex items-center justify-between mr-10 space-x-2 mt-2">
            <h4>Vegan Meat</h4>
            <p className="w-20 h-4 bg-[#d0ed57]"></p>
          </div>

          <div className="bg-white  lg:mt-14 lg:-ml-0 md:-ml-0 -ml-5 lg:-mr-0 md:-mr-0 -mr-5 mt-5">
            <PieChart width={300} height={300} >
              <Pie
                data={data}
                innerRadius={30}
                outerRadius={100}
                paddingAngle={5}
                cornerRadius={5}
                startAngle={-45}
                endAngle={225}
                cx={150}
                cy={150}
                dataKey="value"
              />
            </PieChart>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full  overflow-x-auto mt-10  ">
          <table
            className="w-full text-left border border-separate rounded   border-slate-200 "
            cellspacing="0"
          >
            <thead>
              <tr className="">
                <th
                  scope="col"
                  className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-white bg-green-500"
                >
                  Image
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-white bg-green-500"
                >
                  ConsumerName
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-white bg-green-500"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="h-12 px-6 lg:text-[18px] md:text-[18px] text-[12px] font-semibold  border-l first:border-l-0 text-white bg-green-500"
                >
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {details.map((detailss, index) => (
                <tr key={index} className="odd:bg-white">
                  <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
                    <img
                      src={detailss.images}
                      alt={detailss.title}
                      className=" h-16 w-16  rounded-full py-3 object-cover"
                    />
                  </td>
                  <td className="h-12 px-6 lg:text-[18px] text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
                    {detailss.consumerName}
                  </td>
                  <td className="h-12 px-6 lg:text-[18px] text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
                    {detailss.data}
                  </td>
                  <td className="h-12 px-6 lg:text-[18px] text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200">
                    £{detailss.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
