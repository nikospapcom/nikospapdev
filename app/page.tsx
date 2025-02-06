"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

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
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="Dashboard"
                labelIcon={<DotIcon />}
                href="/dashboard"
              >
                Dashboard
              </UserButton.Link>
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>
    </div>
  );
}
