export default function ChapterCard(props){
    let ourStyles = {
        color:"black", 
        backgroundColor: "#5ef2cd", 
        border:"10px solid black", 
        padding: "10px", 
        margin:"50px",
        borderRadius:"20px"
      }
    
    return(
        <div style={ourStyles}>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.content}</p>

    </div>

    );

}