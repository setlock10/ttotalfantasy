import { useState, useEffect } from "react";
import PotCard from "./PotCard.js";

function Picks({user}){
    const [errors, setErrors] = useState([])

    const [teams,setTeams] = useState([])
    const [total,setTotal] =useState(0)
    const [picked,setPicked] = useState({});

    useEffect(() => {
        fetch("./teams")
        .then((r) => r.json())
        .then((data)=>{
            setTeams(data)
            fetch("./picks")
                .then((r)=>r.json())
                .then((data)=>{
                   // console.log(data)
                    let temp = {};

                    if (data.length!==0){
                        for (let i=0; i<data.length;i++){
                            temp[data[i].team_id]=data[i].is_picked
                        }
                    }
                    else{
                        for (let i=1; i<=32;i++){
                            temp[i]=false
                        }
                    }

                    //console.log(temp)
                    setPicked(temp)
                })
        })
    },[]);

          
    
    useEffect(()=>{
        let count=0;

        for (let i in picked ){
            if (picked[i]){
                count++;
            }
        }
           // console.log(count)
            setTotal(count)
        
           // console.log(picked)
           // console.log("hurray")
        

    },[picked]);

    useEffect(()=>{
        //console.log(total)
        if(total===16){
            let but=document.getElementById("save-picks")
            but.disabled=false
        }
        else{
            let but=document.getElementById("save-picks")
            but.disabled=true
        }
    },[total]);
    
    let pot=[];

    let potCards = teams.map((team,index)=>{
       
        pot.push(team)
       
        if (((index+1)%4)===0){
             let tempPot=[...pot]
            pot=[];
            return <PotCard  pot={tempPot} key={tempPot[0].pot_8_2023} picked={picked} setPicked={setPicked} />
            }

    })


    function onSave(){
        let obj=[]

        for(let i =0;i<32;i++){
            obj[i]={};
            obj[i]['team_id']=i+1;
            if(picked[i+1]){
                obj[i]['is_picked']=picked[i+1];
            }
            else{
                obj[i]['is_picked']=false
            }
            obj[i]['user_id']=user.id;
        }

        Promise.all(obj.map(data=>(
            fetch(`/picks`,{
                        method:'POST',
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(data)
            })
            ))).then(results=>{
                console.log(results)
            })
    }


    return(
        <div>
            <button id="save-picks"  onClick={onSave} >SAVE PICKS</button>
            {potCards}   
        </div>
    )
}
export default Picks;