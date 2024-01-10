// Mock data for demonstration
const user = {
  lastActivityTime: null,
};

const posts = [];

// Mock functions to simulate asynchronous operations
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      user.lastActivityTime = new Date();
      resolve(user.lastActivityTime);
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      } else {
        reject("Error: No posts to delete");
      }
    }, 1000);
  });
}

// Example usage
createPost({ title: "Post One" })
  .then(() => updateLastUserActivityTime())
  .then((lastActivityTime) => {
    console.log("All Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);
    return deletePost();
  })
  .then(() => {
    console.log("Remaining Posts after Deletion:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
