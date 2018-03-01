// You should save your application's data inside of app/data/friends.js as an array of objects. Each of 
// these objects should roughly follow the format below.
// {
//   "name":"Ahmed",
//   "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//   "scores":[
//       5,
//       1,
//       4,
//       4,
//       5,
//       1,
//       2,
//       5,
//       4,
//       1
//     ]
// }

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, 
// question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app 
// should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference.
// Once you've found the current user's most compatible friend, display the result as a modal pop-up.
// The modal should display both the name and picture of the closest match.

var friendsArr = [
    {
    name: "Billy Joel",
    photo: "http://ultimateclassicrock.com/files/2014/10/2024496.jpg?w=980&q=75",
    scores:[5, 3, 2 , 1, 1, 3, 2, 5, 2, 1]
},
{
    name: "Bruno Mars",
    photo: "https://pbs.twimg.com/profile_images/952969165370884096/bK1_Bkpq_400x400.jpg",
    scores:[3, 2, 5, 3, 1, 3, 2, 3, 2, 4]
},
{
    name: "Cardi B",
    photo: "https://pbs.twimg.com/profile_images/894310469988757506/IK5M0muk_400x400.jpg",
    scores:[2, 5, 3, 2, 1, 5, 2, 4, 1, 3]
},
{
    name: "Miley Cyrus",
    photo: "https://i.scdn.co/image/ae71f02aececa87c716a4e0abe39f703c9054d59",
    scores:[3, 2, 5, 1, 3, 2, 4, 3, 3, 2]
},

{
    name: "Garth Brooks",
    photo: "http://media.graytvinc.com/images/810*455/Brooks+GarthMGN.jpg",
    scores:[2, 4, 2, 5, 1, 5, 3, 2, 1, 3]
}
];

module.exports = friendsArr;