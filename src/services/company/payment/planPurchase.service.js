import axios from "axios";
import { currentUserCompanyID, currentUserCompanyName, currentUserEmail } from "../../auth-header";
import { PAYMENT_API } from "../../root-endpoints";

const postBasicPayment = (basicPlanID) =>{
    const paymentDetails = {
        name: currentUserCompanyName,
        email: currentUserEmail,
        phone: '08183826262',
        companyID: currentUserCompanyID,
        planID: basicPlanID 
    }
    return axios.post(PAYMENT_API, paymentDetails)
}

const postPremiumPayment = (premiumPaymentID) =>{
    const paymentDetails = {
        name: currentUserCompanyName,
        email: currentUserEmail,
        phone: '08183826262',
        companyID: currentUserCompanyID,
        planID: premiumPaymentID 
    }
    return axios.post(PAYMENT_API, paymentDetails)
}


const PaymentService = {
    postBasicPayment,
    postPremiumPayment
}

export default PaymentService;