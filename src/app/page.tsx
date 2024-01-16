import { UserButton, SignUp } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="p-5">
      <UserButton afterSignOutUrl="/" />
      <SignUp />
    </main>
  );
}
