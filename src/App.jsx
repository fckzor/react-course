import React from 'react'
import { Posts } from './components/Posts'

class App extends React.Component {
  state = {
    posts: [
      {id: 1, name: 'JavaScript'},
      {id: 2, name: 'Vue'},
      {id: 3, name: 'React'},
    ],
  }

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  render() {
    return (
      <div className="container">
        <h1>Books</h1>
        <Posts posts={this.state.posts} removePost={this.removePost} />
      </div>
    )
  }
}

export default App
