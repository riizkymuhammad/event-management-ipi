import { Head } from '@inertiajs/react';
import { Settings } from '@template/features/settings';
import { SettingsNotifications } from '@template/features/settings/notifications';

export default function NotificationsPage() {
    return (
        <>
            <Head title="Notification settings" />
            <Settings>
                <SettingsNotifications />
            </Settings>
        </>
    );
}
