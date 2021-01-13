import React from 'react'
import dateFormat from 'dateformat'
const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p>Author: {comment.author}</p>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            )
        })
    );
}

export default LoadComments;