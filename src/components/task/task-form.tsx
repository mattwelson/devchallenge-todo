import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import DoneIcon from "@/icons/Done_round.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StatusPicker } from "./pickers/status-picker";
import { Statuses } from "./status";
import { defaultEmojis, EmojiPicker } from "./pickers/emoji-picker";

const formSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
  icon: z.string().emoji(),
  status: z
    .enum(["complete", "wontdo", "progress", "default"])
    .default("default"),
});

const defaultValues = {
  name: "",
  description: "",
  icon: undefined,
  status: "default",
} satisfies Partial<z.infer<typeof formSchema>>;

export function TaskForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log({ values });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex min-h-full flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Task name"
                  data-dashlane-disabled-on-field="true"
                  autoComplete="off"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Optional description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <EmojiPicker
                emoji={field.value}
                emojis={defaultEmojis}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <StatusPicker
                status={field.value as Statuses}
                statuses={[
                  Statuses.progress,
                  Statuses.complete,
                  Statuses.wontdo,
                ]}
                onChange={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end justify-self-end">
          <Button type="submit" className="select-none">
            Create
            <Image
              src={DoneIcon as StaticImport}
              className="ml-2 size-6"
              alt=""
            />
          </Button>
        </div>
      </form>
    </Form>
  );
}
