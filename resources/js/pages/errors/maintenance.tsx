import { Head } from '@inertiajs/react';
import { ErrorPage } from '@/components/error-page';
export default function Maintenance() {
    return (
        <>
            <Head title="Maintenance" />
            <ErrorPage
                code="503"
                title="Under maintenance"
                description="We're making improvements and will be back shortly."
            />
        </>
    );
}
