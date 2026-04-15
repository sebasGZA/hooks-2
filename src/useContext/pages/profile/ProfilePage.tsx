import { use } from "react"
import { Button } from "../../../components/ui/button"
import { UserContext } from "../../context/UserContext"

export const ProfilePage = () => {

  const { user } = use(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">ProfilePage</h1>
      <hr />

      <pre className="my-4">{JSON.stringify(user?.name)}</pre>

      <Button variant={'destructive'}>
        Go out
      </Button>
    </div>
  )
}