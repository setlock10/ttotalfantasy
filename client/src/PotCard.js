import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";

function PotCard({pot}){
   // console.log(pot)

    const [message, setMessage] = useState("Please select two teams from Pot ");
    const [numChecked,setNumChecked] = useState(0);
    const [isCheckedArray,setIsCheckedArray] = useState(new Array(pot.length).fill(false))
    
    
    useEffect(()=>{

        if (numChecked===2){
            disableCBs();
         }
         else if((numChecked<2)&&(message==="Teams selected for Pot ")){
            enableCBs();
         }
    },[numChecked])

    function disableCBs(){

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
    function enableCBs(){
        setMessage("Please select two teams from Pot ")
        for (let i=0;i<pot.length;i++){
            let cb = document.getElementById(`cb${pot[i].pot_8_2023}-${i}`)
            let row = document.getElementById(`row${pot[i].pot_8_2023}-${i}`)
            cb.disabled=false;
            row.classList.remove("outline")
            setMessage("Please select two teams from Pot ")

        }


    }


  
    let teamCards = pot.map((team,index)=>{
        return <TeamCard team={team} index={index} setNumChecked={setNumChecked} numChecked={numChecked} isCheckedArray={isCheckedArray} setIsCheckedArray={setIsCheckedArray} key={team.number}/>
    })

    function onClickHeader(code){
        console.log(code)
        let doc=document.getElementById(`doc${pot[0].pot_8_2023}`)
        doc.hidden=false;
        doc.innerText="Testing Testing"
        switch(code){
            case "Win_Total":
                doc.innerText="NFL season win totals are similar to a traditional OVER/UNDER bet except instead of betting on a single game, you're betting on all 16 of them at once. For instance, a traditional totals bet involves you deciding if the total number of points scored by both teams will go OVER or UNDER the oddsmaker's set number. "
                break;
        default:
                doc.innerText=" "
        }

    }

    function onClickDoc(){
        let doc=document.getElementById(`doc${pot[0].pot_8_2023}`)
        doc.innerText=" ";
        doc.hidden=true;

    }


    




     return(
        <div>{message} {pot[0].pot_8_2023}
        <table>
           <tr>
                <th>Pot {pot[0].pot_8_2023} </th>
                <th> </th>
                <th> </th>
                <th className="underline" onClick={()=>onClickHeader("Win_Total")}>2023 Win Total</th>
                <th className="underline" onClick={()=>onClickHeader("Over_Juice")}>Over Juice</th>
                <th className="underline" onClick={()=>onClickHeader("ELO")}>2022 ELO</th>
                </tr>

               {teamCards} 
    
        </table>
        <p onClick={()=>onClickDoc()} hidden="true" className="doc" id={`doc${pot[0].pot_8_2023}`}></p>
        
        </div>
    )
}
export default PotCard;