
export default function Stat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-orange-600">{number}</h3>
      <p className="text-gray-600 mt-2">{label}</p>
    </div>
  );
}
