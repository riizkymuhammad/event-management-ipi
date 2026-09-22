import { Head } from '@inertiajs/react';
import { Tasks } from '@template/features/tasks';

export default function TasksPage() {
    return (
        <>
            <Head title="Tasks" />
            <Tasks />
        </>
    );
}
