import { Link, useNavigate } from "react-router"
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import React, { useContext, useState } from "react"
import { UserContext } from "../../context/UserContext"
import { toast } from "sonner"

export const LoginPage = () => {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState('');

  const navigation = useNavigate()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = login(+userId)
    if (!result) {
      toast.error('User not found');
      return;
    }

    navigation('/profile');
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1 className="text-4xl font-bold">
        LoginPage
      </h1>

      <hr />

      <form className="flex flex-col gap-2 my-10" onSubmit={handleLogin}>

        <Input
          type="number"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

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