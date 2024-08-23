const form = document.getElementById('form')
const firstname = document.getElementById("first-name")
const lastname = document.getElementById('last-name')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm-password')
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const error_message = document.getElementById("error-message")
const success_message = document.getElementById("success-message")
form.addEventListener('submit', (e) => {

let errors = []

if (firstname){
          // if we have a firstname, we are in the signup
          errors = getSignupformErrors(firstname.value, lastname.value, username.value, password.value, confirm_password.value, email.value, phone.value)
}
else{
          // if we don't have a firstname, we are in the login
          errors = getLoginformErrors(username.value, password.value)
}
if (errors.length > 0) {
          //if there are any errors
          e.preventDefault()
          error_message.innerHTML = errors.join('. ')
}
if (errors.length == 0) {
          success_message.innerHTML = 'Register successful.'
}
})

function getSignupformErrors(firstname, lastname, username, password, confirm_password, email, phone) {
          let errors = []

          if (firstname === '' || firstname === null) {
                    errors.push('First name is required')
          }
          if (lastname === '' || lastname === null) {
                    errors.push('Last name is required')
          }
          if (username === '' || username === null) {
                    errors.push('Username is required')
          }
          if (password === '' || password === null) {
                    errors.push('Password is required')
          }
          if (email === '' || email === null) {
                    errors.push('Email is required')
          }
          if (phone === '' || phone === null) {
                    errors.push('Phone is required')
          }
          if (password != confirm_password) {
                    errors.push('Passwords do not match')
          }

          return errors
}

const allInputs = [firstname, lastname, username, password, email, phone, confirm_password]

allInputs.foreach(input =>{
          input.addEventListener('input', () => {
                    error_message.innerHTML = ''
          })
})

function getLoginformErrors(username, password) {
          let errors = []

          if (username === '') {
                    errors.push('Username is required')
          }
          if (password === '') {
                    errors.push('Password is required')
          }

          return errors
}