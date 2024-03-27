const patients = 3;
const firstVisit = 18;
const otherVisits = 10;

console.log("The Doctor gets",patients,"patients a day.");
console.log("The first visit takes",firstVisit,"minutes, and the other visits take",otherVisits,"minutes.");

var averageTime = 0;
var longVisits = 0;
const longVisitQuota = 20;

for (let i = 1; i <= patients; i++) {
    if (i == 1) {
        averageTime = averageTime + firstVisit;

        if (firstVisit == longVisitQuota) {
            longVisits++;
        }
    } else if (i > 1) {
        averageTime = averageTime + otherVisits;

        if (otherVisits == longVisitQuota) {
            longVisits++;
        }
    }
}

averageTime = averageTime / patients;
averageTime = averageTime.toFixed(1);

console.log("The average time the doctor spent with the patients is",averageTime,"minutes.");
console.log("Visits that were over",longVisitQuota,"minutes long:",longVisits);