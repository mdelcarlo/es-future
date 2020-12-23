const CATEGORY = Symbol();
const book = {
  [CATEGORY]: "Sports"
};

book[CATEGORY]; //'Sports'

const TITLE = Symbol();
book[TITLE] = () => "Extreme ownership";
console.log(book[TITLE]()); //'Extreme ownership'