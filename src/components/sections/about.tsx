import React, { useState, useEffect } from 'react';
import StyledAboutSection from '@/styles/components/about';
import StyledAboutImage from '@/styles/components/aboutImage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Image from 'next/image';
import code from '../../../public/code.png';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h3>Hello, my name is</h3>;
  const two = <h1 className='big-heading'>Gabriel Erminio Machado.</h1>;
  const three = <h2 >Software Enginner.</h2>;
  const four = (
    <>
      <p>
      I am a backend developer with experience in building and deploying complete applications.
      I have a passion for learning and I am currently studying new technologies,
      including TypeScript and some machine learning.
      My focus is on building reliable, scalable,
      and secure software solutions that help businesses and organizations achieve their goals.
      </p>
    </>
  );

  const items = [one, two, three, four];

  return (
    <div id='about' style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}>

      <TransitionGroup component={null}>
        {isMounted
            && <CSSTransition key={0} classNames="fadeup" timeout={2000}>
              <StyledAboutImage>
                <Image style={{ width: '80%', height: '80%' }} src={code} alt='Placeholder'/>
              </StyledAboutImage>
            </CSSTransition>
        }
      </TransitionGroup>
    <StyledAboutSection>
      <TransitionGroup component={null}>
        {isMounted
          && items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${2 * i + 2}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledAboutSection>
    </div>
  );
}
