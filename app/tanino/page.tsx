import TaninoCTA from "@/components/tanino/TaninoCTA";
import TaninoFormula from "@/components/tanino/TaninoFormula";
import TaninoHero from "@/components/tanino/TaninoHero";
import TaninoRitual from "@/components/tanino/TaninoRitual";
import TaninoTransformation from "@/components/tanino/TaninoTransformation";
import TaninoVideos from "@/components/tanino/TaninoVideos";

export default function Tanino() {
  return (
    <>
      <TaninoHero />
      <TaninoRitual />
      <TaninoVideos />
      <TaninoTransformation />
      <TaninoFormula />
      <TaninoCTA />
    </>
  );
}
