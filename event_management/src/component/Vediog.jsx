import React from 'react'
import {Link}from 'react-router-dom'

const Vediog = () => {
    return (
        <div>
            <div
                className="w-100 mb-3"
                style={ {
                    height: "50vh",
                    backgroundImage: `url('image/vediokk.png')`,
                    backgroundSize: "cover", // Optional: Ensures the image covers the div
                    backgroundPosition: "center", // Optional: Centers the image
                } }
            >
                <div className='d-flex flex-col justify-center items-center h-full'>
                 <p className='text-4xl font-bold font-serif text-red-600 '> Vedio Gallery</p>
                 <p className='text-xl font-bold font-serif  '>This event are manage and organized by profesional teams.</p>

                    
                </div>
            </div>
            <div class="contact-area contact mb-3">
                <div class="container">

                    <div class="contact-area-inner">
                        <div class="row">
                            <div class="col-lg-6">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/NTogsa1UHrE?si=NXrjqx0VpSLKG9jw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                            </div>
                            <div class="col-lg-6">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/225oG28p8kU?si=c07HD7qRgBbnrIbh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <p className='font-bold font-serif  ' style={{fontSize:"4rem"}}>Evalute Your Events:</p>
            <p className=' font-bold font-serif  ' style={{fontSize:"4rem"}}> Trust our Professional team</p>
            <p>The <span className='text-red-500'>Eventkiya </span> is not only manage your events.It also generate a memorable moment in your life.</p>
            </div>
            <button className='m-3 ' style={{ width:"30vw", height:"3rem",  fontSize:"2rem" ,border:"3px solid black",borderRadius:"12px" }}><Link className='d-flex justify-center items-center' aria-disabled="true" to="/contact">Contact</Link></button>
        </div>
    )
}

export default Vediog
