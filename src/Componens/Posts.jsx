import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Posts() {
    const [posts, setPosts] = useState([]);
    function fetchPosts() {
        axios.get("http://localhost:3000/posts")
            .then((res) => {
                setPosts(res.data)


            })
    };

    useEffect(fetchPosts, []);






    return (

        <>
            {
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.titolo}</h2>
                        <img src={post.img} alt={post.titolo} />
                        <br />
                        <Link to={`/posts/${post.id}`}>Dettaglio</Link>
                    </div>
                ))
            }
        </>


    )
}