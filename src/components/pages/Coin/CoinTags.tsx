import React from "react";

interface CoinTagsProps {
    tags: string[];
}

const CoinTags: React.FC<CoinTagsProps> = ({ tags }) => {
    if (!tags?.length) return null;

    return (
        <div className="mb-4">
            <div className="text-gray-500 text-xs mb-1">Tags</div>
            <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs"
                    >
            {tag}
          </span>
                ))}
            </div>
        </div>
    );
};

export default CoinTags;
