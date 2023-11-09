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




    let leaderCards = leaders.map((leader)=>{
        console.log(leader.picks)
        
        let teamCards = leader.picks.map((pick)=>{
            let teamId=((pick.team_id ===32?32:pick.team_id%32)-1)
            return (<td><img style= {pick.is_picked? {opacity:1}: {opacity: 0.5}}className="card-image" alt= {teams[teamId].code} src={teams[teamId].logo} /></td>)
        })

        

        return (<tr><td>{leader.first_name}</td><td>{leader.last_name}</td><td>{leader.score_total}</td> {teamCards}  </tr>   )

    })







    return(
        <table id="leaderboard">
            <th><td> </td><td> </td><td>Total Score</td></th>
        {leaderCards}
        </table>
    )





}

export default Leaderboard;