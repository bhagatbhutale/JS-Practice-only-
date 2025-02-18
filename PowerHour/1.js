

function step1(fn) {
  console.log("Please wait selecting image...");
  setTimeout(function () {
    fn("Selected Image");
  }, 4000);
}

function step2(image, fn) {
  console.log(`Please wait applying filter to ${image}`);
  setTimeout(function () {
    fn("Filtered Image");
  }, 2000);
}

function step3(filter, fn) {
  console.log(`Please wait adding caption to ${filter}`);
  setTimeout(function () {
    fn("Captioned Image");
  }, 5000);
}

function step4(caption) {
  console.log(`Please wait uploading ${caption}`);
  setTimeout(function () {
    console.log("Image finally uploaded");
  }, 3000);
}

// Callback Hell
step1( function(image) {
    console.log(image)
   step2(image, function(filter) {
    console.log(filter)
    step3(filter, function(caption) {
        console.log(caption)
        step4(caption)
    })
   })
})

// step1(function (image) {
//   console.log(image);
//   step2(image, function (filter) {
//     console.log(filter);
//     step3(filter, function (caption) {
//       console.log(caption);
//       step4(caption);
//     });
//   });
// });