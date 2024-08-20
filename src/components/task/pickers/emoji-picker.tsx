import { cn } from "@/lib/utils";

export const defaultEmojis = ["👨‍💻", "💬", "☕", "🏋️", "📚", "⏰"];

export function EmojiPicker({
  emoji,
  emojis,
  onChange,
}: {
  emoji?: string;
  emojis: string[];
  onChange: (emoji?: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {emojis.map((e) => (
        <div
          key={e}
          className={cn(
            "flex size-10 cursor-pointer flex-wrap items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-700",
            {
              "bg-yellow-300": e === emoji,
            },
          )}
          onClick={() => onChange(e === emoji ? undefined : e)}
        >
          {e}
        </div>
      ))}
    </div>
  );
}
