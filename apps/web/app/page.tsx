import { Hero } from "@repo/registry"
import { getHeroDetails } from "@repo/registry/actions"
export default async function Page() {
  const details = await getHeroDetails()

  return (
    <div className="flex min-h-svh w-full flex-col pb-32">
      <Hero
        title={details?.title}
        subTitle={details?.Subtitle}
        CTA={details?.CTA}
        trustStats={details?.trustStats}
      />
    </div>
  )
}
