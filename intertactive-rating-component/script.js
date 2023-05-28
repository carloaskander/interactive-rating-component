window.onload = function() {
    // DECLARATION
    const cardOne = document.querySelector(".card-one");
    const cardTwo = document.querySelector(".card-two");

    const ratingButtonOne = document.querySelector(".one");
    const ratingButtonTwo = document.querySelector(".two");
    const ratingButtonThree = document.querySelector(".three");
    const ratingButtonFour = document.querySelector(".four");
    const ratingButtonFive = document.querySelector(".five");
    
    const selectionResultText = document.querySelector(".selection-result");
    const submitButton = document.querySelector(".submit-btn");
    
    // LISTENERS
    submitButton.addEventListener('click', thankYouScreen);
    ratingButtonOne.addEventListener('click', ratedOne);
    ratingButtonTwo.addEventListener('click', ratedTwo);
    ratingButtonThree.addEventListener('click', ratedThree);
    ratingButtonFour.addEventListener('click', ratedFour);
    ratingButtonFive.addEventListener('click', ratedFive);

    // ----------- FUNCTIONS ---------------

    // SUBMIT BUTTON CLICK
    function thankYouScreen() {
        cardOne.style.display = 'none';
        cardTwo.style.display = 'flex';
    }

    // FUNCTIONS DEPENDING ON WHICH RATING THE USER CLICKED.
    function ratedOne() {
        selectionResultText.innerText = "You selected 1 out of 5!";
    }

    function ratedTwo() {
        selectionResultText.innerText = "You selected 2 out of 5!";
    }

    function ratedThree() {
        selectionResultText.innerText = "You selected 3 out of 5!";
    }

    function ratedFour() {
        selectionResultText.innerText = "You selected 4 out of 5!";
    }

    function ratedFive() {
        selectionResultText.innerText = "You selected 5 out of 5!";
    }
}