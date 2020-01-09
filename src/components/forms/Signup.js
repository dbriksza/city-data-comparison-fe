import React from 'react'; 

//images
import google from '../../assets/logos/google.svg'; 
import facebook from '../../assets/logos/facebook.svg';

//illustrations
import girl from '../../assets/illustrations/girl_signup.svg'

//styling
import './forms.scss'; 

const Signup = props => {
    return(
        <div className='signup'>
            <div className="form-container">
                <div className="inner-form">
                    <div className="form">
                        <h2>Create Your Account</h2>

                        <div className="auth">
                            <div className="google">
                                <img className="google" src={google} alt="google logo"/>
                                <p>Sign up with Google</p>
                            </div>
                            <div className="facebook">
                                <img className="fb" src={facebook} alt="facebook logo"/>
                                <p>Sign up with Facebook</p>
                            </div>
                        </div>
                        
                        <div className="center-text">
                            <div> </div><p>or with email</p><div></div>
                        </div>
                        <div className="fields">
                            
                        </div>
                    </div>
                    <div className="photo">
                        {/*photo*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup; 