function TeamCard({team,index,setNumChecked,numChecked,isCheckedArray, setIsCheckedArray, picked, setPicked}){
    //console.log(team)
    function onCbChange(){
        
        //console.log(team.selected)
        const tempArray = isCheckedArray;
        if (isCheckedArray[index]){
            tempArray[index]=false
            setIsCheckedArray(tempArray)
            setNumChecked(numChecked-1)
            let tempPicked={...picked}
            //tempPicked=picked;
            tempPicked[team.id]=false;
            setPicked(tempPicked);
            console.log(picked)


        }
        else{
            tempArray[index]=true;
            setIsCheckedArray(tempArray)
            setNumChecked(numChecked+1);
            console.log(team)
            let tempPicked={...picked}
            //tempPicked=picked;
            tempPicked[team.id]=true;
            setPicked(tempPicked);
            console.log(picked)
        }



   

    }
    


    return(
        
                <tr id={`row${team.pot_8_2023}-${index}`}>
                    <td><input onChange={()=>onCbChange()} type="checkbox" id={`cb${team.pot_8_2023}-${index}`}></input></td>
                    <td><img  class="card-image" alt={team.name} src={team.logo}/></td>
                    <td>{team.code}</td>
                    <td>{team.win_total_2023}</td>
                    <td>{team.over_juice_2023}</td>
                    <td>{team.elo_2022}</td>
                </tr>
           
    )
}
export default TeamCard;