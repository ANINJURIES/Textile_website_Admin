import React, { useEffect, useRef } from 'react'
import './Lander.css'
import bgvideo from '../Resources/bgVideo.mp4'
import { gsap } from 'gsap';
import RotatingImages from '../RotatingImages/RotatingImages';
import Cards from '../Cards/Cards';
import { useNavigate } from 'react-router-dom';



const Home = () => {

    const navigate = useNavigate();

    const handlerFabrics = () =>{
        return(
            navigate('/fabric')
        )

    }

    const handlerAdmin = () =>{
        return(
            navigate('/admin')
        )

    }

    const handleAuth = () =>{
        return(
            navigate('/auth')
        )
    }
    // taking ref for DOM Manipulation 
    const welcome = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);
    const para = useRef(null);
    const learnmore = useRef(null);

    // using useEffect and Anmation wont work corrently if you do not remove (default) Strictmode wrapping in your index.js causing it 2 times render to useeffect
    useEffect(() => {
        const timeline = new gsap.timeline();


        timeline.from(welcome.current,
            { duration: 1, opacity: 0, scale:0.90, delay:0.2});

        timeline.to(welcome.current,
            { duration: 0.75, opacity: 0, color: 'rgba(255,0,0,0.5)' });

        timeline.from(line1.current,
            { duration: 1, opacity: 0,color: "red" });

        timeline.from(line2.current,
            { duration: 1, opacity: 0 });

        timeline.from(line3.current,
            { duration: 1, opacity: 0 });

        timeline.from(para.current,
            { duration: 1, opacity: 0 });

        timeline.from(learnmore.current,
            { duration: 1, opacity: 0 });




    }, []);



    return (
        <>

            <div className='Navbar'>

                <h1 className='title'>Textile X</h1>
                <ul className='navComp'>
                    <li onClick={handlerFabrics}>Fabrics</li>
                    <li onClick={handleAuth}>Authorization</li>
                    <li onClick={handlerAdmin}>Admin</li>
                </ul>
            </div>

            {/* filer */}
            <div className='overlay'></div>
            {/* BG Video */}
            <video src={bgvideo} autoPlay loop muted />

            {/* Lander Content */}

            <div className='LanderContainer'>

                <h1 ref={welcome} id='welcome'>Welcome!</h1>
                <h1 ref={line1} id='Firstline' >"Elevate your style with our premium textiles, where quality and creativity intertwine."</h1>
                <h4 ref={line2} id='Secondline'>"Fabricating Dreams: Crafting Excellence in Every Yard"</h4>
                <h1 ref={line3} id='Thirdline'>"Textile X"</h1>

                <p ref={para} id='Para'> "Discover a world of textile wonders at our website, where artistry and innovation are woven into every fabric. From luxurious silks to durable denims, our curated collection offers a kaleidoscope of textures, patterns, and colors to inspire your creativity. Whether you're a fashion enthusiast, a DIY decorator, or a business in need of quality materials, our platform is your gateway to exceptional textiles that tell stories, enhance spaces, and transform ideas into reality."</p>

                <h4 ref={learnmore} id='learnMore'>Scroll for more!</h4>
            </div>
            <br/>
            <RotatingImages/>
            <Cards/>    

        </>
    )
}

export default Home