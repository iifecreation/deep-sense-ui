import CategoryPageTemplate from "@/components/common/CategoryPageTemplate";

export default function BankingSolution() {
  return (
    <CategoryPageTemplate 
      category="Banking"
      title="Secure the future of traditional banking"
      description="Help your customers transact with trust. Deep Sense offers banks a sophisticated AI-powered fraud prevention layer that reduces losses by up to 85%."
      features={["Regulatory Compliance", "Zero Latency", "AML Ready", "Customer Trust"]}
    />
  );
}
