import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Today from "../Today";
import "./images/search-symbol.svg";

const Header = (props) => {

    const [current, setCurrent] = useState(false);
    const [city, setCity] = useState('Philadelphia');
    let [cityInput, setCityInput] = useState('');

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);

    let main;
    if (current) {
        main = <Today city={city}/>;
    } else {
        main = <div className="title">calm cl&nbsp;&nbsp;uds</div>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="header">
                <input type="text" ref={register({ required: "Please enter a city."})} placeholder="Search city..."
                onChange={(e) => {cityInput = e.target.value}}/>

                <button className="search-button" onClick={(e) => {
                    e.preventDefault();
                    setCity(cityInput);
                    setCurrent(!current);
                    reset();
                }}><img className="search" src="./images/search-symbol.svg" /></button>
            </form>

            {main}

        </div>
    )
}

export default Header;