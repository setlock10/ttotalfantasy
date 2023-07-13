function TeamCard({team,index,setNumChecked,numChecked}){
    console.log(team)
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
        
                <tr id={`row${team.pot_8_2023}-${index}`}>
                    <td><input onChange={(e)=>onCbChange(team)} type="checkbox" id={`cb${team.pot_8_2023}-${index}`}></input></td>
                    <td><img  class="card-image" alt={team.name} src={team.logo}/></td>
                    <td>{team.code}</td>
                    <td>{team.win_total_2023}</td>
                    <td>{team.over_juice_2023}</td>
                    <td>{team.elo_2022}</td>
                </tr>
           
    )
}
export default TeamCard;