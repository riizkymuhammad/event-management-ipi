import { Head } from '@inertiajs/react';
import { Settings } from '@template/features/settings';
import { SettingsAccount } from '@template/features/settings/account';

export default function AccountPage() {
    return (
        <>
            <Head title="Account settings" />
            <Settings>
                <SettingsAccount />
            </Settings>
        </>
    );
}
