import watchOnHand from '../../../assets/new/newWatchOnHand.png';
import newWatch from '../../../assets/new/newWatch.png'

const New = () => {
    return(
        <section className="new">
            <div className="new__container">
                <span className="new__upper-title">New watches</span>
                <h2 className="new__title section-title">
                    Green And Bronze—The Match Made In Heaven
                </h2>
                <div className="new__imgs">
                    <img src={watchOnHand} alt="Watch" />
                    <img src={newWatch} alt="Watch" />
                </div>
            </div>
        </section>
    )
}

export default New