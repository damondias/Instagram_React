import Post from "./Post";

const posts = [
  {
    user: {
      name: "meowed",
      image: "meowed.svg",
    },
    content: "gato-telefone.svg",
    likeds: {
      follower: "respondeai",
      imageFollower: "respondeai.svg",
      quantity: 101523
    }
  },
  {
    user: {
      name: "barked",
      image: "barked.svg",
    },
    content: "dog.svg",
    likeds: {
      follower: "adorable_animals",
      imageFollower: "adorable_animals.svg",
      quantity: 99159
    }
  },
  {
    user: {
      name: "meowed",
      image: "meowed.svg",
    },
    content: "gato-telefone.svg",
    likeds: {
      follower: "respondeai",
      imageFollower: "respondeai.svg",
      quantity: 101523
    }
  },
  {
    user: {
      name: "barked",
      image: "barked.svg",
    },
    content: "dog.svg",
    likeds: {
      follower: "adorable_animals",
      imageFollower: "adorable_animals.svg",
      quantity: 99159
    }
  },
]

function Posts(){
    return(
        <div className="posts">
          {
            posts.map((post) => (
             <Post key= {post.user.name} user={post.user} content={post.content} likeds={post.likeds} />
            ))
          }
        </div>
    )
}

export default Posts;