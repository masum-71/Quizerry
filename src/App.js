
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Statistics from './components/Statistics/Statistics';
import Subjects from './components/Subjects/Subjects';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader:  () => {
          //   return fetch ('https://openapi.programming-hero.com/api/quiz')
          // },
          element: <Subjects></Subjects>
        },
        {
          path: 'subjects',
          loader: () => {
            return fetch ('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Subjects></Subjects>
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <NotFound></NotFound>
        }
      ]
    }
  ])
  return (
    <div className="App">
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
