import React from "react";
import PieChart from "react-minimal-pie-chart";
import styles from "./PieChart.module.css";

const PieChartCircle = props => {
  const { pieChartWrapper, kcalNo } = styles;
  return (
    <div className={pieChartWrapper}>
      <div className={kcalNo}>2456 kcal</div>
      <PieChart
        animate={true}
        animationDuration={500}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={[
          {
            color: "#ec6b56",
            title: "One",
            value: 10
          },
          {
            color: "#ffc154",
            title: "Two",
            value: 15
          },
          {
            color: "#47b39c",
            title: "Three",
            value: 22
          }
        ]}
        label={true}
        labelPosition={112}
        lengthAngle={360}
        lineWidth={25}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={40}
        rounded
        startAngle={45}
        labelStyle={{ color: "#000000" }}
        style={{ height: "140px", width: "140px" }}
        viewBoxSize={[150, 150]}
      />
    </div>
  );
};

export default PieChartCircle;
