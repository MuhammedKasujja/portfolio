import { Cloud } from "./Cloud";
import { SoftwareDevelopment } from "./SoftwareDevelopment";

export function Skills() {
  return (
    <div className="space-y-5">
      <SoftwareDevelopment/>
      <Cloud/>
    </div>
  );
}
