interface CommentBoxProps {
    author: string;
    content: string;
    createdAt: string;
  }
  
  export default function CommentBox({ author, content, createdAt }: CommentBoxProps) {
    return (
      <div className="p-3 bg-neutral-700 rounded mb-2">
        <div className="flex justify-between items-center">
          <span className="text-sm text-blue-300 font-medium">{author}</span>
          <span className="text-xs text-neutral-400">{createdAt}</span>
        </div>
        <p className="mt-1 text-neutral-200">{content}</p>
      </div>
    );
  }
  