# Asynchronous JavaScript 

- Synchronous vs. Asynchronous code
- setTimeout() and setInterval()
- Callback functions
- Understanding the Event Loop


---

# Promises

- What are Promises?
- Promise states (pending, fulfilled, rejected)
- .then(), .catch(), and .finally()

---

# Fetch API

The Fetch API allows you to make HTTP requests (GET, POST, etc.) directly from your JavaScript code — without needing any external library like Axios or jQuery.

```js
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));
```

---
