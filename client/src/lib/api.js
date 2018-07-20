export default {
  getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  },
  getPostByID(data) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
      .then(response => response.json())
  },
  addPost(data) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data)
    })
  },
  updatePost (data) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id: data.id,
        title: data.title,
        body: data.body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))
  },
  removePost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
  }
}