function get_matches(){
            fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
                .then(response => response.json())
                .then(data => {
                    // Get the container element where game cards will be added
                    const gamesContainer = document.getElementById('games-container');
                    
                    // Loop through each event in the "events" array
                    data.events.forEach(function(event) {
                        // Create a new game card element
                        const gameCard = document.createElement('div');
                        gameCard.classList.add('col-lg-6', 'style', 'border', '5px', 'solid', 'white', 'game-card', 'margin-right', '5px');
    
                        // Create elements for the game details
                        gameCardContent = `
                        <h3>${event.name}</h3>`;

                        gameCard.innerHTML = gameCardContent;

                        gamesContainer.appendChild(gameCard);
                    });
                })
            };

function get_scores(){
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
        .then(response => response.json())
        .then(data => {
            data.events.forEach(event => {
                
                const competitors = event.competitions[0].competitors;
            
                
                competitors.forEach(competitor => {
                    
                    if (competitor.hasOwnProperty('score')) {
                
                        const score = competitor.score;
                        console.log('Score:', score);
                    }
                });
            });
        });
    }

function get_status(){
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard')
    .then(response => response.json())
    .then(data => {
        data.events.forEach(function(event) {
            const status = event.status.type.name;
            console.log(status)
            if (status == "STATUS_SCHEDULED"){

            }
        });
    });          
}