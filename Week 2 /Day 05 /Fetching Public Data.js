fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    posts.slice(0, 5).forEach(post => {
      console.log(`Title: ${post.title}`);
    });
  })
  .catch(error => console.log("Error:", error));
