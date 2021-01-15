import React from 'react'
import dateFormat from 'dateformat'
const LoadComments = props => {
    return (
        props.comments.map(comment => {
            return (
                <div key={comment.id}>
                    <p><strong>{comment.author}</strong></p>
                    <p>{comment.comment}</p>
                    <p>Rating: {comment.rating}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM TT")}</p>
                </div>
            )
        })
    );
}

export default LoadComments;