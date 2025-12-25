import { Link, useLocation } from 'react-router-dom'
const BreadCrumbs = () => {
    const location = useLocation()

    const paths = location.pathname
        .split("/")
        .filter(path => path !== "");

    return (
        <nav className="text-sm text-rosy-400 bg-white p-4 rounded-xl">
            <Link to="/" className='hover:underline'>Home</Link>

            {paths.map((path, index) => {
                const routeTo = "/" + paths.slice(0, index + 1).join("/");
                const isLast = index === paths.length - 1;

                return (
                    <span key={index}>
                        {" / "}
                        {isLast ? (
                            <span className="capitalize text-browny-50 font-medium">
                                {decodeURIComponent(path.replace(/-/g, " "))}
                            </span>
                        ) : (
                            <Link to={routeTo} className="hover:underline capitalize">
                                {decodeURIComponent(path.replace(/-/g, " "))}
                            </Link>
                        )}
                    </span>
                );
            })}
        </nav>
    )
}

export default BreadCrumbs
