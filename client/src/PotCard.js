import { useState, useEffect } from "react";
import TeamCard from "./TeamCard";

function PotCard({pot,picked, setPicked}){
   // console.log(pot)

    const [message, setMessage] = useState("Please select two teams from Pot ");
    const [numChecked,setNumChecked] = useState(0);
    const [isCheckedArray,setIsCheckedArray] = useState(new Array(pot.length).fill(false))
    const [fontColor,setFontColor] = useState("red")
 //useEffect(()=>{

//     console.log(isCheckedArray)
//     console.log(picked[pot[0].id]+picked[pot[1].id]+picked[pot[2].id]+picked[pot[3].id])
//     setNumChecked(picked[pot[0].id]+picked[pot[1].id]+picked[pot[2].id]+picked[pot[3].id])
//     let temp = new Array(pot.length).fill(false)
//     for (let i=0;i<pot.length;i++){
//         temp[i]=picked[pot[i].id]


//     }
     //console.log(picked)
//     setIsCheckedArray(temp)
    
        //  temp[index]=picked[team.id];
        //  setIsCheckedArray(temp);



 //},[isCheckedArray])
    
    
    useEffect(()=>{
        
        //console.log(picked[pot[0].id]+picked[pot[1].id]+picked[pot[2].id]+picked[pot[3].id])
       

        if (picked[pot[0].number]+picked[pot[1].number]+picked[pot[2].number]+picked[pot[3].number]===2){
            disableCBs();
         }
         else if((picked[pot[0].number]+picked[pot[1].number]+picked[pot[2].number]+picked[pot[3].number]<2)&&(message==="Teams selected for Pot ")){
            enableCBs();
         }
    },[picked])

    function disableCBs(){

        setMessage("Teams selected for Pot ")
        setFontColor("black")
 

        for (let i=0;i<pot.length;i++){
            let cb = document.getElementById(`cb${pot[i].pot_8_2023}-${i}`)
            let row = document.getElementById(`row${pot[i].pot_8_2023}-${i}`)
 
            if (!picked[pot[i].number]){
                cb.disabled=true;
                row.classList.add("outline")
            }
         }

    }
    function enableCBs(){
        setFontColor("red")
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
        //  let temp=[...isCheckedArray];
        //  temp[index]=picked[team.id];
        //  setIsCheckedArray(temp);
        //console.log(team)
        //console.log(picked[team.number])
        return <TeamCard team={team} index={index} setNumChecked={setNumChecked} numChecked={numChecked} isCheckedArray={isCheckedArray} setIsCheckedArray={setIsCheckedArray} picked={picked} setPicked ={setPicked} key={team.number}/>
    })

    function onClickHeader(code){
        //console.log(code)
        let doc=document.getElementById(`doc${pot[0].pot_8_2023}`)
        doc.hidden=false;
        doc.innerText="Testing Testing"
        switch(code){
            case "Win_Total":
                doc.innerText="NFL season win totals are a gauge for how many wins a team is expected to achieve by the end of the season.  These numbers are set by sports books prior to the season starting and are for OVER/UNDER wagers. ";
                break;
            case "Over_Juice":
                doc.innerText="This the expected probability of going over the win total.  The larger the negative number, the more likely a team is to go over their season win total. ";
                break;
            case "ELO":
                    doc.innerText="These are the preseason team rankings from 538 sports. ";
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
        <div id="message" >
            <font color={fontColor}>{message} {pot[0].pot_8_2023}</font>
        <table id="table">
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
        <p onClick={()=>onClickDoc()} hidden={true} className="doc" id={`doc${pot[0].pot_8_2023}`}></p>
        
        </div>
    )
}
export default PotCard;