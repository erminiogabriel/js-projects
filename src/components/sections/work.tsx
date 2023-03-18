import React from 'react';
import { StyledWorkSection } from '@/styles/components/work';
import Card from '../card';
import Zoom from 'react-reveal/Zoom';

export default function Work() {
  return (
    <Zoom>
    <StyledWorkSection id='work'>
        <h2>My work</h2>
        <div className="grid">
            <Card image_src='/self-driving-car.png'
            image_alt='Self driving car'
            title='Self driving car'
            description1='a machine learning project to make an self driving car'
            link='/projects/self-driving-car'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            link='/projects/self-driving-car'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            description2='opa'
            link='/projects/self-driving-car'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            link='/projects/self-driving-car'/>

            <Card image_src='/self-driving-car.png'
            image_alt='placeholder'
            title='Self driving vehicle'
            description1='a machine learning project to make an self driving vehicle'
            link='/projects/self-driving-car'/>

        </div>
    </StyledWorkSection>
    </Zoom>
  );
}
