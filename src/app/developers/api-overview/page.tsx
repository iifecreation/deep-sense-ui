import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function DevelopersAPI() {
  return (
    <CategoryPageTemplate 
      category="Developers"
      title="Build with a developer-first AI engine"
      description="Ship with confidence using our developer-centric API and SDKs. Designed for low-friction integration and high-performance ingestion."
      features={["REST API", "gRPC Support", "Sandbox Environment", "Rich SDKs"]}
      ctaText="View API Docs"
    />
  );
}
