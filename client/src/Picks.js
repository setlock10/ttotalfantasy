import { useState, useEffect } from "react";
import PotCard from "./PotCard.js";

function Picks(){

    const [teams,setTeams] = useState([])
    

    useEffect(() => {
        fetch("./teams")
        .then((r) => r.json())
        .then((data)=>{
            setTeams(data)
            console.log(data)

        }
        )
    },[])

    //let teamCards=teams.map(team=> {return <TeamCard key={team.id} team={team}/>})
    // find max pot number
    let numberOfPots = 0;
    teams.forEach(team => {
        if (team.pot_8_2023>numberOfPots)
            numberOfPots=team.pot_8_2023;
    })

    console.log(numberOfPots)
    const hashPots=[];
    

    for (let i=1;i<=numberOfPots;i++){
        hashPots[i]=[];
        teams.forEach(team=> {
            if (team.pot_8_2023===i)
                hashPots[i].push(team)
        })

    }

    console.log(hashPots)


    let potCards = hashPots.map(pot=> {
        //console.log("pot", pot[0].id)
        return <PotCard  pot={pot} key={pot[0].pot_8_2023}/>
    })







    return(
        <div>
                             {potCards }
            {/* {teamCards} */}
            
            
        </div>
    )
}
export default Picks;