function TeamCard({team}){
    console.log(team)
    

    return(
        
                <tr>
                    <td><input type="checkbox"></input></td>
                    <td><img  class="card-image" alt={team.name} src={team.logo}/></td>
                    <td>{team.code}</td>
                    <td>{team.win_total_2023}</td>
                    <td>{team.over_juice_2023}</td>
                    <td>{team.elo_2022}</td>
                </tr>
           
    )
}
export default TeamCard;