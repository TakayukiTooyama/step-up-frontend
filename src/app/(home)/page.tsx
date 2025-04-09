import Link from "next/link";

export default function Home() {
  const links = [
    {
      group: "基本編",
      items: [
        { href: "/01-basic/1-1", label: "1. カウンターを作成し、useStateとJSXの理解を深めよう" },
        {
          href: "/01-basic/1-1-tips",
          label: "【Tips】setState の 2 種類の引数の挙動の違いを理解しよう",
        },
        { href: "/01-basic/1-2", label: "2. コンポーネント・Props・exportの理解を深めよう" },
        { href: "/01-basic/1-3", label: "3. Props・テンプレートリテラルの理解を深めよう" },
        { href: "/01-basic/1-4", label: "4. Reactでの基本的な配列操作をマスターしよう" },
        { href: "/01-basic/1-5", label: "5. カスタムフックを作れるようになろう" },
      ],
    },
    {
      group: "応用編",
      items: [
        { href: "/02-advanced/2-1", label: "1. 直列から並列の非同期処理を修正しよう" },
        { href: "/02-advanced/2-2", label: "2. Suspenseを使って並列処理を最適化しよう" },
        { href: "/02-advanced/2-3", label: "3. Dynamic Routeとページ遷移をを理解しよう" },
        { href: "/02-advanced/2-4", label: "4. サーバーアクションを理解しよう" },
        { href: "/02-advanced/2-5", label: "5. useActionStateを理解しよう" },
      ],
    },
  ];
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="w-full p-6 border h-fit bg-gray-50 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">React/Next研修</h1>
        {links.map((link) => (
          <ul key={link.group} className="flex flex-col gap-2 last:mt-4">
            <h2 className="text-lg font-bold">{link.group}</h2>
            {link.items.map((item) => (
              <li key={item.href} className="hover:underline hover:text-blue-400">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
