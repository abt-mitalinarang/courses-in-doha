"use client"
import Toolbar from "@/components/tool-bar"
import { IHeroDetails } from "@repo/core"
import { Hero } from "@repo/registry"
import { getHeroDetails, updateHeroDetailsCookie } from "@repo/registry/actions"
import { Button } from "@repo/ui/components/button"
import { toast } from "@repo/ui/components/sonner"
import {
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Globe,
  GripHorizontal,
  Layers,
  Layout,
  LayoutTemplate,
  Monitor,
  Search,
  Sidebar,
  Sun,
  Trash2,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function Page() {
  const [heroDetails, setHeroDetails] = useState<IHeroDetails>({
    title: "",
    subTitle: "",
    CTA: [],
    trustStats: [],
  })
  const [showStats, setShowStats] = useState(
    (heroDetails?.trustStats?.length || 0) > 0 ? true : false
  )
  const getDetails = async () => {
    const details = await getHeroDetails()
    setHeroDetails(details)
  }
  useEffect(() => {
    getDetails()
  }, [])
  const updateCookies = async () => {
    try {
      await updateHeroDetailsCookie(heroDetails)
      toast.success("Page published successfully")
    } catch (error) {
      toast.error("Failed to publish page")
    }
  }
  const SectionActions = () => {
    const actions = [
      {
        Icon: ArrowUp,
        className:
          "flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white shadow-sm hover:bg-gray-50",
        iconClass: "h-3 w-3 text-gray-500",
      },
      {
        Icon: ArrowDown,
        className:
          "flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white shadow-sm hover:bg-gray-50",
        iconClass: "h-3 w-3 text-gray-500",
      },
      {
        Icon: Trash2,
        className:
          "flex h-6 w-8 items-center justify-center rounded bg-red-500 text-white shadow-sm hover:bg-red-600",
        iconClass: "h-3 w-3",
      },
    ]

    return (
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
        {actions.map(({ Icon, className, iconClass }, index) => (
          <Button key={index} className={className}>
            <Icon className={iconClass} />
          </Button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex h-screen w-full flex-col bg-[#F9FAFB]">
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LayoutTemplate className="h-4 w-4" />
          <span className="mx-1 text-gray-300">|</span>
          <span className="cursor-pointer hover:text-gray-900">Dashboard</span>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="cursor-pointer hover:text-gray-900">Pages</span>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="font-medium text-gray-900">Custom</span>
        </div>
        <div className="flex items-center gap-2">
          <Button className="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
            <Sun className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="flex shrink-0 items-center justify-between bg-white px-6 py-5">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Edit Page</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your website pages, SEO, and content structures. Total 8
            sections.
          </p>
        </div>
        <Button
          onClick={updateCookies}
          className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
        >
          Publish Page
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex shrink-0 items-center justify-between border-t border-b border-gray-200 bg-white px-6 py-2">
        <div className="flex items-center gap-2">
          <Button className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-50">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-50">
            <Layout className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-3">
          <Button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <Monitor className="h-4 w-4 text-gray-400" />
            <span>Desktop</span>
            <span className="text-xs text-gray-400">1440px</span>
            <ChevronDown className="h-3 w-3 text-gray-400" />
          </Button>
          <Button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <Search className="h-4 w-4 text-gray-400" />
            <span>50%</span>
            <ChevronDown className="h-3 w-3 text-gray-400" />
          </Button>
          <Button className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
            <Globe className="h-4 w-4 text-gray-400" />
            <span>English</span>
            <ChevronDown className="h-3 w-3 text-gray-400" />
          </Button>
        </div>
        <div>
          <Button className="rounded-md border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-50">
            <Sidebar className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 gap-6 p-6">
        <div className="flex w-64 flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
          <div className="border-b border-gray-100 px-4 py-3">
            <h2 className="text-center text-sm font-semibold text-gray-800">
              Sections
            </h2>
          </div>
          <div className="border-b border-gray-100 p-4">
            <div className="mb-2 text-xs font-medium text-gray-700">
              Search Sections
            </div>
            <div className="relative">
              <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sections..."
                className="w-full rounded-md border border-gray-200 py-2 pr-3 pl-9 text-sm focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
              />
            </div>
          </div>
          <div className="custom-scrollbar flex-1 overflow-y-auto p-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-300 bg-gray-100 p-4 text-center transition-colors">
                <Layers className="mb-2 h-5 w-5 text-gray-400" />
                <span className="text-[10px] leading-tight font-medium text-gray-600">
                  Hero
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="custom-scrollbar flex flex-1 flex-col overflow-y-auto rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-amber-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-[10px] font-bold tracking-wider text-gray-400">
              DESKTOP - 1440PX - EN - 50%
            </div>
          </div>

          <div className="space-y-4">
            <div className="group relative overflow-hidden rounded-lg border-2 border-green-500 shadow-sm">
              <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                <Button className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <GripHorizontal className="h-3 w-3 text-gray-500" />
                </Button>
                <span className="rounded border border-green-200 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  hero
                </span>
              </div>
              <SectionActions />
              <Hero
                title={heroDetails?.title}
                subTitle={heroDetails?.subTitle}
                CTA={heroDetails?.CTA}
                trustStats={heroDetails?.trustStats}
                showStats={showStats}
              />
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                <Button className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <GripHorizontal className="h-3 w-3 text-gray-500" />
                </Button>
                <span className="rounded border border-green-200 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  custom_html
                </span>
              </div>
              <SectionActions />
              <div className="py-20 text-center">
                <h2 className="inline-block border-b-2 border-red-500 pb-1 text-2xl font-bold text-gray-900">
                  About Us
                </h2>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <div className="absolute top-2 left-2 z-10 flex items-center gap-2">
                <Button className="flex h-6 w-6 items-center justify-center rounded border border-gray-200 bg-white shadow-sm hover:bg-gray-50">
                  <GripHorizontal className="h-3 w-3 text-gray-500" />
                </Button>
                <span className="rounded border border-green-200 bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                  content_split
                </span>
              </div>
              <SectionActions />
              <div className="flex h-56 gap-6 bg-[#FAF6F3] p-8">
                <div className="h-full w-2/5 overflow-hidden rounded-lg bg-gray-200">
                  <Hero
                    title={heroDetails?.title || ""}
                    subTitle={heroDetails?.subTitle || ""}
                    CTA={heroDetails?.CTA || []}
                    trustStats={heroDetails?.trustStats || []}
                    showStats={showStats}
                  />
                </div>
                <div className="flex w-3/5 flex-col justify-center">
                  <h3 className="mb-3 text-base leading-tight font-bold text-[#8B2323]">
                    Shaped By Experience. Driven By What's Next.
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    At its core, ASHRAF & CO. LTD. has always believed that
                    meaningful growth is built on trust, consistency, and strong
                    relationships. It is a story of evolution, resilience, and
                    long-term thinking...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toolbar
          heroDetails={heroDetails}
          setHeroDetails={setHeroDetails}
          showStats={showStats}
          setShowStats={setShowStats}
        />
      </div>
    </div>
  )
}
