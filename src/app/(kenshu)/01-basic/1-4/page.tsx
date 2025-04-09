import { SectionWrapper } from "@/components/elements/SectionWrapper";
import { Mondai } from "@/features/01-basic/1-4/mondai";
import { Answer } from "@/features/support/1-4/answer";

export default function Basic4() {
  return (
    <SectionWrapper
      title="Reactでの基本的な配列操作をマスターしよう"
      description={`
＜問題＞
1.空配列を初期値としたuseStateを作成（状態名はtodos, Todo型は作成済み）
2.""を初期値としたuseStateを作成（状態名はinputText）
3.inputを入力したら、inputTextの値が更新されるようにする
4.追加ボタンをクリックしたら、inputTextの値がtodosに追加されるようにする（画面上にも表示）
5.checkboxのチェックが入ったら、todoのcompletedがtrueになるようにする
6.todoを削除できるようにする

＜補足＞
・idはcrypto.randomUUID()で作成できます

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
