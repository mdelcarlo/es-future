// Copy array
const moreParts = ["prologue", "foreword"];
const newParts = [...moreParts]; // like arr.slice()

newParts.push("introduction");
//  newParts becomes ['prologue', 'foreword', 'introduction']
//  moreParts remains unaffected