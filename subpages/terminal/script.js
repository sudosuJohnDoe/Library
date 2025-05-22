const inputField = document.getElementById('userInput');
inputField.focus();
inputField.addEventListener('blur', function() {
    setTimeout(() => {
        inputField.focus();
    }, 0);
});
document.getElementById('userInput').addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
		checkInput();
	}
});
function checkInput() {
	const userInput = document.getElementById('userInput').value;
	const output = document.getElementById('outputText');
	if (userInput === 'help') {
		output.textContent = 'open - open file';
	}
	else if (userInput === 'open man.png') {
		window.open('media/img/man.png');
	}
	else if (userInput === 'open index.html','open Main-Page.html') {
		window.open('/index.html');
	}
	else {
		output.textContent = 'bash: command not found';
	}	
}
