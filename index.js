function runSomethingToWait(activity, timeInMs) {
  setTimeout(function () {
    console.log(activity);
  }, timeInMs);
}

console.log("Wake up");
runSomethingToWait("Have breakfast", 4000);
runSomethingToWait("Take a bath", 3000);
console.log("Run a jog");
