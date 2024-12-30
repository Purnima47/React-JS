import React from 'react'
import useFetch from '../../hooks/use-fetch'

const CommentList = () => {
    const { data, loading, error } = useFetch('https://dummyjson.com/comments');

    if (loading) {
        return <h1>Fetching Comments! Please Wait...</h1>
    }

    // SEE --> SWR

    return (
        <div>
            <h1>Comment List Page</h1>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px' }}>
                {
                    data?.comments?.length > 0 ?
                        data?.comments.map((comment, idx) =>
                            <div key={idx} style={{ marginBlockEnd: '20px', border: '1px solid white' }}>
                                <label><b>{comment?.body}</b></label><br />
                                <p>Likes are: {comment?.likes}</p>
                            </div>
                        ) : null
                }
            </ul>
        </div>
    )
}

export default CommentList
