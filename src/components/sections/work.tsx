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
            description1='A JavaScript car game that utilizes machine learning to make the car drive itself.'
            link='/projects/self-driving-car'/>

            <Card image_src='/githubexplorer.png'
            image_alt='GitHub Explorer'
            title='GitHub Explorer'
            description1='A web app that lets you explore Github profiles and repositories'
            link='https://github.com/erminiogabriel/github-explorer'
            target='_blank'/>

            <Card image_src='/gobarberapi.png'
            image_alt='GoBarber API'
            title='GoBarber API'
            description1='GoBarber API is a Node.js-based API designed for booking appointments with barbers.'
            link='https://github.com/erminiogabriel/gobarber_backend'
            target='_blank'
            />

            <Card image_src='/gobarbermobile.png'
            image_alt='GoBarber Mobile'
            title='GoBarber Mobile'
            description1='GoBarber Mobile is a mobile interface built with React Native for a barber booking application.'
            link='https://github.com/erminiogabriel/gobarber_mobile'
            target='_blank'
            />

            <Card image_src='/gobarberweb.png'
            image_alt='GoBarber Web'
            title='GoBarber Web'
            description1='GoBarber Web is a website built with react for a barber booking application'
            link='https://github.com/erminiogabriel/gobarber_web'
            target='_blank'
            />

            <Card image_src='/poker.png'
            image_alt='Poker'
            title='Poker'
            description1='An engaging poker game built with Python and Django web framework'
            link='https://github.com/erminiogabriel/django-poker'
            target='_blank'
            />

        </div>
    </StyledWorkSection>
    </Zoom>
  );
}
