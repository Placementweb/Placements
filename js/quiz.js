var questions=[];
const bff = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Common Style Sheet",
      "Colorful Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
      "Hypertext Preprocessor",
      "Hypertext Programming",
      "Hypertext Preprogramming",
      "Hometext Preprocessor"
    ]
  },
    {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language"
    ]
  },
  {
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language"
    ]
  }
];

const python=[
  {
    numb: 1,
    question: "Who developed Python Programming Language?",
    answer: "Guido van Rossum",
    options: [
      "Wick van Rossum",
      "Rasmus Lerdorf",
      "Guido van Rossum",
      "Niene Stom"
    ]
  },
  {
    numb: 2,
    question: "Which type of Programming does Python support?",
    answer: "all of the mentioned",
    options: [
      "object-oriented programming",
      "structured programming",
      "functional programming",
      "all of the mentioned"
    ]
  },
  {
    numb: 3,
    question: "Is Python case sensitive when dealing with identifiers?",
    answer: "yes",
    options: [
      "no",
      "yes",
      "machine dependent",
      "none of the mentioned"
    ]
  },
  {
    numb: 4,
    question: "Which of the following is the correct extension of the Python file?",
    answer: ".py",
    options: [
      ".python",
      ".pl",
      ".py",
      ".p"
    ]
  },
  {
    numb: 5,
    question: "Which of the following is the correct extension of the Python file?",
    answer: "Python code is both compiled and interpreted",
    options: [
      "Python code is both compiled and interpreted",
      "Python code is neither compiled nor interpreted",
      "Python code is only compiled",
      "Python code is only interpreted"
    ]
  }
];

const java=[
  {
    numb: 1,
    question: "Multiple inheritance means,",
    answer: "one class inheriting from more super classes",
    options: [
      "one class inheriting from more super classes",
      "more classes inheriting from one super class",
      "more classes inheriting from more super classes",
      "None of the above"
    ]
  },
  {
    numb: 2,
    question: "Which statement is not true in java language?",
    answer: "A private member of a class cannot be accessed by the methods of the same class.",
    options: [
      "A public member of a class can be accessed in all the packages.",
      "A private member of a class cannot be accessed by the methods of the same class.",
      "A private member of a class cannot be accessed from its derived class.",
      "A protected member of a class can be accessed from its derived class."
    ]
  },
  {
    numb: 3,
    question: "To prevent any method from overriding, we declare the method as,",
    answer: "final",
    options: [
      "static",
      "const",
      "final",
      "abstract "
    ]
  },
  {
    numb: 4,
    question: "Which one of the following is not true?",
    answer: "An abstract class cannot have non-abstract methods.",
    options: [
      "A class containing abstract methods is called an abstract class.",
      "Abstract methods should be implemented in the derived class.",
      "An abstract class cannot have non-abstract methods.",
      "A class must be qualified as 'abstract' class, if it contains one abstract method."
    ]
  },
  {
    numb: 5,
    question: "The fields in an interface are implicitly specified as,",
    answer: "both static and final ",
    options: [
      "static only",
      "protected",
      "private",
      "both static and final"
    ]
  }
];

const c =[
  {
    numb: 1,
    question: "Who is the father of C language?",
    answer: "Dennis Ritchie",
    options: [
      "Steve Jobs",
      "James Gosling",
      "Dennis Ritchie",
      "Rasmus Lerdorf"
    ]
  },
  {
    numb: 2,
    question: "Which of the following is not a valid C variable name?",
    answer: "int $main;",
    options: [
      "int number;",
      "float rate;",
      "int variable_count;",
      "int $main;"
    ]
  },
  {
    numb: 3,
    question: "All keywords in C are in",
    answer: "LowerCase letters",
    options: [
      "LowerCase letters",
      "UpperCase letters",
      "CamelCase letters",
      "None of the mentioned"
    ]
  },
  {
    numb: 4,
    question: "Which of the following is true for variable names in C?",
    answer: "Variable names cannot start with a digit",
    options: [
      "They can contain alphanumeric characters as well as special characters",
      "It is not an error to declare a variable to be one of the keywords(like goto, static)",
      "Variable names cannot start with a digit",
      "Variable can be of any length"
    ]
  },
  {
    numb: 5,
    question: "Which is valid C expression?",
    answer: "int my_num = 100000;",
    options: [
      "int my_num = 100,000;",
      "int my_num = 100000;",
      "int my num = 1000;",
      "int $my_num = 10000;"
    ]
  }
];


const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const topic = document.querySelector(".topic")
const start = topic.querySelectorAll(".topic_list .topic_text .cont2")
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    topic.classList.add("activeTopic"); 
    // showQuetions(0); 
    // queCounter(1); 
    // startTimer(15); 
    // startTimerLine(0); 
}

start[0].onclick = ()=>{
  topic.classList.remove("activeTopic"); 
  quiz_box.classList.add("activeQuiz");
  questions=bff;
  showQuetions(0); 
  queCounter(1); 
  startTimer(15); 
  startTimerLine(0); 
}

start[1].onclick = ()=>{
  topic.classList.remove("activeTopic"); 
  quiz_box.classList.add("activeQuiz");
  questions=python;
  console.log(questions);
  showQuetions(0); 
  queCounter(1); 
  startTimer(15); 
  startTimerLine(0); 
}

start[2].onclick = ()=>{
  topic.classList.remove("activeTopic"); 
  quiz_box.classList.add("activeQuiz");
  questions=java;
  showQuetions(0); 
  queCounter(1); 
  startTimer(15); 
  startTimerLine(0); 
}

start[3].onclick = ()=>{
  topic.classList.remove("activeTopic"); 
  quiz_box.classList.add("activeQuiz");
  questions=c;
  showQuetions(0); 
  queCounter(1); 
  startTimer(15); 
  startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show"); 
}

quit_quiz.onclick = ()=>{
    window.location.reload(); 
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue); 
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}


function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct"); 
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag); 
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ 
        let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and nice , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; 
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}