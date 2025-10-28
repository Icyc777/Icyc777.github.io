    const question = document.createElement("div");
    question.className = "input";
    const questioninput = document.createElement("input")
    questioninput.placeholder = "Ведіть питання?";

    const ball = document.createElement("div");
    ball.className = "ball";

    const answer = document.createElement("div");
    answer.className = "answer";
    answer.textContent = " ";


    document.body.appendChild(question);
    question.appendChild(questioninput);

    document.body.appendChild(ball);
    ball.appendChild(answer);

    const answers = ["Да", "Нет", "Возможно", "50/50", "Бог його знає"];

    ball.addEventListener("click", () => {
      answer.textContent = answers[Math.floor(Math.random() * answers.length)];
      answer.style.opacity = 0;
      answer.style.transition = "opacity 0.5s";
      setTimeout(() => answer.style.opacity = 1, 100);
    }
    )
