import { Button } from "@repo/ui/components/button"
import Image from "next/image"
import heroImage from "@repo/ui/assests/heroimg.avif"

interface IHeroProps {
  title: string
  subTitle: string
  CTA: { label: string; href: string }[]
  trustStats: { key: string; value: string }[]
  showStats?: boolean
}
export default function Hero({
  title,
  subTitle,
  CTA,
  trustStats,
  showStats,
}: IHeroProps) {
  return (
    <section className="relative mx-auto mt-4 mb-24 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <div className="relative flex h-[600px] w-full overflow-hidden rounded-4xl bg-[#ebe7e4]">
        <div className="relative z-10 flex h-full w-full flex-col justify-center p-12 md:w-1/2 lg:p-20">
          <h1 className="mb-6 text-5xl leading-tight font-bold text-white lg:text-7xl">
            {title}
          </h1>
          <p className="mb-10 max-w-md text-lg text-white">{subTitle}</p>
          <div className="flex flex-wrap items-center gap-4">
            {CTA?.map((item, index) => {
              return (
                <Button
                  key={index}
                  className="rounded-full bg-purple-700 px-8 py-6 text-base text-white hover:bg-purple-800"
                >
                  {item.label}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="absolute top-0 right-0 z-0 hidden h-full w-full md:block md:w-[100%]">
          <Image
            src={heroImage}
            alt="car"
            fill
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {showStats || trustStats?.length > 0 ? (
        <div className="absolute -bottom-16 left-1/2 z-20 flex w-[90%] max-w-4xl -translate-x-1/2 flex-col items-center justify-around gap-8 rounded-3xl bg-[#f8f5fd] p-8 shadow-sm md:flex-row">
          {trustStats?.map((state) => {
            return (
              <div className="text-center">
                <h3 className="mb-2 text-4xl font-semibold text-purple-700">
                  {state.value}
                </h3>
                <p className="font-medium text-gray-700">{state.key}</p>
              </div>
            )
          })}
        </div>
      ) : null}
    </section>
  )
}
