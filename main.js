
function createGame(player1, hour, player2){
return `
                    <li>
                         <img src="./assets/${player1}.svg" alt="bandeira da ${player1}">
                         <strong>${hour}</strong>
                         <img src="./assets/${player2}.svg" alt="bandeira do ${player2}">
                    </li>
`
}


function createCard(date, day, games) {
  return `       
        <div class="card">
              <h2> ${date} <span>${day}</span></h2>

              <ul>
            ${games}  
              </ul>  
        </div>
              `
}
document.querySelector("#cards").innerHTML = 
      
          createCard(
             "21/11",
             "segunda",
             createGame("brasil", "08:00", "camaroes") +
             createGame("hungria","13:00","argentina") +
             createGame("colombia", "20:00", "japao")
           ) +
            createCard(
              "24/11",
              "quinta",
              createGame("suiça", "7:00", "camaroes") +
                createGame("portugal", "13:00", "gana") +
                createGame("brasil", "16:00", "servia")
            ) +
             createCard(
               "28/11",
               "segunda",
               createGame("coreia", "10:00", "gana") +
                 createGame("brasil", "13:00", "suiça") +
                 createGame("portugal", "16:00", "uruguai")
             ) 
