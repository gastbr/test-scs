//In this code, we first define a function loadJSON to load the JSON file and another function setRandomQuestion to select a random question from the loaded JSON and update the content of the label with the selected question. We then use an event listener to trigger the setRandomQuestion function when the page loads.

// Function to load JSON from a file

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "data.json", true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == 200) {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

//Function to set a random question from the JSON file

function setRandomQuestion() {
  loadJSON(function (data) {
    var randomIndex = Math.floor(Math.random() * data.length);
    var randomQuestion = data[randomIndex].question;
    document.getElementById("Pregunta1").innerHTML =
      "pregunta: " + randomQuestion;
  });
}

// Call the setRandomQuestion function when the page loads

window.addEventListener("load", setRandomQuestion);
