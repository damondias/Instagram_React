function Story({image, user}){
    return (
        <div className="story">
            <div className="imagem">
                <img src={image} alt={user}/>
            </div>
            <div className="usuario">
                {user}
            </div>
      </div>

    )
}

export default Story;