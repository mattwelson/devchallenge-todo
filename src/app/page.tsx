import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { Header } from "@/components/layout/header";
import { TaskList } from "@/components/task/task-list";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8">
        <Header />
        <TaskList />
      </main>
    </HydrateClient>
  );
}
