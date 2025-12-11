import PropertyPage from "@/components/page/property/PropertyPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyPage />
    </Suspense>
  );
}
