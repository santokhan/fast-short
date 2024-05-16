'use client'

import UserInfoSide from "@/components/UserInfoSide";

function NavItem({ item }) {
    return (
        <li>
            <a href={item.link} className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100">
                <span className="ml-3 capitalize">{item.label}</span>
                {item.notification && (
                    <span className="ml-3 inline-flex h-3 w-3 items-center justify-center rounded-full bg-indigo-100 p-3 text-sm font-medium text-indigo-800">{item.notification}</span>
                )}
            </a>
        </li>
    );
}

function CloseButton({ onClose }) {
    return (
        <button type="button" onClick={onClose} className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900">
            <span className="sr-only">Close menu</span>
        </button>
    );
}

function SideNavs({ onClose }) {
    const navItems = [
        {
            label: 'dashboard',
            link: '/dashboard',
        },
        {
            label: 'wallet',
            link: '/dashboard/wallet',
        },
        {
            label: 'manage-links',
            link: '/dashboard/manage-links',
        },
        {
            label: 'payments',
            link: '/dashboard/payments',
        },
        {
            label: 'settings',
            link: '/dashboard/settings',
        },
        {
            label: 'support',
            link: '/dashboard/support',
        },
    ]

    return (
        <div className="relative w-64 -translate-x-full translate-x-0 p-4 transition-transform" tabIndex="-1">
            <UserInfoSide />
            <CloseButton onClose={onClose} />
            <div className="overflow-y-auto py-4+">
                <ul className="space-y-2 font-medium">
                    {navItems.map((item, index) => <NavItem key={index} item={item} />)}
                </ul>
            </div>
        </div>
    );
}

export default SideNavs;
