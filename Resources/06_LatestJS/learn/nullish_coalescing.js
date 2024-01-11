const user = {
    name: "Pranov Sarath",
    city: "Eastbourne",
    grade: 0
}

const firstName = user?.name?.first ?? "default val";
const age = user?.age ?? 27; // only works if age is null or undefined.
const grade = user?.grade || 13; // works if age is null, undefined or 0.
const grade_nc = user?.grade ?? 13;

console.log(firstName);
console.log(age);
console.log(grade);
console.log(grade_nc);