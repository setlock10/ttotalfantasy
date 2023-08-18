

function About ({setIsLoading, navigate}){

    function onClick(){
        setIsLoading(true)
        navigate('/');

    }
    return(
        <div style={{'position': "relative","top":"100px"}}>
            <p>Welcome to Team Total Fantasy</p>
<ul>
            <li>Teams are sorted by their expected season win totals and divided into 4 pots. </li>
                
            <li>You must draft 2 teams from each pot.</li>

            <li>One point is awarded for each regular season win</li>

            <li> 5 points are awarded for making the playoffs</li>

            <li>5 points for each playoff win</li>

            <li>An additional 5 points for winning the superbowl</li>

            <li>Set Your Line-Up Before 1:00pm Eastern Time on September 10, 2023</li>
            <li>There will be scoring updates throught the season.</li>
            
</ul>
            <p>Inquiries: setlockLLC@gmail.com</p>
            
            <p>Like this project and want to support it? Venmo: @SetlockProjects</p>

            
            <button onClick={onClick}>Start Picking!</button>
        </div>
    )
}

export default About;