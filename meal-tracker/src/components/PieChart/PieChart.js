import React from "react";
import PieChart from "react-minimal-pie-chart";
import styles from "./PieChart.module.css";

const PieChartCircle = props => {
  console.log(props);
  const { pieChartWrapper, kcalNo } = styles;
  const chartData = props.chartData;
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
            value: chartData[0]
          },
          {
            color: "#ffc154",
            title: "Two",
            value: chartData[1]
          },
          {
            color: "#47b39c",
            title: "Three",
            value: chartData[2]
          }
        ]}
        label={true}
        labelPosition={75}
        labelStyle={{
          fill: "#fafafa",
          fontFamily: "sans-serif",
          fontSize: "12px"
        }}
        lengthAngle={360}
        lineWidth={50}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={0}
        radius={45}
        rounded
        startAngle={45}
        style={{ height: "150px", width: "150px" }}
        viewBoxSize={[150, 150]}
      />
    </div>
  );
};

export default PieChartCircle;
