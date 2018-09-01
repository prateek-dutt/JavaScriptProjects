function calculateTip(){
var bill=document.getElementById("bill").value;
var service_tip= document.getElementById("serviceQuality").value;
var sharers=document.getElementById("sharingno").value;
// console.log(sharers);
// console.log(service_tip);
// console.log(bill);
if (bill === "" || service_tip == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see
var raw_tip=bill*service_tip;

var each_share=raw_tip/sharers;
each_share=each_share.toFixed(2);


document.getElementById('showtip').style.visibility="visible";
document.getElementById('tip_amt').innerHTML="Rs"+"\t"+each_share +"\t each";

}
