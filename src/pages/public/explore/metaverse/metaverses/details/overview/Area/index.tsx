import React from 'react';
import { AreaChart, Area, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

type AreaType = {
    data: object[]
}

const AreaChartComponent: React.FC<AreaType> = ({ data }) => {
    return <>
        <ResponsiveContainer>
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D100BC" stopOpacity={0.9} />
                        <stop offset="50%" stopColor="rgba(209, 0, 188, 0.40)" stopOpacity={0.56} />
                        <stop offset="95%" stopColor="rgba(224, 84, 210, 0.19)" stopOpacity={1} />
                    </linearGradient>
                    <linearGradient id="colorUaw" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#08A0D8" stopOpacity={0.9} />
                        <stop offset="50%" stopColor="rgba(90, 191, 229, 0.43)" stopOpacity={0.56} />
                        <stop offset="95%" stopColor="rgba(90, 191, 229, 0.14)" stopOpacity={1} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis tickCount={10} />
                <CartesianGrid strokeDasharray="0 0" stroke='#3D3D3E' />
                <Tooltip />
                <Area type="monotone" dataKey="volume" stroke="#D100BC" strokeWidth={2} fillOpacity={1} fill="url(#colorVolume)" />
                <Area type="monotone" dataKey="uaw" stroke="#08A0D8" strokeWidth={2} fillOpacity={1} fill="url(#colorUaw)" />
            </AreaChart>
        </ResponsiveContainer>
    </>
}

export default AreaChartComponent;