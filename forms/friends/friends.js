
let firstFriend = prompt('Enter the name of your first of three friends.');
let secondFriend = prompt('Enter the name of your second of three friends.');
let thirdFriend = prompt('Enter the name of your third of three friends.');
let bestFriend = prompt('Enter a 1 if your first person was your best friend, a 2 for the second, and a 3 for the third.');

let friendNames = [`${firstFriend}`, `${secondFriend}`, `${thirdFriend}`];
alert(friendNames);

alert(friendNames[0]);
alert(friendNames[1]);
alert(friendNames[2]);
alert(friendNames);

if (bestFriend == '1') {
   alert('Your best friend is:  ' + friendNames[0]);
  } else if (bestFriend == '2') {
   alert('Your best friend is:  ' + friendNames[1]);
  } else if (bestFriend == '3') {
   alert('Your best friend is:  ' + friendNames[2]);
 } 
