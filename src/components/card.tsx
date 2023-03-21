import React from 'react';
import { StyledCardLink } from '@/styles/components/card';
import Image from 'next/image';

type CardProps = {
  image_src: string;
  image_alt: string;
  title:string;
  description1:string;
  description2?:string;
  link:string;
  target?:string;
}

export default function Card(props: CardProps) {
  return (
    <StyledCardLink target={props.target} href={props.link}>
        <div className='out-div'>
            <Image width={500} height={500} className='image' src={props.image_src} alt={props.image_alt}/>
            <div className='inner-div'>
                <h1 className='font-bold md:text-xl'>{props.title}</h1>
                <p className='font-light md:text-lg'>{props.description1}</p>
                <p className='font-light text-gray-400'>{props.description2}</p>
            </div>
        </div>
    </StyledCardLink>
  );
}
