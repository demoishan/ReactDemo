import React from 'react';
import { FormErrors } from './FormError';
import '../../../App.css'
import { LoginPost } from "../../APIServices/HttpCall"
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

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
      .then(user => this.props.history.push('/page1'))

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
        <main id="main">
          <section className="contact" >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={this.handleSubmit} role="form" className="php-email-form">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input type="email" required className={`form-control ${this.errorClass(this.state.formErrors.email)}`} name="email" id="email" placeholder="Your Email" value={this.state.email}
                          onChange={this.handleUserInput} />
                        <div className="validate"></div>
                      </div>
                      <div className="col-md-6 form-group">
                        <input type="password" name="password" className={`form-control ${this.errorClass(this.state.formErrors.password)}`} id="password" placeholder="Your password" value={this.state.password}
                          onChange={this.handleUserInput} />
                        <div className="validate"></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <FormErrors className="sent-message" formErrors={this.state.formErrors} />
                    </div>
                    <div className="text-center">
                      <button type="submit" className={this.errorForm(!this.state.formValid)} disabled={!this.state.formValid}>Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }

}
export default layoutWrapper(Login);

 // const requestOptions = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
    //   body: qs.stringify({
    //     username: this.state.email,
    //     password: this.state.password,
    //     "grant_type": "password"
    //   })
    // };

    // fetch(apiUrl, requestOptions)
    //   .then(async response => {
    //     const data = await response.json();
    //     console.log(data);
    //     localStorage.setItem('user', JSON.stringify(data))
    //     this.props.history.push('/contact')
    //   })
    //   .catch(error => {
    //     console.error('There was an error!');
    //     alert('Errorrrrr');
    //   });