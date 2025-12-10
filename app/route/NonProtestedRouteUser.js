'use client';


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NonProtectedRouteUser = ({ children }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (token) {
        router.push("/admin/dashboard");
      } else {
        setHasToken(true);
      }
      setIsChecking(false);
    }
  }, [router]);

  return hasToken ? children : null;
};

export default NonProtectedRouteUser;
