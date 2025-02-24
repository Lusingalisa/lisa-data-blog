import ChapterCard from "./components/ChapterCard"
export default function Home(){


  return(
    <div>
      <ChapterCard
      title={"DATA SCIENCE"}
      subtitle={"data the new oil"}
      content={"Join our data science club to explore the fascinating world of data analysis, machine learning"}
      />

      <ChapterCard
       title={"CYBER SECURITY"}
       subtitle={"Guardians of the byte"}
       content={"Join our Cyber security club to delve into the critical field of protecting"}
      />

      <ChapterCard
       title={"ROBOTICS"}
       subtitle={"We make nice bots"}
       content={"Join our Robotics club to delve into the critical field of protecting"}
      />

    </div>

  )
}
  
