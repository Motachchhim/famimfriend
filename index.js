// Login start hare
var loginbtn = document.getElementById('loginbtn')
loginbtn.addEventListener('click',function(){
var eamil = document.getElementById('eamil')
var pass = document.getElementById('pass')
// check validation
var loginEmail = 'famim@gmail.com'
var passLogin = 1234;
var loginForm = document.getElementById('loginForm')
var bankvorot = document.getElementById('bankvorot')
if(loginEmail==eamil.value && passLogin==pass.value){
    loginForm.style.display='none'
    bankvorot.style.display='block'
    
    alert('login successful')
}else{
    alert('login failed')
}
})
// Login end hare


var addmonyBtn = document.getElementById('addmonyBtn')

addmonyBtn.addEventListener('click',function(){

    var addspan = document.getElementById('addspan').innerHTML;
    var parseDDONE = parseInt(addspan)
    var addinput= document.getElementById('addinput').value;
    var parDdd = parseInt(addinput)
    var addResult = parseDDONE+parDdd
    document.getElementById('addspan').innerHTML=addResult;

    var totalAmount = document.getElementById('totalAmount').innerHTML;
    var totalparse = parseInt(totalAmount)

    var totalgrandtotal = parDdd+totalparse;
    document.getElementById('totalAmount').innerHTML=totalgrandtotal;
})



var widrobtn = document.getElementById('widrobtn')

widrobtn.addEventListener('click',function(){
    var widhrospan = document.getElementById('widhrospan').innerHTML;
    var withdroparse = parseInt(widhrospan)
    var withdrowbtn = document.getElementById('withdrorinput').value;
    var widhroinputparse = parseInt(withdrowbtn)

    var widroresult = withdroparse+widhroinputparse;
    document.getElementById('widhrospan').innerHTML=widroresult;

    var totalAmount2 = document.getElementById('totalAmount').innerHTML;
    var totalparse = parseInt(totalAmount2)

    var withdrowresultminus = totalparse-widhroinputparse
    document.getElementById('totalAmount').innerHTML=withdrowresultminus;
})