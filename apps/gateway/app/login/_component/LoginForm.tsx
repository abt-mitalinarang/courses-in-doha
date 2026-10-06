"use client"

import { Card } from "@repo/ui/components/card"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { useForm } from "react-hook-form"
import {
  TLoginForm,
  loginSchema,
} from "@repo/core/schemas/gateway/login.schema"
import { useAdminLoginMutation } from "@repo/store"
import { zodResolver } from "@hookform/resolvers/zod"

export default function LoginForm() {
  const loginMutation = useAdminLoginMutation()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const OnSubmit = (data: TLoginForm) => {
    console.log(data)
    loginMutation.mutate(data)
  }
  return (
    <div className="relative z-10 mx-auto -mt-[100px] w-[90%] max-w-[480px] lg:absolute lg:top-[200px] lg:right-[120px] lg:mt-0 lg:w-[480px]">
      <Card className="rounded-[24px] bg-white p-8 lg:p-[50px]">
        <div className="mb-10 flex items-start justify-between">
          <div>
            <div className="mb-2 text-[0.9rem] text-[#555]">
              Welcome to{" "}
              <span className="font-semibold text-[#0b8bf4]">
                Courses In doha
              </span>
            </div>
            <h2 className="text-[2.5rem] font-semibold text-[#111]">Sign in</h2>
          </div>
          <div className="text-right">
            <div className="mb-1 text-[0.8rem] text-[#888]">No Account ?</div>
            <Button
              variant="link"
              className="h-auto p-0 text-[0.9rem] font-medium text-[#0b8bf4]"
            >
              Sign up
            </Button>
          </div>
        </div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col gap-2">
            <Input
              lable="Enter your username or email address"
              type="text"
              {...register("email")}
              error={errors.email?.message}
              lableStyles="text-[0.9rem] font-medium text-[#111]"
              placeholder="Username or email address"
              className="rounded-lg px-4 py-[14px] text-[0.95rem] transition-colors outline-none focus-visible:border-[#0b8bf4] focus-visible:ring-[#0b8bf4]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Input
              lable="Password"
              lableStyles="text-[0.9rem] font-medium text-[#111]"
              type="password"
              {...register("password")}
              error={errors.password?.message}
              placeholder="Password"
              className="rounded-lg px-4 py-[14px] text-[0.95rem] transition-colors outline-none focus-visible:border-[#0b8bf4] focus-visible:ring-[#0b8bf4]"
            />
            <Button
              variant={"link"}
              className="mt-1 h-auto self-end p-0 text-[0.8rem] font-medium text-[#0b8bf4]"
            >
              Forgot Password
            </Button>
          </div>

          <Button
            type="submit"
            className="mt-2 rounded-lg bg-[#0b8bf4] p-6 text-base font-semibold text-white shadow-[0_4px_12px_rgba(11,139,244,0.3)] transition-colors hover:bg-[#097ce0]"
          >
            Sign in
          </Button>
        </form>
      </Card>
    </div>
  )
}
