import React, {Component} from 'react';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const params = {login: event.target[0].value, name: event.target[1].value}

        fetch(`/api/register?login=${params.login}&name=${params.name}`, {method: 'POST'}).then(res => res.json())
            .then(res => this.setState(res))
            .then((_) => this.props.onNameChange(params.name, params.login))
    }

    render() {
        return (
            <div className='App-form_wrapper'>
                <div className='App-form_wrapper-full'>
                    <form className='App-form' onSubmit={this.handleSubmit}>
                        <p className='App-form_name'>
                            Регистрация
                        </p>
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='login'
                               id='registration-login'
                               placeholder='Ваш логин'
                        />
                        <input type='text'
                               required='true'
                               className='App-form_input'
                               name='name'
                               id='registration-name'
                               placeholder='Ваше имя'
                        />
                        <button className='App-form_submit-button' id='registration-button'>Войти</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
