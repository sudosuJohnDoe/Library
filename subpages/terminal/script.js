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
	else if (userInput === 'open Main-Page.html','open Main-Page','open main-page') {
		window.open('/index.html');
	}
	else if (userInput === 'open Art-Gallery.html','open Art-Gallery','open art-gallery') {
		window.open('/subpages/art-gallery/art-gallery.html');
	}
	else if (userInput === 'open Works.html','open Works','open works') {
		window.open('/subpages/works/works.html');
	}
	else if (userInput === 'run Terminal','run terminal') {
		window.open('/subpages/terminal/terminal.html');
	}
	else {
		output.textContent = 'bash: command not found';
	}	
}
