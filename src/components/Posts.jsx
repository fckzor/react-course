import { Post } from './Post'

export function Posts(props) {
  return (
    props.posts.map(post => (
      <Post
        key={post.id}
        id={post.id}
        name={post.name}
        removePost={props.removePost}
      />
    ))
  )
}