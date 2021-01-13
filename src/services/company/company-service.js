import axios from "axios"
import { currentUserCompanyID, authHeader } from "../auth-header"
import { UPDATE_COMPANY_PROFILE_API } from "../root-endpoints"



export const updateCompanyProfile = async(newCompanyProfile) =>{
    return await axios.put(UPDATE_COMPANY_PROFILE_API + currentUserCompanyID, newCompanyProfile, { headers: authHeader } )
    .then((response)=>console.log('from company', response))
}


const CompanyService = {
    updateCompanyProfile,
}

export default CompanyService;