import React from "react";
import LegalPage from "@/app/legal/[slug]/page";

export default async function Page() {
  return <LegalPage params={Promise.resolve({ slug: "subprocessors" })} />;
}
