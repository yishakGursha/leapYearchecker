const checkButton = document.getElementById('checkButton');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', function() {
    const yearInput = document.getElementById('yearInput').value;
    const isLeapYearResult = isLeapYear(yearInput);

    resultDiv.textContent = `The year ${yearInput} is${isLeapYearResult ? '' : ' not'} a leap year.`;
});

function isLeapYear(year) {
    if (year % 4 === 0 && year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}