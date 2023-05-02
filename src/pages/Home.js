import React from 'react'
import '../css/home.css';
import img1 from '../imgs/home-img4.jpg'
import img2 from '../imgs/home-img10.jpg'
import img3 from '../imgs/home-img11.jpg'

const Home = () => {
  return (
    <>
    <main className="main-home">
        <div className="text-content">
        <h1>Lorem ipsum dolor</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Perferendis possimus explicabo minima distinctio aspernatur deleniti voluptatem recusandae omnis. 
            Deleniti dicta esse doloremque vel labore mollitia illum iure natus eaque cumque!</p>
        </div>
        <div className="pics">

          <div className="sec1 sec-img">
            <img src={img1} alt=""/>
          </div>

          <div className="sec2 sec-img">
            <img src={img2} alt=""/>
          </div>

            <div className="sec3 sec-img">
               <img src={img3} alt=""/>
            </div>
            
        </div>
    </main>
    
    </>
  )
}

export default Home