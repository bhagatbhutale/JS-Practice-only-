// Q --> Insta Problem Solving a using Promises 

function step1() {
  console.log("please wait i am selecting image...");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Selected Image");
    }, 4000);
  });
}
function step2(image) {
  console.log(`Please wait applying filter to ${image}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Filtered Image");
    }, 2000);
  });
}
function step3(filter) {
  console.log(`Please wait i am adding caption to ${filter}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Captioned Image");
    }, 5000);
  });
}

function step4(caption) {
  console.log(`Please wait uploading ${caption}`);
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Image Uploaded");
    }, 3000);
  });
}

step1()
  .then(function (image) {
    console.log(image);
    return step2(image);
  })
  .then(function (filter) {
    console.log(filter);
    return step3(filter);
  })
  .then(function (caption) {
    console.log(caption);
    return step4(caption);
  })
  .then(function (upload) {
    console.log(`Finally ${upload}`);
  })
  .catch(function (err) {
    console.log(err);
  });
