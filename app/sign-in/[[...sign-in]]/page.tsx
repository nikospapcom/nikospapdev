import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <SignIn />
    </div>
  );
}
