import AuthProvider from "@/context/AuthContext";

export default function RootLayoutPrivate({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
