// Generators

function* genFunc() {
    console.log('First chapter');
    yield;
    console.log('Second chapter');
}
const genChapter = genFunc();
genChapter.next();
// Output: First chapter
genChapter.next();
// output: Second chapter
