// program starts

let myBody = document.getElementsByClassName("characterDialogue");

let questions = {
    "questions": [
        {
            "id": 1,
            "question": "What is the value of pi (π) to two decimal places?",
            "options": ["3.16", "3.14", "3.15", "3.17"],
            "answer": "3.14"
        },
        {
            "id": 2,
            "question": "What is the square root of 144?",
            "options": ["10", "11", "12", "13"],
            "answer": "12"
        },
        {
            "id": 3,
            "question": "Solve for x: 2x + 5 = 15",
            "options": ["5", "10", "20", "2"],
            "answer": "5"
        },
        {
            "id": 4,
            "question": "What is the area of a circle with a radius of 5?",
            "options": ["78.54", "31.42", "25", "100"],
            "answer": "78.54"
        },
        {
            "id": 5,
            "question": "What is 25% of 80?",
            "options": ["10", "15", "20", "25"],
            "answer": "20"
        }
    ]
}

function evaluateAnswer(input, question_index) {
    return input === questions.questions[question_index].answer;
}


// program changes to alien capture scene

function alienKidnap() {
    myBody[0].innerHTML = "<p class='dialogueDown'>While you sleep, a group of aliens " +
        "arrives to explore Earth. They've been searching for a COW since forever.</p>" +
        "<button onclick='alienKidnap1()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Capturescene.png')"
}

function alienKidnap1() {
    myBody[0].innerHTML = "<p class='dialogueDown'>Is that a cow??!!</p>" +
        "<button onclick='alienKidnap2()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Capturescene alien1.png')"
}

function alienKidnap2() {
    myBody[0].innerHTML = "<p class='dialogueDown'>I think so... *proceeds to kidnap you*</p>" +
        "<button onclick='cowLabSpeaking1()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Capturescene alien2.png')"
}

// program changes to cow lab scene

function cowLabSpeaking1() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>You: Where am I?</p>" +
        "<button onclick='cowLabAlien10()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab me.png')"
}

function cowLabAlien10() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>You're in the cow lab! Welcome! Our new cow guest is FINALLY here</p>" +
        "<button onclick='cowLabSpeaking2()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab alien1.png')"
}

function cowLabSpeaking2() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>What?? I'm not a cow...</p>" +
        "<button onclick='cowLabAlien20()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab me.png')"
}

function cowLabAlien20() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>We know you're lying, cows can talk, just like you do</p>" +
        "<button onclick='cowLabAlien11()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab alien2.png')"
}

function cowLabAlien11() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>We'll start the experiments tomorrow. Bye!</p>" +
        "<button onclick='cowLabThinking()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab alien1.png')"
}

function cowLabThinking() {
    myBody[0].innerHTML = "<p class='dialogueDown2'>What?? I need to escape. <br> *after they're gone, you open the door* </p>" +
        "<button onclick='controlDeckView()'>Next stage</button>";
    myBody[0].style.backgroundImage = "url('Bg/Cow lab me.png')"
}

// program changes to control deck

function controlDeckView() {
    myBody[0].innerHTML = "<div class='container'></div>" +
        "<button id='consoleCenter' onclick='controlDeckQuestion()'>What IS THIS?</button>" + //change place
    "<p class='dialogueWithButton'>You're in the control deck. You find a question on the console.</p>";
    myBody[0].style.backgroundImage = "url('Bg/console deck view.png')"
}

function controlDeckQuestion() {
    myBody[0].style.backgroundImage = "url('Bg/console deck question.png')"

    let answer

    myBody[0].innerHTML = "<p class='dialogueCenter'>To verify you're an alien and open the door, please answer the next question: <br>"
        + questions.questions[0].question + "</p>" +
        "<label for='answer'> </label>\n" +
        "  <select name='answer' id='question1'>\n" +
        "    <option value=''>" + questions.questions[0].options[0] + "</option>\n" +
        "    <option value=''>" + questions.questions[0].options[1] + "</option>\n" +
        "    <option value=''>" + questions.questions[0].options[2] + "</option>\n" +
        "    <option value=''>" + questions.questions[0].options[3] + "</option>\n" +
        "  </select>" +
        "<button id='consoleCenter' onclick='alienEncounter()'>" +
        "Submit</button>"; // when clicked button evaluate answers

}

// program changes to alien encounter
function alienEncounter() {
    myBody[0].innerHTML = "\"<p class='dialogueDown'>*footsteps* <br> You: I need to hide QUICKLY</p>" +
        "<button onclick='alienEncounterQuestion()'>Next</button>\";";
    myBody[0].style.backgroundImage = "url('Bg/alien encounter.png')"
}

function alienEncounterQuestion() {
    myBody[0].style.backgroundImage = "url('Bg/console deck question.png')"
    myBody[0].innerHTML = "<p class='dialogueCenter'>Answer the next question to hide: " +
        questions.questions[1].question  + "</p>" + //add AI generated questions
        "<label for='answer'> </label>\n" +
        "  <select name='answer' id='question2'>\n" +
        "    <option value=''>" + questions.questions[1].options[0] + "</option>\n" +
        "    <option value=''>" + questions.questions[1].options[1] + "</option>\n" +
        "    <option value=''>" + questions.questions[1].options[2] + "</option>\n" +
        "    <option value=''>" + questions.questions[1].options[3] + "</option>\n" +
        "  </select>" +
        "<button id='consoleCenter' onclick='humanLab()'>Submit</button>"; // when clicked button evaluate answers and say hiding successful
}

// program changes to human lab
function humanLab() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>You've hidden in the Human Lab</p>" +
        "<button onclick='humanLabEncounter1()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab.png')"
}

function humanLabEncounter1() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>What are you doing here?? I'm already hiding in the Human lab, GET OUT!!</p>" +
        "<button onclick='humanLabResponse()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab dare.png')"
}

function humanLabResponse() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>You: Please let me stay until the aliens go away, please.</p>" +
        "<button onclick='humanLabEncounter2()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab.png')"
}

function humanLabEncounter2() {
    myBody[0].style.backgroundImage = "url('Bg/human lab dare.png')"
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>FINE, but ONLY if you answer this EXTREMELY DIFFICULT question:" +
        questions.questions[2].question + "</p>" + //add AI generated questions
        "<label for='answer'> </label>\n" +
        "  <select name='answer' id='dropdown3'>\n" +
        "    <option value=''>" + questions.questions[2].options[0] + "</option>\n" +
        "    <option value=''>" + questions.questions[2].options[1] + "</option>\n" +
        "    <option value=''>" + questions.questions[2].options[2] + "</option>\n" +
        "    <option value=''>" + questions.questions[2].options[3] + "</option>\n" +
        "  </select>" +
        "<button id='consoleRight' onclick='humanLabEncounter3()'>Submit</button>"; // when clicked button evaluate answers

}

function humanLabEncounter3() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>Thank you!</p>" +
        "<button onclick='humanLabResponse2()'>Next</button>";
}

function humanLabResponse2() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>You're welcome, but I better get going</p>" +
        "<button onclick='humanLabEncounter4()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab.png')"
}
function humanLabEncounter4() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>Wait, I want to go home too, can I come with you?</p>" +
        "<button onclick='humanLabResponse3()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab dare.png')"
}

function humanLabResponse3() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br>Sure, let's go <br> *she joins the team mission: Back to Earth*</p>" +
        "<button onclick='navigation()'>Next stage</button>";
    myBody[0].style.backgroundImage = "url('Bg/human lab.png')"}

// program changes to navigation

function navigation() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>You are in Navigation now.</p>" +
        "<button onclick='navigationHuman()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/navigation view.png')"}

function navigationHuman() {
    myBody[0].innerHTML = "<p class='dialogueDown' style='width:400px'> <br>Oh, no! We are getting pulled back from Earth!</p>" +
        "<button onclick='navigationResponse()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/navigation human comment.png')"}

function navigationResponse() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>You: Come on, we gotta do something</p>" +
        "<button onclick='navigationQuestion()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/navigation view.png')"}

function navigationQuestion() {
    myBody[0].style.backgroundImage = "url('Bg/navigation question.png')"
    myBody[0].innerHTML = "<p class='dialogueUp' style='width: 400px'> Solve this question to steer back to Earth: <br>" +
        questions.questions[3].question + "</p>" + //add AI generated questions
        "<label for='answer'> </label>\n" +
        "  <select name='answer' id='dropdown4'>" +
        "    <option value=''>" + questions.questions[3].options[0] + "</option>\n" +
        "    <option value=''>" + questions.questions[3].options[1] + "</option>\n" +
        "    <option value=''>" + questions.questions[3].options[2] + "</option>\n" +
        "    <option value=''>" + questions.questions[3].options[3] + "</option>\n" +

        "  </select>" +
        "<button id='consoleRight' onclick='navigationHuman2()'>Submit</button>"; // when clicked button evaluate answers
}

function navigationHuman2() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>Yippie! *high fives you* <br> We've done it</p>" +
        "<button onclick='navigationHuman3()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/navigation human comment.png')"
}

function navigationHuman3() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>Hurry! I know where a capsule is.</p>" +
        "<button onclick='capsuleRoom()'>Next stage</button>";
}

// program changes to capsule room

function capsuleRoom() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>You arrive at the Capsule Room</p>" +
        "<button onclick='capsuleRoomQuestion()'>Unlock</button>"; // edit position
    myBody[0].style.backgroundImage = "url('Bg/capsule room view.png')"
}

function capsuleRoomQuestion() {
    myBody[0].style.backgroundImage = "url('Bg/capsule room question.png')"
    myBody[0].innerHTML = "<p class='dialogueCenter'>Answer the next question to hide: " +
        questions.questions[4].question + "</p>" + //add AI generated questions
        "<label for='answer'> </label>\n" +
        "  <select name='answer' id='question5'>" +
        "    <option value=''>" + questions.questions[4].options[0] + "</option>\n" +
        "    <option value=''>" + questions.questions[4].options[1] + "</option>\n" +
        "    <option value=''>" + questions.questions[4].options[2] + "</option>\n" +
        "    <option value=''>" + questions.questions[4].options[3] + "</option>\n" +
        "  </select>" +
        "<button id='consoleCenter' onclick='capsuleRoomResponse()'>Submit</button>"; // when clicked button evaluate answers and say hiding successful
}

function capsuleRoomResponse() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>You: We made it!</p>" +
        "<button onclick='capsuleRoomHuman()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/capsule room view.png')"
}

function capsuleRoomHuman() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br>Yay!</p>" +
        "<button onclick='final()'>Next</button>";
    myBody[0].style.backgroundImage = "url('Bg/capsule room human comment.png')"
}

function final() {
    myBody[0].innerHTML = "<p class='dialogueDown'> <br><br><br>You scaped! Thank U 4 playing <3</p>";
    myBody[0].style.backgroundImage = "url('Bg/win holy cow.png')"
}



