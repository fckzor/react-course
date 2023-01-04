import { Post } from './Post'

export function Posts(props) {
  return (
    props.posts.map(post => (
      <Post
        key={post.id}
        name={post.name}
        post={post}
        cb={props.cb}
      />
    ))
  )
}