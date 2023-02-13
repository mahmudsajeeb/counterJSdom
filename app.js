let count = 0;
// counter increment handler
document.getElementById('btn-danger').addEventListener("click", function(){
  //count = count+ 1
  count += 1;

  document.getElementById("counter").innerText = count;
})

// counter decrement handler

document.getElementById("btn-success").addEventListener("click", function(){
  count -= 1

  //counter decrese
  document.getElementById('counter').innerText = count;
})

// let value = 0;
// document.getElementById("btn-danger").addEventListener("click", function () {
//   //   value = value + 1;
//   value += 1;

//   //   console.log(value);
//   document.getElementById("counter").innerText = value;
// });


// document.getElementById("btn-success").addEventListener("click", function () {
//   value -= 1;
//   document.getElementById("counter").innerText = value;
// });
