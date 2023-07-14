function TeamCard({team,index,setNumChecked,numChecked,isCheckedArray, setIsCheckedArray}){
    console.log(team)
    function onCbChange(){
        
        //console.log(team.selected)
        const tempArray = isCheckedArray;
        if (isCheckedArray[index]){
            tempArray[index]=false
            setIsCheckedArray(tempArray)
            setNumChecked(numChecked-1)
        }
        else{
            tempArray[index]=true;
            setIsCheckedArray(tempArray)
            setNumChecked(numChecked+1);
        }



   

    }
    


    return(
        
                <tr id={`row${team.pot_8_2023}-${index}`}>
                    <td><input onChange={(e)=>onCbChange()} type="checkbox" id={`cb${team.pot_8_2023}-${index}`}></input></td>
                    <td><img  class="card-image" alt={team.name} src={team.logo}/></td>
                    <td>{team.code}</td>
                    <td>{team.win_total_2023}</td>
                    <td>{team.over_juice_2023}</td>
                    <td>{team.elo_2022}</td>
                </tr>
           
    )
}
export default TeamCard;