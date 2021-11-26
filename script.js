function calculateSide() {
    let side1 = document.getElementById("triangleSide1").value;
    let side2 = document.getElementById("triangleSide2").value;
    let hypotenuse = document.getElementById("hypotenuse").value;

    if(!hypotenuse) {
        if(side1 && side2) {
            alert(Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2)));
        }
        else {
            alert("Fill 2 sides of the triangle");
        }
        
    }
    else if(!side1) {
        if(hypotenuse && side2) {
            alert(Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(side2, 2)));
        }
        else {
            alert("Fill 2 sides of the triangle");
        }
    }
    else if(!side2) {
        if(hypotenuse && side1) {
            alert(Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(side1, 2)));
        }
        else {
            alert("Fill 2 sides of the triangle");
        }
    }
    else {
        alert("Fill just 2 sides of the triangle");
    }
}