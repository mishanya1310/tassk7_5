import Link from "./Links";
import Links from "./Links";

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Table', path: '/table' },
        { label: 'Modal', path: '/modal' },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <Links
                key={link.label}
                to={link.path}
                className="mb-3"
                activeClassName="font-bold border-1-4 border-blue-500 pl-2"
            >
                {link.label}
            </Links>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;
