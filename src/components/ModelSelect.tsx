import { CARS } from "@/data/cars";
type Props = React.SelectHTMLAttributes<HTMLSelectElement>;
export default function ModelSelect(props: Props) {
  return (
    <select className="model-select" {...props}>
      {CARS.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
    </select>
  );
}
