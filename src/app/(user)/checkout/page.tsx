import CheckoutForm from "@/components/checkout/CheckoutForm/CheckoutForm";


interface CheckoutPageProps{
    searchParams:{
    id:string
    }
}

export default async function CheckoutPage({ searchParams }:CheckoutPageProps) {
    const { id } = await searchParams
    

  return (
    <section className="py-12">
      <div className="max-w-2xl mx-auto">
      <CheckoutForm cartId={id}/>
      </div>
    </section>
  );
}
