var quiz = {
"JS": [
{
"id": 1,
"question": "Find the L.C.M of 15, 30, 45",
"options": [
  {
  "a": "90",
  "b": "95",
  "c": "92",
  "d": "None of the above."
  }
],
"answer": "90",
"score": 0,
"status": ""
},
{
"id": 2,
"question": "The given ratio of two numbers is 3:2. If the L.C.M of them is 30, then calculate their sum.",
"options": [
{
"a": "34",
"b": "50",
"c": "55",
"d": "None of the above."
}
],
"answer": "50",
"score": 0,
"status": ""
},
{
"id": 3,
"question": "Calculate the HCF of 22 and 33",
"options": [
{
"a": "11",
"b": "12",
"c": "15",
"d": "None of the above."
}
],
"answer": "11",
"score": 0,
"status": ""
},
{
"id": 4,
"question": "If 20 is the HCF of two particular numbers and the other two factors of their LCM are 10 and 12, find the larger number?",
"options": [
{
"a": "220",
"b": "210",
"c": "240"
}
],
"answer": "240",
"score": 0,
"status": ""
},
{
"id": 5,
"question": "The two specific numbers are in the ratio 6:7, if the HCF of the given numbers is 30, what will be the numbers?",
"options": [
{
"a": "160, 180",
"b": "180, 210",
"c": "200, 160",
"d": "None of the above"
}
],
"answer": "alert(&quot;Hello World&quot;);",
"score": 0,
"status": ""
}
]
}
var quizApp = function () {
this.score = 0;
this.qno = 1;
this.currentque = 0;
var totalque = quiz.JS.length;
this.displayQuiz = function (cque) {
this.currentque = cque;
if (this.currentque < totalque) {
$("#tque").html(totalque);
$("#previous").attr("disabled", false);
$("#next").attr("disabled", false);
$("#qid").html(quiz.JS[this.currentque].id + '.');
$("#question").html(quiz.JS[this.currentque].question);
$("#question-options").html("");
for (var key in quiz.JS[this.currentque].options[0]) {
if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
$("#question-options").append(
"<div class='form-check option-block'>" +
"<label class='form-check-label'>" +
"<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
quiz.JS[this.currentque].options[0][key] +
"</span></label>"
);
}
}
}
if (this.currentque <= 0) {
$("#previous").attr("disabled", true);
}
if (this.currentque >= totalque) {
$('#next').attr('disabled', true);
for (var i = 0; i < totalque; i++) {
this.score = this.score + quiz.JS[i].score;
}
return this.showResult(this.score);
}
}
this.showResult = function (scr) {
$("#result").addClass('result');
$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
for (var j = 0; j < totalque; j++) {
var res;
if (quiz.JS[j].score == 0) {
res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
} else {
res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
}
$("#result").append(
'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
'<div class="last-row"><b>Score:</b> &nbsp;' + res +
'</div>'
);
}
}
this.checkAnswer = function (option) {
var answer = quiz.JS[this.currentque].answer;
option = option.replace(/</g, "&lt;") //for <
option = option.replace(/>/g, "&gt;") //for >
option = option.replace(/"/g, "&quot;")
if (option == quiz.JS[this.currentque].answer) {
if (quiz.JS[this.currentque].score == "") {
quiz.JS[this.currentque].score = 1;
quiz.JS[this.currentque].status = "correct";
}
} else {
quiz.JS[this.currentque].status = "wrong";
}
}
this.changeQuestion = function (cque) {
this.currentque = this.currentque + cque;
this.displayQuiz(this.currentque);
}
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
jsq.displayQuiz(0);
$('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
//var radio = $(this).find('input:radio');
$(this).prop("checked", true);
selectedopt = $(this).val();
});
});
$('#next').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(1);
});
$('#previous').click(function (e) {
e.preventDefault();
if (selectedopt) {
jsq.checkAnswer(selectedopt);
}
jsq.changeQuestion(-1);
});
