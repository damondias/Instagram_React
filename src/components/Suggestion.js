function Suggestion({image, user, reason}){
    return(
        <div class="sugestao">
        <div class="usuario">
          <img src={`assets/img/${image}`} alt = {user}/>
          <div class="texto">
            <div class="nome">{user}</div>
            <span class="razao">{reason}</span>
          </div>
        </div>
  
        <div class="seguir">Seguir</div>
      </div>
    )
}

export default Suggestion;