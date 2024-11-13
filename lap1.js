
function checkNumber(input){
    return !isNaN(input) && input.trim() !=="";
}
function Number(){
    let A = prompt("nhap a: ");
    if(!checkNumber(A)){
        alert("nhap sai");
        return;
    }
    
    let B = prompt("nhap b: ");
    if(!checkNumber(B)){
        alert("nhap sai");
        return;
    }
    let sum = parseInt(A) + parseInt(B);
    alert(sum);

    document.getElementById("sum").innerHTML = sum;
}