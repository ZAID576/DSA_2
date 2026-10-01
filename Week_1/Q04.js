// Create a function which accepts the age and tells whether the person is eligible to vote or not. (A person of age 18 or more is eligible to vote)

function eligibleToVote(age) {
  if (age < 0) {
    console.log("Invalid Input");
  } else if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

eligibleToVote(5);
