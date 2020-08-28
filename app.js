const frownyface = document.getElementById('frownyface');
const happyButton = document.getElementById('happybutton');

// Super complicated function to make this sad dude smile
function frownyToSmiley(evt) {
    frownyface.innerText = ":)";
    evt.target.disabled = true;
}

happyButton.addEventListener('click', frownyToSmiley);

