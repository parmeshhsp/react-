import React, { useEffect, useState } from "react";
import Post from "../screen/Post";

const URL = 'https://jsonplaceholder.typicode.com'

// use effect (callback function,[dependancy list])
/*
React functional component lifecycle hooks
mount 
    useeffect(() => {},{})
 
    update -> state /props - dependency
        useEffect(()=> ,[dependancy])

    unmount 
        useEffect(()=>{
            return()=>{
                //un mount stage
            }
        }, [])
*/
/* useEffect => initial data,declared data or data accessing from API */
function Ex5(props) {
    const [post, setPost] = useState([])

    const getPosts = async () => {          // always be indirect method
        await fetch(`${URL}/posts`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(data => data.json())
            .then(res => {
                console.log('response =', res)
                setPost(res)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        getPosts()  // async function call
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-4 text-danger">useEffect hooks</h3>
                </div>
            </div>

            <div className="row">
                {
                    post && post.map((item, index) => {
                        return (
                            <Post key={index} {...item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Ex5