
export default function Card({name,college,skills}) {

  return (
    <div id="layout">
    <div id="card">
      <h2>Name : {name}</h2>
      <p>College : {college}</p>
      <p>Skills : {skills}</p>
    </div>
    </div>
  )
}
