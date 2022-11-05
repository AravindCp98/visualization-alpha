import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function barchart() {
  return (
      <ResponsiveContainer className={"responsiveChart"} >
          <ScatterChart>
              
          </ScatterChart>
      </ResponsiveContainer>
  )
}
