import React, { Component } from 'react';

export default class CreateUser extends Component{

    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
        }

        console.log(user);

        this.setState({
            username: ''
        })

    }

    render(){
        return(
            <div>
                <p>You are on Create User component</p>
            </div>
        );
    }
}