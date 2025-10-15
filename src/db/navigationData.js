export const navigationData = [
    {
        label: "Home",
        href: "/",
        hasDropdown: false,
        isActive: true,
    },
    {
        label: "Services",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Services", href: "/services" },
            { label: "Service Details", href: "/services-details" },
        ],
    },
    {
        label: "Portfolio",
        href: "#",
        hasDropdown: true,
        dropdownItems: [
            { label: "Portfolio", href: "/portfolio" },
            { label: "Project Details", href: "/portfolio-details" },
        ],
    },
    {
        label: "About",
        href: "/about",
        hasDropdown: false,
    },
    {
        label: "Contact",
        href: "/contact",
        hasDropdown: false,
    },
];
