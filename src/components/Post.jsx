import React from "react";

export class Post extends React.Component{
    constructor() {
        super();
        this.state = {
            post:{}
        };
    }

    componentDidMount(){
        const formData = new FormData();
        formData.append('id',1);
        fetch("http://skipkris7.beget.tech/SPA/php/getPost.php",{
            method: 'POST',
            body: formData
        }).then(response=>response.json())
            .then(result => {
                this.setState({
                    post: {
                        title: result.title,
                        author: result.author,
                        text: result.text,
                        data_added: result.data_added
                    }
                })
            })
    }

    render(){
        return(
            <div>
                <h1>{this.state.post.title}</h1>
                <h6>Автор: {this.state.post.author}</h6>
                <p>{this.state.post.text}</p>
                <p>Дата создания: {this.state.post.data_added}</p>
            </div>
            )
    }
}