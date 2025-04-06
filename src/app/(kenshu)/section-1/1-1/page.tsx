import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/section-1/1-1/mondai";
import { Answer } from "@/features/support/1-1/answer";

export default function Section1_1() {
  return (
    <SectionWrapper
      title="Section1-1"
      description="カウンターアプリに − ボタンとリセットボタンを追加してみよう！"
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
