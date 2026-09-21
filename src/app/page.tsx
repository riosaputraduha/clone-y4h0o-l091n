import Link from "next/link";
import { LoginCard } from "@/components/sites/login.yahoo.com/root/LoginCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col yahoo bg-white relative overflow-hidden">
      {/* Header */}
      <header className="relative z-20 w-full px-6 md:px-[5%] lg:px-[10%] py-4 flex items-center justify-between bg-white">
        <div className="flex-shrink-0">
          {/* Yahoo Logo (Purple for both desktop and mobile) */}
          <Link href="#">
            <img
              src="https://s.yimg.com/rz/p/yahoo_frontpage_en-US_s_f_p_bestfit_frontpage_2x.png"
              alt="Yahoo"
              className="h-9"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-x-6">
          <Link
            href="#"
            className="text-[#26282a] text-sm font-semibold hover:underline"
          >
            Help
          </Link>
          <Link
            href="#"
            className="text-[#26282a] text-sm font-semibold hover:underline"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-[#26282a] text-sm font-semibold hover:underline"
          >
            Privacy
          </Link>
        </div>
      </header>

      {/* Desktop Background Image (Starts below header) */}
      <div
        className="hidden md:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat mt-[68px]"
        style={{
          backgroundImage: 'url("https://tpc.googlesyndication.com/simgad/4409446291558537988")',
        }}
      />

      {/* Main Content */}
      <main className="relative z-10 flex-1 w-full max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-start md:justify-end px-6 md:px-[5%] lg:px-[10%] py-6 md:py-8">
        <LoginCard />
      </main>

      {/* Mobile Footer */}
      <footer className="md:hidden pb-8 pt-4 flex items-center justify-center gap-x-6 bg-white">
        <Link href="#" className="text-[#5b636a] text-sm hover:underline">Help</Link>
        <Link href="#" className="text-[#5b636a] text-sm hover:underline">Terms</Link>
        <Link href="#" className="text-[#5b636a] text-sm hover:underline">Privacy</Link>
      </footer>
    </div>
  );
}
