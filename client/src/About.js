

function About ({setIsLoading, navigate}){

    function onClick(){
        setIsLoading(true)
        navigate('/');

    }
    return(
        <div>
            <p>Welcome to Team Total Fantasy</p>

            <p>Teams are sorted by their expected season win totals and divided into 4 pots. <p/>
                
            <p>You must draft 2 teams from each pot.</p>

            <p>One point is awarded for each regular season win</p>

            <p> 5 points are awarded for making the playoffs</p>

            <p>5 points for each playoff win</p>

            <p>An additional 5 points for winning the superbowl</p>
            
            <p>Inquiries: setlockLLC@gmail.com</p>
            
            <p>Like this project and want to support it? Venmo: @SetlockProjects</p>


            </p>
            <button onClick={onClick}>Start Picking!</button>
        </div>
    )
}

export default About;