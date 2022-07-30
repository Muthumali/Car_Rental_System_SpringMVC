



var baseUrl3 = "http://localhost:8080/Back_End_war/api/v1/customer";
var cusID=$('#cusID').val();
var cusName=$('#cusName').val();
var cusaddress=$('#cusAddress').val();
var contact=$('#cusContact').val();
var cusEmail=$('#cusEmail').val();
var cusNicNo=$('#cusNic').val();
/*
var nicFrontImg=$('#imgNiCFront').val();
var nicBackImg=$('#imgNiCBack').val();
*/
var licenceNo=$('#cusLicence').val();
var licenceImg=$('#imgLicence').val();
var username=$('#cusUserName').val();
var password=$('#password').val();

var cusotmer = {
    customerId: cusID,
    name: cusName,
    address: cusaddress,
    contactNo: contact,
    email: cusEmail,
    nicNo: cusNicNo,
    /*nicFrontImg:,
     nicBackImg:nicBackImg,*/
    licenceNo:licenceNo,
    licenceImg:licenceImg,
    username: username,
    password: password
}
function saveCustomer() {

    $.ajax({
        url: baseUrl3,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(cusotmer),
        success: function (resp) {
            if (resp.data() === true) {
                clearSignupTextFields();
            }
            alert("Register Successfully");
        },
        error: function (ob) {

            alert("unsuccessfully");
        }
    });

}
function clearSignupTextFields(){
    $("#cusName").val('');
    $("#cusAddress").val('');
    $("#cusContact").val('');
    $("#cusNic").val('');
    $("#cusUserName").val('');
    $("#password").val('');
    $("#cusEmail").val('');
    $("#imgNiCFront").val('');

}