let value = prompt('How many runs you scored in this ball');
// here the input value is in string " ".
// hence we change the condition operation to a string that is "4" & "6".
// then === datatype check will work correctly. 
if (value === "4") {
      console.log("You hit a Four");
} else if (value === "6") {
      console.log("You hit a Six");
} else {
      console.log("I couldn't figure out");
}