// Define a function to create a new question element
function createQuestionElement(questionNumber, question, options) {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `
      <h3>Question ${questionNumber}:</h3>
      <p>${question}</p>
      <div class="options">
        ${options
          .map((option, index) => `<input type="radio" name="q${questionNumber}" value="${index}"><label>${option}</label><br>`)
          .join("")
        }
      </div>
      <hr>
    `;
    return questionElement;
  }
  
  // Define a function to add a new question
  function addQuestion(quizContainer, questionNumber, question, options) {
    const questionElement = createQuestionElement(questionNumber, question, options);
    quizContainer.appendChild(questionElement);
  }
  
  // Function to take the quiz
  function takeQuiz(event) {
    const swiperContainer = document.querySelector(".mySwiper");
    const selectedCard = swiperContainer.querySelector(".swiper-slide-active");
    const sectionTitle = selectedCard.querySelector(".section-title").textContent;
  
    // Get the quiz data based on the selected category
    let quizData = [];
    switch (sectionTitle) {
      case "WEB DEVP":
        quizData = [
          // WEB DEVP quiz questions
          {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyperlink Tool Markup Language"],
            correctAnswer:0,
          },
        //   {
        //     question: "Which HTML tag is used to define an internal style sheet?",
        //     options: ["<style>", "<script>", "<css>", "<stylesheet>"],
        //     correctAnswer: 0,
        //   }
          // Add more questions for the WEB DEVP category
        ];
        break;
      case "DSA":
        quizData = [
          // DSA quiz questions
          {
            question: "What does DSA stand for?",
            options: ["Data Structure Algorithms", "Design System Architecture", "Dynamic System Analysis", "Data Set Analysis"],
            correctAnswer: 0,
          },
          {
            question: "Which data structure is used for implementing recursion?",
            options: ["Stack", "Queue", "Linked List", "Array"],
            correctAnswer: 0,
          },
          // Add more questions for the DSA category
        ];
        break;
      case "Python":
        quizData = [
          // Python quiz questions
          {
            question: "Which of the following is NOT a Python data type?",
            options: ["Integer", "String", "Float", "Character"],
            correctAnswer: 3,
          },
          {
            question: "What is the output of '3' + 4?",
            options: ["34", "7", "Error", "None of the above"],
            correctAnswer: 0,
          },
          // Add more questions for the Python category
        ];
        break;
      // Add other cases for other categories
      default:
        break;
    }
  
    // Generate the quiz content as a string
    let quizContent = `
      <h2>Quiz Section</h2>
      <form id="quizForm">
    `;
    quizData.forEach((questionObj, index) => {
      quizContent += createQuestionElement(index + 1, questionObj.question, questionObj.options).innerHTML;
    });
    quizContent += `
        <button type="button" id="submitQuizBtn">Submit Quiz</button>
      </form>
      <div id="quizResult" style="display: none;">
          <!-- Quiz results will be displayed here -->
      </div>
    `;
  
    // Show the quiz content on the page
    const quizSection = document.getElementById("quizSection");
    quizSection.style.display = "block";
    quizSection.innerHTML = quizContent;
  
    // Attach event listener to the "Submit Quiz" button inside the dynamically created form
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    submitQuizBtn.addEventListener("click", submitQuiz);
  }
  
  // Function to submit the quiz
  function submitQuiz() {
    const quizForm = document.getElementById("quizForm");
    const questions = quizForm.getElementsByClassName("question");
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      const options = questions[i].querySelectorAll("input[type='radio']");
      let selectedOption = null;
  
      for (const option of options) {
        if (option.checked) {
          selectedOption = parseInt(option.value);
          break;
        }
      }
  
      // Assuming the correct answer is always at index 0 for each question
      if (selectedOption === 0) {
        score++;
      }
    }
  
    // Display the quiz result
    const quizResult = document.getElementById("quizResult");
    quizResult.style.display = "block";
    quizResult.innerHTML = `You scored ${score} out of ${questions.length}.`;
  }
  
  // Attach event listeners to "Take a Quiz" buttons
  const takeQuizButtons = document.querySelectorAll(".btnforquiz .btn");
  takeQuizButtons.forEach((button) => {
    button.addEventListener("click", takeQuiz);
  });
  