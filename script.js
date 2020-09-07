function checkEditDistance() {
    console.log("button clicked!");
    var startingWord = document.getElementById("startWord").value;
    var endingWord = document.getElementById("goalWord").value;
    console.log(startingWord);


    let startArray = startingWord.split("");
    console.log(startArray);
    let endArray = endingWord.split("");
    console.log(endArray);

    if (startArray.length == endArray.length) {
        document.getElementById("displayResult").innerHTML = "Ok!";
        console.log('here we go');
        var i;
        let counter = 0;
        for (i = 0; i < startArray.length; i++) {
            if (startArray[i] != endArray[i]) {
                counter += 1;
            }


        }
        console.log(counter);
        document.getElementById("displayResult").innerHTML = counter;

    } else {
        document.getElementById("displayResult").innerHTML = "The two words must have the same length!";
    }







}