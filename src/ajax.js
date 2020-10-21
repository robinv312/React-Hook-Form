
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import instance from './axios';

const Ajax = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idfbc, setIdfbc] = useState(1)

    const handleClick = () => {
        setIdfbc(id)
    }
         
    useEffect(() => {
        const fn = async () => {
            const token = await instance.get(`${idfbc}`).then(res => {
                console.log(res)
                setPost(res.data)
            })
                .catch(err => {
                    console.log(err)
                })
        }
        fn();
    }, [idfbc])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch post</button>
            {/* <ul>
                {post.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
            <div>{post.title}</div>
        </div>
    )
}

export default Ajax;









