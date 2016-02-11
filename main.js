var error = {
  yesNo: "You need to answer yes or no. Let's try this again.",
  invalid: "user entry invalid",
  noAB: "Hmmmm. Let's try that again. Please choose 'a' or 'b'",
  noWetsuit: "You'll freeze to death! Swimming is not a viable option. Let's try the bridge."
}
var messages = {
    riverMsg: "You are walking down a road and you come to a river that you need to cross. There is a bridge going over it. Do you want to A) 'swim across the river' or B) 'walk across the bridge'?'",
    wetsuitMsg: "That's a bold move. The water could be chilly. Did you bring your wetsuit?",
    swimAbilityMsg: "That's an odd thing to just happen to have with you but ok... You put on the wetsuit and get into the water. Can you even swim?",
    footwearMsg: "It's a long walk to the end. Are you wearing running shoes?",
    tracksuitMsg: "Shoes are good. But did you bring your tracksuit?",
  }
  // ******TEST
var start = alert("Are You Ready? Click OK to begin");
var age = prompt("How old are you?");
if (age >= 21) {
  console.log("User is old enough");
  var riverPrompt = function() {
    var river = prompt(messages.riverMsg).toLowerCase();
    console.log(river);
    switch (river) {
      case "a":
      case "swim across the river":
        console.log("User will swim");
        var wetsuitPrompt = function() {
          var wetsuit = prompt(messages.wetsuitMsg).toLowerCase();
          switch (wetsuit) {
            case "yes":
              console.log("User has wetsuit");
              var swimAbility = prompt(messages.swimAbilityMsg).toLowerCase();
              switch (swimAbility) {
                case "yes":
                  console.log("User can swim");
                  alert("Very well. You made it across!")
                  break;
                case "no":
                  console.log("User can not swim");
                  alert("You drowned.");
                  break;
                default:
                  console.log(error.invalid);
                  alert(error.yesNo);
              }
              break;
            case "no":
              console.log("User has no wetsuit");
              alert(error.noWetsuit);
              riverPrompt();
              break;
            default:
              console.log(error.invalid);
              alert(error.yesNo);
              wetsuitPrompt();
          }
        }
        wetsuitPrompt();
        break;
      case "b":
      case "walk across the bridge":
        console.log("User will walk across bridge");
        var footwearPrompt = function() {
          var footwear = prompt(messages.footwearMsg).toLowerCase();
          switch (footwear) {
            case "yes":
              console.log("User is wearing running shoes");
              var tracksuitPrompt = function() {
                var tracksuit = prompt(messages.tracksuitMsg).toLowerCase();
                switch (tracksuit) {
                  case "yes":
                    console.log("User is wearing tracksuit")
                    alert("Nice! You cross the bridge in style.");
                    break;
                  case "no":
                    console.log("User is not wearing tracksuit");
                    alert(
                      "Too bad. No tracksuit, no crossing. Rules are rules!"
                    )
                    break;
                  default:
                    console.log(error.invalid)
                    alert(error.yesNo);
                    tracksuitPrompt();
                }
              }
              tracksuitPrompt();
              break;
            case "no":
              console.log("User has no running shoes")
              alert(
                "You need running shoes to cross the bridge. Maybe you should try swimming?"
              )
              riverPrompt()
              break;
            default:
              console.log(error.invalid);
              alert(error.yesNo);
              footwearPrompt();
          }
        }
        footwearPrompt();
        break;
      default:
        alert(error.noAB)
        riverPrompt()
    }
  }
  riverPrompt();
}
else {
  console.log("User is too young")
  alert("Sorry, you aren't old enough to play.")
}
