const renderQuestion = (question, count) => {
    let result = `
<div class="question-wrapper">
    <div class="question-title">
        Вопрос ${question.number} из ${count}: ${question.title}
    </div>
    <div class="question-answers-wrapper">
    `;
    switch (question.type) {
        case "radio":

            question.answers.forEach(element => {
                console.log(element);
                result +=
            `
        <div class="answer">
            <input type="radio" name="answers" id="answer${element.number}">
            <label for="answer${element.number}">${element.label}</label>
        </div>
            `
            });
            break;
        default: console.error("There is no dispatcher for this question type."); break;
    }
    result += `
    </div>
    <div class="buttons">
        <button>Назад</button>
        <button>Далее</button>
    </div>
</div>
            `;
    return result;
}


fetch("placeholders/questions.json")
    .then(response => response.json())
    .then(data => data.questions)
    .then(questions => document.querySelector(".container").innerHTML = renderQuestion(questions[0], questions.length));