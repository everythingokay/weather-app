import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Today from "../Today";
import "./images/search-symbol.svg";

const Header = () => {

    const [city, setCity] = useState('');
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        setCity(data.city);
        reset();
    }
    let main;
    if (city.length) {
        main = <Today city={city}/>;
    } else {
        main = <div className="title">calm cl&nbsp;&nbsp;uds</div>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="header">
                <input name="city" type="text" ref={register({ required: "Please enter a city."})} 
                placeholder="Search city..." autocomplete="off"/>
                <button className="search-button" type="submit">
                    <img className="search" src="./images/search-symbol.svg" />
                </button>
            </form>
            {main}
        </div>
    )
}

export default Header;