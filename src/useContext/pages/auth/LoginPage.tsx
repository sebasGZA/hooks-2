import { Link } from "react-router"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">
        LoginPage
      </h1>

      <hr />

      <form className="flex flex-col gap-2 my-10">

        <Input type="number" placeholder="User ID" />

        <Button type="submit">
          LogIn
        </Button>

      </form>

      <Link to="/about">
        <Button 
          variant={"ghost"}
        > Go back to main page</Button>
      </Link>
    </div>
  )
}