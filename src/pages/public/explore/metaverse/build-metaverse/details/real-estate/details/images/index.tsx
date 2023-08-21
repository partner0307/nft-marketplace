import React from 'react';
import ReactSlick from 'react-slick';

import Image1 from '@/assets/img/home.png';
import Image2 from '@/assets/img/home.png';
import Image3 from '@/assets/img/home.png';
import Image4 from '@/assets/img/home.png';
import Image5 from '@/assets/img/home.png';
import { SliderImage } from './style';

const options = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
}

const Images = () => {
    return <>
        <ReactSlick {...options}>
        </ReactSlick>
    </>;
}

export default Images;