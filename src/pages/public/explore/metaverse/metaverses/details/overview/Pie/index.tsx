import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

type PicComponent = {
    data: any[]
}

const COLORS = ['#C40941', '#08A0D8', '#D100BC'];

const PieComponent: React.FC<PicComponent> = ({ data }) => {
    return <>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={200}
            dataKey="value"
            startAngle={260}
            endAngle={360 + 260}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='rgb(18, 17, 18)' strokeWidth={5} />
            ))}
          </Pie>
        </PieChart>
    </>
}

export default PieComponent;