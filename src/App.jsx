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

  deletePost = (post) => {
    const index = this.state.posts.indexOf(post)
    this.state.posts.splice(index, 1)
    this.setState({posts: this.state.posts})
  }

  render() {
    return (
      <div className="container">
        <h1>Books</h1>
        <Posts posts={this.state.posts} cb={this.deletePost} />
      </div>
    )
  }
}

export default App
