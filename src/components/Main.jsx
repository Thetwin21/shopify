import React, { useEffect, useRef } from 'react'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2 } from 'gsap'

const Main = () => {
  const image = useRef()
  let psedoEl = CSSRulePlugin.getRule(".img_container:after")
  let tl = new TimelineLite()

  useEffect(() => {
   tl.to(psedoEl, 1.7, {width: '0%', ease: Power2.easeInOut})
  }, [])
  
  return (
    <div className='main'>
      <div className="main_inner">

      <div className='img_container'> 
        <img src={require('../Asset/images/dimitar-dimitrov-CWjFfuH8SAk-unsplash.jpg')} alt="photo model" />
      </div>
      <div className='img_container'>
        <img src={require('../Asset/images/andrey-zvyagintsev-3jqAnJFoVgc-unsplash.jpg')} alt="" />
      </div>
      <div className='img_container'>
        <img src={require('../Asset/images/uliana-soboleva-KgKsD__J3YI-unsplash.jpg')} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Main