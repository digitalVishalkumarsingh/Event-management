import React from 'react'
// import { useNavigate } from 'react-router-dom'

const Eventcard = (props) => {
    // const navigate=useNavigate()
    // const handleProduct=()=>{
    //     navigate(`/product/${5}`)
    // }
    return (
        <div>
            
            <div className='container cursor-pointer mt-20'>
                
                <div className="card" style={ { width: '18rem',height:"18rem"} }>
                    <img src={props.imagesrc}className="card-img-top " alt="..." style={{height:"100%"}} />
                   
                </div>
            </div>
        </div>
    )
}

export default Eventcard