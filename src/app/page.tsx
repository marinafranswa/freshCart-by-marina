import Banners from "@/components/home/Banners/Banners";
import Categories from "@/components/home/Categories/Categories";
import ContactForm from "@/components/home/ContactForm/ContactForm";
import MainSlider from "@/components/home/MainSlider/MainSlider";
import Products from "@/components/home/Products/Products";
import Vouchers from "@/components/home/Vouchers/Vouchers";
import CommonBanner from "@/components/shared/CommonBanner/CommonBanner";

export default function HomePage() {
  return (
    <>
      <MainSlider />
      <Banners />
      <Categories />
      <Vouchers />
      <Products />
      <ContactForm />
    <CommonBanner variant="emerald"/>
    </>
  );
}
