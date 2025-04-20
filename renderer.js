let topic_input

function saveUserInput() {
    topic_input = document.getElementById('userInput').value;
    if (topic_input.length > 0) {
        console.log(topic_input);
        alienKidnap();

    } else {
        alert("Please enter a topic");
    }

}


