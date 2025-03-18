// membuat fungsi check Palindrome
function checkPalindrome() {
    let text = document.getElementById("inputText").value;
    let cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reversedText = cleanText.split('').reverse().join('');
    let result = cleanText === reversedText? "Palindrome!" : "Bukan Palindrome!";
    document.getElementById("result").textContent = result;
}