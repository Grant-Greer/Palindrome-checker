function isPalindrome() {
    const str = document.getElementById("myInput").value;
    const newStr = str.toLowerCase().replace(/[\W_]+/g, ' ');
    const finalStr = newStr.match(/[A-Z0-9]/gi).join('');
    const revFinalStr = finalStr.split('').reverse().join('');
    window.alert(revFinalStr === finalStr);
}

