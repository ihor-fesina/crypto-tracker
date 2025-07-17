import React from 'react';
import type { SimpleCoin } from "../../../types.ts";
import Marquee from "react-fast-marquee";
import { HoverBorderGradient } from "../../ui/hover-border-gradient.tsx";
import { cn } from "../../../lib/utils.ts";

interface Props {
    title: string;
    items: SimpleCoin[];
    direction: 'left' | 'right';
}

const MarqueeSection: React.FC<Props> = ({ title, items, direction }) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-2 py-[10px] max-w-5xl mx-auto")}>
            <h3
                className={cn(
                    "uppercase col-span-2 flex items-center mb-2 md:mb-0 justify-center",
                    direction === 'right' ? 'md:justify-end md:order-1' : 'md:justify-start md:order-2'
                )}
            >
                {title}
            </h3>
            <div
                className={cn(
                    "col-span-10",
                    direction === 'right' ? 'md:order-2' : 'md:order-1'
                )}
            >
                <Marquee direction={direction}>
                    <div className="flex gap-5 px-10">
                        {items?.map((coin) => (
                            <HoverBorderGradient
                                key={coin.uuid}
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-black text-white flex items-center space-x-2"
                            >
                                <a
                                    href={coin.coinrankingUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-5"
                                >
                                    <img
                                        src={coin.iconUrl}
                                        alt={coin.name}
                                        width={24}
                                        height={24}
                                        className="rounded-full"
                                    />
                                    <p>{coin.symbol}</p>
                                </a>
                            </HoverBorderGradient>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default MarqueeSection;
