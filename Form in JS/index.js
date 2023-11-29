var checkAccept = document.getElementById("checkAccept");
var btnRegister = document.getElementById("btnRegister");
var email = document.getElementById("email");
var Remail = document.getElementById("Remail");

var checkgender=document.querySelectorAll("input[name='gender']:checked")

var pass = document.getElementById("pass");
var Rpass = document.getElementById("Rpass");

var Rname = document.getElementById("name");
var city = document.getElementById("city");
var phone = document.getElementById("phone");
var country = document.getElementById("country");

checkAccept.addEventListener("change" ,function(){
    if(checkAccept.checked==true)
    {
        btnRegister.attributes.removeNamedItem("disabled")
    }
    else
    {
        btnRegister.setAttribute("disabled",true)
    }
})

btnRegister.addEventListener("click", function () {
    CheckSameValue(email, Remail);
    CheckSameValue(pass,Rpass);
    CheckNull(Rname)
    CheckNull(city)
    CheckNull(phone);
    CheckNull(country);
    CheckPassword(pass);
    CheckPassword(Rpass);
    CheckEmail(email);
    CheckEmail(Remail);
    CheckGender(checkgender);
})


function CheckNull(input){
    if(input.value.trim()==""){
        input.nextElementSibling.innerHTML = "Bosdur doldur"
    }else{
        input.nextElementSibling.innerHTML = ""
    }
}

function CheckPassword(password){
    var Uppcase=0;
    var Lowcase=0;
    var digit=0;
    var sym=0;
    for(let i=0; i<password.value.length; i++)
    {
        if(password.value.charCodeAt(i)>64 && password.value.charCodeAt(i)<91 )
        {
          Uppcase++;
        }
        else if(password.value.charCodeAt(i)>96 && password.value.charCodeAt(i)<123 )
        {
          Lowcase++;
        }
        else if(password.value.charCodeAt(i)>47 && password.value.charCodeAt(i)<58 )
        {
          digit++;
        }
        else if(password.value.charCodeAt(i)>32 && password.value.charCodeAt(i)<48  )
        {
            sym++;
        }
        else if(password.value.charCodeAt(i)>57 && password.value.charCodeAt(i)<65 )
        {
          sym++;
        }
    }
    if(Uppcase>=1 && Lowcase>=1 && digit>=1 && sym>=1 && password.value.length>=8)
    {
          password.nextElementSibling.innerHTML="";
    }
    else
    {
        password.nextElementSibling.innerHTML="Şifrəni şərtlərə uyğun daxil edin.";
    }
}
function CheckEmail(email){
    var check=email.value.substring(email.value.length-10,email.value.length)
    if(check=="@gmail.com")
    {
        email.nextElementSibling.innerHTML=""
    }
    else{
        email.nextElementSibling.innerHTML="Emaili duzgun daxil edin."
    }
}
function CheckGender(gender){
        if(gender)
        {
            // btnRegister.attributes.removeNamedItem("disabled")
    
            gender.nextElementSibling.innerHTML=""
        }
        else
        {
            // btnRegister.setAttribute("disabled",true)
    
            gender.nextElementSibling.innerHTML="Cinsiyyəti seçin."
        }
}

function CheckSameValue(item1, item2) {
    if (item1.value !="" && item2.value!="") {
        if(item1.value == item2.value){
            item1.nextElementSibling.innerHTML = ""
            item2.nextElementSibling.innerHTML = ""
        }else{
            item1.nextElementSibling.innerHTML = "Beraber deyil"
            item2.nextElementSibling.innerHTML = "Beraber deyil"
        }
 
    } else{
        item1.nextElementSibling.innerHTML = "Bosdur"
        item2.nextElementSibling.innerHTML = "Bosdur"
    }
}