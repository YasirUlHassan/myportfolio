import { useState } from "react";
export default function LandingPage() {
    const [hamburger, setHamburger] = useState(false);
  
    const hamburgerMenu = () => {
      setHamburger(!hamburger);
    };
  
    const pageUp = () => {
      window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };
    return (
        <div className="landingPage">
            <nav>
                <h3 onClick={pageUp} className="logo">Yasir.dev</h3>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    {/* <li><a href="#projects">Projects</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                    <li onClick={() => hamburgerMenu()}>
                        <svg xmlns="https://www.w3.org/TR/SVG2/" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mobile-menu">
                            <path d="M4 6l16 0"></path>
                            <path d="M4 12l16 0"></path>
                            <path d="M4 18l16 0"></path>
                        </svg>
                    </li>
                </ul>
            </nav>

            <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
                <span onClick={() => hamburgerMenu()}>
                    <svg xmlns="https://www.w3.org/TR/SVG2/" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="tabler-icon tabler-icon-x">
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                    </svg>
                </span>
                <ul>
                    <li  onClick={() => hamburgerMenu()}><a href="#home">Home</a></li>
                    <li  onClick={() => hamburgerMenu()}><a href="#about">About</a></li>
                    {/* <li  onClick={() => hamburgerMenu()}><a href="#projects">Projects</a></li> */}
                    <li  onClick={() => hamburgerMenu()}><a href="#contact">Contact</a></li>
                </ul>
            </div>
            
            <section id="home">
                <div className="container">
                    <div className="content">
                        <div className="home-main">
                            <div className="home-text">
                                <h1>Java Developer</h1>
                                <img src="waving_hand.png" alt="waving_hand"></img>
                                <p>"Hi, I'm Yasir ul Hassan. A passionate Java Developer based in Pulwama, Kashmir.📍"</p>
                                <span>
                                    <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/yasirulhassan272/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-linkedin">
                                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                            <path d="M8 11l0 5"></path>
                                            <path d="M8 8l0 .01"></path>
                                            <path d="M12 16l0 -5"></path>
                                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                        </svg>
                                    </a>
                                    <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/YasirUlHassan">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github">
                                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <div className="home-img"></div>
                        </div>
                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    <li><img src="https://skillicons.dev/icons?i=java" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=spring" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=hibernate" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=mysql" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=html" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=css" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=js" alt="skill-icon"></img></li>
                                    <li><img src="https://skillicons.dev/icons?i=react" alt="skill-icon"></img></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}