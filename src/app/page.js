import { blogs } from "@/.velite/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";

export default function Home() {


  return (
    <div className="flex flex-col items-center justify-center">
      {/* <HomeCoverSection blogs={blogs} /> */}
      <gecko-coin-price-marquee-widget locale="en" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
      <FeaturedPosts blogs={blogs} />
      <RecentPosts blogs={blogs} />

    </div>
  )
}
