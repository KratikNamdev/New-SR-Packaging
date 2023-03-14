// function SendMail(){
//     var params ={
//         from_name : document.getElementById("fullName").value,
//         Mob_number : document.getElementById("mobileNumber").value,
//         message : document.getElementById("message").value
//     }
//     emailjs.send("service_hv17kzr","template_wyk5w8q",params).then(function(res){
//         alert("Success!"+res.status)
//     })
// }
function SendMail() {
  var params = {
    from_name: document.getElementById("fullName").value,
    Mob_number: document.getElementById("mobileNumber").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_hv17kzr", "template_wyk5w8q", params)
    .then(function (res) {
      alert("Success!" + res.status)
    })
}
