import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from '@/lib/utils';
import AnimatedGridPattern from "@/components/landing/grid";
import Ripple from '@/components/landing/ripple';
import { Banner } from 'fumadocs-ui/components/banner';



export default function HomePage() {
  return (
    <div className="relative min-h-screen flex w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">

      <Ripple />
      <div className='z-10 flex flex-col items-center justify-center'>
        <h1 className="mb-4 text-5xl font-bold text-center">
          Better Fetch
        </h1>

        <p className="text-muted-foreground mx-auto max-w-2xl text-center">
          Advanced fetch wrapper for typescript with zod schema validations, pre-defined routes, callbacks, plugins and more.
        </p>
        <div className='flex py-4 items-center justify-center gap-4 w-full'>
          <Link href="/docs">
            <Button className='flex gap-2 cursor-pointer'>
              <Icons.docs />
              Docs
            </Button>
          </Link>
          <Button className='flex gap-2' variant="secondary">
            <Icons.github />
            Github
          </Button>
        </div>
      </div>
      <div>
      </div>

    </div>

  );
}
