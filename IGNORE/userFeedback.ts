function displayFeedback(message: string, isError: boolean = false) {
    const feedbackElement = document.getElementById('feedbackMessage');
    if (feedbackElement) {
        feedbackElement.innerText = message;

        if (isError) {
            feedbackElement.classList.remove('success');
            feedbackElement.classList.add('error');
        } else {
            feedbackElement.classList.remove('error');
            feedbackElement.classList.add('success');
        }

        setTimeout(() => {
            feedbackElement.innerText = '';
        }, 3000); // Clear feedback after 3 seconds
    }
}
