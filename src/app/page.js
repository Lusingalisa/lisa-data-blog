export default function Home(){

  let ourStyles = {
    color:"black", 
    backgroundColor: "#5ef2cd", 
    border:"10px solid black", 
    padding: "10px", 
    margin:"50px",
    borderRadius:"20px"
  }

  return(
    <div>
    <div style={ourStyles}>
      <h2>DATA SCIENCE</h2>
      <h3>data the new oil</h3>
      <p>Join our data science club to explore the fascinating world of data analysis, machine learning</p>

    </div>
    <div style={ourStyles}>
    <h2>CYBER SECURITY</h2>
    <h3>Guardians of the bytes</h3>
    <p>Join our data science club to explore the fascinating world of data analysis, machine learning</p>

  </div>
  </div>
  )
}
  
