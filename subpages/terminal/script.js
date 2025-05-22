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
		output.textContent = 'open - open file, run - run programm, about - get info. about something or someone (example: about Terminal)';
	}
	else if (userInput === 'about') {
		output.textContent = 'about [NAMEOFSOMETHINGORSOMEONEHERE]';
	}
	else if (userInput === 'about Terminal') {
		output.textContent = 'Terminal Ver. = 0.0.3 (Stable) [© 2025 sudoJohnDoe. All Rights Reserved]';
	}
	else if (userInput === 'open') {
		output.textContent = 'open [FILENAMEHERE]';
	}
	else if (userInput === 'open Art-Gallery.html') {
		window.open('/subpages/art-gallery/art-gallery.html');
	}
	else if (userInput === 'open Main-Page.html') {
		window.open('/index.html');
	}
	else if (userInput === 'open man.png') {
		window.open('media/img/man.png');
	}
	else if (userInput === 'open Works.html') {
		window.open('/subpages/works/works.html');
	}
	else if (userInput === 'run') {
		output.textContent = 'run [PROGRAMMNAMEHERE]';
	}
	else if (userInput === 'run Terminal') {
		window.open('/subpages/terminal/terminal.html');
	}
	else {
		output.textContent = 'bash: command not found';
	}	
}
