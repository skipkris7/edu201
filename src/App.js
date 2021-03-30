import logo from './SAVE_20200722_203226.jpg';
import './App.css';
import React from "react";
import {Route, BrowserRouter, NavLink} from "react-router-dom";

function Menu(){
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            <NavLink className="nav-link" to="/about">О нас</NavLink>
            <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
        </nav>
    )
}

function MainPage(){
    return(
        <div className="container text-center my-5">
            <h1>ПОМОГАЕМ ПРОСТО ПОМОГАТЬ</h1>
            <h3>Благотворительный фонд "Буду рядом" создан объединить неравнодушных людей для оказания помощи животным</h3>
            <img src={logo} className="Fond-logo w-30" alt="logo" />
        </div>
    )
}

function AboutUs(){
    return(
        <div className="container ml-5">
            <h1><b>О нас</b></h1>
            <h3>Помогаем бездомным животным, в том числе брошенным.</h3>
            <h3>Создаем условия для социализации и поиска дома для животных.</h3>
            <h3>Поддерживаем волонтерское движение и улучшаем условия проживания животных в приютах.</h3>
            <p>В настоящее время под личной опекой фонда находится: 20 собак и 8 кошек. Вместе с тем, в сумме, мы поддерживаем и помогаем более 1500 животных из муниципальных и частных приютов.</p>

        </div>
    )
}
function ContactUs(){
    return(
        <div className="container my-5">
            <form action="">
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><input type="text" className="form-control"/></div>
                <div className="mb-3"><textarea type="text" className="form-control"/></div>
                <div className="mb-3"><input type="submit" className="form-control btn btn-primary"/></div>
            </form>
        </div>
    )
}

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" render={()=><MainPage/>}/>
            <Route path="/about" render={()=><AboutUs/>}/>
            <Route path="/contact-us" render={()=><ContactUs/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
