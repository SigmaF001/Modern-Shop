const log_out = document.getElementById('logout')
document.addEventListener('DOMContentLoaded', getLoginValue())

import {login} from './validation.js'

function getLoginValue() {
    // if (login == true){
    //     log_out.innerHTML = 'Log out'
    // }
    // if (login == false){
    //     log_out.innerHTML = ''
    // }
    // else{
    //     log_out.innerHTML = 'Cannot access.'
    // }
    log_out.innerHTML = ''
    alert("Call!")
}