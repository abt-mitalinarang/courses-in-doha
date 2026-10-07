export async function POST(request: Request) {
  try {
    return new Response(null, { status: 204 })
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : "Unexpected error"

    return new Response(message, { status: 500 })
  }
}
