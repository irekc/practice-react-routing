import React, { useState } from 'react';

import { Route, useParams, useHistory } from 'react-router-dom';

import Shop from '../src/components/Shop';
import products from './../src/products.json'

const SearchPage = () => {
    const {minPrice,maxPrice, searchTerm = ''} = useParams()

    function filterByMinPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price >= price)
    }

    function filterByMaxPrice(price, products) {
        return Number.isNaN(price) ? products : products.filter(p => p.price <=  price)
    }

    function filterBySearchTerm(term, products) {
        return term.length === '' ? products : products.filter(p => p.name.toLowerCase().includes(term.toLowerCase()) || p.description.toLowerCase().includes(term.toLowerCase()))
    }

    const productsAfterMinPrice = filterByMinPrice(Number(minPrice), products)
    const productsAfterMaxPrice = filterByMaxPrice(Number(maxPrice), productsAfterMinPrice)
    const productsAfterSearchTerm = filterBySearchTerm(searchTerm, productsAfterMaxPrice)


    return <Shop list={productsAfterSearchTerm}/>
}

const Task05 = () => {

    const initSearch = {
        text: '',
        priceMin: '',
        priceMax: '',
    }
    
    const [form, setForm] = useState(initSearch)
    const history = useHistory()
    
    function handleChange(e) {
        const value = e.target.value
        const name = e.target.name
    
        setForm((state) => {
            return {
                ...state,
                [name]: value,
            }
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault()

        const {priceMin, priceMax, text} = form

        history.push(`/task05/${priceMin},${priceMax}-${text}`)
    }

    return (
        <>
            <h1>Task05</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Fraza</label>
                    <input name='text' value={form.text} onChange={handleChange} type="text" />
                </div>
                <div>
                    <label htmlFor="">Cena min</label>
                    <input name='priceMin' value={form.priceMin} onChange={handleChange} type="text" />
                </div>
                <div>
                    <label htmlFor="">Cena maks</label>
                    <input name='priceMax' value={form.priceMax} onChange={handleChange} type="text" />
                </div>
                <div><input type="submit" /></div>
            </form>

            <Route path='/task05/:minPrice?,:maxPrice?-:searchTerm?' >
                <SearchPage></SearchPage>
            </Route>
        </>
    );
}

export default Task05;

