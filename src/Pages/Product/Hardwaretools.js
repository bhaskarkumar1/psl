import React from 'react'
import hardware_img from '../../assets/Hardwaretools.png'
import './Hardwaretools.css'

const Hardwaretools = () => {
  return (
    <div className="hardwaretools-section">
      <h1 className="hardwaretools-title">Hardware_Tools</h1>
      <img className="hardwaretools-image" src={hardware_img} alt='hardware_img'/>
    </div>
  )
}

export default Hardwaretools
