import React from 'react'
import { useParams } from 'react-router-dom';

const RecipeDetailsPage = () => {
    const params = useParams();
    console.log(params);

    const { id } = params;

    return (
        <div>
            <h1>
                Recipe Details of receipe item {id}
            </h1>
        </div>
    )
}

export default RecipeDetailsPage
