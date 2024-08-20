import type { Statuses } from "../status";
import { StatusPickerItem } from "./status-picker-item";

export function StatusPicker({
  status,
  statuses,
  onChange,
}: {
  status: Statuses;
  statuses: Statuses[];
  onChange: (status?: Statuses) => void;
}) {
  return (
    <div className="grid gap-x-4 gap-y-2 md:grid-cols-2">
      {statuses.map((s) => (
        <StatusPickerItem
          key={s}
          status={s}
          checked={s === status}
          onClick={() => onChange(s === status ? undefined : s)}
        />
      ))}
    </div>
  );
}
