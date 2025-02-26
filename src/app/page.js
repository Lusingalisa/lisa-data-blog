import ChapterCard from "./components/ChapterCard"

export default function Home(){
  let associationChapters =[
    {
      title:"DATA SCIENCE",
      subtitle:"data the new oil",
      content:"Join our data science club to explore the fascinating world of data analysis, machine learning"
    },
    {
      title:"CYBER SECURITY",
      subtitle:"Guardians of the byte",
      content:"Join our cyber security club to delve into the critical field of protecting"
    },
    {
      title:"ROBOTICS",
      subtitle:"We make nice bots",
      content:"Join our Robotics club to explore the fascinating world of data analysis, machine learning"
    }
  ]

  return(
    <div>
      {associationChapters.map(function(chapter,index){
        return (
          <div style={{margin:"50px"}}>
          <TitleCard
          associationName={"CSE ASSOCIATION"}
          departmentName={"Department of Computing and Technology"}
          />
          <TitleCard
          associationName={"LAW SOCIETY"}
          departmentName={"Department of Law"}
          />
          {associationChapters.map(function(chapter,index){
            return(
              <ChapterCard
              key={index}
              title={chapter.title}
              subtitle={chapter.subtitle}
              content={chapter.content}
              />
            )
          })}
        </div>
        )
      })}
      
    </div>

  )
}
  
