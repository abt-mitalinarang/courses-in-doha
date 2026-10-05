"use server"
import { cookies } from "next/headers"

export async function getHeroDetails() {
  const cookiesStore = await cookies()
  const details = cookiesStore.get("heroDetails")
  if (details) {
    return JSON.parse(details?.value)
  }
}

export async function updateHeroDetailsCookie(details: any) {
  const cookiesStore = await cookies()
  cookiesStore.set({
    name: "heroDetails",
    value: JSON.stringify(details),
  })
}
