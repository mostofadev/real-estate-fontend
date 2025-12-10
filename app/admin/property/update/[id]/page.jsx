"use client";

import React from "react";
import UpdateProperty from "@/components/admin/property/UpdateProperty";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const propertyId = params.id;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Property</h1>
      <UpdateProperty propertyId={propertyId} />
    </div>
  );
}
