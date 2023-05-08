import Suggestion from "./Suggestion";

const suggestions = [
    { image: "bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você" },
    { image: "chibirdart.svg", user: "chibirdart", reason: "Segue você" },
    { image: "razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram" },
    { image: "adorable_animals.svg", user: "adorable_animals", reason: "Segue você" },
    { image: "smallcutecats.svg", user: "smallcutecats", reason: "Segue você" },
  ];

function Suggestions(){
    return(
        <div class="sugestoes">
            <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
            </div>
            
            {suggestions.map(suggestion => (
                 <Suggestion key= {suggestion.user} image={suggestion.image} user={suggestion.user} reason={suggestion.reason} />
            ))}
        </div>
    )
}

export default Suggestions;