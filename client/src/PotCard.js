import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
//import TeamCard from "./TeamCard.js"
function PotCard({pot}){
    console.log(pot)

    const [message, setMessage] = useState("Please select two teams from Pot ");
    const [numChecked,setNumChecked] = useState(0);
    const [isCheckedArray,setIsCheckedArray] = useState(new Array(pot.length).fill(false))
    useEffect(()=>{

        
        console.log("testing",numChecked)
         if (numChecked===2){
            console.log("2")
            setMessage("Teams selected for Pot ")
             for (let i=0;i<pot.length;i++){
                let cb = document.getElementById(`cb${pot[i].pot_8_2023}-${i}`)
                let row = document.getElementById(`row${pot[i].pot_8_2023}-${i}`)
     
                if (!isCheckedArray[i]){
                    cb.disabled=true;
                    row.classList.add("outline")
                }
             }
            
            
            
         }
         else if((numChecked<2)&&(message==="Teams selected for Pot ")){
            setMessage("Please select two teams from Pot ")
            for (let i=0;i<pot.length;i++){
                let cb = document.getElementById(`cb${pot[i].pot_8_2023}-${i}`)
                let row = document.getElementById(`row${pot[i].pot_8_2023}-${i}`)
                cb.disabled=false;
                row.classList.remove("outline")
                setMessage("Please select two teams from Pot ")

            }


         }
    },[numChecked])


  
    let teamCards = pot.map((team,index)=>{
        return <TeamCard team={team} index={index} setNumChecked={setNumChecked} numChecked={numChecked} isCheckedArray={isCheckedArray} setIsCheckedArray={setIsCheckedArray} key={team.number}/>
    })
    




     return(
        <div>{message} {pot[0].pot_8_2023}
        <table>
           <tr>
                <th>Pot {pot[0].pot_8_2023} </th>
                <th> </th>
                <th> </th>
                <th>2023 Win Total</th>
                <th>Over Juice</th>
                <th>2022 ELO</th>
                </tr>

               {teamCards} 
    
        </table>
        
        </div>
    )
}
export default PotCard;