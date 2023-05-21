const emailInput = document.getElementById("email-input");
const invalidMsg = document.getElementById("invalid-toast");
const successMsg = document.getElementById("success-toast");
const form = document.querySelector(".form")

//to check email format
function validateEmail(emailValue) {
    let value = /\S+@\S+\.\S+/;
    return value.test(emailValue);
  }

emailInput.addEventListener("invalid" , function(e) {
    let inputValue = e.target
    console.log(inputValue.validity)
    if(inputValue.validity.typeMismatch || inputValue.validity.valueMissing
      ){
      inputValue.setCustomValidity(" ");
      invalidMsg.classList.add("active")
      successMsg.classList.remove("active")
      this.classList.add("invalid")
    }else{
      invalidMsg.classList.remove("active")
      successMsg.classList.add("active")
      this.classList.remove("invalid")
    }
  });
  
  
  emailInput.addEventListener("input" , function() {
    invalidMsg.classList.remove("active")
    this.classList.remove("invalid")
  });

  form.addEventListener("submit" , function(e) {
    e.preventDefault()
    setTimeout(() => form.submit(), 2000)
  
    if(validateEmail(emailInput.value)){
      successMsg.classList.add("active")
    }else{
      successMsg.classList.remove("active")
    }
  });

//to disable enter key and accept submission only via button
document.addEventListener('keypress', function (e) {
    if (e.key === 13 || e.which === 13) {
          e.preventDefault()
    }
});