import Link from "next/link";

type Crumb = { href?: string; label: string };

export default function PageHero({ title, lead, crumbs }: { title: string; lead?: string; crumbs: Crumb[] }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav aria-label="Đường dẫn" className="crumbs">
          <ol>
            <li><Link href="/">Trang chủ</Link></li>
            {crumbs.map((c) => <li key={c.label}>{c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</li>)}
          </ol>
        </nav>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  );
}
