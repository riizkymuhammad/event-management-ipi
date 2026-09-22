import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export function ErrorPage({
    code,
    title,
    description,
}: {
    code: string;
    title: string;
    description: string;
}) {
    return (
        <main className="grid min-h-[calc(100svh-4rem)] place-items-center px-4">
            <div className="max-w-md text-center">
                <p className="text-muted-foreground mb-2 text-sm font-semibold tracking-widest uppercase">
                    Error {code}
                </p>
                <h1 className="text-7xl font-bold tracking-tighter md:text-8xl">
                    {code}
                </h1>
                <h2 className="mt-4 text-2xl font-bold">{title}</h2>
                <p className="text-muted-foreground mt-2">{description}</p>
                <div className="mt-6 flex justify-center gap-2">
                    <Button
                        variant="outline"
                        onClick={() => window.history.back()}
                    >
                        Go back
                    </Button>
                    <Button asChild>
                        <Link href="/dashboard">Back to dashboard</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
