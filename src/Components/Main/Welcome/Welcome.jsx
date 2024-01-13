import mainImg from '../../../assets/header/main-pic.png';

import Slider from './Slider/Slider';

const Welcome = () => {
    return(
        <section className="welcome">
            <div className="welcome__container">
                <div className="welcome__entrance">
                    <h1 className="welcome__title">Welcome to our collection of premium watches</h1>
                    <h2 className="welcome__subtitle fz-14_300">Our watches are not just timepieces, but also an expression of your personality and lifestyle. From classic designs to modern ones, we have a watch to suit every taste and occasion.</h2>
                </div> 
                <div className="welcome__visual-info">
                    <Slider />
                    <img src={mainImg} alt='Main Picture' className="welcome__main-img"/>
                </div>
            </div>
        </section>
    )
}

export default Welcome