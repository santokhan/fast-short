import NavBar from "@/components/navbar/NavBar";

export default function RootLayoutPrivate({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
