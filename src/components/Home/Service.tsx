
export default function Service({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border rounded-xl p-8 hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
