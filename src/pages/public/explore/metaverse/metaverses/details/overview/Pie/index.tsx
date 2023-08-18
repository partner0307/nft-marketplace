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
            labelLine={false}
            outerRadius={200}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
    </>
}

export default PieComponent;