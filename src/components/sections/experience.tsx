import React, { useEffect, useRef } from 'react';
import { StyledExperienceSection } from '@/styles/components/experience';
import Zoom from 'react-reveal/Zoom';

export default function Experience() {
  
  return (
    <Zoom>
    <StyledExperienceSection id='experience'>
      <h2>My experience</h2>

      <div className="inner">
          <div className='text'>
            <p>
            Throughout my career, I have had the opportunity to work on various projects ranging
             from small-scale applications to enterprise-level systems.

            </p>

            <p>
            My main focus these days is building reliable and scalable products that help
              businesses achieve their goals. My experience with different technologies has
               taught me the importance of continuous learning and the value of staying up-to-date
                with the latest industry trends and best practices.
            </p>

          </div>

        <div className='technologies'>
          <p>Here are a few technologies I’ve been working with: <br /><br /></p>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>PHP</li>
            <li>PostgresSQL</li>
            <li>Docker</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </StyledExperienceSection>
    </Zoom>
  );
}
