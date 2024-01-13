import mainImg from '../../../assets/About/main-img.png'

const About = () => {
    return(
        <section className="about">
            <div className="about__container">
            <h2 className="about__title section-title">About us</h2>
                <div className="about__entrance">
                    <p className="about__description fz-14_300">
                        Welcome to our premium watch collection, where luxury and style meet functionality and precision. Our selection of timepieces  embodies the very best in Swiss craftsmanship and engineering, ensuring that you'll always have a reliable and stylish accessory on your wrist.
                    </p>
                    <p className="about__description fz-14_300">
                        At our premium watch collection, we believe that a watch is more than just a timekeeping device – it's a statement piece that reflects your personality and style. So why settle for anything less than the best? Browse our collection today and discover the perfect watch for you.
                    </p>
                    <img src={mainImg} alt="Main Image" className="about__main-img" />
                </div>
                
            </div>
        </section>
    )
}

export default About