import { lazy } from 'react'
import { RouteObject, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/home'))
const Room = lazy(() => import('@/views/room'))
const Area = lazy(() => import('@/views/area'))
const User = lazy(() => import('@/views/user'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/room/:roomId',
    element: <Room />
  },
  {
    path: '/area/:areaName',
    element: <Area />
  },
  {
    path: '/user/:userId',
    element: <User />
  }
]

export default routes
