export default function Home(){

  let first_number=923;
  let second_number=7;
  let sum = first_number+second_number

  let username="John Doe"
  let username2="Maria Sky"
  return( 
  <div style={{
    color:"red", 
    backgroundColor: "#5ef2cd", 
    border:"10px solid black", 
    padding: "10px", 
    margin:"50px"}}>
    <h1>DATA SCIENCE FOR AFRICA</h1>
    <h2>An initiative for 2025</h2>
    <p>Welcome to our website</p>
    <strong>{10+10*1000}</strong>
    <br/>
    <em>{sum}</em>
    <p>Greetings {username} </p>
    <p>Greetings {username2} </p>
  </div>
  )
}
