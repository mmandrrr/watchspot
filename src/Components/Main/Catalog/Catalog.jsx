import { useState } from 'react';

import Item from './Item/Item';
import {watchDb} from '../../../services/watchDb';
import { useEffect } from 'react';

const Catalog = () => {

    const [catalog, setCatalog] = useState([]);

    const updateCatalog = () => {
        const itemsArr = watchDb.map(({id, img, title, price, description, gender, size, caseColour, bandMaterial, caseMaterial, features, waterResistant, bandColour}) => {
            return <Item 
                        key={id}
                        img={img}
                        title={title}
                        price={price}
                        description={description}
                        gender={gender}
                        size={size}
                        caseColour={caseColour}
                        bandMaterial={bandMaterial}
                        caseMaterial={caseMaterial}
                        features={features}
                        waterResistant={waterResistant}
                        bandColour={bandColour}
                    />
        })

        setCatalog([...catalog, ...itemsArr])
    }

    useEffect(() => {
        updateCatalog()
    },[])

    return(
        <section className="catalog">
            <div className="catalog__container">
                <h2 className="catalog__title section-title">
                    Catalog
                </h2>
                <div className="catalog__item-wrapper">
                  {catalog}
                </div>
                <div className="catalog__buy-btn">buy now</div>
            </div>
        </section>
    )
}

export default Catalog