import React, {useRef} from "react"
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward =()=>{
    if(tx >  -50){
      tx -= 25;

    }
    slider.current.style.transform = `translateX(${tx}%)`
  }
  const slideBackward =()=>{
        
    if(tx < 0){
      tx += 25;

    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials'> 
      <img  className="next-btn"src="next-icon.png" onClick= {slideForward} />
      <img  className="back-btn"src="back-icon.png" onClick= {slideBackward}/>
      <div className="slider">
      <ul ref={slider}>
        <li> 
         <div className="slide">
          <div className="user-info">
            <img src="user-1.png"/>
            <div>
              <h3>willam jackson</h3>
              <span>chennai</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio iusto pariatur
             delectus quibusdam facilis alias dolore fuga esse accusantium,
             amet deserunt voluptate, voluptas aperiam tempore eligendi fugit ducimus tenetur.</p>
         </div>
         </li>
         <li> 
         <div className="slide">
          <div className="user-info">
            <img src="user-2.png"/>
            <div>
              <h3>willam</h3>
              <span>USA</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio iusto pariatur
             delectus quibusdam facilis alias dolore fuga esse accusantium,
             amet deserunt voluptate, voluptas aperiam tempore eligendi fugit ducimus tenetur.</p>
         </div>
         </li>
         <li> 
         <div className="slide">
          <div className="user-info">
            <img src="user-3.png"/>
            <div>
              <h3>willam jackson</h3>
              <span>USA</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio iusto pariatur
             delectus quibusdam facilis alias dolore fuga esse accusantium,
             amet deserunt voluptate, voluptas aperiam tempore eligendi fugit ducimus tenetur.</p>
         </div>
         </li>
         <li> 
          <div className="slide">
          <div className="user-info">
            <img src="user-4.png"/>
            <div>
              <h3>jackson</h3>
              <span>USA</span>
            </div>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia distinctio iusto pariatur
             delectus quibusdam facilis alias dolore fuga esse accusantium,
             amet deserunt voluptate, voluptas aperiam tempore eligendi fugit ducimus tenetur.</p>
         </div>
         </li>
         </ul>
         </div>
         </div>
  )
}
export default Testimonials