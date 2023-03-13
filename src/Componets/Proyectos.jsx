import React, { useEffect, useState } from 'react'
import proyecto from '../Assets/Proyecto Final.png'
import weather from '../Assets/WeatherApp.png'
import './proyecto.css'

const props = {
  autoPlay: Boolean,
  showButtons: Boolean
}

export default function Proyectos() {

  const images = [proyecto, weather];
  const [slideIndex, setSlideIndex] = useState(0)
  const [imageSel, setImageSele] = useState(images[0])

  useEffect(() => {
    if (props.autoPlay || !props.showButtons) {
      const interval = setInterval(() => {
        newImage(slideIndex, images)
      }, 3000);
      return () => clearInterval(interval)
    }
  })

  const newImage = (index, images, next = true) => {
    const condition = next ? slideIndex < images.length - 1 : slideIndex > 0;
    const nextIndex = next ? (condition ? slideIndex + 1 : 0) : condition ? slideIndex - 1 : images.length - 1;
    setImageSele(images[nextIndex]);
    setSlideIndex(nextIndex);
  }

  const previus = () => {
    newImage(slideIndex, images, false)
  }

  const next = () => {
    newImage(slideIndex, images)
  }

  return (
    <div className='proyecContainer'>
      <div>
        <img src={imageSel} alt="default" width='100%' height='400xp' className='imgCarrosel' autoPlay={true} />
        <button className='proyeButton' onClick={previus}>{'<'}</button>
        <button className='proyeButton'onClick={next}>{'>'}</button>
      </div>

      <div>
        <div className='cardDivP'>
          <div className='cardProyect'>
            <h2>Museo Patagonico</h2>
            <img src={proyecto} alt="proyecto" width={'200px'} height={'150px'} />
           <h3> <a href="https://pf-museo-front-end-pf09henry.vercel.app/">Proyecto Final</a></h3>
          </div>
        
          <div className='cardProyect'>
            <h2>WeatherApp</h2>
            <img src={weather} alt="proyecto" width={'200px'} height={'150px'} />
            <h3><a href="https://weather-52j1nztdj-brayanmen.vercel.app/">WeatherApp</a></h3>
          </div>
        </div>
      </div>



    </div>


  )
}
