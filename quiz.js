        // Function to check the answer
        function checkAnswer() {
            // The correct answer
            const correctAnswer = "4";

            // Retrieve the user's selected answer
            const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

            // Get the feedback element
            const feedbackElement = document.getElementById('feedback');

            // Compare the user's answer with the correct answer
            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = "Correct! Well done.";
            } else {
                feedbackElement.textContent = "That's incorrect. Try again!";
            }
        }

        // Add event listener to the submit button
        document.getElementById('submit-answer').addEventListener('click', checkAnswer);
