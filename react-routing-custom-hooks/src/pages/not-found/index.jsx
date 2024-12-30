import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <h3>This page doesn't exists</h3>
            <Link to={'/recipe-list'} >Go to Recipe List Page</Link>
        </div>
    )
}

export default NotFoundPage
