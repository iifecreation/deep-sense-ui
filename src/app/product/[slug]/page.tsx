import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

interface DynamicPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  return (
    <CategoryPageTemplate 
      category="Product"
      title={title}
      description={`Discover how our ${title} capabilities empower your platform to stay ahead of sophisticated fraud risks, with enterprise-grade performance and precision.`}
      features={["Real-time Intelligence", "Adaptive Learning", "Unified API", "Operational Flow"]}
    />
  );
}
