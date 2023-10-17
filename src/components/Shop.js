import React from 'react';
import Product from './Product';

const Shop = ({list}) => {
    return (
        <section>
            { list.map(p => <Product key={p.id} {...p} />)}
        </section>
    );
}

export default Shop;
