import { React, Component } from 'react';
import { Redirect } from 'react-router-dom';
const Database = {
    db_username: "unclebay",
    db_company: "tiidelab.com",
    db_password: "samuel",
    user_profile: {
        fullName: "Ayodele Samuel Adebayo",
        role: "Admin",
        department: "Web Development",
        salary: 2300000,
    }
}

const auth = (props) =>{
    const {email, password} = props
    console.log(email)
    const handleEmailSplit = () =>{
        const getUserName = email.split('@')[0]
        const getCompanyName = email.split('@')[1]
        handleWorkSpaceSubmit(getUserName, getCompanyName)
    };

    const handleWorkSpaceSubmit = (splittedUserName, splittedCompanyName) => {
        const {db_username, db_company, db_password} = Database;
        console.log("authenticating", db_company, db_username, db_password)
        const isCompanyValid = splittedCompanyName === db_company
        const isUserExist = splittedUserName == db_username
        const isPasswordValid = password === db_password
        // control err from here/consider using bootstrap err handler

        if(isCompanyValid && isPasswordValid && isUserExist){
            console.log("logged in");
        }else if(!isCompanyValid){
            console.log("in valid company")
            return {isSumitting: false}
        }
        if(!isUserExist){
            console.log("invalid username for ", db_company)
            return {isSumitting: false}
        }
        if(!isPasswordValid){
            console.log("wrong password")
            return {isSumitting: false}
        }
        
        else{
            // this.setState({isUserAuthenticated: true})
        }

        return {isSubmitting: false}

    }


    handleEmailSplit()
    async function loader(){
        const isSubmitting = await handleEmailSplit()    
        // console.log(isSubmitting)
        return {isSubmitting: false}

    }

    loader()
}






export default auth;