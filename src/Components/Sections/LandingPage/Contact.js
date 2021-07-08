import React from 'react'
import {useFormik} from "formik";
import Button_1 from "../../Helper/Button_1";

function Contact() {

    function validateQueries(values){
        const errors= {}
        if(!values.name){
            errors.name = "We need your name!";
        }
        if(!values.email){
            errors.email = "Please enter your email id!";
        }
        if(!values.phone_number){
            errors.phone_number = "We need your phone number!";
        }
        if(!values.query){
            errors.query = "Whats your query?";
        }
        return errors
    }

    const formik = useFormik({
        initialValues : {
            "name":"",
            "email":"",
            "phone_number":"",
            "query":""
        },
        validateQueries,
        onSubmit : values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className="contactWrapper" id="contact">
            <div className="contactHeading">
                We are here for you!
            </div>
            <div className="contactsubHeading">
                Send us your query...
            </div>
            <div className="queryForm">
                <form>
                    <div className="queryLabelInputWrapper">
                        <label className="label">
                            Name
                        </label>
                        <input
                        className="input"
                        id="name"
                        type="name"
                        value={formik.values.name}
                        placeholder="eg: Ishan Jain"
                        onChange={formik.handleChange}
                        />
                        {formik.errors.name ? <div className="queryErrorField">{formik.errors.name}</div>: null}
                    </div>

                    <div className="queryLabelInputWrapper">
                        <label className="label">
                            Email
                        </label>
                        <input
                        className="input"
                        id="email"
                        type="email"
                        value={formik.values.email}
                        placeholder="eg: jain.ishan126@gmail.com"
                        onChange={formik.handleChange}
                        />
                        {formik.errors.email ? <div className="queryErrorField">{formik.errors.email}</div>: null}
                    </div>

                    <div className="queryLabelInputWrapper">
                        <label className="label">
                            Phone Number
                        </label>
                        <input
                        className="input"
                        id="name"
                        type="name"
                        value={formik.values.name}
                        placeholder="eg: +91 9982659449"
                        onChange={formik.handleChange}
                        />
                        {formik.errors.phone_number ? <div className="queryErrorField">{formik.errors.phone_number}</div>: null}
                    </div>

                    <div className="queryLabelInputWrapper">
                        <label className="label">
                            Query
                        </label>
                        <textarea
                        className="input"
                        id="name"
                        type="name"
                        value={formik.values.name}
                        placeholder="Your query"
                        onChange={formik.handleChange}
                        />
                        {formik.errors.query ? <div className="queryErrorField">{formik.errors.query}</div>: null}
                    </div>
                </form>
                <div className="submitQueryButton">
                    <Button_1 text="Send Query" onClick={formik.handleSubmit} />
                </div>
            </div>
        </div>
    )
}

export default Contact
