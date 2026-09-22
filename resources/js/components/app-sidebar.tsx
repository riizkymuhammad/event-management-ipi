import { Link, usePage } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import {
    Bell,
    Bug,
    ChevronRight,
    CircleHelp,
    Construction,
    FileX,
    LayoutDashboard,
    Lock,
    ListTodo,
    MessageSquare,
    Monitor,
    Package,
    Palette,
    Settings,
    ShieldCheck,
    ServerOff,
    UserCog,
    UserX,
    Users,
    Wrench,
} from 'lucide-react';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    useSidebar,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';

type SidebarItem = {
    title: string;
    href?: string;
    icon?: LucideIcon;
    badge?: string;
    items?: { title: string; href: string; icon?: LucideIcon }[];
};

const groups: { label: string; items: SidebarItem[] }[] = [
    {
        label: 'General',
        items: [
            { title: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
            { title: 'Tasks', href: '/tasks', icon: ListTodo },
            { title: 'Apps', href: '/apps', icon: Package },
            { title: 'Chats', href: '/chats', icon: MessageSquare, badge: '3' },
            { title: 'Users', href: '/users', icon: Users },
            {
                title: 'Secured by Clerk',
                icon: ShieldCheck,
                items: [
                    { title: 'Sign In', href: '/login' },
                    { title: 'Sign Up', href: '/register' },
                    { title: 'User Management', href: '/users', icon: Users },
                ],
            },
        ],
    },
    {
        label: 'Pages',
        items: [
            {
                title: 'Auth',
                icon: ShieldCheck,
                items: [
                    { title: 'Sign In', href: '/login' },
                    { title: 'Sign In (2 Col)', href: '/login' },
                    { title: 'Sign Up', href: '/register' },
                    { title: 'Forgot Password', href: '/forgot-password' },
                    { title: 'OTP', href: '/verify-email' },
                ],
            },
            {
                title: 'Errors',
                icon: Bug,
                items: [
                    {
                        title: 'Unauthorized',
                        href: '/errors/unauthorized',
                        icon: Lock,
                    },
                    {
                        title: 'Forbidden',
                        href: '/errors/forbidden',
                        icon: UserX,
                    },
                    {
                        title: 'Not Found',
                        href: '/errors/not-found',
                        icon: FileX,
                    },
                    {
                        title: 'Internal Server Error',
                        href: '/errors/internal-server-error',
                        icon: ServerOff,
                    },
                    {
                        title: 'Maintenance Error',
                        href: '/errors/maintenance',
                        icon: Construction,
                    },
                ],
            },
        ],
    },
    {
        label: 'Other',
        items: [
            {
                title: 'Settings',
                icon: Settings,
                items: [
                    {
                        title: 'Profile',
                        href: '/settings/profile',
                        icon: UserCog,
                    },
                    {
                        title: 'Account',
                        href: '/settings/account',
                        icon: Wrench,
                    },
                    {
                        title: 'Appearance',
                        href: '/settings/appearance',
                        icon: Palette,
                    },
                    {
                        title: 'Notifications',
                        href: '/settings/notifications',
                        icon: Bell,
                    },
                    {
                        title: 'Display',
                        href: '/settings/display',
                        icon: Monitor,
                    },
                ],
            },
            { title: 'Help Center', href: '/help-center', icon: CircleHelp },
        ],
    },
];

function NavBadge({ children }: { children: ReactNode }) {
    return (
        <span className="bg-primary text-primary-foreground ms-auto rounded-full px-1.5 py-0 text-xs font-semibold">
            {children}
        </span>
    );
}

function CollapsibleNavItem({ item }: { item: SidebarItem }) {
    const { state, isMobile } = useSidebar();
    const { url } = usePage();
    const Icon = item.icon;

    if (state === 'collapsed' && !isMobile) {
        return (
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                            {Icon && <Icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ms-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        side="right"
                        align="start"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel>{item.title}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {item.items?.map((subItem) => (
                            <DropdownMenuItem key={subItem.title} asChild>
                                <Link href={subItem.href}>
                                    {subItem.icon && <subItem.icon />}
                                    {subItem.title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        );
    }

    return (
        <Collapsible
            asChild
            defaultOpen={item.items?.some((subItem) =>
                url.startsWith(subItem.href),
            )}
            className="group/collapsible"
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                        {Icon && <Icon />}
                        <span>{item.title}</span>
                        <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="CollapsibleContent">
                    <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                    asChild
                                    isActive={url.startsWith(subItem.href)}
                                >
                                    <Link href={subItem.href} prefetch>
                                        {subItem.icon && <subItem.icon />}
                                        <span>{subItem.title}</span>
                                    </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    );
}

export function AppSidebar() {
    const { url } = usePage();
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <TeamSwitcher />
            </SidebarHeader>

            <SidebarContent>
                {groups.map((group) => (
                    <SidebarGroup key={group.label}>
                        <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                        <SidebarMenu>
                            {group.items.map((item) =>
                                item.items ? (
                                    <CollapsibleNavItem
                                        key={item.title}
                                        item={item}
                                    />
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={url.startsWith(
                                                item.href ?? '',
                                            )}
                                            tooltip={item.title}
                                        >
                                            <Link
                                                href={item.href ?? dashboard()}
                                                prefetch
                                            >
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                {item.badge && (
                                                    <NavBadge>
                                                        {item.badge}
                                                    </NavBadge>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ),
                            )}
                        </SidebarMenu>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
