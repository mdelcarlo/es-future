
const email = "mati.dc@hotmail.com";

const emailFirstDigits = email.slice(0, 8);
const maskedEmail = emailFirstDigits.padEnd(email.length, "*");
console.log(maskedEmail);
// expected output: "mati.dc@***********"
