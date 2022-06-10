import React from "react";
import Card from "./Cards";


function App(){
    return(
        <>
        <h1> Top 5 NETFLIX Series </h1>
   <Card 
      imgsrc="https://www.jguru.com/wp-content/uploads/2021/08/moneyheist5-1627916834-800x450.jpg"
      tittle="A Netflix Original Series" 
      sname="Money Heist" 
      href="https://www.netflix.com/in/title/80192098" 
      />
   <Card 
      imgsrc="https://www.famousbollywood.com/wp-content/uploads/2021/03/sacred-games1.jpg"
      tittle="A Netflix Original Series" 
      sname="Sacred games" 
      href="https://www.netflix.com/in/title/80115328" 
      />  
   <Card 
      imgsrc="https://www.famousbollywood.com/wp-content/uploads/2021/05/Kota-factory-season-1.jpg"
      tittle="A Netflix Original Series" 
      sname="Kota factory" 
      href="https://www.netflix.com/in/title/81249783" 
      />
   <Card 
      imgsrc="https://wallpapercave.com/wp/wp9427844.jpg"
      tittle="A Netflix Original Series" 
      sname="Jamtara" 
      href="https://www.netflix.com/in/title/81183491" 
      />
   <Card 
      imgsrc="https://www.comingsoon.net/assets/uploads/2019/10/Lost-in-SpaceF.jpg"
      tittle="A Netflix Original Series" 
      sname="Lost in space" 
      href="https://www.netflix.com/in/title/80104198" 
      />
   
  </>
    )
};

export default App;