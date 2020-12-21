function Library() {
    var categories = {
      history: [],
      sport: []
    };
    return {
      //Library().add('category', 'item1', 'item2');
      add: function(category) {},
      categories: categories
    };
  }


// step 2

//   return {
//     //Library().add('category', 'item1', 'item2');
//     add: function(category) {
//       var items = [].splice.call(arguments, 1);
//       console.log(items);
//     }
//   };

// step 3

// var cityMarket = new Library();

// cityMarket.add("fiction", "Animal Farm", "To Kill A Mockingbird");

// return {
//   //Library().add('category', 'item1', 'item2');
//   add: function(category) {
//     var items = [].splice.call(arguments, 1);
//     console.log(items);
//     items.forEach(function(value, index, array) {
//       categories[category].push(value);
//     });
//   }
// };

// step 4

// cityMarket.add('fiction', 'Animal Farm', 'To Kill A Mockingbird');
// console.log(cityMarket.categories;)

// return {
//     //Library().add('category', 'item1', 'item2');
//     add: function(category, ...items) {
//       //   var items = [].splice.call(arguments, 1);
//       console.log(items); // ["Animal Farm", "To Kill A Mockingbird"]
//       items.forEach(function(value, index, array) {
//         categories[category].push(value);
//       });
//     }
//   };
