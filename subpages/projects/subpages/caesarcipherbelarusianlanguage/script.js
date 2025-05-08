const defaultAlphabet = "абвгдеёжзійклмнопрстуўфхцчшыьэюяАБВГДЕЁЖЗІЙКЛМНОПРСТУЎФХЦЧШЫЬЭЮЯ";
function caesarCipher(text, shift, mode, alphabet) {
    let result = "";
    const alphabetLength = alphabet.length;
    for (let char of text) {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
            const shiftAmount = mode === "encrypt" ? shift : -shift;
            const shiftedIndex = (index + shiftAmount + alphabetLength) % alphabetLength;
            result += alphabet[shiftedIndex];
        } else {
            result += char;
        }
    }
    return result;
}
function encrypt() {
	const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value) || 0;
    const customAlphabet = document.getElementById("alphabet").value.trim() || defaultAlphabet;
    document.getElementById("outputText").value = caesarCipher(text, shift, "encrypt", customAlphabet);
}
function decrypt() {
    const text = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value) || 0;
    const customAlphabet = document.getElementById("alphabet").value.trim() || defaultAlphabet;
    document.getElementById("outputText").value = caesarCipher(text, shift, "decrypt", customAlphabet);
}