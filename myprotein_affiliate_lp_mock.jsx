import React from "react";

function makeIcon(symbol) {
  return function Icon({ className = "" }) {
    return (
      <span className={`inline-flex items-center justify-center leading-none ${className}`} aria-hidden="true">
        {symbol}
      </span>
    );
  };
}

const ArrowRight = makeIcon("→");
const BadgePercent = makeIcon("％");
const CheckCircle2 = makeIcon("✓");
const Crown = makeIcon("♛");
const Dumbbell = makeIcon("🏋️");
const Flame = makeIcon("🔥");
const Gift = makeIcon("🎁");
const ShieldCheck = makeIcon("🛡️");
const ShoppingCart = makeIcon("🛒");
const Sparkles = makeIcon("✦");
const Star = makeIcon("★");
const Target = makeIcon("◎");
const Trophy = makeIcon("🏆");
const Zap = makeIcon("⚡");

function Card({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

const COUPON_CODE = "PROTEINWAOKAZU";

const links = {
  sale: "https://creatorlink.shop/4bMhStB",
  official: "https://creatorlink.shop/4qFtZgW",
  top: "https://creatorlink.shop/4rdo8zm",
  bestsellers: "https://creatorlink.shop/3QJPPmb",
  trial: "https://creatorlink.shop/3NAyF9i",
  impactWhey: "https://creatorlink.shop/45s57kc",
  impactEaa: "https://creatorlink.shop/4rfrOk5",
  bcaa: "https://creatorlink.shop/3NK9alI",
  creatinePowder: "https://creatorlink.shop/42Cf6Bn",
  creatineTablet: "https://creatorlink.shop/4bexaHB",
  dietWhey: "https://creatorlink.shop/3NzDlfB",
  wheyIsolate: "https://creatorlink.shop/49exbt1",
  clearWhey: "https://creatorlink.shop/49exbt1",
  clearProteinSeries: "https://creatorlink.shop/3M1TycP",
  soyProtein: "https://creatorlink.shop/4qKbXdy",
  shaker: "https://creatorlink.shop/49Hmno6",
  multivitamin: "https://creatorlink.shop/4b9oUIO",
  omega3: "https://creatorlink.shop/3O1Q22E",
  vitaminD3: "https://creatorlink.shop/4t3iiST",
  zma: "https://creatorlink.shop/4jYTSWz",
  betaAlanine: "https://creatorlink.shop/3ZqGmkP",
  preWorkout: "https://creatorlink.shop/3ZrXLJR",
  oats: "https://creatorlink.shop/3NZ3JiS",
  wafers: "https://creatorlink.shop/3LGiSVL",
  pancake: "https://creatorlink.shop/49Aucfg",
  layeredBar: "https://creatorlink.shop/4qNrtoE",
  wristWrap: "https://creatorlink.shop/3LY9blA",
  liftingStrap: "https://creatorlink.shop/4tbkO9I",
  elbowSleeve: "https://creatorlink.shop/3NAyOcQ",
  kneeSleeve: "https://creatorlink.shop/3YZgpJ0",
  leatherBelt: "https://creatorlink.shop/3LQa93k",
  wear: "https://creatorlink.shop/4qegiVj",
};

const affiliateRel = "sponsored nofollow noopener noreferrer";

function AffiliateButton({ href, children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition hover:scale-[1.02]";
  const styles = {
    primary: "bg-sky-500 text-white shadow-lg shadow-sky-500/25 hover:bg-sky-600",
    dark: "bg-slate-950 text-white shadow-lg shadow-slate-900/20 hover:bg-slate-800",
    light: "bg-white text-slate-950 border border-slate-200 hover:bg-slate-50",
    yellow: "bg-yellow-300 text-slate-950 shadow-lg shadow-yellow-300/30 hover:bg-yellow-200",
  };

  return (
    <a href={href} target="_blank" rel={affiliateRel} className={`${base} ${styles[variant]} ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

const rankingProducts = [
  {
    rank: 1,
    name: "Impact ホエイ プロテイン",
    tag: "まず迷ったらこれ",
    summary: "価格・味・たんぱく質量のバランスがよく、初心者から上級者まで使いやすい定番商品。",
    bestFor: "筋トレ初心者・増量・普段使い",
    score: "4.8",
    href: links.impactWhey,
    color: "from-sky-100 to-cyan-50",
    icon: Dumbbell,
  },
  {
    rank: 2,
    name: "Impact EAA",
    tag: "トレ中の補給に",
    summary: "必須アミノ酸を手軽に補給。減量中や長時間トレーニング時のドリンクとして使いやすい。",
    bestFor: "減量中・トレ中ドリンク・競技者",
    score: "4.7",
    href: links.impactEaa,
    color: "from-violet-100 to-sky-50",
    icon: Zap,
  },
  {
    rank: 3,
    name: "Impact クレアチン モノハイドレート パウダー",
    tag: "筋力・パワー重視",
    summary: "高強度トレーニングやBIG3の重量更新を狙う人向け。コスパ重視ならパウダー版が強い。",
    bestFor: "筋力アップ・BIG3・競技力向上",
    score: "4.8",
    href: links.creatinePowder,
    color: "from-emerald-100 to-cyan-50",
    icon: Trophy,
  },
  {
    rank: 4,
    name: "Impact ホエイ アイソレート",
    tag: "高品質ホエイ",
    summary: "脂質や糖質を抑えたい人向け。通常ホエイよりもすっきり使いたい人に合う。",
    bestFor: "減量・高たんぱく・脂質控えめ",
    score: "4.6",
    href: links.wheyIsolate,
    color: "from-blue-100 to-slate-50",
    icon: ShieldCheck,
  },
  {
    rank: 5,
    name: "Impact ダイエット ホエイ",
    tag: "減量サポート",
    summary: "ダイエット中のたんぱく質補給に使いやすい。食事管理とセットで使う導線に向く。",
    bestFor: "減量・置き換え・間食対策",
    score: "4.5",
    href: links.dietWhey,
    color: "from-pink-100 to-orange-50",
    icon: Target,
  },
];

const categoryRows = [
  {
    category: "最初の1袋",
    products: "Impact ホエイ / お試し商品 / シェイカー",
    user: "初めてマイプロを買う人",
    cta: "初心者セットを見る",
    href: links.trial,
  },
  {
    category: "筋肥大・増量",
    products: "Impact ホエイ / ロールドオーツ / パンケーキミックス",
    user: "食事量とたんぱく質量を増やしたい人",
    cta: "増量向けを見る",
    href: links.impactWhey,
  },
  {
    category: "筋力・競技力",
    products: "クレアチン / EAA / ベータアラニン / プレワークアウト",
    user: "BIG3・格闘技・競技パフォーマンスを伸ばしたい人",
    cta: "パワー系を見る",
    href: links.creatinePowder,
  },
  {
    category: "減量・ボディメイク",
    products: "ダイエットホエイ / ホエイアイソレート / クリアプロテイン",
    user: "脂質・糖質を抑えながらたんぱく質を摂りたい人",
    cta: "減量向けを見る",
    href: links.dietWhey,
  },
  {
    category: "健康サプリ",
    products: "マルチビタミン / オメガ3 / ビタミンD3 / ZMA",
    user: "食生活の不足を補いたい人",
    cta: "サプリを見る",
    href: links.multivitamin,
  },
  {
    category: "ギア・ウェア",
    products: "リストラップ / リフティングストラップ / ベルト / ウェア",
    user: "トレーニングの安定感を上げたい人",
    cta: "ギアを見る",
    href: links.wristWrap,
  },
];

const guideCards = [
  {
    title: "初心者は何から買うべき？",
    label: "初回購入",
    body: "まずはImpact ホエイ、シェイカー、お試し商品から選ぶと失敗しにくい。",
    href: links.trial,
  },
  {
    title: "最安で買う手順",
    label: "割引攻略",
    body: `セール対象商品を選び、購入画面で ${COUPON_CODE} を入力する導線を明確化。`,
    href: links.sale,
  },
  {
    title: "ホエイとEAAの違い",
    label: "比較",
    body: "毎日のたんぱく質補給はホエイ、トレーニング中の補給はEAAという整理が分かりやすい。",
    href: links.impactEaa,
  },
];

const seoClusters = [
  {
    keyword: "マイプロテイン おすすめ",
    intent: "商品選び",
    page: "人気ランキング・目的別おすすめ",
    cta: "ベストセラーを見る",
    href: links.bestsellers,
  },
  {
    keyword: "マイプロテイン 安く買う方法",
    intent: "割引・クーポン",
    page: "セール活用・クーポン入力手順",
    cta: "セール対象を見る",
    href: links.sale,
  },
  {
    keyword: "マイプロテイン プロテイン 初心者",
    intent: "初回購入",
    page: "初心者向け購入ガイド",
    cta: "お試し商品を見る",
    href: links.trial,
  },
  {
    keyword: "マイプロテイン 味 おすすめ",
    intent: "味・飲みやすさ",
    page: "人気フレーバー比較・レビュー",
    cta: "Impact ホエイを見る",
    href: links.impactWhey,
  },
  {
    keyword: "プロテイン おすすめ 筋トレ",
    intent: "一般プロテイン比較",
    page: "目的別プロテイン選び",
    cta: "目的別に選ぶ",
    href: links.impactWhey,
  },
  {
    keyword: "EAA BCAA 違い",
    intent: "成分比較",
    page: "EAA・BCAA比較ガイド",
    cta: "EAAを見る",
    href: links.impactEaa,
  },
];

const faqItems = [
  {
    q: "マイプロテインはどこから買うのが安い？",
    a: `セール対象商品を確認し、購入画面で ${COUPON_CODE} を入力する導線を基本にします。価格や割引率は販売ページで最終確認してください。`,
  },
  {
    q: "初心者はどの商品から選ぶべき？",
    a: "最初はImpact ホエイ プロテイン、お試し商品、シェイカーの組み合わせが分かりやすいです。目的が筋力向上ならクレアチンも候補です。",
  },
  {
    q: "Impact ホエイとホエイアイソレートの違いは？",
    a: "通常のImpact ホエイはコスパ重視、ホエイアイソレートは脂質や糖質を抑えたい人向けとして見せると選びやすくなります。",
  },
  {
    q: "EAAとBCAAはどちらを選ぶべき？",
    a: "トレーニング中の必須アミノ酸補給を広く訴求するならEAA、価格やシンプルさを重視するならBCAAという見せ方にします。",
  },
];

const trustItems = [
  { icon: BadgePercent, text: "クーポン導線を明確化" },
  { icon: Crown, text: "人気商品を優先表示" },
  { icon: CheckCircle2, text: "初心者向けに分類" },
  { icon: ShieldCheck, text: "広告表記を明示" },
];

export default function MyproteinAffiliateMock() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="bg-slate-950 px-4 py-2 text-center text-sm font-bold text-white">
        当サイト限定コード <span className="text-yellow-300">{COUPON_CODE}</span> でマイプロテインをお得に購入
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-500/25">
              <Dumbbell className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-black tracking-tight">プロテイン攻略ナビ</p>
              <p className="text-xs font-bold text-slate-500">MyProtein affiliate media</p>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-slate-600 lg:flex">
            <a href="#ranking" className="hover:text-sky-500">ランキング</a>
            <a href="#compare" className="hover:text-sky-500">目的別比較</a>
            <a href="#guide" className="hover:text-sky-500">買い方ガイド</a>
            <a href="#coupon" className="hover:text-sky-500">クーポン</a>
          </nav>
          <AffiliateButton href={links.sale} variant="dark" className="hidden md:inline-flex">
            セールを見る
          </AffiliateButton>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-black text-sky-700">
              <Sparkles className="h-4 w-4" />
              迷わず選べるマイプロテイン購入ガイド
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              マイプロテインを、
              <span className="text-sky-500">最安級</span>で賢く買う。
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600">
              目的別におすすめ商品を整理し、セール対象ページと商品ページへ最短で案内します。購入画面ではクーポンコードを忘れずに入力してください。
            </p>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70">
              <p className="text-sm font-black text-slate-500">当サイト推奨クーポンコード</p>
              <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="rounded-2xl border-2 border-dashed border-sky-300 bg-sky-50 px-5 py-4">
                  <p className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{COUPON_CODE}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <AffiliateButton href={links.sale} variant="primary">
                    セール対象を見る
                  </AffiliateButton>
                  <AffiliateButton href={links.impactWhey} variant="light">
                    まずは定番を見る
                  </AffiliateButton>
                </div>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-2 rounded-2xl bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
                    <Icon className="h-4 w-4 text-sky-500" />
                    {item.text}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 top-8 z-20 rounded-full bg-yellow-300 px-5 py-4 text-center font-black text-slate-950 shadow-xl shadow-yellow-300/40 rotate-6">
              国内最大級<br />割引訴求
            </div>
            <div className="rounded-[2rem] bg-slate-950 p-5 shadow-2xl shadow-slate-900/30">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 p-7 text-white">
                <p className="text-sm font-bold text-sky-200">MYPROTEIN BUYING MAP</p>
                <div className="mt-8 grid gap-4">
                  {[
                    ["Impact ホエイ", "王道", "bg-white text-slate-950"],
                    ["EAA / BCAA", "トレ中", "bg-sky-400 text-white"],
                    ["クレアチン", "筋力", "bg-emerald-400 text-slate-950"],
                    ["ダイエットホエイ", "減量", "bg-pink-300 text-slate-950"],
                  ].map(([name, tag, cls]) => (
                    <div key={name} className={`flex items-center justify-between rounded-3xl p-5 ${cls}`}>
                      <div>
                        <p className="text-xl font-black">{name}</p>
                        <p className="text-sm font-bold opacity-70">目的別おすすめ商品</p>
                      </div>
                      <span className="rounded-full bg-slate-950/10 px-3 py-1 text-sm font-black">{tag}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-3xl bg-white/10 p-5 backdrop-blur">
                  <p className="text-sm font-bold text-slate-300">購入導線</p>
                  <p className="mt-2 text-2xl font-black">商品を選ぶ → セールを見る → コード入力</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            [Gift, "初回購入", "お試し商品・シェイカーへ誘導"],
            [Flame, "セール訴求", "PROTEINWAOKAZUを強調"],
            [ShoppingCart, "商品別CTA", "各アフィリエイトURLへ直リンク"],
            [Star, "比較で納得", "目的別に選びやすく整理"],
          ].map(([Icon, title, body]) => (
            <Card key={title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-500">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-black">{title}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="ranking" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black text-sky-500">POPULAR RANKING</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">まず載せるべき主力ランキング</h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">
              初稿ではCVしやすい王道商品を優先。全商品を並べるより、買う理由が強い商品から見せます。
            </p>
          </div>
          <AffiliateButton href={links.bestsellers} variant="light">
            ベストセラーを見る
          </AffiliateButton>
        </div>

        <div className="grid gap-5 lg:grid-cols-5">
          {rankingProducts.map((product) => {
            const Icon = product.icon;
            return (
              <Card key={product.name} className="group overflow-hidden rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-36 bg-gradient-to-br ${product.color} p-5`}>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="rounded-full bg-slate-950 px-3 py-1 text-sm font-black text-white">No.{product.rank}</div>
                  </div>
                  <div className="mt-5 h-10 w-24 rounded-2xl bg-white/70" />
                </div>
                <CardContent className="flex min-h-[360px] flex-col p-5">
                  <span className="mb-3 w-fit rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-600">{product.tag}</span>
                  <h3 className="text-xl font-black leading-tight">{product.name}</h3>
                  <div className="mt-3 flex items-center gap-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                    <span className="ml-2 text-sm font-black text-slate-700">{product.score}</span>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-7 text-slate-600">{product.summary}</p>
                  <div className="mt-4 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
                    {product.bestFor}
                  </div>
                  <div className="mt-auto pt-5">
                    <AffiliateButton href={product.href} variant="primary" className="w-full">
                      商品を見る
                    </AffiliateButton>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section id="compare" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10">
            <p className="text-sm font-black text-sky-500">COMPARISON TABLE</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">目的別に選べる比較表</h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-600">
              上のモックのように、単なるリンク一覧ではなく「誰に何を売るか」が一目で分かる表にします。
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/60">
            <div className="grid grid-cols-12 bg-slate-950 px-5 py-4 text-sm font-black text-white">
              <div className="col-span-3">目的</div>
              <div className="col-span-4">おすすめ商品</div>
              <div className="col-span-3 hidden md:block">こんな人向け</div>
              <div className="col-span-5 text-right md:col-span-2">CTA</div>
            </div>
            {categoryRows.map((row, index) => (
              <div key={row.category} className={`grid grid-cols-12 items-center gap-3 px-5 py-5 text-sm ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
                <div className="col-span-3 font-black text-slate-950">{row.category}</div>
                <div className="col-span-4 font-bold leading-6 text-slate-700">{row.products}</div>
                <div className="col-span-3 hidden font-medium leading-6 text-slate-600 md:block">{row.user}</div>
                <div className="col-span-5 text-right md:col-span-2">
                  <a href={row.href} target="_blank" rel={affiliateRel} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-xs font-black text-white hover:bg-sky-500">
                    {row.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="seo" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10">
          <p className="text-sm font-black text-sky-500">SEO CONTENT HUB</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">SEOは単発LPではなく、検索意図ごとの面展開で取る</h2>
          <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-slate-600">
            「マイプロテイン」「プロテイン」の単体キーワードだけを狙うと競合が強すぎるため、購入直前のロングテールを束ねて、最終的にこのページへ集約します。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {seoClusters.map((cluster) => (
            <Card key={cluster.keyword} className="rounded-3xl border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <CardContent className="p-6">
                <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black text-sky-600">{cluster.intent}</span>
                <h3 className="mt-5 text-xl font-black leading-tight">{cluster.keyword}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">想定ページ：{cluster.page}</p>
                <AffiliateButton href={cluster.href} variant="light" className="mt-5 w-full">
                  {cluster.cta}
                </AffiliateButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="guide" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10">
          <p className="text-sm font-black text-sky-500">BUYING GUIDE</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight md:text-5xl">記事導線で購買前の不安を潰す</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {guideCards.map((card) => (
            <Card key={card.title} className="rounded-3xl border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-black text-yellow-700">{card.label}</span>
                <h3 className="mt-5 text-2xl font-black leading-tight">{card.title}</h3>
                <p className="mt-4 min-h-[84px] text-sm font-medium leading-7 text-slate-600">{card.body}</p>
                <AffiliateButton href={card.href} variant="light" className="mt-6 w-full">
                  関連商品を見る
                </AffiliateButton>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="coupon" className="mx-auto max-w-7xl px-5 py-16">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl shadow-slate-900/30">
          <div className="grid gap-8 p-8 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-yellow-300">
                <BadgePercent className="h-4 w-4" />
                クーポンコードをLP内で完結表示
              </div>
              <h2 className="text-3xl font-black leading-tight tracking-tight md:text-5xl">
                公式クーポンページには飛ばさず、
                <span className="text-yellow-300">このコード</span>を主役にする。
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-300">
                公式クーポン一覧に飛ばすと別コードに流れる可能性があるため、LP内でコードを強調し、セールページまたは商品ページへ直接送ります。
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AffiliateButton href={links.sale} variant="yellow">
                  セール対象商品を見る
                </AffiliateButton>
                <AffiliateButton href={links.official} variant="light">
                  公式サイトを見る
                </AffiliateButton>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full rounded-[2rem] border-2 border-dashed border-yellow-300 bg-white p-7 text-center text-slate-950">
                <p className="text-sm font-black text-slate-500">購入画面で入力</p>
                <p className="mt-3 break-all text-4xl font-black tracking-tight md:text-5xl">{COUPON_CODE}</p>
                <p className="mt-4 rounded-2xl bg-yellow-100 px-4 py-3 text-sm font-black text-yellow-800">
                  セールページへ遷移後、購入画面でコード入力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm font-medium leading-7 text-amber-900">
          <p className="font-black">広告表記</p>
          <p className="mt-2">
            当サイトはアフィリエイト広告を利用しています。掲載しているリンクから商品を購入すると、当サイトに報酬が発生する場合があります。商品情報や価格、割引率は販売ページで必ず確認してください。
          </p>
          <p className="mt-2 font-black">
            制作メモ：クリア ホエイ プロテインのURLはImpact ホエイ アイソレートと同一のため、正しいURLが確認できたら差し替えます。
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500">
                <Dumbbell className="h-5 w-5" />
              </div>
              <p className="text-lg font-black">プロテイン攻略ナビ</p>
            </div>
            <p className="mt-4 max-w-md text-sm font-medium leading-7 text-slate-400">
              マイプロテインの商品選び、セール活用、クーポンコード入力までを分かりやすく案内する独立系アフィリエイトメディアです。
            </p>
          </div>
          <div>
            <p className="font-black">商品</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href={links.impactWhey} target="_blank" rel={affiliateRel}>Impact ホエイ</a>
              <a href={links.impactEaa} target="_blank" rel={affiliateRel}>Impact EAA</a>
              <a href={links.creatinePowder} target="_blank" rel={affiliateRel}>クレアチン</a>
            </div>
          </div>
          <div>
            <p className="font-black">買い方</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href={links.sale} target="_blank" rel={affiliateRel}>セールを見る</a>
              <a href={links.bestsellers} target="_blank" rel={affiliateRel}>人気商品を見る</a>
              <a href={links.trial} target="_blank" rel={affiliateRel}>お試し商品</a>
            </div>
          </div>
          <div>
            <p className="font-black">運営</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href="#">運営者情報</a>
              <a href="#">お問い合わせ</a>
              <a href="#">プライバシーポリシー</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
