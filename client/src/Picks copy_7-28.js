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
                    console.log(data)
                    let temp = {};
                    for (let i=0; i<data.length;i++){
                        temp[data[i].team_id]=data[i].is_picked
                    }
                    console.log(temp)
                    setPicked(temp)
                })
        })
    },[]);

    
    
    
    let numberOfPots = 0;
    teams.forEach(team => {
        if (team.pot_8_2023>numberOfPots)
        numberOfPots=team.pot_8_2023;
    })
    
    
    useEffect(()=>{
        let count=0;

        for (let i in picked ){
            if (picked[i]){
                count++;
            }
        }
            console.log(count)
            setTotal(count)
        
            console.log(picked)
            console.log("hurray")
        

    },[picked]);

    useEffect(()=>{
        console.log(total)
        if(total===16){
            let but=document.getElementById("save-picks")
            but.disabled=false
        }
        else{
            let but=document.getElementById("save-picks")
            but.disabled=true
        }
    },[total]);


    const hashPots=[];
   // console.log(numberOfPots)

    for (let i=1;i<=numberOfPots;i++){
        hashPots[i]=[];
        teams.forEach(team=> {
            if (team.pot_8_2023===i)
                hashPots[i].push(team)
        })

    }

     let potCards = hashPots.map(pot=> {
        return <PotCard  pot={pot} key={pot[0].pot_8_2023} picked={picked} setPicked={setPicked} />
    })

    function onSave(){
        let obj=[ 
            // {id: 1, position: 1}, 
            // {id: 2, position: 2}
          ]

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

        //obj.pick01=true;

        //obj[`pick${2}`]=false

        console.log(obj)

        Promise.all(obj.map(data=>(
            fetch(`/picks`,{
                        method:'POST',
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(data)
                      })
                    ))).then(results=>{
                        console.log(results)
                    })





       
    //    Promise.all(obj.map(data=>{
    //     fetch(`/picks`,{
    //         method:'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body:JSON.stringify(data)
    //       })
    //    })).then(res => {
    //     if(res.ok){
    //         console.log(res.json())
            
          
    //     }else {
    //         res.json().then(json => setErrors(json.errors))
    //     }
    // })
       
       
    //    fetch(`/picks`,{
    //     method:'POST',
    //     headers:{'Content-Type': 'application/json'},
    //     body:JSON.stringify(obj)
    //   })
    //   .then(res => {
    //       if(res.ok){
    //           console.log(res.json())
              
            
    //       }else {
    //           res.json().then(json => setErrors(json.errors))
    //       }
    //   })


    }


    return(
        <div>
            <button id="save-picks"  onClick={onSave} >SAVE PICKS</button>
            {potCards}   
        </div>
    )
}
export default Picks;