const Article = ({ title, content }) => {
  return (
    <div className="rounded-lg bg-black p-3.5 lg:p-6 min-h-screen">
      <div className="space-y-8">
        <h1 className="text-xl font-medium text-gray-300">{title}</h1>
        {content}
      </div>
    </div>
  );
};

export default Article;
