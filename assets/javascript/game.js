// onload we want the start button to appear
// when star button is clicked, we want the all the questions to appear.
// There is a timer.
// When questions are ansewrs, we resceive scoare at the end.

var questions = [
    {
      question: "What is 2 + 2?",
      answer1: "5",
      answer2: "8",
      answer3: "90",
      answer4: "120"
    },
    {
      question: "What is Nick’s last name?",
      answer1: "thomas",
      answer2: "rodriguez",
      answer3: "ducca",
      answer4: "romero"
    },
    {
        question: "How many sides on a square?",
        answer1: "5",
        answer2: "3",
        answer3: "7",
        answer4: "4"
    },
    {
        question: "OOF",
        answer1: "oof",
        answer2: "big oof",
        answer3: "bidoof",
        answer4: "boof"
    }
   ];
   
   
   // for each element in questions.
   // we append question div
   // we append all 4 answers
   
   
    for(var i = 0; i < questions.length; i++) {
      $('#questions').append('<div>' + questions[i].question + '</div>');
      $('#questions').append('<div>' + questions[i].answer1 + '</div>');
      $('#questions').append('<div>' + questions[i].answer2 + '</div>');
      $('#questions').append('<div>' + questions[i].answer3 + '</div>');
      $('#questions').append('<div>' + questions[i].answer4 + '</div>');
      console.log(questions[i].answer1);
    };
    