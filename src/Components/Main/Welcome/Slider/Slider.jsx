import { useState } from 'react';

// slider imgs
import watch1 from '../../../../assets/header/carousel/watch1.png';
import watch2 from '../../../../assets/header/carousel/watch2.png';
import watch3 from '../../../../assets/header/carousel/watch3.png';
import watch4 from '../../../../assets/header/carousel/watch4.png';
import watch5 from '../../../../assets/header/carousel/watch5.png';

import spacebar from '../../../../assets/header/spacebar.svg';

const Slider = () => {

    const [sliderCount, setSliderCount] = useState(1);
    const [translatePercent, setTranslatePercent] = useState(0);

    const translateRight = () => {
        if(sliderCount < 5 ) {
            setTranslatePercent(translatePercent + 100);
            setSliderCount(sliderCount + 1);
        } else {
            setTranslatePercent(0);
            setSliderCount(1);
        }  
    } 

    const translateLeft = () => {
        if(sliderCount > 1 ) {
            setTranslatePercent(translatePercent - 100);
            setSliderCount(sliderCount - 1);
        } else {
            setTranslatePercent(400);
            setSliderCount(5);
        }  
    }

    return(
        <div className="welcome__slider">
            <div className="welcome__slider-container">
                <div style={{transform:`translateX(-${translatePercent}%)`}} className="welcome__img-wrapper">
                    <img src={watch1} alt="watch1" className="welcome__slider-img" />
                    <img src={watch2} alt="watch2" className="welcome__slider-img" />
                    <img src={watch3} alt="watch3" className="welcome__slider-img" />
                    <img src={watch4} alt="watch4" className="welcome__slider-img" />
                    <img src={watch5} alt="watch5" className="welcome__slider-img" />
                </div>
            </div>
            <div className="welcome__slider-switches">
                <div onClick={translateLeft} className="welcome__switch welcome__switch_left">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 13L1 7L7 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div onClick={translateRight} className="welcome__switch welcome__switch_right">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L7 7L1 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="welcome__slider-count fz-14_400">
                0{sliderCount}
                <img src={spacebar} alt="spacebar" />
                05
            </div>
        </div>
    )
}

export default Slider