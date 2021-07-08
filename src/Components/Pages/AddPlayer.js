import React, {useState, useEffect} from 'react'
import Sidebar from "../Sections/WebApp/Sidebar";
import {useFormik} from "formik";
import * as GiIcons from "react-icons/gi";
import { absoluteURL } from '../../Utils';
import Button_1 from '../Helper/Button_1';


// This section deals with the Add Player page of the Player dashboard. Optimized for both desktop and mobile view. 

function AddPlayer() {

    const [profilePic, setProfilePic] = useState();
    

    // Validating the form fields. 

    function validate(values){
        const errors = {}
        if(!values.photo){
            errors.photo = "Please upload a pic!";
        }
        if(!values.name){
            errors.name = "Name cannot be empty!";
        }
        if(!values.current_club){
            errors.current_club = "Current club cannot be empty!";
        }
        if(!values.age){
            errors.age = "Age cannot be empty!";
        }
        if(!values.goal){
            errors.goal = "Goals cannot be empty!";
        }
        if(!values.assists){
            errors.assists = "Assists cannot be empty!";
        }
        if(!values.position){
            errors.position = "Position cannot be empty!";
        }
        if(!values.debut_year){
            errors.debut_year = "Debut Year cannot be empty!";
        }
        if(!values.freekick_scored){
            errors.freekick_scored = "Freekicks scored cannot be emptyquired!";
        }
        return errors
    }

    // This function is used to map the local address of an image to a URL. This is used to have the preview of the image uploaded. 
    function onChange(event){
        setProfilePic(URL.createObjectURL(event.target.files[0]));
    }

    const formik = useFormik({
        initialValues:{
            "photo":"",
            "name":"",
            "current_club":"",
            "age":"",
            "debut_year":"",
            "prev_club":"",
            "goal":"",
            "assists":"",
            "position":"",
            "freekick_scored":""
        },
        validate,
        onSubmit : values => {
            formik.values.photo = profilePic
            alert(JSON.stringify(values, null, 2))
        },
    })

    // console.log("Test", formik.values.photo)

    // console.log("gg", profilePic)

    return (
        <div>
            <Sidebar 
            text={
                <div className="addPlayerWrapper">
                    <div className="addHeading">
                        List the new player below
                    </div>
                    <div className="listNewPlayerForm">
                        <form>
                            <div className="form">
                                <div className="playerImageWrapper">
                                    <div className="previewBox">
                                        {/* {console.log("Test", formik.values.photo)} */}
                                        {profilePic ? 
                                        // <div className="showProfilePic">
                                            
                                            <img src={profilePic} alt="Profile Pic" className="profileImg" />
                                        // </div> :
                                        :
                                        // <div className="showAlternate">
                                            <GiIcons.GiSoccerKick size="50px" color="white" style={{marginTop:"75px"}}/>
                                        // </div>
                                        }
                                    </div>
                                    <div className="playerImage">
                                        <div className="photoInp">
                                            <input 
                                            name="photo"
                                            id="photo"
                                            type="file"
                                            onChange={onChange}
                                            value={formik.values.photo}
                                            className="photoInput"
                                            />
                                        </div>
                                        <div className="inputText">
                                            Please click here to upload the photo
                                        </div>
                                        {formik.errors.photo ? <div className="errorField">{formik.errors.photo}</div>: null}
                                        <div className="formSubmitButton1">
                                            <Button_1 text="Submit" onClick={formik.handleSubmit} />
                                        </div>
                                    </div>
                                </div>
                                <div className="playerDetails">
                                    <div className="twoFields">
                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Name
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="name"
                                                id="name"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                placeholder="eg: Cristiano Ronaldo"
                                                />
                                            </div>
                                            {formik.errors.name ? <div className="errorField">{formik.errors.name}</div>: null}
                                        </div>

                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Current Club
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="current_club"
                                                id="current_club"
                                                type="text"
                                                onChange={formik.handleChange}
                                                value={formik.values.current_club}
                                                placeholder="eg: Juventus"
                                                />
                                            </div>
                                            {formik.errors.current_club ? <div className="errorField">{formik.errors.current_club}</div>: null}
                                        </div>                                        
                                    </div>

                                    <div className="twoFields">
                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Age
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="age"
                                                id="age"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.age}
                                                placeholder="eg: 36"
                                                />
                                            </div>
                                            {formik.errors.age ? <div className="errorField">{formik.errors.age}</div>: null}
                                        </div>

                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Debut Year
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="debut_year"
                                                id="debut_year"
                                                type="number"
                                                onChange={formik.handleChange}
                                                value={formik.values.debut_year}
                                                placeholder="eg: 2001"
                                                />
                                            </div>
                                            {formik.errors.debut_year ? <div className="errorField">{formik.errors.debut_year}</div>: null}
                                        </div>
                                    </div>

                                    <div className="twoFields">
                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Previous Club
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="prev_club"
                                                id="prev_club"
                                                value={formik.values.prev_club}
                                                onChange={formik.handleChange}
                                                type="text"
                                                placeholder="eg: Real Madrid"
                                                />
                                            </div>
                                        </div>

                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Total Goals
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="goal"
                                                id="goal"
                                                value={formik.values.goal}
                                                onChange={formik.handleChange}
                                                type="number"
                                                placeholder="eg: 780"
                                                />
                                            </div>
                                            {formik.errors.goal ? <div className="errorField">{formik.errors.goal}</div>: null}
                                        </div>
                                    </div>

                                    <div className="twoFields">
                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Total Assists
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="assists"
                                                id="assists"
                                                value={formik.values.assists}
                                                onChange={formik.handleChange}
                                                type="number"
                                                placeholder="eg:210"
                                                />
                                            </div>
                                            {formik.errors.assists ? <div className="errorField">{formik.errors.assists}</div>: null}
                                        </div>

                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Position
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="position"
                                                id="position"
                                                value={formik.values.position}
                                                onChange={formik.handleChange}
                                                type="text"
                                                placeholder="eg: Forward"
                                                />
                                            </div>
                                            {formik.errors.position ? <div className="errorField">{formik.errors.position}</div>: null}
                                        </div>
                                    </div>

                                    <div className="twoFields">
                                        <div className="labelInputWrapper">
                                            <div className="label">
                                                Total freekicks scored
                                            </div>
                                            <div className="detailsInput">
                                                <input 
                                                className="input"
                                                name="freekick_scored"
                                                id="freekick_scored"
                                                value={formik.values.freekick_scored}
                                                onChange={formik.handleChange}
                                                type="number"
                                                placeholder="eg: 55"
                                                />
                                            </div>
                                            {formik.errors.freekick_scored ? <div className="errorField">{formik.errors.freekick_scored}</div>: null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="formSubmitButton2">
                            <Button_1 text="Submit" onClick={formik.handleSubmit} />
                        </div>
                    </div>
                </div>
            }
            />
        </div>
    )
}

export default AddPlayer
