import React from 'react';

import { Route, useParams, Redirect } from 'react-router-dom';

import products from './../src/products.json'

const Task02 = () => {
    const Product = ({name, price, category, description}) => {
        return (
            <article>
                <h1>{name}</h1>
                <h2>{price}</h2>
                <h3>{category}</h3>
                <p>{description}</p>
            </article>
        )
    }

    const PageProduct = () => {
        const {id} = useParams()
        const [product = null] = products.filter(p => p.id === Number(id))

        if(product === null) {
            return <Redirect to='/404'/>
        }
        return <Product {...product}/>
    }
    return (
        <>
            <h1>Task02</h1>
            <Route path='/task02/product-:id'>
                <PageProduct/>
            </Route>
        </>
    );
}

export default Task02;

