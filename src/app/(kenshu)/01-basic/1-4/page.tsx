import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-4/mondai";
import { Answer } from "@/features/support/1-4/answer";

export default function Basic4() {
  return (
    <SectionWrapper
      title="Reactでの基本的な配列操作をマスターしよう"
      description={`
＜問題＞
1.空配列を初期値としたuseStateを作成（状態名はtodos）
2.inputTextを初期値としたuseStateを作成（状態名はinputText）
3.inputTextを入力したら、inputTextをtodosに追加する
4.todosを表示する
5.todosを削除する

＜目的＞
1.配列操作の復習（map,filter）
2.分割代入を使ってみる
3.基本的なCRUDをマスターする
`}
      answer={<Answer />}
    >
      <Mondai />
    </SectionWrapper>
  );
}
