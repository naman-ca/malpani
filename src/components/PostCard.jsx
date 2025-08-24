import Link from "next/link";

function formatDate(dateString) {
  const dt = new Date(dateString);
  const dd = String(dt.getUTCDate()).padStart(2, "0");
  const mm = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const yy = dt.getUTCFullYear();
  return `${dd}/${mm}/${yy}`;
}

export default function PostCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block group rounded-2xl border p-5 hover:shadow-lg transition"
    >
      <div className="text-xs text-gray-500">{formatDate(post.date)}</div>
      <h3 className="mt-1 text-lg font-semibold group-hover:text-brand">
        {post.title}
      </h3>
      {post.excerpt && <p className="mt-2 text-gray-600">{post.excerpt}</p>}
    </Link>
  );
}
