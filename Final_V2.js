function check() {
	var c=0
	var q1=document.quiz.question1.value;
	var q2=document.quiz.question2.value;
	var q3=document.quiz.question3.value;
	var q4=document.quiz.question4.value;
	var q5=document.quiz.question5.value;
	var q6=document.quiz.question6.value;
	var q7=document.quiz.question7.value;
	var q8=document.quiz.question8.value;
	var q9=document.quiz.question9.value;
	var q10=document.quiz.question10.value;
	var result=document.getElementById('result');
	var quiz=document.getElementById("quiz");
	if (q1=="Face B1") {c++}
	if (q2=="Face A2") {c++}
	if (q3=="Face A3") {c++}
	if (q4=="Face A4") {c++}
	if (q5=="Face C5") {c++}
	if (q6=="Face C6") {c++}
	if (q7=="Face B7") {c++}
	if (q8=="Face D8") {c++}
	if (q9=="Face B9") {c++}
	if (q10=="Face C0") {c++}
quiz.style.display="none";
if (c<=6) {
result.textContent=`Your result is ${c}. Try again`
} else {
result.textContent=`Your result is ${c}. Good Job!`
}
}