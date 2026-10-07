"use client"

import { env } from "@repo/env"
import { Button } from "@repo/ui/components/button"
import { Input } from "@repo/ui/components/input"
import { Label } from "@repo/ui/components/label"
import { Switch } from "@repo/ui/components/switch"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TPageForm, pageSchema } from "@repo/core/schemas/dashboard/page.schema"
import { useEffect } from "react"
import { useAdminUpdatePageMutation } from "@repo/store"
import { toast } from "@repo/ui/components/sonner"
interface IToolbarProps {
  pageDetails: any
}
export default function Toolbar({ pageDetails }: IToolbarProps) {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<TPageForm>({
    resolver: zodResolver(pageSchema),
  })
  const adminUpdatePagrMutation = useAdminUpdatePageMutation()
  useEffect(() => {
    console.log(pageDetails?.is_active)
    reset({
      is_active: pageDetails.is_active,
      page_name: pageDetails.page_name,
      page_long_description: pageDetails.page_long_description,
      page_meta_title: pageDetails.page_meta_title,
      page_slug: pageDetails.page_slug,
    })
  }, [pageDetails])
  console.log(errors)
  const OnSubmit = (data: TPageForm) => {
    console.log(data)
    const postData = {
      ...data,
      page_id: pageDetails.page_id,
    }
    adminUpdatePagrMutation.mutate(postData, {
      onSuccess: () => {
        toast.success("Upated Scucessfully")
        // navigate(RoutesLink.admin.dashboard)
      },
      onError: () => {
        toast.error(" failed")
      },
    })
  }
  return (
    <div className="flex w-[500px] flex-col rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="flex border-b border-gray-100">
        <Button className="flex-1 border-b-2 border-transparent px-4 py-3 text-sm font-medium text-gray-500 transition-colors hover:text-gray-700">
          Details
        </Button>
      </div>

      <form
        className="custom-scrollbar flex-1 overflow-y-auto p-5"
        onSubmit={handleSubmit(OnSubmit)}
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-end space-x-2">
              <Label htmlFor="is_active">Active</Label>
              <Controller
                name="is_active"
                control={control}
                render={({ field }) => (
                  <Switch
                    {...field}
                    id="is_active"
                    checked={Boolean(field.value)}
                    onCheckedChange={field.onChange}
                    ref={field.ref}
                    // checked={pageDetails.is_active}
                    // {...register("active")}
                  />
                )}
              />
            </div>
          </div>
          <div className="h-[200px] w-[450px] md:block">
            <img
              src={`${env.NEXT_PUBLIC_IMAGE_URL}${pageDetails.page_icon_image_url}`}
              alt={pageDetails.page_name}
              // fill
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <div>
              <Input
                lable="Page Name"
                {...register("page_name")}
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <div>
              <Input
                lable="Page Title"

                {...register("page_meta_title")}
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <div>
              <Input
                disabled
                lable="Page Slug"

                {...register("page_slug")}
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <div>
              <Input
                lable="Page Description"

                {...register("page_long_description")}
                className="mt-1.5 w-full bg-white text-sm"
              />
            </div>
            <Button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
              Update Page
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
