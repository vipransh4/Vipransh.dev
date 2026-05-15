import './Resume.css'
import Dog from './components/Dog'
import { Canvas } from '@react-three/fiber'

const Resume=({setRoute})=> {
  return (
    <>
      <main>
        <div className="images">
          <img id='tomorrowland' src="/tommorowland.png" alt="" />
          <img id='navy-pier' src="/navy-pier.png" alt="" />
          <img id='msi-chicago' src="/msi-chicago.png" alt="" />
          <img id='phone' src="/phone.png" alt="" />
          <img id='kikk' src="/kikk.png" alt="" />
          <img id='kennedy' src="/kennedy.png" alt="" />
          <img id='opera' src="/opera.png" alt="" />
        </div>
        <Canvas
          id='canvas-elem'
          style={{
            height: "100vh",
            width: "100vw",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1,
          }} >
          <Dog />
        </Canvas>
        <section id='section-1' >
          <nav>

            <p className='box grow ttu' onClick={()=>setRoute('home')}>home</p>
            <div className="nav-elem">
              <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 401.23099 116.838"></svg>
            </div>
            <div className="nav-elem">
              <i className="ri-arrow-right-s-line"></i>
            </div>
            <div className="nav-elem">
              <i className="ri-menu-3-line"></i>
            </div>
          </nav>
          <div className="middle">
            <div className="left">
              <h1>FOCUSED <br /> ON <br /> IMPACTFUL <br /> SOLUTION </h1>
            </div>
            <div className="right"></div>
          </div>
          <div className="bottom">
            <div className="left"></div>
            <div className="right">
              <p>
                Myself Vipransh <br />
                focused on solving problems <br />
                following are my skills and hobby.
              </p>
            </div>
          </div>

          <div className="first-line"></div>
          <div className="second-line"></div>

        </section>
        <section id='section-2' >
          <div className="titles">
            <div img-title="tomorrowland" className="title">
              <big>HTML</big>
              <h1>Basic-html-page</h1>
            </div>
            <div img-title="navy-pier" className="title">
              <big>CSS</big>
              <h1>Basic-landing-page</h1>
            </div>
            <div img-title="msi-chicago" className="title">
              <big>Javascript</big>
              <h1>Background generator</h1>
            </div>
            <div img-title="phone" className="title">
              <big>React</big>
              <h1>Robofriend</h1>
            </div>
            <div img-title="kikk" className="title">
              <big>Next.js+Express.js</big>
              <h1>Face-detector</h1>
            </div>
            <div img-title="kennedy" className="title">
              <big>PostgreSQL</big>
              <h1>Riddlix</h1>
            </div>
            <div img-title="opera" className="title">
              <big>GSAP+NEXT.js</big>
              <h1>Vipransh.dev</h1>
            </div>
          </div>


        </section>
        <section id='section-3' ></section>
      </main>
    </>
  )
}

export default Resume;
