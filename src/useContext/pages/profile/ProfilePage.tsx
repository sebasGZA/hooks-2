import { use } from "react"
import { Button } from "../../../components/ui/button"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router"

export const ProfilePage = () => {

  const { user, logout } = use(UserContext)
  const navigation = useNavigate()

  const handleLogout = () => {
    logout();
    navigation('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">ProfilePage</h1>
      <hr />

      <pre className="my-4">{JSON.stringify(user?.name)}</pre>

      <Button variant={'destructive'} onClick={handleLogout}>
        Go out
      </Button>
    </div>
  )
}