import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

interface DynamicPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionsDynamicPage({ params }: DynamicPageProps) {
  const { slug } = await params;
  const title = slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  return (
    <CategoryPageTemplate 
      category="Solutions"
      title={`Advanced Fraud Protection for ${title}`}
      description={`Experience the next generation of security for ${title}. Deep Sense offers industry-specific models and modular configurations for maximum efficiency.`}
      features={["Targeted Models", "Adaptive Frameworks", "No-code Workflow", "Comprehensive Auditing"]}
      ctaText="View Solution Guide"
    />
  );
}
