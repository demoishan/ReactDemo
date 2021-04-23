import React from 'react';
import { FormErrors } from './FormError';
import '../../../../assets/css/adminlte.css';
import { LoginPost } from "../../../Client/APIServices/HttpCall"

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();

        LoginPost(this.state)
            .then(user => this.props.history.push('/Admin/'))

    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 3;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    errorForm(error) {
        return (error.length === 0 ? '' : 'disabled');
    }


    render() {
        return (
            <>
                <div className="login-page" >
                    <div className="login-box">
                        <div className="login-logo">
                            <a href="/admin/"><b>Admin</b></a>
                        </div>
                        <div className="card">
                            <div className="card-body login-card-body">
                                <p className="login-box-msg">Sign in to start your session</p>

                                <form onSubmit={this.handleSubmit} method="post">
                                    <div className="input-group mb-3">
                                        <input type="email" required className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email" id="email" placeholder="Your Email" value={this.state.email}
                                            onChange={this.handleUserInput} />
                                        <div className="validate"></div>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password" name="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} id="password" placeholder="Your password" value={this.state.password}
                                            onChange={this.handleUserInput} />
                                        <div className="validate"></div>
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <button type="submit" className={`btn btn-primary btn-block `} disabled={!this.state.formValid}>Sign In</button>
                                        </div>
                                    </div>
                                </form>

                                <p className="mb-1">
                                    <a href="forgot-password.html">I forgot my password</a>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}
export default Login;
