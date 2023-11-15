import { useState, useEffect } from "react";
import PotCard from "./PotCard.js";

function Picks({hasCreatedPicks,setHasCreatedPicks,setIsLoading,user, teams}){
    const [errors, setErrors] = useState([])

   // const [teams,setTeams] = useState([])
    const [total,setTotal] =useState(0)
    const [picked,setPicked] = useState({});
    const [pickIDs,setPickIDs] = useState({});
    const [isAlert,setAlert] = useState(true);
 
    useEffect(() => {
        //console.log(user)
        if(user)
        {
        // fetch("./teams")
        // .then((r) => r.json())
        // .then((data)=>{
        //     setTeams(data)
        //     console.log(user)
            let temp = {};
            let tempIDs={};
            if (user.picks){
                setIsLoading(false)
                //console.log(data)
                setHasCreatedPicks(true);

                for (let i=0; i<user.picks.length;i++){
                    if (user.picks[i].team_id%32!==0){
                        temp[user.picks[i].team_id%32]=user.picks[i].is_picked
                        tempIDs[user.picks[i].team_id%32]=user.picks[i].id
                    }

                    else{
                        temp[32]=user.picks[i].is_picked
                            tempIDs[32]=user.picks[i].id

                    }
                    //console.log(temp)

                }
                setPickIDs(tempIDs);
                setPicked(temp)

            }
            else{
                setHasCreatedPicks(false);
                        setIsLoading(false);
                        for (let i=1; i<=32;i++){
                            temp[i]=false
                        }
                
            }
            
           
            // fetch("./picks")
            //     .then((r)=>r.json())
            //     .then((data)=>{
            //        // console.log(data)
            //         let temp = {};
            //         let tempIDs={};
            //        // console.log(data)

            //         if (data.length!==0){
            //             setHasCreatedPicks(true)
            //             for (let i=0; i<data.length;i++){
            //                 if (data[i].team_id%32!==0){
            //                     temp[data[i].team_id%32]=data[i].is_picked
            //                     tempIDs[data[i].team_id%32]=data[i].id
            //                 }

            //                 else{
            //                     temp[32]=data[i].is_picked
            //                     tempIDs[32]=data[i].id

            //                 }
            //             }
            //             setIsLoading(false)
            //             setPickIDs(tempIDs)
            //         }
            //         else{
            //             setHasCreatedPicks(false);
            //             setIsLoading(false);
            //             for (let i=1; i<=32;i++){
            //                 temp[i]=false
            //             }

                       
            //         }

            //         //console.log(temp)
            //         setPicked(temp)
                    
            //     })
        // })

         }
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

    function onUpdate(){
        setIsLoading(true)
        console.log("update")
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
           // obj[i]['user_id']=user.id;
        }
        console.log(obj)

        Promise.all(obj.map(data=>(
            
            fetch(`/picks/${pickIDs[data.team_id]}`,{
                
                        method:'PATCH',
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(data)
            })
            ))).then(results=>{
                console.log(results)
                setIsLoading(false)
                setAlert(false)
                setTimeout(onAlert,2000)
            })
    }

    function onAlert(){
        setAlert(true)

    }

    


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
        console.log(obj);

        Promise.all(obj.map(data=>(
            fetch(`/picks`,{
                        method:'POST',
                        headers:{'Content-Type': 'application/json'},
                        body:JSON.stringify(data)
            })
            ))).then(results=>{
                console.log(results)
                setHasCreatedPicks(true);
                
            })
    }


    return(
        <div style={{'position': "absolute","top":"100px"}}>
            <div  hidden={isAlert} id="alert">Picks Successfully Saved</div>
            <button className="button" id="save-picks"  onClick={(hasCreatedPicks)?onUpdate:onSave} >SAVE PICKS</button>
            {potCards}   
        </div>
    )
}
export default Picks;