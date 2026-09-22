import { Link, usePage } from '@inertiajs/react';
import { Check, Menu, Moon, Sun } from 'lucide-react';
import { DashboardConfigDrawer } from '@/components/dashboard-config-drawer';
import { DashboardProfileDropdown } from '@/components/dashboard-profile-dropdown';
import { DashboardSearch } from '@/components/dashboard-search';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAppearance } from '@/hooks/use-appearance';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs: _breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { appearance, updateAppearance } = useAppearance();
    const { url } = usePage();
    const isDashboard = url.startsWith('/dashboard');

    return (
        <header className="z-30 h-16 shrink-0">
            <div className="relative flex h-full min-w-0 items-center gap-3 p-4 sm:gap-4">
                <SidebarTrigger
                    variant="outline"
                    className="max-md:scale-125"
                />
                <Separator orientation="vertical" className="h-6" />
                {isDashboard && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className="size-7 lg:hidden"
                            >
                                <Menu />
                                <span className="sr-only">
                                    Toggle navigation menu
                                </span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem asChild>
                                <Link href="/dashboard">Overview</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/users">Customers</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/apps">Products</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <Link href="/settings/profile">Settings</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
                {isDashboard && (
                    <nav className="me-auto hidden items-center space-x-4 lg:flex xl:space-x-6">
                        <Link
                            href="/dashboard"
                            className="text-sm font-medium transition-colors"
                        >
                            Overview
                        </Link>
                        <Link
                            href="/users"
                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                        >
                            Customers
                        </Link>
                        <Link
                            href="/apps"
                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                        >
                            Products
                        </Link>
                        <Link
                            href="/settings/profile"
                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                        >
                            Settings
                        </Link>
                    </nav>
                )}
                {!isDashboard && <div className="me-auto" />}
                <div className="ml-auto flex min-w-0 items-center gap-1 sm:gap-2 lg:ml-0">
                    <DashboardSearch />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="relative scale-95 rounded-full"
                                aria-label="Toggle theme"
                            >
                                <Sun className="size-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                                <Moon className="absolute size-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {(['light', 'dark', 'system'] as const).map(
                                (mode) => (
                                    <DropdownMenuItem
                                        key={mode}
                                        onClick={() => updateAppearance(mode)}
                                        className="capitalize"
                                    >
                                        {mode}
                                        <Check
                                            className={`ms-auto size-3.5 ${appearance !== mode ? 'invisible' : ''}`}
                                        />
                                    </DropdownMenuItem>
                                ),
                            )}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DashboardConfigDrawer />
                    <DashboardProfileDropdown />
                </div>
            </div>
        </header>
    );
}
