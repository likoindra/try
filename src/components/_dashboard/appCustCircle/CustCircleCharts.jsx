import React from "react";
import "./custCircleCharts.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

export default function NewCustomer() {
  // const data = [
  //   {
  //     name: "Jan",
  //     uv: 590,
  //     pv: 800,
  //     amt: 1400,
  //   },
  //   {
  //     name: "Feb",
  //     uv: 868,
  //     pv: 967,
  //     amt: 1506,
  //   },
  //   {
  //     name: "Mar",
  //     uv: 1397,
  //     pv: 1098,
  //     amt: 989,
  //   },
  //   {
  //     name: "April",
  //     uv: 1480,
  //     pv: 1200,
  //     amt: 1228,
  //   },
  //   {
  //     name: "Mei",
  //     uv: 1520,
  //     pv: 1108,
  //     amt: 1100,
  //   },
  //   {
  //     name: "Juni",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Juli",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Ags",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Sep",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Okt",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Nov",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  //   {
  //     name: "Des",
  //     uv: 1400,
  //     pv: 680,
  //     amt: 1700,
  //   },
  // ];

  const options2 = [
    {
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: false,
          startAngle: -180,
          endAngle: 180,
          offsetX: 0,
          offsetY: 0,

          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#f2f2f2",
            strokeWidth: "97%",
            opacity: 1,
            margin: 5,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5,
            },
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 16,
              formatter: function (val) {
                return val + "%";
              },
            },
            total: {
              show: true,
              label: "ROI",
              color: "#373d3f",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                    w.globals.series.length +
                  "%"
                );
              },
            },
          },
        },
      },
    },
  ];
  const options = [
    {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%",
          },
        },
      },
      labels: ["Cricket"],
    },
  ];
  const data = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: 100 },
  ];

  const data2 = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: 375 },
  ];

  const color = ["#1B45D9"];

  return (
    <div className="newCustomer">
      <div className="wrapperNewCust">
        <div className="wrapperTextNewCust">
          <span className="rectangleYellowCust"></span>
          <h3 className="chartTitle">New Customer</h3>
        </div>
      </div>
      <div className="wrapperChartCustomer">
        {/* <div className="wrapper__customer-chart"> */}
        <ResponsiveContainer width="35%" height="95%">
          <PieChart
            width={50}
            height={50}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <text
              x={90}
              y={120}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 20,
                fontWeight: 400,
                color: "#0A0A0A",
              }}
            >
              75%
            </text>
            <Pie
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              data={data}
              dataKey="value"
              innerRadius="70%"
              outerRadius="100%"
              fill="#1B45D9"
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              cornerRadius={5}
              clockWise
            >
              <Cell key="test" fill="#A7C4FE" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="textChartCircleOne">
          <div className="wrapperChartNewCust">
            <span className="circleOneTextMain">Today</span> <br />
            <h3 className="numberBig">
              5<span className="numberSmall"> / 10</span>
            </h3>
            <div className="wrapperNewCustRate">
              <ArrowUpwardIcon className="ChartIconBelow" />
              <span className="textCustMain">41,8%</span> <br />
            </div>
            <span className="textCustLast">From Yesterday</span>
          </div>
        </div>
        {/* </div> */}

        {/* <ResponsiveContainer width="25%" height="95%">
          <PieChart width={50} height={50}>
            <text
              x={80}
              y={120}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 24,
                fontWeight: 400,
                color: "#0A0A0A",
              }}
            >
              50%
            </text>
            <Pie
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              data={data}
              dataKey="value"
              innerRadius="80%"
              outerRadius="100%"
              fill="#1571DE"
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              cornerRadius={5}
              // clockWise
            >
              <Cell key="test" fill="#A7C4FE" />
            </Pie>
          </PieChart>
        </ResponsiveContainer> */}
        <ResponsiveContainer width="35%" height="95%">
          <PieChart width={50} height={50}>
            <text
              x={90}
              y={120}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 20,
                fontWeight: 400,
                color: "#0A0A0A",
              }}
            >
              50%
            </text>
            <Pie
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              data={data}
              dataKey="value"
              innerRadius="70%"
              outerRadius="100%"
              fill="#1B45D9"
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              cornerRadius={5}
              clockWise
            >
              <Cell key="test" fill="#A7C4FE" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="textChartCircleOne">
          <div className="wrapperChartNewCust">
            <span className="circleOneTextMain">This Month</span> <br />
            <h3 className="numberBig">
              750<span className="numberSmall"> / 1000</span>
            </h3>
            <div className="wrapperNewCustRate">
              <ArrowUpwardIcon className="ChartIconBelow" />
              <span className="textCustMain">41,8%</span> <br />
            </div>
            <span className="textCustLast">From last Months</span>
          </div>
        </div>
      </div>
    </div>
  );
}
