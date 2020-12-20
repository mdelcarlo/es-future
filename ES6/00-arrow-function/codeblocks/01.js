var atlasBook = {
  name: "Atlas shruged",
  year: 1930,
  timesSold: 2000000,

  handleAddTimesSold: function (times, add) {
    add(times);
  },

  updateTimesSold: function () {
    var that = this;

    this.handleAddTimesSold(3, function (times) {
      that.timesSold;

      console.log(times + that.timesSold);
    });
  },

  // arrow function

  // updateTimesSold: function () {
  //     this.handleAddTimesSold(3, (times) => {
  //         console.log(times + this.timesSold);
  //     })
  // }

  // one liner

  // updateTimesSold: function () {
  //     this.handleAddTimesSold( 3, times => console.log(times + this.timesSold))
  // }
};

atlasBook.updateTimesSold();
