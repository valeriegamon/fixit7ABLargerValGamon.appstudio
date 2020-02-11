
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
       if (friendNames[0].charAt(0) == 'A' || friendNames[0].charAt(0) == 'a') {
       alert('Your best friends" name starts with A.');
       } else if (friendNames[0].charAt(0) == 'B' || friendNames[0].charAt(0) == 'b') {
       alert('Your best friends" name starts with B.');
       } else {
       alert('Your best friend"s name starts with something other than A or B.');
       }
  } else if (bestFriend == '2') {
   alert('Your best friend is:  ' + friendNames[1]);
       if (friendNames[1].charAt(0) == 'A' || friendNames[1].charAt(0) == 'a') {
       alert('Your best friends" name starts with A.');
       } else if (friendNames[1].charAt(0) == 'B' || friendNames[1].charAt(0) == 'b') {
       alert('Your best friends" name starts with B.');
       } else {
       alert('Your best friend"s name starts with something other than A or B.');
       }
  } else if (bestFriend === '3') {
   alert('Your best friend is:  ' + friendNames[2]);
        if (friendNames[2].charAt(0) === 'A' || friendNames[2].charAt(0) === 'a') {
       alert('Your best friends" name starts with A.');
       } else if (friendNames[2].charAt(0) === 'B' || friendNames[2].charAt(0) === 'b') {
       alert('Your best friends" name starts with B.');
       } else {
       alert('Your name starts with something other than A or B.');
       }
 } 
 