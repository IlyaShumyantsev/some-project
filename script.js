/**
 * Оертка над консоль логом
 * @param {*} arg [arg = "nothing"]
 */
function myConsoleLog(arg) {
  if (!arg) {
    console.log("nothing");
    return;
  }
  console.log(arg);
}

myConsoleLog();
