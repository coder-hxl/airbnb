import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'

import { usePathChangeScrollTop } from './hooks'

import AppHeader from './components/app-header'

import routes from './router'

const App = memo(() => {
  usePathChangeScrollTop()

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="Loading...">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App
