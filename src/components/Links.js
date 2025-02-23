import useNavigation from "../hooks/useNavigation";
import classNames from "classnames";

function Links({ to, children, className, activeClassName }){
    const {navigate, currentPath } = useNavigation();
    const classes = classNames('text-blue-500', className, currentPath === to && activeClassName);

    const handleClick = (evt) => {
        if (evt.metaKey || evt.ctrlKey) {
            return;
        }
        evt.preventDefault();

        navigate(to);
    };

    return (
        <a className={classes} href={to} onClick={handleClick}>{children}</a>
    );
}

export default Links;
