import React from 'react';
import { StyledWorkSection } from '@/styles/work';
import Card from '../card';
import Zoom from 'react-reveal/Zoom';

export default function Work() {
  return (
    <Zoom>
    <StyledWorkSection id='work'>
        <h2>My work</h2>
        <div className="grid">
            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            description2='opa'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            description2='opa'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'/>

        </div>
    </StyledWorkSection>
    </Zoom>
  );
}
