import React, {useState} from 'react'
import ReactPlayer from 'react-player/youtube';
import StatsCard from '../Helper/StatsCard';
import Button_1 from '../Helper/Button_1';
import { absoluteURL } from '../../Utils'
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import CustomModal from '../Helper/CustomModal';
import {useFormik} from "formik"

// Homesection of the landing page. Containing call to action buttons such as Register and Login
// Login redirects you to the dashboard.

function HomeSection() {

    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const onOpenRegisterModal = () => setOpenRegister(true);
    const onCloseRegisterModal = () => setOpenRegister(false);

    const onOpenLoginModal = () => setOpenLogin(true);
    const onCloseLoginModal = () => setOpenLogin(false);

    // Formik Library is used to handle Form 
    // Registration Form 

    const formikRegister = useFormik({
        initialValues: {
            "name":"",
            "email":"",
            "password":""
        },
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    // Login Form 

    const formikLogin = useFormik({
        initialValues : {
            "email":"",
            "password":""
        },
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className="homepageWrapper">
            <div className="playerImage">
                <img src={absoluteURL("./ronaldo.png")} className="playerImg" />
            </div>
            <div className="playerName">
                Ronaldo 
            </div>
            <div className="jersey-Name">
                <div className="jerseyNumber">
                    07
                </div>
                <div className="fullName">
                    Cristiano Ronaldo
                </div>
            </div>
            <div className="clubName">
                Juventus
            </div>
            <div className="separator" />
            <div className="playerExperience">
                Experience : 18 yrs
            </div>
            <div className="personalInfoWrapper">
                <div className="personalInfo">
                    <div className="heading"> Height </div>
                    <div className="value"> 187 cm </div>
                </div>
                <div className="personalInfo">
                    <div className="heading"> Weight </div>
                    <div className="value"> 80 kg </div>
                </div>
                <div className="personalInfo">
                    <div className="heading"> Age </div>
                    <div className="value"> 36yo </div>
                </div>
            </div>
            <div className="youTubeLink">
                <ReactPlayer 
                url="https://www.youtube.com/watch?v=OUKGsb8CpF8&ab_channel=Ronnie7M" 
                className="react-player" 
                height="200px"
                width="370px"
                />
            </div>
            <div className="statsWrapper">
                <StatsCard skillName="Assists" skillStats="210" />
                <StatsCard skillName="Goals" skillStats="780" />
                <StatsCard skillName="Points" skillStats="0.73" />
            </div>
            <div className="btnWrapper">
                <Button_1  text="Register" onClick={onOpenRegisterModal} />
                <Button_1  text="Login" onClick={onOpenLoginModal}/>
            </div>

            <CustomModal 
                open={openRegister} 
                onClose={onCloseRegisterModal} 
                center 
                text={
                    <div className="loginregisterModal"> 
                        <div className="left">
                            <img src={absoluteURL("./registerImage.jpg")} alt="" className="footballImg" />
                        </div>
                        <div className="loginregisterForm">
                            <form>
                                <div className="labelInputWrapper">
                                    <label className="label">
                                        Name
                                    </label>
                                    {/* Hello  */}
                                    <input 
                                    id="name"
                                    name="name"
                                    type="text"
                                    onChange={formikRegister.handleChange}
                                    value={formikRegister.values.name}
                                    placeholder="eg: Ishan Jain"
                                    className="input"
                                    />
                                </div>
                                <div className="labelInputWrapper">
                                    <label className="label">
                                        Email
                                    </label>
                                    <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formikRegister.handleChange}
                                    value={formikRegister.values.email}
                                    placeholder="eg: ishan@gmail.com"
                                    className="input"
                                    />
                                </div>
                                <div className="labelInputWrapper">
                                    <label className="label">
                                        Password
                                    </label>
                                    <input 
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formikRegister.handleChange}
                                    value={formikRegister.values.password}
                                    placeholder="Please type your password"
                                    className="input"
                                    />
                                </div>
                            </form>
                            <div className="loginregistrationButton">
                                <Button_1 text="Register" onClick={formikRegister.handleSubmit} />
                            </div>
                        </div>
                    </div>
                }
                />

                <CustomModal 
                open={openLogin} 
                onClose={onCloseLoginModal} 
                center 
                text={
                    <div className="loginregisterModal"> 
                        <div className="left">
                            <img src={absoluteURL("./football.png")} alt="" className="footballLoginImg" />
                        </div>
                        <div className="loginregisterForm">
                            <form>
                                <div className="labelInputWrapper">
                                    <label className="label">
                                        Email
                                    </label>
                                    <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={formikLogin.handleChange}
                                    value={formikLogin.values.email}
                                    placeholder="eg: ishan@gmail.com"
                                    className="input"
                                    />
                                    {/* {formikLogin.loginErrors.email ? <div className="showLoginErrors">{formikLogin.loginErrors.email}</div> : null} */}
                                </div>
                                <div className="labelInputWrapper">
                                    <label className="label">
                                        Password
                                    </label>
                                    <input 
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formikRegister.handleChange}
                                    value={formikRegister.values.password}
                                    placeholder="Please enter your password"
                                    className="input"
                                    />
                                    {/* {formikLogin.loginErrors.password ? <div className="showLoginErrors">{formikLogin.loginErrors.password}</div> : null} */}
                                </div>
                            </form>
                            <div className="loginregistrationButton">
                                <Button_1 text="Login" link="/dashboard" />
                            </div>
                        </div>
                    </div>
                }
            />

        </div>
    )
}

export default HomeSection
