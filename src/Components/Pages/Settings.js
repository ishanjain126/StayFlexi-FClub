import React, {useState, useEffect} from 'react'
import Sidebar from "../Sections/WebApp/Sidebar";
import {useFormik} from "formik";
import Button1 from "../Helper/Button1";

function Settings() {

    const formik = useFormik({
        initialValues:{
            "name":"Ishan Jain",
            "email":"jain.ishan126@gmail.com",
            "password":"ishanjain",
            "phone":"9982659449"
        },
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    const [oldPassword, setOldPassword] = useState(formik.values.password)
    const [checkPassword, setCheckPassword] = useState(true)

    // const old_password = formik.values.password
    console.log(oldPassword)

    return (
        <div>
            <Sidebar 
            text=
            {
                <div className="settingsDashboard">
                    <div className="settingsHeading">
                        Hi Ishan, Want to update your profile ?
                    </div>
                    <div className="updateProfileForm">
                        <form className="updateForm">
                            <div className="twoFields">
                                <div className="formFields">
                                    <label className="label">
                                        Name
                                    </label>
                                    <input
                                    className="input"
                                    name="name"
                                    id="name"
                                    type="text"
                                    value={formik.values.name}
                                    onChange={formik.handleChange} 
                                    />
                                </div>

                                <div className="formFields">
                                    <label className="label">
                                        Email id
                                    </label>
                                    <input
                                    className="input"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="twoFields">
                                <div className="formFields">
                                    <label className="label">
                                        Type your old Password
                                    </label>
                                    <input
                                    className="input"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Your old password"
                                    onChange = {(e) => {oldPassword === e.target.value ? setCheckPassword(true) : setCheckPassword(false)}}
                                    />
                                </div>

                                
                                <div className="formFields">
                                    <label className="label">
                                        Type your new password
                                    </label>
                                    <input
                                    className="input"
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="Your new password"
                                    // value={formik.values.password}
                                    onChange={formik.handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="twoFields">
                                <div className="formFields">
                                    <label className="label">
                                        Your phone number
                                    </label>
                                    <input
                                    className="input"
                                    name="phone"
                                    id="phone"
                                    type="number"
                                    value={formik.values.phone}
                                    onChange={formik.handleChange} 
                                    />
                                </div>
                            </div>
                        </form>
                        <div className="updateButton">
                            <Button1 type="Submit" text="Update Profile" onClick={checkPassword && formik.handleSubmit} />
                        </div>
                    </div>
                </div>
            }
            />
        </div>
    )
}

export default Settings
