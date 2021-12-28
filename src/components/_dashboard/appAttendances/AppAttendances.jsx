import React from "react";
import "./appAttendances.css";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

export default function Attendences() {
  const data = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: 375 },
  ];

  const data2 = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: 100 },
  ];

  const data3 = [
    { id: "1", name: "L1", value: 100 },
    { id: "2", name: "L2", value: 25 },
  ];
  // const COLORS = ["#1B45D9", "#E3794F", "#34B7D3"];
  return (
    <div className="attendences">
      <div className="wrapperAtt">
        <div className="wrapperTextAtt">
          <span className="rectangleYellow"></span>
          <h3 className="chartTitle">Attendences</h3>
        </div>
      </div>
      <div className="wrapperChartAtt">
        <ResponsiveContainer width="35%" height="95%">
          <PieChart width={50} height={50}>
            <text
              x={58}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 16,
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
        <div className="rectangleOne">
          <label htmlFor="">Average</label>
          <span>
            70 Employee /days <br />
            presence
          </span>
        </div>
      </div>
      <div className="wrapperChartAtt">
        <ResponsiveContainer width="35%" height="95%">
          <PieChart width={50} height={50}>
            <text
              x={58}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 16,
                fontWeight: 400,
                color: "#0A0A0A",
              }}
            >
              50%
            </text>
            <Pie
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              data={data2}
              dataKey="value"
              innerRadius="70%"
              outerRadius="100%"
              fill="#e3794f"
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              cornerRadius={5}
              clockWise
            >
              <Cell key="test" fill="#FCE8D0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="rectangleOne">
          <label> Average</label>
          <span>10 Employee Permit</span>
          {/* <span className="rectangleOrange"> </span>
          <span className="recOrange"> Attend</span> */}
        </div>
      </div>
      <div className="wrapperChartAtt">
        <ResponsiveContainer width="35%" height="95%">
          <PieChart width={50} height={50}>
            <text
              x={58}
              y={53}
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontStyle: "Poppins",
                fontSize: 16,

                fontWeight: 400,
                color: "#0A0A0A",
              }}
            >
              25%
            </text>
            <Pie
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
              data={data3}
              dataKey="value"
              innerRadius="70%"
              outerRadius="100%"
              fill="#34b7d3"
              startAngle={180}
              endAngle={-270}
              paddingAngle={0}
              cornerRadius={5}
              clockWise
            >
              <Cell key="test" fill="#C9FBF8" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="rectangleOne">
          <label htmlFor="">Average</label>
          <span>5 Employee Sick</span>
          {/* <span className="rectangleAqua"> </span>
          <span className="recAqua"> Attend</span> */}
        </div>
      </div>
    </div>
  );
}
