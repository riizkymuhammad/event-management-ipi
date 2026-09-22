import { Head } from '@inertiajs/react';
import { Settings } from '@template/features/settings';
import { SettingsProfile } from '@template/features/settings/profile';

export default function ProfilePage() {
    return (
        <>
            <Head title="Profile settings" />
            <Settings>
                <SettingsProfile />
            </Settings>
        </>
    );
}
