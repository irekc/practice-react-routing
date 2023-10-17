import React from 'react';

import { Route, useParams, Redirect } from 'react-router-dom';

import products from './../src/products.json'
import Product from '../src/components/Product';

const Task02 = () => {


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

