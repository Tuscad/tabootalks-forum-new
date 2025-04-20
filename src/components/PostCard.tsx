interface PostCardProps {
    title: string;
    author: string;
    excerpt: string;
    onClick?: () => void;
  }
  
  export default function PostCard({ title, author, excerpt, onClick }: PostCardProps) {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer p-4 bg-neutral-800 rounded hover:bg-neutral-700 transition"
      >
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-neutral-400">by {author}</p>
        <p className="mt-2 text-neutral-300 line-clamp-3">{excerpt}</p>
      </div>
    );
  }