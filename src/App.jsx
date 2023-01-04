import React from 'react'

class App extends React.Component {
  state = {
    posts: [
      {id: 1, name: 'JavaScript'},
      {id: 2, name: 'Vue'},
      {id: 3, name: 'React'},
    ],
  }
  
  render() {
    return (
      <div className="container">
        <h1>Books</h1>
        {this.state.posts.map(post => (
          <h4 key={post.id}>{post.name}</h4>
        ))}
      </div>
    )
  }
}

export default App
