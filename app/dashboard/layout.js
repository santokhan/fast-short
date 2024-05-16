import SideNavs from "@/blocks/dashboard/sidebar/SideNavs";
import NavBar from "@/components/navbar/NavBar";
import AuthProvider from "@/context/AuthContext";
import { twMerge } from "tailwind-merge";

export default function RootLayoutPrivate({ children }) {
  return (
    <AuthProvider>
      <NavBar fluid={true} />
      <main className={twMerge("min-h-screen pt-16", 'flex')}>
        <aside className="hidden lg:block basis-64 bg-white rounded-xl">
          <SideNavs />
        </aside>
        <div className="p-4 lg:p-8 basis-96 flex-grow">
          {children}
        </div>
      </main >
    </AuthProvider>
  );
}
