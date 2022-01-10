var intern = {
    first_name: "Anam",
    last_name: "Firdous",
    designation: "Intern Consulting",
    contact:9604847922,
    address: {
        house_no: 61,
        house_details: "Young Muslim Football Ground, Near Musa Bhai House Mominpura",
        city_name: "Nagpur",
        pin_code:440018,
        country: "India",
    }
};
document.getElementById("intern").innerHTML = "My name is " + " " +intern.first_name + " " + intern.last_name + " . " + "My designation is " +  intern.designation + " ." + "You can contact me on "+ intern.contact +" . " +"My address is plot no. " + intern.address.house_no + " , " +  intern.address.house_details + " , " + intern.address.city_name + 
 " , " + intern.address.pin_code +" , " +  intern.address.country +" .";