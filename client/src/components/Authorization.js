import React, {Component} from 'react';
import '../css/Authorization.css';
import {Link} from 'react-router-dom';
import greet from '../utils/greeting'


class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('form is submitted')
        if (this.state.name !== '') {
            alert('You are already authorized');
        }
        fetch(`/api/authorize?login=${this.state.value}`).then(res => res.json())
            .then(res => {
                this.setState({name: res.name, value: this.state.value})
            })
            .then((_) => {
                this.props.onNameChange(this.state.name, this.state.value)
            })
    }

    handleChange(event) {
        this.setState({name: this.state.name, value: event.target.value});
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <div className='App-form_wrapper-full'>
                    <form className='App-form' onSubmit={this.handleSubmit}>
                        <p className='App-form_name'>
                            <div id='greeting'>{greet(this.state.name)}</div>
                        </p>
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='login'
                               placeholder='Ваш логин'
                               data-testid='auth-input'
                               onChange={this.handleChange}
                               id='authorization-login'
                        />
                        <button className='App-form_submit-button' id='authorization-button'>Войти</button>
                        <div className='auth-alt'>
                            <Link
                                to={'/register'}
                                className='App-link-register'
                            >
                                Регистрация
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Authorization;
