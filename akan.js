function getValue()
{
  console.log("working")
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;
  if (day == ""){
    alert("enter valid day");
    return false;
  }else if(day<0 || day>31){
    alert("enter valid day");
     console.log(day);
     return false;
  }else if (day==null){
      alert("enter valid day");
      return false;
  }if(month<0){
    alert("enter valid month");
    return false;
  }else if (month>12) {
    alert("enter valid month");
    return false;
  }else if (month==null) {
    alert("enter valid month");
    return false;
  }else if (month=="") {
    alert("enter valid month");
    return false;
    console.log(month);
  } if(year<1940 ){
    alert("enter valid year");
    return false;
  } if (male!==true && female!==true){
    alert("oops! select gender");
    return false;
  }

  var century =year.slice(0,2);
  // formula for day of birth
  var birthday = Math.floor(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day )% 7);
  console.log(birthday);
  // names values
  var maleNames=["Sunday ~ Kwasi","Monday ~ Kwadwo","Tuesday ~ Kwabena","Wednesday ~ Kwaku","Thursday ~  Yaw",
  "Friday ~ Kofi","Saturday ~ Kwame"];
  var femaleNames=["Sunday ~ Akosua","Monday ~ Adwoa", "Tuesday ~ Abenaa", "Wednesday ~ Akua", "Thursday ~  Yaa",
  "Friday ~ Afua", "Saturday ~ Ama"];
  // outputs male values
  if( birthday==0 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[0];
  }else if( birthday==1 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[1];
  }else if( birthday==2 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[2];
  }else if( birthday==3 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[3];
  }else if( birthday==4 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[4];
  }else if( birthday==5 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[5];
  }else if( birthday==6 && male==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ maleNames[6];
  }
  // outputs female values
  if( birthday==0 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[0];
  }else if( birthday==1 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[1];
  }else if( birthday==2 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[2];
  }else if( birthday==3 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[3];
  }else if( birthday==4 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[4];
  }else if( birthday==5 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[5];
  }else if( birthday==6 && female==true) {
    document.getElementById("result").innerHTML="YOUR AKAN NAME ~ "+ femaleNames[6];
  }
  document.getElementById("resetform").reset();
}