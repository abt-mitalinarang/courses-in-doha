import { Card } from "@repo/ui/components/card"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import LoginForm from "./_component/LoginForm"

export default function LoginPage(): React.JSX.Element {
  return (
    <div className="min-h-screen w-screen bg-[#f7f9fa] font-sans relative flex flex-col">
      <div className="h-[40vh] lg:h-[55vh] bg-[#0b8bf4] rounded-b-[40px] relative text-white px-8 lg:px-20 py-10">
        <div className="flex justify-between max-w-[1200px] mx-auto relative">
          <div className="max-w-[400px] mt-5">
            <div className="font-bold text-lg mb-14">Courses In Doha</div>
            <h1 className="text-4xl lg:text-[2.8rem] leading-[1.2] font-bold mb-5">
              Sign in to
              <br />
              Courses in doha
            </h1>
            <p className="text-[0.9rem] leading-[1.6] opacity-90 max-w-[350px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          {/* <div className="absolute right-[450px] top-[40px] hidden lg:block">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-riding-rocket-4993627-4161821.png"
              alt="Woman on rocket"
              className="w-[350px] h-auto animate-[float_4s_ease-in-out_infinite]"
            />
          </div> */}
        </div>
      </div>
      <LoginForm />
    </div>
  )
}
