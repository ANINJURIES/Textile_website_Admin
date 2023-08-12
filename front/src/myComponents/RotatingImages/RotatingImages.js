import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './RotatingImages.css'
gsap.registerPlugin(ScrollTrigger)

const RotatingImages = () => {
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);

    useEffect(() => {

        const lineOne = refOne.current
        const lineTwo = refTwo.current
        const lineThree = refThree.current

        gsap.fromTo(lineOne, {x:-100}, {
            x: 250,
            duration: 1,
            markers: true,
            scrollTrigger: {
              trigger: lineThree, // Use lineThree as the trigger element
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: 5,
            },
          });

        gsap.fromTo(lineTwo, {x:-10}, {
            x: -200,
            duration: 1,
            markers: true,
            color: 'grey',
            scrollTrigger: {
              trigger: lineThree, // Use lineThree as the trigger element
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: 5,
            },
          });

        gsap.fromTo(lineThree, {x:-100}, {
            x: 150,
            duration: 1,
            markers: true,
            scrollTrigger: {
              trigger: lineThree, // Use lineThree as the trigger element
              start: 'top 80%',
              end: 'bottom 10%',
              scrub: 5,
            },
          });
        

        // gsap.to(lineTwo, {
        //     x: 400
        // })

        // gsap.to(lineThree, {
        //     x: 300
        // })
    })
    return (
        <>
            <h1>Rotating Images</h1>
            <div className='text'>
                <h1>Text</h1>
            </div>
            <div className='textgrid'>
                <ul>

                    <li className='firstText' ref={refOne}>Chiffon Velvet Cotton Crêpe Linen Silk Taffeta Brocade Damask Chiffon Velvet Cotton Crêpe Linen Silk Taffeta Brocade </li>
                    <li className='secondText' ref={refTwo}>Flannel Poplin Chenille Chintz Gabardine Silk Cambric Lawn Flannel Poplin Chenille Chintz Gabardine Silk Silk </li>
                    <li className='thirdText' ref={refThree}>Poplin Gingham Broadcloth Taffeta Linen Silk Taffeta Lawn Damask Chiffon Velvet Cotton Crêpe Linen Silk Taffeta Brocade</li>
                </ul>

            </div>
        </>
    )
}

export default RotatingImages