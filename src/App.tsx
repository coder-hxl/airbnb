import React, { memo, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import routes from './router'
import { RootState } from './store'
import { usePathChangeScrollTop } from './hooks'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import AppLogin from './components/app-login'

const App = memo(() => {
  const { loginConfig } = useSelector((state: RootState) => ({
    loginConfig: state.main.loginConfig
  }))
  const { showLogin } = loginConfig

  usePathChangeScrollTop()

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="content">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      {showLogin && <AppLogin />}
    </div>
  )
})

export default App
