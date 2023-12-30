var counter = 0;
try {
  function foo() {
    counter += 1;
    if(counter===13956){
        return
    }
    foo();
  }
  foo();
} catch(e) {
  console.error(e);
  console.log('counter =', counter);
}
