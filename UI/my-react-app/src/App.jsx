import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Employees, { action as employeeAction, loader as employeeLoader } from './pages/Employees';
import Home from './pages/Home'
import Vendors, { action as vendorAction, loader as vendorLoader } from './pages/Vendors';
import Emails, { loader as emailsLoader } from './pages/Emails';
import HomeLayout from './pages/HomeLayout';

const router = createBrowserRouter([
  {
    path: '/', element: <HomeLayout />, children: [
      {
        index: true, element: <Home/>
      },
      {
        path: '/employees', element: <Employees />, loader: employeeLoader, action: employeeAction
      },
      { id: 'vendors', loader: vendorLoader,  children: [
        {
          path: '/vendors', element: <Vendors />, action: vendorAction
        },
        {
          path: '/emails', element: <Emails />, loader: emailsLoader
        }
      ]}
    ]
  },
])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;
