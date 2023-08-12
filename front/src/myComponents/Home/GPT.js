import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MyComponent = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const targetElement = targetRef.current;

    const handleClick = () => {
      gsap.to(targetElement, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 1.5,
        rotation: 180,
        ease: 'power2.out'
      });
    };

    targetElement.addEventListener('click', handleClick);

    return () => {
      targetElement.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="container">
      <div ref={targetRef} id="targetElement">
        Click Me!
      </div>
    </div>
  );
};

export default MyComponent;
