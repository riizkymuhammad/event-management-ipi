import { Head } from '@inertiajs/react';
import { ErrorPage } from '@/components/error-page';
export default function InternalServerError() {
    return (
        <>
            <Head title="Internal Server Error" />
            <ErrorPage
                code="500"
                title="Something went wrong"
                description="We encountered an unexpected error. Please try again later."
            />
        </>
    );
}
