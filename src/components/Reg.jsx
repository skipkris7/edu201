import React from "react";

export class Reg extends React.Component{
    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.sendForm = this.sendForm.bind(this);
        this.state = {
            name:"",
            lastname:"",
            email:"",
            pass:"",
            info:""
        }
    }

    sendForm(event){
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",this.state.name);
        formData.append("lastname",this.state.lastname);
        formData.append("email",this.state.email);
        formData.append("pass",this.state.pass);
        fetch('http://skipkris7.beget.tech/SPA/php/reg.php',{
            method:'POST',
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                console.log(result);
            })
    }

    handleInputChange(event){
        const value = event.target.value;
        const name = event.target.name;
        if(name === "email"){
            const formData = new FormData()
            formData.append("email",value)
            fetch("http://skipkris7.beget.tech/SPA/php/checkEmail.php",{
                method: 'POST',
                body: formData
            }).then(response=>response.json())
                .then(result=>{
                    if(result.result === "exist"){
                        this.setState({
                            info: "Пользователь уже зарегистрирован"
                        })
                    }else{
                        this.setState({
                            info: ""
                        })
                    }
                });
        }
        this.setState({
            [name]:value
        })
    }

    render() {
        return <div className="container">
            <div className="col-sm-3 mx-auto my-3">
                <h1 className="text-center my-3">Регистрация</h1>
                <form onSubmit={this.sendForm}>
                    <div className="mb-3">
                        <input value={this.state.name} onChange={this.handleInputChange} name="name" type="text" className="form-control" placeholder="Имя"/>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.lastname} onChange={this.handleInputChange} name="lastname" type="text" className="form-control" placeholder="Фамилия"/>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" placeholder="Email"/>
                        <p style={{color:"red"}}>{this.state.info}</p>
                    </div>
                    <div className="mb-3">
                        <input value={this.state.pass} onChange={this.handleInputChange} name="pass" type="password" className="form-control" placeholder="Пароль"/>
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-primary" value="Зарегистрироваться"/>
                    </div>
                </form>
            </div>
        </div>
    }
}