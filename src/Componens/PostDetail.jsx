import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"





export default function PostDetail() {
    const { id } = useParams();

    const [post, setPost] = useState({})

    function fetchPost() {
        axios.get(`http://localhost:3000/posts/${id}`)
            .then(res => setPost(res.data))
            .catch(err => console.log(err))
    }

    useEffect(
        () => fetchPost(),
        [id])


    return (
        <>
            <h2>Ciao sono la pagina di dettaglio del post {post.titolo}</h2>
            <p>{post.tags}</p>
        </>
    )

}