// const Hello = (props) => {
//   return (
//     <div style={{ color: props.color }}>
//       Hello, {props.name} <br />
//       색상: {props.color} <br />
//       나이: {props.age}
//     </div>
//   )
// }

const Hello = ({ name, age, color }) => {
  return (
    <div style={{ color: color }}>
      Hello, {name} <br />
      색상: {color} <br />
      나이: {age}
    </div>
  )
}

export default Hello
