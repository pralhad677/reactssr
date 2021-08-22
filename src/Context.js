import React from 'react'
export const Context = React.createContext()

export let AuthContext = ({ children }) => {
  
  const [state, setState] = React.useState<boolean>(true)
  console.log('auth in Context', state)
  
  let pp = React.useMemo(() => {
    console.log('bckajs')
    return {
      auth:state,
      setAuth:setState
    }
  }, [state,setState])
  console.log('pp',pp)
  
  return (
    <Context.Provider value={pp }>
        {children}
    </Context.Provider>
  )
}