// Async Await

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "javascript", password: 123 });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromsieFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error); // we need to use try and catch to handle error in async await.
//   }
// }
// consumePromsieFive();

// fetch() using async await

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

// Handling mutiple functions using async await

function fetchBlogData() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000);
  });
}

async function getData() {
  try {
    console.log("Fetching user data");
    // const blogData = await fetchBlogData();
    // const commentData = await fetchCommentData();

    const [blogData, commentData] = await Promise.all([fetchBlogData(), fetchCommentData()])
    // better way to handle mutiple functions.

    console.log(blogData);
    console.log(commentData);

    console.log("Fetching completed");
  } catch (error) {
    console.log("Error fetching blog  data:", error);
  }
}
getData();
