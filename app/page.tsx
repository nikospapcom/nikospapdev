import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <SignedOut>
          <h1 className="text-center mb-4 text-2xl">
            Welcome, join our waitlist!
          </h1>
        </SignedOut>
        <SignedIn>
          <h1 className="text-center mb-4 text-2xl">You are signed in!</h1>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
