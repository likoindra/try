import React, { useState } from "react";
import "./salesOverview.css";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

export default function Charts({ selected, setIsSelected }) {
  const [value, setValue] = React.useState(new Date());
  const data = [
    {
      name: "Jan",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "Feb",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "Mar",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "April",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "Mei",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "Juni",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Juli",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Ags",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Sep",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Okt",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Nov",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
    {
      name: "Des",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  const [active, setActive] = useState();
  const months = [
    "Months",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <div className="charts">
      <div className="wrapperChartTitle">
        <div className="wrapperText">
          <span className="rectangleYellow"></span>
          <h3 className="chartTitle">Sales Overview</h3>
        </div>
        <div className="chartDetails">
          {/* <div className="box__dropdown">
            <div
              className="dropdown__button"
              onClick={(e) => setActive(!active)}
            >
              <span value="All">{selected}</span>
              <KeyboardArrowDownIcon />
            </div>
            {active && (
              <div className="dropdown__content-add-product">
                {months.map((option) => (
                  <div
                    onClick={(e) => {
                      setIsSelected(option);
                      setActive(false);
                    }}
                    className="dropdown__item-add-product"
                  >
                    {option}
                  </div>
                ))}
                <div className="dropdown__item-add-product">Price</div>
              <div className="dropdown__item-add-product">Stock</div>
              </div>
            )}
          </div> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              views={["month"]}
              label="Month"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} className="DatePicker" />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="60%"
        style={{ marginBottom: 20 }}
      >
        <ComposedChart
          data={data}
          margin={{
            top: 0,
            right: 20,
            bottom: 0,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <Tooltip />
          <Bar
            dataKey="uv"
            barSize={20}
            fill="#1571DE"
            radius={[10, 10, 0, 0]}
          />
        </ComposedChart>
      </ResponsiveContainer>
      <div className="textBelowCharts">
        <span className="textBelowMain">December Sales</span>
        <br />
        <span className="textBelowSub">25 Product Sales</span>
        <div className="textWrapperCharts">
          <ArrowDownwardIcon className="ChartIconBelow" />
          <span className="textChartsMain">41,%</span>
          <span className="TextChartLast"> From last Months</span>
        </div>
      </div>
    </div>
  );
}
