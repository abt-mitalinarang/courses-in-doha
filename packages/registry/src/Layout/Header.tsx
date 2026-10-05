import Link from "next/link"
import { Button } from "@repo/ui/components/button"
import { ChevronDown } from "lucide-react"

export default function Header() {
  const navgations = [
    { label: "Camp", href: "", dropdown: true },
    { label: "Junior", href: "" },
    { label: "Camp", href: "" },
    { label: "Club", href: "" },
    { label: "Groups", href: "" },
  ]
  return (
    <nav className="flex w-full items-center justify-between bg-white py-4 px-2">
      <div className="flex items-center gap-1 text-3xl font-semibold tracking-tight">
        courses<span className="font-normal text-gray-400 italic">in</span>doha
      </div>
      <div className="flex items-center gap-8">
        {navgations.map((nav, index) => {
          return (
            <Link
              key={index}
              href={nav.href}
              className="flex h-7 items-center gap-1 text-2xl font-medium text-black transition-colors hover:text-gray-600"
            >
              {nav.label}
              {nav.dropdown && (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </Link>
          )
        })}
      </div>
      <div>
        <Button
          variant={"outline"}
          className="p- h-10 rounded-full border-black text-2xl text-black hover:bg-gray-100"
        >
          Talk to an Advisor
        </Button>
      </div>
    </nav>
  )
}
