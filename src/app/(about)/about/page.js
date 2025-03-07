import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "Về chúng tôi",
  description: `Dưới đây là một số thông tin về chúng tôi`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Có dự án trong đầu? Hãy liên hệ với tôi 📞   <Link href="/contact" className="!underline underline-offset-2"   >ngay tại đây</Link> và cùng biến nó thành hiện thực! 🚀
      </h2>
    </>
  );
}
