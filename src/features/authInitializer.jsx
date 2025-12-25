import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, logout, finishLoading } from "../app/authSlice";
import { useRefreshTokenQuery } from "../app/api/authApi";

export default function AuthInitializer({ children }) {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);

    const { data, isSuccess, isError, isLoading, isFetching } = useRefreshTokenQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    useEffect(() => {
        // Only act when the query has actually completed (not loading/fetching)
        if (!isLoading && !isFetching) {
            if (isSuccess && data?.accessToken) {
                dispatch(setCredentials(data));
            } else if (isError) {
                // Only logout if the query actually failed (not just initial state)
                dispatch(logout());
            }

            dispatch(finishLoading());
        }
    }, [isSuccess, isError, isLoading, isFetching, data, dispatch]);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                Loading...
            </div>
        );
    }

    return children;
}