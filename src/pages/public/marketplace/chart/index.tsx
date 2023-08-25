import React from 'react';
import { CartesianGrid, Legend, LineChart, Tooltip, XAxis, YAxis, Line } from 'recharts';

type StatusLineType = {
    data?: object[]
    color?: string
}

const StatusLine: React.FC<StatusLineType> = ({ data, color }) => {
    return (
        <LineChart width={150} height={100} data={data}>
            <Tooltip />
            <Line type="monotone" dataKey="value" dot={false} stroke={color} strokeWidth={3} />
        </LineChart>
    )
}

export default StatusLine;