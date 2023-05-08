function Post({
    user: { image, name },
    content,
    likeds: { follower, imageFollower, quantity }
}){
    return(
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={`assets/img/${image}`} alt={name}/>
              {name}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src={`assets/img/${content}`} alt="imagem" />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src= {`assets/img/${imageFollower}`} alt={follower}/>
              <div className="texto">
                Curtido por <strong>{follower}</strong> e <strong>outras {quantity} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Post;