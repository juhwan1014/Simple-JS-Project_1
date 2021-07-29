var name = prompt("enter your full name",["No Name"]);
var add = prompt("enter your address",["No Address"]);
var city = prompt("enter your city",["Vancouver"]);
var province = prompt("enter your province",["British Columbia"]);
var bal = prompt("enter your Account Balance",["0.0"]);
var total_owing = 0;

if(0 < parseInt(bal) && parseInt(bal)< 1000 ){
    var total_owing = parseInt(bal) + parseInt(bal) * 0.02
}else if ( parseInt(bal) >= 1000 ){
    var total_owing = parseInt(bal) + parseInt(bal) * 0.03
}



document.write("Full Name : " + name,'<br>');
document.write("Address : " + add),'<br>';
document.write("City : " + city,'<br>');
document.write("Province : " + province,'<br>');
document.write("Account Balance : " + parseInt(bal),'<br>');   
document.write("Total Owing : " + total_owing);

if (parseInt(bal) == 0){
    document.write('<br>'+'<br>'+"Thank-you for your payment ~")   
   }
