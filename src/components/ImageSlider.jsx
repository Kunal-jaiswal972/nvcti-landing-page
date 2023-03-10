import React, { useState, useEffect, useRef } from 'react'

const sliderData = [{
     id: 0,
     heading: "FOSTERING INNOVATION COLLABORATION",
     desc: "To build a vibrant innovation ecosystem by establishing a network between innovators, academia and incubators.",
     src: process.env.PUBLIC_URL + "/assests/slide1.webp"
}, {
     id: 1,
     heading: "YOUTH INNOVATION INCUBATOR",
     desc: "To attract a large number of youth who demonstrate problem solving zeal and abilities to work on new technology/innovation based start- ups.",
     src: process.env.PUBLIC_URL + "/assests/slide2.webp"
}, {
     id: 2,
     heading: "NURTURING YOUNG INNOVATORS",
     desc: "To encourage, inspire and nurture young brains by supporting them to work with new ideas and converting them into concept and prototype.",
     src: process.env.PUBLIC_URL + "/assests/slide3.webp"
}, {
     id: 3,
     heading: "CREATIVITY FOR SOLUTIONS",
     desc: "To generate innovative solutions relevant to the local and global problems through experimentation, innovation and creativityTo generate innovative solutions relevant to the local and global problems through experimentation, innovation and creativity.",
     src: process.env.PUBLIC_URL + "/assests/slide4.webp"
}]

let interval;
const ImageSlider = () => {
     const [menu, setMenu] = useState(sliderData)
     const slidesContainerRef = useRef(null);
     const NextSlide = () => {
          console.log("Next called")
          let temp = [...menu];
          let currentSlide = temp.shift();
          setMenu([...temp, currentSlide]);
     }
     const changeSlide = (index) => {
          console.log(index)
          let temp = [...menu];
          console.log(temp);
          let removed = temp.slice(0, index);
          console.log(removed);
          setMenu([...temp.slice(index), ...removed]);
     }


     useEffect(() => {

          interval = setInterval(() => {
               NextSlide();
               clearInterval(interval);
          }, 5000);
          return () => {
               clearInterval(interval);
          };
     }, [menu])



     return (
          <div className="slider" >
               <div ref={slidesContainerRef} className='slides-container'>
                    {menu.map(({ heading, desc, src, id }, index) => (
                         <div className="slides" id={`slide-${id}`} key={id} style={index === 0 ? { display: "block" } : { display: "none" }}>
                              <div className='slide-img'>
                                   <img
                                        src={src}
                                        alt="nvcti"
                                   />
                              </div>
                              <div className='img-slide-text'>
                                   <h1 className='slide-heading'>{heading}</h1>
                                   <p className='slide-desc'>{desc}</p>
                              </div>
                         </div>
                    ))
                    }</div>
               <div className="slider-menu">
                    {menu.map(({ src, id }, index) => (
                         <div className='menu-item' key={index} onClick={() => changeSlide(index)} >
                              <img src={src} alt="" />
                         </div>
                    ))}
               </div>
          </div >
     )
}

export default ImageSlider