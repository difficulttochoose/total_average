let arr6 = document.querySelectorAll('tbody tr');

let totalTotal = 0, totalFemale = 0, totalMale = 0, avgAvg = 0, avgFemale = 0, avgMale = 0;
let amount = 0, amountF = 0, amountM = 0;
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i].querySelector('td:first-child').innerText != "") {
        let x = Number(arr6[i].querySelector('td:last-child').innerText);
        totalTotal += x;
        amount++;
        if (arr6[i].querySelector(`td:nth-child(${arr6[i].getElementsByTagName('td').length - 1})`).innerText == "Male") {
            amountM++;
            totalMale += x;
        } else {
            amountF++;
            totalFemale += x;
        }
    }
    avgAvg = totalTotal / amount;
    avgMale = totalMale / amountM;
    avgFemale = totalFemale / amountF;
}
let totalSum = document.getElementById('total').innerHTML = totalTotal;
let totalAvg = document.getElementById('avg').innerHTML = avgAvg;
console.log('total male', totalMale, 'avg male', avgMale, 'total female', totalFemale, 'avg female', avgFemale);