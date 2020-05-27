import React from 'react';
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from "./Title";

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context
    let types = getUnique(rooms, 'type')

    types = ['all', ...types]
    types = types.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type}
                            className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests </label>
                    <select name="capacity" id="capacity" value={capacity}
                            className="form-control" onChange={handleChange}>
                        {people}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="price">room price ${price}</label>
                    <input type="range" name="price" id="price"
                           min={minPrice} max={maxPrice}
                           value={price} onChange={handleChange} className="form-control"/>
                </div>
                <div className="form-group">

                </div>
                <div className="form-group">

                </div>
            </form>

        </section>
    );

}

