import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

function Body(){
    return(
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />

        </div>
  
    )
}

export default Body;