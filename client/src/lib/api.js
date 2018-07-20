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
  removePost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(id)
    })
  }
}