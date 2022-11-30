import './Intro.scss'

import { Brilli } from './../common/Brilli/Brilli'

export const Intro = () => {
    return (
        <div className="Intro">
            <video 
                className="Intro-video"
                src="/assets/home-banne.webm"
                loop
                muted
                playsInline
                autoPlay></video>
            <div className="Wrapper">
                <Vote />
            </div>

            <Marquee />
        </div>
    )
}


const Vote = () => {
    return (
        <div className="Intro-vote Vote">
            <h2 className="Vote-h2">
                <img className="Vote-img" src="/assets/logo-with-text.svg" alt="The Game Awards" />
            </h2>
            <div className="Vote-date">
                <span className="Vote-month">December</span>
                <span className="Vote-day">8</span>
            </div>
            <h3 className="Vote-place">Microsoft Theater, Los Angeles</h3>
            <Brilli nombre="Add Event to calendar" />
            <a href="#" className="Vote-now">Vote now</a>
        </div>
    )
}

const Marquee = () => {
    return (
        <div className="Intro-marquee Marquee">
            <ul className="Marquee-ul Marquee-ul--stroke">
                <li className="Marquee-li">Global celebration of video games</li>
                <li className="Marquee-li">Global celebration of video games</li>
                <li className="Marquee-li">Global celebration of video games</li>
            </ul>
            <ul className="Marquee-ul Marquee-ul--white">
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
                <li className="Marquee-li Marquee-li--white">Streams live on all platforms</li>
            </ul>
            
        </div>
    )
}