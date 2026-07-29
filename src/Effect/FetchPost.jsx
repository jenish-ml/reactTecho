import { useEffect, useState } from 'react'

const FetchPost = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    },[]);

  return (
    <>
    <div>
        <h1>Posts</h1>
        <ul>
            {
                post.map(post => <li key={post.id}>{post.title}
                <h4>{post.body}</h4>
                </li>)
            }
        </ul>

        
    </div>
    </>
  )
}

export default FetchPost