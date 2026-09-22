import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import {
    FileText,
    LayoutDashboard,
    Search,
    Settings,
    Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from '@/components/ui/dialog';

const commands = [
    {
        label: 'Dashboard',
        group: 'Pages',
        icon: LayoutDashboard,
        href: '/dashboard',
    },
    { label: 'Tasks', group: 'Pages', icon: FileText, href: '/tasks' },
    { label: 'Users', group: 'Pages', icon: Users, href: '/users' },
    {
        label: 'Settings',
        group: 'Settings',
        icon: Settings,
        href: '/settings/profile',
    },
];

export function DashboardSearch() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (
                event.key.toLowerCase() === 'k' &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault();
                setOpen((value) => !value);
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    const filtered = commands.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase()),
    );

    return (
        <>
            <Button
                variant="outline"
                className="text-muted-foreground bg-muted/25 hover:bg-accent group relative h-8 min-w-0 flex-1 justify-start rounded-md px-2 text-sm font-normal shadow-none sm:w-40 sm:flex-none sm:pe-12 lg:w-52 xl:w-64"
                onClick={() => setOpen(true)}
            >
                <Search className="size-4" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="bg-muted group-hover:bg-accent pointer-events-none absolute inset-e-1.5 top-1.5 hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium sm:flex">
                    <span className="text-xs">Ctrl</span>K
                </kbd>
            </Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-[550px]">
                    <DialogTitle className="sr-only">Command menu</DialogTitle>
                    <DialogDescription className="sr-only">
                        Search pages and settings
                    </DialogDescription>
                    <div className="flex items-center border-b px-3">
                        <Search className="text-muted-foreground me-2 size-4 shrink-0" />
                        <input
                            autoFocus
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Type a command or search..."
                            className="placeholder:text-muted-foreground h-12 w-full bg-transparent text-sm outline-none"
                        />
                    </div>
                    <div className="max-h-80 overflow-y-auto p-2">
                        {filtered.length === 0 && (
                            <p className="text-muted-foreground py-6 text-center text-sm">
                                No results found.
                            </p>
                        )}
                        {filtered.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="hover:bg-accent flex w-full items-center gap-2 rounded-sm px-2 py-2 text-sm"
                                onClick={() => setOpen(false)}
                            >
                                <item.icon className="text-muted-foreground size-4" />
                                <span>{item.label}</span>
                                <span className="text-muted-foreground ms-auto text-xs">
                                    {item.group}
                                </span>
                            </Link>
                        ))}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
