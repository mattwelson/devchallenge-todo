import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { getServerAuthSession } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import { Header } from "@/components/layout/header";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Header />
        <div>Some contents</div>
      </main>
    </HydrateClient>
  );
}
