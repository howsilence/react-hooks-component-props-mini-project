import React from "react"
import blogData from "../data/blog"

function Article({title, date = "January 1, 1970", preview}){

    return(
            <Article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </Article>

    )
}

export default Article