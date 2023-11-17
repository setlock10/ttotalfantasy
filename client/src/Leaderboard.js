import { useState, useEffect } from "react";

function Leaderboard({teams}){

    const [leaders, setLeaders]= useState([]);
    //const [teams,setTeams] = useState([]);

    useEffect(()=>{
        fetch("./users")
        .then((r) => r.json())
        .then((data)=>{
            console.log(data)
            setLeaders(data);

            // fetch("./teams")
            // .then((r) => r.json())
            // .then((data)=>{
            //     console.log(data)
            //     setTeams(data);
            // })
        })
            
    },[])

    // 

    //     return(<td><img style= {pick.is_picked? {opacity:1}: {opacity: 0.5}}className="card-image" alt= {teams[0].code} src={teams[0].logo} /></td>)
    // }

    // let teamcards =leaders[0].picks.map((pick)=>{
    //     return (pick.name)
        

    // })
    // console.log(teamcards)

     
   
    
    let headerRow=[];
    




    let leaderCards = leaders.map((leader,index)=>{
        console.log(leader.picks)
        if(index===0){
            headerRow= leader.picks.map((pick,i)=>{
                if(i%4===0)
                    return (<th>{`Pot ${i/4+1}`}</th>)
                else
                    return (<th> </th>)
            })
        }
        
        let teamCards = leader.picks.map((pick)=>{
            let teamId=((pick.team_id%32 ===0?32:pick.team_id%32)-1)
            console.log(teamId)
            return (<td><img style= {pick.is_picked? {opacity:1}: {opacity: 0.3}}className="card-image" alt= {teams[teamId].code} src={teams[teamId].logo} /></td>)
        })

        

        return (<tr><td className="headcol">{leader.first_name} {leader.last_name}</td><td >{leader.score_total}</td> {teamCards}  </tr>   )

    })

   //Make Header Row
    // let headerRow= leaders[0].picks.map((pick,index)=>{
    //     if (index%4===0){
    //         return(<th>Pot {index}</th> )
    //     }
    //     else{
    //         return(<th></th>)
    //     }
    // })






    return(
        <div id="lb-holder">
        <table id="leaderboard">
            <tr><th>First Name </th><th>Last Name </th><th>Total Score</th>{headerRow}</tr>
        {leaderCards}
        </table>
        </div>
    )





}

export default Leaderboard;