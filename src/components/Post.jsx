export function Post(props) {
  return (
    <h4 onClick={() => props.cb(props.post)}>{props.name}</h4>
  )
}