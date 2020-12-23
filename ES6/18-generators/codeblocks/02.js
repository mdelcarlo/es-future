function* graph() {
  let x = 0;
  let y = 0;
  while (true) {
    yield { x: x, y: y };
    x += 2;
    y += 1;
  }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
// {x: 0, y: 0}
// {x: 2, y: 1}
// {x: 4, y: 2}
// {x: 6, y: 3}
// {x: 8, y: 4}
// {x: 10, y: 5}
// {x: 12, y: 6}
// {x: 14, y: 7}
