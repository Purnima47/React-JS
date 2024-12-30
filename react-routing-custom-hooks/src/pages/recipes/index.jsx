import React from 'react'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/use-fetch';
import useWindowResize from '../../hooks/use-window-resize';


// uselocalstorage
// useCounter
// useSessionsStorage
// useId
// useOutsideClick

const RecipeList = () => {
    const location = useLocation();

    const { data, loading, error } = useFetch('https://dummyjson.com/recipes');
    const windowSize = useWindowResize();

    if (loading) {
        return <h1>Fetching Recipes! Please Wait...</h1>
    }

    return (
        <div>
            <h1 style={{ color: windowSize.width < 768 ? 'red' : 'white' }}>Recipe List Page</h1>
            <h3>Current Window Width is {windowSize.width} and Current window height is {windowSize.height}</h3>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
                {
                    data?.recipes?.length > 0 ?
                        data?.recipes.map((recipeItem, idx) =>
                            <div key={idx} style={{ marginBlockEnd: '20px' }}>
                                <label><b>{recipeItem?.name}</b></label><br />
                                <img src={recipeItem?.image} height={200} width={200} />
                            </div>
                        ) : null
                }
            </ul>
        </div>
    )
}

export default RecipeList;
