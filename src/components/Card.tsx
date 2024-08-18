import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="border border-slate-300 h-4/6 shadow-sm w-[80vw] m-auto p-6 mt-12">{children}</div>
    </>
  );
}
