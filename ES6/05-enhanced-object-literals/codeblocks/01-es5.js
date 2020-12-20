function getBook(title, author, year) {
    return {
      sayAuthor: function() {
        return author;
      }
    };
  }
  
  getBook("Death on the Nile", "Agatha Christie", "1937").sayAuthor(); //"Agatha Christie"