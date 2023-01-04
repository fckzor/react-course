export function Post(props) {
  return (
    <h4>
      {props.name} 
      <button onClick={() => props.removePost(props.id)}>delete</button>
    </h4>
  )
}