"use client"
import { IHeroDetails } from "@repo/core"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Label } from "@repo/ui/components/label"
import { Switch } from "@repo/ui/components/switch"
import { ChevronUp } from "lucide-react"
import React, { SetStateAction, useEffect } from "react"
interface IToolbarProps {
  heroDetails: IHeroDetails
  setHeroDetails: React.Dispatch<SetStateAction<IHeroDetails>>
  showStats: boolean
  setShowStats: (showStats: boolean) => void
}
export default function Toolbar({
  heroDetails,
  setHeroDetails,
  showStats,
  setShowStats,
}: IToolbarProps) {
  useEffect(() => {
    if (!showStats) {
      setHeroDetails({
        ...heroDetails,
        trustStats: [],
      })
    }
  }, [showStats])
  return (
    <div className="flex w-[340px] flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex border-b border-gray-100">
        <Button className="flex-1 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
          Details
        </Button>
      </div>

      <div className="custom-scrollbar flex-1 overflow-y-auto p-5">
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex w-fit rounded bg-gray-100 p-0.5">
              <Button className="rounded bg-white px-3 py-1 text-[10px] font-medium text-gray-900 shadow-sm">
                En
              </Button>
              <Button className="rounded px-3 py-1 text-[10px] font-medium text-gray-500 hover:text-gray-900">
                Ar
              </Button>
            </div>
            <textarea
              rows={6}
              className="w-full resize-none rounded-md border border-gray-200 px-3 py-2 text-[11px] leading-relaxed text-gray-700 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 focus:outline-none"
              defaultValue="Discover Ashraf & Co., a trusted business group with decades of quality leadership, strong customer support, and expertise across healthcare, technology, media, imaging, and industrial solutions."
            ></textarea>
          </div>

          <div className="space-y-4">
            <div>
              <Input
                lable="Title"
                value={heroDetails?.title || ""}
                onChange={(e) =>
                  setHeroDetails({ ...heroDetails, title: e.target.value })
                }
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <div>
              <Input
                lable="Subtitle"
                value={heroDetails?.subTitle || ""}
                onChange={(e) =>
                  setHeroDetails({
                    ...heroDetails,
                    subTitle: e.target.value,
                  })
                }
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {new Array(2).fill(" ").map((_, index) => {
                return (
                  <div className="flex items-end gap-2">
                    <div className="flex-1">
                      <Input
                        lable="Lable"
                        value={heroDetails?.CTA?.[index]?.label || ""}
                        onChange={(e) => {
                          setHeroDetails((prev) => ({
                            ...prev,
                            CTA:
                              prev?.CTA?.length > 0
                                ? prev.CTA?.map((cta, i) =>
                                    index === i
                                      ? { ...cta, label: e.target.value }
                                      : cta
                                  )
                                : Array(2)
                                    .fill("")
                                    .map((_, i) =>
                                      i === index
                                        ? {
                                            label: e.target.value,
                                            href: "",
                                          }
                                        : {
                                            label: "",
                                            href: "",
                                          }
                                    ),
                          }))
                        }}
                        className="mt-1 h-8 w-full bg-white text-xs"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        lable="Href"
                        value={heroDetails?.CTA?.[index]?.href || ""}
                        onChange={(e) => {
                          setHeroDetails((prev) => ({
                            ...prev,
                            CTA:
                              prev?.CTA?.length > 0
                                ? prev.CTA.map((cta, i) =>
                                    index === i
                                      ? { ...cta, href: e.target.value }
                                      : cta
                                  )
                                : Array(2)
                                    .fill("")
                                    .map((_, i) =>
                                      i === index
                                        ? {
                                            label: "",
                                            href: e.target.value,
                                          }
                                        : {
                                            label: "",
                                            href: "",
                                          }
                                    ),
                          }))
                        }}
                        className="mt-1 h-8 w-full bg-white text-xs"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="trustStats">Trust Stats</Label>
              <Switch
                id="trustStats"
                checked={showStats}
                onCheckedChange={setShowStats}
              />
            </div>
          </div>
          {showStats && (
            <div className="space-y-4 border-t border-gray-100 pt-4">
              {new Array(2).fill(" ").map((_, index) => {
                return (
                  <div className="flex items-end gap-2" key={index}>
                    <div className="flex-1">
                      <Input
                        lable="key"
                        value={heroDetails?.trustStats?.[index]?.key || ""}
                        onChange={(e) => {
                          setHeroDetails((prev) => ({
                            ...prev,
                            trustStats:
                              prev?.trustStats?.length > 0
                                ? prev.trustStats?.map((stats, i) =>
                                    index === i
                                      ? { ...stats, key: e.target.value }
                                      : stats
                                  )
                                : Array(2)
                                    .fill("")
                                    .map((_, i) =>
                                      i === index
                                        ? {
                                            key: e.target.value,
                                            value: "",
                                          }
                                        : {
                                            key: "",
                                            value: "",
                                          }
                                    ),
                          }))
                        }}
                        className="mt-1 h-8 w-full bg-white text-xs"
                      />
                    </div>
                    <div className="flex-1">
                      <Input
                        lable="Value"
                        value={heroDetails?.trustStats?.[index]?.value || ""}
                        onChange={(e) => {
                          setHeroDetails((prev) => ({
                            ...prev,
                            trustStats:
                              prev?.trustStats?.length > 0
                                ? prev.trustStats.map((stats, i) =>
                                    index === i
                                      ? { ...stats, value: e.target.value }
                                      : stats
                                  )
                                : Array(2)
                                    .fill("")
                                    .map((_, i) =>
                                      i === index
                                        ? {
                                            key: "",
                                            value: e.target.value,
                                          }
                                        : {
                                            key: "",
                                            value: "",
                                          }
                                    ),
                          }))
                        }}
                        className="mt-1 h-8 w-full bg-white text-xs"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
          <div className="border-t border-gray-100 pt-6">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-900">Page SEO</h3>
              <ChevronUp className="h-4 w-4 text-gray-500" />
            </div>
            <p className="mb-5 text-[11px] text-gray-500">
              Metadata used by search engines
              <br />
              and social previews.
            </p>
            <div>
              <label className="mb-2 block text-xs font-semibold text-gray-700">
                Page Meta Title
              </label>
              <div className="mb-2 flex w-fit rounded bg-gray-100 p-0.5">
                <Button className="rounded bg-white px-3 py-1 text-[10px] font-medium text-gray-900 shadow-sm">
                  En
                </Button>
                <Button className="rounded px-3 py-1 text-[10px] font-medium text-gray-500 hover:text-gray-900">
                  Ar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
