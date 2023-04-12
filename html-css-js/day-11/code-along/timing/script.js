console.log("test");

// for (let i = 1; i <= 50; i++) {
//   setTimeout(() => {
//     console.log(`Delayed for ${i} second.`);
//   }, "1000");
// }

// generate random R, G, B

let bodyDOM = document.querySelector("body");
let image1 =
  "https://images.unsplash.com/photo-1679678691005-3815eb29bc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80";
let image2 =
  "https://images.unsplash.com/photo-1680082286331-4473a0801b0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";
let image3 =
  "https://images.unsplash.com/photo-1680079528154-2b1664359d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80";
let arrayImage = [image1, image2, image3];

setInterval(() => {
  // const redValue = Math.floor(Math.random() * 255);
  // const greenValue = Math.floor(Math.random() * 255);
  // const blueValue = Math.floor(Math.random() * 255);
  // bodyDOM.style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;

  const randomisedArrayIndex = Math.floor(Math.random() * arrayImage.length);
  bodyDOM.style.backgroundImage = `url(${arrayImage[randomisedArrayIndex]})`;

  console.log(redValue, greenValue, blueValue);
}, 1000);
