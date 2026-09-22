import { Head } from '@inertiajs/react';
import { Settings } from '@template/features/settings';
import { SettingsDisplay } from '@template/features/settings/display';

export default function DisplayPage() {
    return (
        <>
            <Head title="Display settings" />
            <Settings>
                <SettingsDisplay />
            </Settings>
        </>
    );
}
