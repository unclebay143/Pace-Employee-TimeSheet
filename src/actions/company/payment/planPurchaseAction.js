import PlanService from '../../../services/company/payment/planPurchase.service';

const initializeBasicPayment = (basicPlanID) => (dispatch) =>{
    return PlanService.postBasicPayment(basicPlanID)
}
const initializePremiumPayment = (basicPlanID)=> (dispatch) =>{
    return PlanService.postPremiumPayment(basicPlanID)
}


export {
    initializeBasicPayment,
    initializePremiumPayment,
}