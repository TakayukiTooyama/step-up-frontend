/**
 * ＜問題＞
 * 1.src/app/(kenshu)/2-1 に dynamic route を用いて詳細ページを作成する
 * 2.Linkコンポーネントを用いて詳細ページに遷移できるようにする
 * 3.useRouterを用いて、詳細ページから一覧ページに戻れるようにする
 *
 * ＜参考＞
 * https://nextjs.org/docs/pages/api-reference/functions/use-router
 *
 * ＜目的＞
 * 1.dynamic routeを理解する
 * 2.Next.jsのLinkコンポーネントを使えるようになる
 * 3.useRouterを使えるようになる
 */
export const Mondai = async () => {
  return (
    <div>
      <h2 className="font-bold">ポケモン一覧</h2>
      {/* <PokemonList /> */}
    </div>
  );
};

const PokemonList: React.FC = () => {
  return <ul>{/* <PokemonListItem /> */}</ul>;
};

type ItemProps = {
  name: string;
};
const PokemonListItem: React.FC<ItemProps> = ({ name }) => {
  return <li key={name}>{name}</li>;
};
