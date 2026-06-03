import MainLayout from "@/components/layout/main-layout";
import CheckoutContent from "@/components/checkout/checkout-content";

export const metadata = {
  title: "Checkout | Hunger Express Peshawar",
  description: "Complete your order from Hunger Express",
};

export default function CheckoutPage() {
  return (
    <MainLayout>
      <div className="py-16 bg-secondary">
        <CheckoutContent />
      </div>
    </MainLayout>
  );
}
