import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    // clear login state
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('currentUser')
    // navigate within the SPA instead of forcing a full reload
    navigate('/')
  }, [navigate])

  return null
}