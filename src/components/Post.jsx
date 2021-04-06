import React from "react";

export class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            data_added: "",
            author: ""
        }
    }

    componentDidMount(){
        const formData = new FormData();
        formData.append('id',this.props.match.params.id);
        fetch("http://skipkris7.beget.tech/SPA/php/getPost.php",{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
            .then(result=>{
                this.setState({
                        title: result.title,
                        author: result.author,
                        text: result.text,
                        data_added: result.data_added
                })
            })
    }

    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <h6>Автор: {this.state.author}</h6>
                <p>{this.state.text}</p>
                <p>Дата создания: {this.state.data_added}</p>
            </div>
            )
    }
}