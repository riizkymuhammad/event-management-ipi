import { Check, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { useSidebar } from '@/components/ui/sidebar';
import type { Appearance } from '@/hooks/use-appearance';
import { useAppearance } from '@/hooks/use-appearance';

const themes: { value: Appearance; label: string; preview: string }[] = [
    { value: 'light', label: 'Light', preview: 'bg-white' },
    { value: 'dark', label: 'Dark', preview: 'bg-slate-950' },
    {
        value: 'system',
        label: 'System',
        preview: 'bg-gradient-to-r from-white to-slate-950',
    },
];

export function DashboardConfigDrawer() {
    const { appearance, updateAppearance } = useAppearance();
    const { open, setOpen } = useSidebar();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    variant="ghost"
                    aria-label="Open theme settings"
                    className="rounded-full"
                >
                    <Settings />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <SheetHeader className="text-start">
                    <SheetTitle>Theme Settings</SheetTitle>
                    <SheetDescription>
                        Adjust the appearance and layout to suit your
                        preferences.
                    </SheetDescription>
                </SheetHeader>
                <div className="space-y-6 overflow-y-auto px-4">
                    <section>
                        <h3 className="text-muted-foreground mb-3 text-sm font-semibold">
                            Theme
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {themes.map((theme) => (
                                <button
                                    key={theme.value}
                                    onClick={() =>
                                        updateAppearance(theme.value)
                                    }
                                    className={`relative rounded-lg border p-2 text-left ${appearance === theme.value ? 'border-primary ring-primary ring-1' : ''}`}
                                >
                                    <div
                                        className={`mb-2 h-14 rounded-md border ${theme.preview}`}
                                    />
                                    <span className="text-xs font-medium">
                                        {theme.label}
                                    </span>
                                    {appearance === theme.value && (
                                        <Check className="absolute top-1 right-1 size-4" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </section>
                    <section>
                        <h3 className="text-muted-foreground mb-3 text-sm font-semibold">
                            Sidebar
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setOpen(true)}
                                className={`rounded-lg border p-3 text-sm ${open ? 'border-primary ring-primary ring-1' : ''}`}
                            >
                                Expanded
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className={`rounded-lg border p-3 text-sm ${!open ? 'border-primary ring-primary ring-1' : ''}`}
                            >
                                Collapsed
                            </button>
                        </div>
                    </section>
                    <section>
                        <h3 className="text-muted-foreground mb-3 text-sm font-semibold">
                            Layout
                        </h3>
                        <button className="border-primary ring-primary w-full rounded-lg border p-3 text-left text-sm ring-1">
                            Inset sidebar
                        </button>
                    </section>
                </div>
            </SheetContent>
        </Sheet>
    );
}
