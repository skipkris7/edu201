import React from "react";
import logo from "../SAVE_20200722_203226.jpg";

export function MainPage(){
    return(
        <div className="container text-center my-5">
            <h1>ПОМОГАЕМ ПРОСТО ПОМОГАТЬ</h1>
            <h3>Благотворительный фонд "Буду рядом" создан объединить неравнодушных людей для оказания помощи животным</h3>
            <img src={logo} className="Fond-logo" alt="logo" />
        </div>
    )
}