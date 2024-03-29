import IntroSection from "@/components/IntroPage/Intro/IntroSection";
import RecommendSection from "@/components/IntroPage/Recommend/RecommendSection";
import EffectSection from "@/components/IntroPage/Effect/EffectSection";
import CompositionSection from "@/components/IntroPage/Composition/CompositionSection";

function IntroPage() {
  return (
    <main id="introPage">
      <IntroSection />
      <RecommendSection />
      <EffectSection />
      <CompositionSection />
    </main>
  );
}

export default IntroPage;
