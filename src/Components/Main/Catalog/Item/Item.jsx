
const Item = ({
    id,
    img,
    title,
    price,
    description,
    gender,
    size,
    caseColour,
    bandMaterial,
    caseMaterial,
    features,
    waterResistant,
    bandColour,
}) => {

    return(
        <div className="catalog__item">
            <img src={img} alt="watch" className="catalog__item-img" />
            <p className="catalog__item-description fz-14_400">{title}</p>
            <span className="catalog__item-price">{`€${price}`}</span>
        </div>
    )
}

export default Item