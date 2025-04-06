import { ExplanationWrapper } from "@/components/elements/ExplanationWrapper";
import { Explanation } from "@/features/support/1-2/explanation";

export default function Section1_2() {
  return (
    <ExplanationWrapper
      title="setState の 2 種類の引数の挙動の違いを理解しよう"
      description={`
1.次のステートを直接引数で受け取るパターン （例 setState(1)）
2.前のステートを引数で受け取るパターン （例 setState(prev => prev + 1)）
      `}
    >
      <Explanation />
    </ExplanationWrapper>
  );
}
