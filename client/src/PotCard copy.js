import { useState, useEffect } from "react";
//import TeamCard from "./TeamCard.js"
function PotCard({pot}){
    console.log(pot)

    const [message, setMessage] = useState("Please select two teams from Pot ");
    const [numChecked,setNumChecked] = useState(0);
    useEffect(()=>{

        
        console.log("testing",numChecked)
        // if 2 teams are selected




        if (numChecked===2){
            console.log("2")
            setMessage("Teams selected for Pot ")
             for (let i=0;i<pot.length;i++){
                let cb = document.getElementById(`cb${pot[i].pot_8_2023}-${i}`)
                let row = document.getElementById(`row${pot[i].pot_8_2023}-${i}`)
     
                if (!pot[i].selected){
                    cb.disabled=true;
                    row.classList.add("outline")
                }
             }
            
            
            
         }
    },[numChecked])


    function onCbChange(team){
        
        console.log(team.selected)
        if (team.selected){
            team.selected=false
            setNumChecked(numChecked-1)
        }
        else{
            team.selected=true;
            setNumChecked(numChecked+1)
        }


   

    }
    




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

               {/* {teamCards}  */}
               <tr id={`row${pot[0].pot_8_2023}-0`}>
                    <td><input  onChange={(e)=>onCbChange(pot[0])} type="checkbox" id={`cb${pot[0].pot_8_2023}-0`} ></input></td>
                    <td><img  className="card-image" alt={pot[0].name} src={pot[0].logo}/></td>
                    <td>{pot[0].code}</td>
                    <td>{pot[0].win_total_2023}</td>
                    <td>{pot[0].over_juice_2023}</td>
                    <td>{pot[0].elo_2022}</td>
                </tr>
                <tr id={`row${pot[1].pot_8_2023}-1`}>
                    <td><input onChange={(e)=>onCbChange(pot[1])} type="checkbox"  id={`cb${pot[1].pot_8_2023}-1`}></input></td>
                    <td><img  className="card-image" alt={pot[1].name} src={pot[1].logo}/></td>
                    <td>{pot[1].code}</td>
                    <td>{pot[1].win_total_2023}</td>
                    <td>{pot[1].over_juice_2023}</td>
                    <td>{pot[1].elo_2022}</td>
                </tr>
                <tr id={`row${pot[2].pot_8_2023}-2`}>
                    <td><input onChange={(e)=>onCbChange(pot[2])} type="checkbox"  id={`cb${pot[2].pot_8_2023}-2`}></input></td>
                    <td><img  className="card-image" alt={pot[2].name} src={pot[2].logo}/></td>
                    <td>{pot[2].code}</td>
                    <td>{pot[2].win_total_2023}</td>
                    <td>{pot[2].over_juice_2023}</td>
                    <td>{pot[2].elo_2022}</td>
                </tr>
                <tr id={`row${pot[3].pot_8_2023}-3`}>
                    <td><input onChange={(e)=>onCbChange(pot[3])} type="checkbox"  id={`cb${pot[3].pot_8_2023}-3`}></input></td>
                    <td><img  className="card-image" alt={pot[3].name} src={pot[3].logo}/></td>
                    <td>{pot[3].code}</td>
                    <td>{pot[3].win_total_2023}</td>
                    <td>{pot[3].over_juice_2023}</td>
                    <td>{pot[3].elo_2022}</td>
                </tr>

        </table>
        
        </div>
    )
}
export default PotCard;