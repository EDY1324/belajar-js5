// membuat fungsi check Palindrome
function checkPalindrome() {
    // nilai yang di isi di input akan di simpan ke variabel text.
    let text = document.getElementById("inputText").value;
    // membuat nilai yang di isi bersih dari character seperti spasi, dll.
    let cleanText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // membuat nilai yang di isi di pisah dengan array lalu nilainya di balikkan dan di gabungkan kembali.
    let reversedText = cleanText.split('').reverse().join('');
    // membuat nilai yang sudah di bersihkan dan di balikkan, dibandingkan apakah nilai itu Palindrome atau bukan.
    let result = cleanText === reversedText? "Palindrome!" : "Bukan Palindrome!";
    // menampilkan ke dalam website
    document.getElementById("result").textContent = result;
}