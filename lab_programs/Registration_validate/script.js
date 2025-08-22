function validateName(name){
    const regex=/^[A-Za-z\s]+$/;
    if(!regex.test(name));{
        return "Name contain alphabet and space"
    }
    return "valid"

}


function validateEmail(email){
    const regex=/^[A-Za-z0-9.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if(!regex.test(email));{
        return "Email is invaild"
    }
    return "valid"
}


function validatePassword(password){
    const regex=/^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(!regex.test(password));{
        return "password must contain alteast 1 number and captial letter"
    }
    return "valid"

}

function validatePhoneNumber(phoneNumber){
    const regex=/^[9876][0-9]{10}$/;
    if(!regex.test(phoneNumber));{
        return "Phone Number must contains numbers"
    }
    return "valid"

}



function handleForm(){
   let name= document.getElementById("name").value;
   let email= document.getElementById("email").value;
   let password= document.getElementById("password").value;
   let phoneNumber= document.getElementById("phoneNumber").value;

   let validateName= validateName(name);
   let validateEmail=validateEmail(email);
   let validatePassword=validatePassword(password);
   let validatePhoneNumber=validatePhoneNumber(phoneNumber);

   if(validateName=="valid"&&validateEmail=="valid"&&validatePassword=="valid"&&validatePhoneNumber=="valid"){
    return true;
   }
 

   document.getElementById("nameError").innerText =validateName;
   document.getElementById("EmailError").innerText =validateEmail;
   document.getElementById("passwordError").innerText =validatePassword;
   document.getElementById("phoneNumberError").innerText =validatePhoneNumber;

}

