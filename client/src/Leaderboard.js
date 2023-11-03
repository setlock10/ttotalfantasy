import { useState, useEffect } from "react";

function Leaderboard(){

    const [leaders, setLeaders]= useState([]);

    useEffect(()=>{
        fetch("./users")
        .then((r) => r.json())
        .then((data)=>{
            console.log(data)
            setLeaders(data);
        })
    },[])

    let leaderCards = leaders.map((leader)=>{

        return (<tr><td>{leader.first_name}</td><td>{leader.last_name}</td><td>{leader.score_total}</td></tr>   )

    })







    return(
        <table id="leaderboard">
            <th><td> </td><td> </td><td>Total Score</td></th>
        {leaderCards}
        </table>
    )





}

export default Leaderboard;