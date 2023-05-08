import { useState } from "react";
import Suggestions from "./Suggestions";

function Sidebar(){
    let [name, setName] = useState("catanacomics"); 
    let [image, setImage] = useState("assets/img/catanacomics.svg");
    
    function changeName() {
        let newName = prompt('Qual é o seu nome?');
        if (newName) setName(newName);
    }

    function changeImage(){
        let newImage = prompt('Digite a nova imagem');
        if (newImage) setImage(newImage);
    }

    return(
        <div class="sidebar">
            <div class="usuario">
                <img onClick={changeImage} src={image} alt="imagem de perfil"/>
                <div class="texto">
                <span>
                    <strong>{name}</strong>
                    <ion-icon onClick={changeName} name="pencil"></ion-icon>
                </span>
                </div>
            </div>
            
            <Suggestions />

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

export default Sidebar;