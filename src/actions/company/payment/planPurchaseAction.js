import PlanService from '../../../services/company/payment/planPurchase.service';

const initializeBasicPayment = (basicPlanID) => (dispatch) =>{
    return PlanService.postBasicPayment(basicPlanID)
    // .then((response) => {
    //     console.log(JSON.parse(response.data))
    // })
}
const initializePremiumPayment = (basicPlanID)=> (dispatch) =>{
    return PlanService.postPremiumPayment(basicPlanID)
    .then((response) => {
        console.log(response)
    })
}


export {
    initializeBasicPayment,
    initializePremiumPayment,
}