import { useGetMyInquiriesQuery } from "../../app/api/inquiryApi";
import InquiryList from "../../components/dashboard/inquiry/InquiryList";
import Loader from "../../components/shared/Loader";

const UserInquiries = () => {
    const { data, isLoading } = useGetMyInquiriesQuery();

    if (isLoading) return <Loader />;

    return (
        <InquiryList
            title="My Inquiries"
            inquiries={data?.inquiries || []}
        />
    );
};

export default UserInquiries;
