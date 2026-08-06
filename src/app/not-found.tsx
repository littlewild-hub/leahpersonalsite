import Link from "next/link";
import { Paper } from "@/components/notebook/paper";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-5 py-32 text-center sm:px-8">
      <Paper ground="ruled" className="w-full p-10" folio="—" askew="left">
        <p className="folio text-sanguine-ink">Leaf missing</p>
        <h1 className="mt-4 font-hand text-6xl font-semibold leading-none text-ink">
          <span className="mirror inline-block">404</span>
        </h1>
        <p className="mt-5 text-[1.05rem] italic leading-relaxed text-ink-soft">
          This folio was torn out, or never bound in the first place.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/work">
            <Button variant="plate">Return to the folios</Button>
          </Link>
        </div>
      </Paper>
    </section>
  );
}
