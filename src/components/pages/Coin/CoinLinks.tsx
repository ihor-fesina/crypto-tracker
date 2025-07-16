import React from "react";

type CoinLink = {
    name: string;
    type: string;
    url: string;
};

type CoinLinksProps = {
    links: CoinLink[];
};

const CoinLinks: React.FC<CoinLinksProps> = ({ links }) => {
    if (!links?.length) return null;

    return (
        <div className="mb-6">
            <h2 className="text-gray-500 text-xs mb-2 uppercase tracking-wide">Links</h2>
            <ul className="space-y-2 text-sm">
                {links.map((link) => (
                    <li key={link.url}>
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
                        >
                            <span className="font-semibold">{link.type}:</span>
                            <span className="underline">{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoinLinks;
