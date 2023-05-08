import { useState } from "react";

function Post({
    user: { image, name },
    content,
    likeds: { follower, imageFollower, quantity }
}){
    let [bookmark, setBookmark] = useState("bookmark-outline"); 
    let [heart, setHeart] = useState("heart-outline"); 
    let [like, setLike] = useState(quantity);

    function changeBookmark() {
       if (bookmark === "bookmark-outline"){
        setBookmark ("bookmark");
       } else setBookmark ("bookmark-outline");
    }

    function changeHeart() {
      if (heart === "heart-outline"){
       setHeart ("heart");
       setLike (quantity+1);
      } else {
        setHeart ("heart-outline");
        setLike (quantity);
      }
    }

    function clickPost(){
      if (heart === "heart-outline") {
        setHeart ("heart");
        setLike (quantity+1);
      }
      
    }

    return(
        <div data-test="post" className="post">
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
            <img data-test="post-image" onClick={clickPost} src={`assets/img/${content}`} alt="imagem" />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon data-test="like-post" onClick={changeHeart} class={heart == "heart"? "vermelho" : ""} name={heart} ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon data-test="save-post" onClick={changeBookmark} name={bookmark}></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src= {`assets/img/${imageFollower}`} alt={follower}/>
              <div className="texto">
                Curtido por <strong>{follower}</strong> e <strong data-test="likes-number">outras {like} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Post;