import React, {Component} from 'react';
import Profile from './MappingForm';
import { Formik, Field, Form } from 'formik';


class DisplayProfile extends Component{

    render(){

        
        return(
            <>
                <Profile name="Adeyemo Peter" rank="Senior Developer" stack="Backend"/>
                <Profile name="Toluwanimi Ayoola" rank="Senior Developer" stack="Backend"/>
                <input type="text" placeholder="Surname" value=""/>
            </>
        )
    }
}


export default DisplayProfile;