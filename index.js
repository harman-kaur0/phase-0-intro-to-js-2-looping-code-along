const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(names, event) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return array;
}

writeCards(names, "birthday");

function countDown(integar) {
  let i = 0;
  while (i <= integar) {
    console.log(i++);
  }
}

countDown(10);
