import EffectSection from "@/components/IntroPage/Effect/EffectSection";
import IntroSection from "@/components/IntroPage/Intro/IntroSection";
import RecommendSection from "@/components/IntroPage/Recommend/RecommendSection";

function IntroPage() {
  return (
    <main id="introPage">
      <IntroSection />
      <RecommendSection />
      <EffectSection />
    </main>
  );
}

export default IntroPage;
