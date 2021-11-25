import React, {Fragment} from 'react';

const Jsx = () => {

    const temperatura = 20;

    return ( 
        <Fragment>
            <h2>¿Frio o caliente?</h2>
            <h3>
                {
                    temperatura > 20 ? 'Calor' : 'Frío' 
                }
            </h3>
        </Fragment>
    );
}

export default Jsx;
