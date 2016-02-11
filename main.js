var start = alert("Are You Ready? Click OK to begin");
var age = prompt("How old are you?");
if (age >= 21) {
  console.log("User is old enough");
  var riverPrompt = function() {
  var river = prompt(
    "You are walking down a road and you come to a river that you need to cross. There is a bridge going over it. Do you want to A) 'swim across the river' or B) 'walk across the bridge'?'"
  );
  console.log(river);
  if (river.toLowerCase() === "a" || river.toLowerCase() === "swim across the river") {
    console.log("User will swim");
    var wetsuitPrompt = function() {
    var wetsuit = prompt(
      "That's a bold move. The water could be chilly. Did you bring your wetsuit?"
    )
    if (wetsuit.toLowerCase() === "yes") {
      console.log("User has wetsuit");
      var swimAbility = prompt(
        "That's an odd thing to just happen to have with you but ok... You put on the wetsuit and get into the water. Can you even swim?"
      );
      if (swimAbility.toLowerCase() === "yes") {
        console.log("User can swim");
        alert("Very well. You made it across!")
      } else if (swimAbility.toLowerCase() === "no") {
        console.log("User can not swim");
        alert("You drowned.")
      } else {
        console.log("User entry invalid");
        alert("You need to answer yes or no. Let's try this again.")
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
          // !!!!!!!!FIGURE OUT HOW TO REPEAT QUESTION
      }
    } else if (wetsuit.toLowerCase() === "no") {
      console.log("User has no wetsuit");
      alert(
        "You'll freeze to death! Swimming is not a viable option. Let's try the bridge."
      );
      riverPrompt();
    } else {
      console.log("User entry invalid");
      alert("You need to answer yes or no. Let's try this again.");
      wetsuitPrompt()
    }
  }
  wetsuitPrompt();
  } else if (river.toLowerCase() === "b" || river.toLowerCase() === "walk across the bridge") {
    console.log("User will walk across bridge");
    var footwearPrompt = function (){
    var footwear = prompt(
      "It's a long walk to the end. Are you wearing running shoes?");
    switch (footwear.toLowerCase()) {
      case "yes":
        console.log("User is wearing running shoes");
        var tracksuit = prompt(
          "Shoes are good. But did you bring your tracksuit?");
        switch (tracksuit.toLowerCase()) {
          case "yes":
            console.log("User is wearing tracksuit")
            alert("Nice! You cross the bridge in style.");
            break;
          case "no":
            console.log("User is not wearing tracksuit");
            alert("Too bad. No tracksuit, no crossing. Rules are rules!")
            break;
          default:
          console.log("User entry invalid")
          alert("You need to answer yes or no. Let's try this again.")

        }
      break;
    case "no":
      console.log("User has no running shoes")
      alert("You need running shoes to cross the bridge. Maybe you should try swimming?")
    riverPrompt()
        break;
    default:
    console.log("User entry invalid")
    alert("You need to answer yes or no. Let's try this again.")
    footwearPrompt();
    }
  }
  footwearPrompt();
  }

  else {
    alert("Hmmmm. Let's try that again. Please choose 'a' or 'b'")
    riverPrompt()
  }
  }
  riverPrompt();
}

else {
  console.log("User is too young")
  alert("Sorry, you aren't old enough to play.")
}
