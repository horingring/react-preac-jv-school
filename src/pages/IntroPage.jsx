import IntroSection from "@/components/IntroPage/Intro/IntroSection";
import RecommendSection from "@/components/IntroPage/Recommend/RecommendSection";
import EffectSection from "@/components/IntroPage/Effect/EffectSection";
import CompositionSection from "@/components/IntroPage/Composition/CompositionSection";
import CommentSection from "@/components/IntroPage/Comment/CommentSection";

function IntroPage() {
  return (
    <main id="introPage">
      <IntroSection />
      <RecommendSection />
      <EffectSection />
      <CompositionSection />
      <CommentSection />
    </main>
  );
}

export default IntroPage;
