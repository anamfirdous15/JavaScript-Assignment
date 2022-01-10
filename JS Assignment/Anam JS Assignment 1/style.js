function submit() {
        var amount = document.getElementById("input").value;
        var x;
        if (amount >= 35) {
            x = amount - 35;
            alert("Ashish purchased Grocery and Ice cream and the amount left with him now is " + x);
        }
        else if (amount === 20) {
            alert("Ashish was only able to purchase Grocery with the given amount")
        }
        else if (amount === "") {
            alert("Enter the amount first!");
        }
        else {
            alert("Ashish wasn't able to purchase anything due to insuffient amount");
        }
    }

function clr(){
    return document.getElementById("input").value=" ";
}
