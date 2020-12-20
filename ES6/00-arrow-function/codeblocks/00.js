var book = {
    find: function (name, author) {
        return name + author;
    }
}

var searchBook = function (name, author) {
  return book.find(name, author);
};

var arrowSearchBook = (name, author) => {
  return book.find(name, author);
};

// var arrowSearchBook = (name, author) => book.find(name, author); // shorter version

var squared = x => x * x;

