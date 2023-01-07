// const fetch = require("node-fetch")

 function getData() {
//   try {
//     const res1 = await fetch(`https://fakestoreapi.com/products`)
//     const res2 = await res1.json();
//     documents.getElementById("container").innerHTML = res2.map((user) => `<p>${user.username}</p>`)
//   } catch (err) {
//     document.getElementById("container").innerHTML = "Not found"
//   }
fetch(`https://fakestoreapi.com/users`)
.then((res) => res.json())
.then((data) => {
    return document.getElementById("container").innerHTML = data.map((user) => `<p>${user.username}</p>`)
})
}

function callData() {
  getData();
  alert("Clicked")
}