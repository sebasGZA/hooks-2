import { use } from "react"
import { Link } from "react-router"

import { UserContext } from "../../context/UserContext"
import { Button } from "../../../components/ui/button"

export const AboutPage = () => {

  const { isAuthenticated, logout } = use(UserContext)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About Page</h1>

      <hr />

      <div className="flex flex-col gap-2">

        {
          isAuthenticated && (
            <Link
              className="hover:text-blue-500 underline text-2xl"
              to="/profile"
            >
              Profile
            </Link>
          )
        }

        {
          isAuthenticated ? (
            <Button
              variant={'destructive'}
              className="mt-4"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Link
              className="hover:text-blue-500 underline text-2xl"
              to="/login"
            >
              Login
            </Link>
          )
        }

      </div>
    </div>
  )
}