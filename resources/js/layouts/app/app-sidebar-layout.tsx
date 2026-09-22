import { AuthenticatedLayout } from '@template/components/layout/authenticated-layout';
import { DirectionProvider } from '@template/context/direction-provider';
import { FontProvider } from '@template/context/font-provider';
import { ThemeProvider } from '@template/context/theme-provider';
import type { AppLayoutProps } from '@/types';

export default function AppSidebarLayout({ children }: AppLayoutProps) {
    return (
        <ThemeProvider>
            <FontProvider>
                <DirectionProvider>
                    <AuthenticatedLayout>{children}</AuthenticatedLayout>
                </DirectionProvider>
            </FontProvider>
        </ThemeProvider>
    );
}
