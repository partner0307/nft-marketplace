import { List, ListItem, P } from '@/components/basic';
import React from 'react';
import { Line } from './style';

const Overview = () => {
    return <>
        <P $style={{ size: '20px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </P>
        <Line />
        <List dir='column'>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Built in 1989</P></ListItem>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Electric, heat pump</P></ListItem>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>Central air</P></ListItem>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>2 garage spaces</P></ListItem>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>9,466sqft</P></ListItem>
            <ListItem color='#B4B4B4'><P $style={{ size: '20px' }}>2% buyers agency fee</P></ListItem>
        </List>
    </>
}

export default Overview;