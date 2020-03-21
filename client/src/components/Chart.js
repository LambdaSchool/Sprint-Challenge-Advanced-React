import React, { PureComponent } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar
} from "recharts";

const Chart = props => {
  const { data, xAxisDataKey, barDataKey } = props;

  class CustomizedAxisTick extends PureComponent {
    render() {
      const { x, y, stroke, payload } = this.props;

      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            textAnchor="end"
            fill="#666"
            transform="rotate(-35)"
          >
            {payload.value}
          </text>
        </g>
      );
    }
  }

  return (
    <BarChart width={730} height={250} data={data} style={{ marginTop: 20}}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisDataKey} tick={<CustomizedAxisTick />} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey={barDataKey} fill="#8884d8" />
    </BarChart>
  );
};

export default Chart;
