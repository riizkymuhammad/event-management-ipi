import { Head } from '@inertiajs/react';
import { ErrorPage } from '@/components/error-page';
export default function Forbidden() {
    return (
        <>
            <Head title="Forbidden" />
            <ErrorPage
                code="403"
                title="Forbidden"
                description="You don't have permission to access this resource."
            />
        </>
    );
}
