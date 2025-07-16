import React from "react";
import type {AllowedTimePeriods} from "../../../types.ts";


interface TimePeriodSelectProps {
    option: AllowedTimePeriods;
    onChange: (value: AllowedTimePeriods) => void;
    options: readonly AllowedTimePeriods[];
    title:string
}

const TimePeriodSelect: React.FC<TimePeriodSelectProps> = ({
                                                               option,
                                                               onChange,
                                                               options,
    title
                                                           }) => {
    return (
        <div className="mt-6 mb-3 max-w-[200px]">
            <label
                htmlFor="select"
                className="block mb-1 text-gray-600 font-medium text-sm"
            >
                {title}
            </label>
            <select
                id="select"
                value={option}
                onChange={(e) => onChange(e.target.value as AllowedTimePeriods)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default TimePeriodSelect;
