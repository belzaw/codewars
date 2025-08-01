let a = move(2,5);
console.log(a);


function move (position, roll) {
  let move = roll * 2;
  return position += move; 
}