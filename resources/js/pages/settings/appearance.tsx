import { Head } from '@inertiajs/react';
import { Settings } from '@template/features/settings';
import { SettingsAppearance } from '@template/features/settings/appearance';

export default function AppearancePage() {
    return (
        <>
            <Head title="Appearance settings" />
            <Settings>
                <SettingsAppearance />
            </Settings>
        </>
    );
}
