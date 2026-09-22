import { Head } from '@inertiajs/react';
import { ErrorPage } from '@/components/error-page';
export default function Unauthorized() {
    return (
        <>
            <Head title="Unauthorized" />
            <ErrorPage
                code="401"
                title="Unauthorized"
                description="Authentication is required to access this resource."
            />
        </>
    );
}
