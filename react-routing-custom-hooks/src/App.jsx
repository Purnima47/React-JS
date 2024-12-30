import { useState } from 'react'
import './App.css'
import RecipeList from './pages/recipes'
import CommentList from './pages/comments'
import { Link, Route, Routes, useNavigate, useRoutes } from 'react-router-dom'
import RecipeDetailsPage from './pages/recipe-details'
import NotFoundPage from './pages/not-found'
import Layout from './component/layout'
import ReactHookFormEx from './pages/react-hook-form-example'
import Hooks from './pages/hooks'
import UseMemoExample from './pages/use-memo-example'
import UseCallBackEx from './pages/use-callback-example'
import ReactQueryDemo from './pages/react-query'

function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home', element: <Layout />,
      children: [
        {
          path: 'recipe-list', element: <RecipeList />
        },
        {
          path: 'comment-list', element: <CommentList />
        },
        {
          path: 'recipe-list/:id', element: <RecipeDetailsPage />
        }
      ]
    },
    {
      path: '*', element: <NotFoundPage />
    },
    {
      path: '/react-hook-form',
      element: <ReactHookFormEx />
    },
    {
      path: '/hooks',
      element: <Hooks />
    },
    {
      path: '/memo',
      element: <UseMemoExample />
    },
    {
      path: '/callback',
      element: <UseCallBackEx />
    },
    {
      path: '/react-query-demo',
      element: <ReactQueryDemo />
    }
  ])

  return element;
}

function App() {
  const navigate = useNavigate();

  return (
    <>
      {/* <h1>React Routing, Custom Hooks</h1>

      <div style={{ marginBottom: '20px' }}>
        <Link to={'/home/recipe-list'}>Alernative way of navigating to recipe list page</Link>
      </div>

      <button onClick={() => navigate('/home/recipe-list')} style={{ background: 'black' }}>Navigate to Recipe List Page</button>
      <button onClick={() => navigate('/home/comment-list')} style={{ background: 'black' }}>Navigate to Comments List Page</button> */}

      {/* <Routes>
        <Route path='/home' element={<Layout />}>
          <Route path='recipe-list' element={<RecipeList />} />
          <Route path='comment-list' element={<CommentList />} />
          <Route path='recipe-list/:id' element={<RecipeDetailsPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes> */}

      <CustomRoutes />

    </>
  )
}

export default App