"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Spinner from "@/components/ui/spinner";

export default function ProtectedRoute({ children }) {
  const user = useSelector((state) => state.auth.user);
  const isAuthChecked = useSelector((state) => state.auth.isAuthChecked);
  const router = useRouter();
  const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isAuthChecked && !user) {
      router.push("/login");
    }
  }, [mounted, isAuthChecked, user, router]);

  if (!mounted || !isAuthChecked) return <Spinner />;

  return children;
}
