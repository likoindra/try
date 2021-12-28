import React from "react";
import "./LoanOverviewSA.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import {
  ComposedChart,
  Line,
  LineChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function LoanOverviewSA() {
  const [value, setValue] = React.useState(new Date());
  const data = [
    {
      name: "PT Arla",
      apllied: 590,
      finish: 800,
      active: 1400,
    },
    {
      name: "PT Loreal",
      apllied: 868,
      finish: 967,
      active: 1506,
    },
    {
      name: "PT Craft",
      apllied: 1397,
      finish: 1098,
      active: 989,
    },
    {
      name: "PT Sabang",
      apllied: 1480,
      finish: 1200,
      active: 1228,
    },
    {
      name: "PT Samsung ",
      apllied: 1520,
      finish: 1108,
      active: 1100,
    },
    {
      name: "PT Telkom",
      apllied: 1400,
      finish: 680,
      active: 1700,
    },
    {
      name: "PT Xiaomi",
      apllied: 1400,
      finish: 680,
      active: 1700,
    },
    {
      name: "PT Honda",
      apllied: 1400,
      finish: 680,
      active: 1700,
    },
    {
      name: "PT Sony",
      apllied: 1400,
      finish: 680,
      active: 1700,
    },
    {
      name: "PT Asus",
      apllied: 1400,
      finish: 680,
      active: 1700,
    },
  ];
  return (
    <div className="loan-overview-container">
      <div className="wrapper__loan-overview">
        <div className="wrapper__title-date-loan-overview">
          <div className="title__loan-overview">
            <span className="yellow__box-loan-overview"></span>
            <h3>Loan Overview</h3>
          </div>
          <div className="month__picker-loan-overview">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                views={["month"]}
                label="Month"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </div>
        </div>
        <ResponsiveContainer
          width="100%"
          height="80%"
          style={{ marginBottom: 20 }}
        >
          <ComposedChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 0,
              left: 0,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <Tooltip />
            <Bar
              dataKey="apllied"
              barSize={20}
              fill="#498E0F"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="finish"
              barSize={20}
              fill="#1571DE"
              radius={[10, 10, 0, 0]}
            />{" "}
            <Bar
              dataKey="active"
              barSize={20}
              fill="#D1421A"
              radius={[10, 10, 0, 0]}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default LoanOverviewSA;
