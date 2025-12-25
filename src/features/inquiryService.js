import { useCreateInquiryMutation } from "../app/api/inquiryApi";

/**
 * Hook to create inquiries from any form
 */
export const useInquiry = () => {
    const [createInquiry, { isLoading }] = useCreateInquiryMutation();

    const submitInquiry = async (payload) => {
        try {
            await createInquiry(payload).unwrap();
            return { success: true };
        } catch (err) {
            console.error("Inquiry submission error:", err);
            return { success: false, error: err };
        }
    };

    return { submitInquiry, isLoading };
};
