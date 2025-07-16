interface Field<T> {
    key: string;
    label: string;
    icon?: string;
    getValue: (data: T) => string | number;
}

interface StatsProps<T> {
    data: T;
    fields: Field<T>[];
    title?: string;
}

function StatsGrid<T>({ data, fields, title }: StatsProps<T>) {
    return (
        <div className="mb-4">
            {title && <div className="mb-1 text-gray-600 font-medium text-sm">{title}</div>}
            <div className="grid grid-cols-2 gap-4">
                {fields.map(({ key, label, icon, getValue }) => (
                    <div key={key}>
                        <div className="text-gray-500 text-xs flex items-center gap-1">
                            {icon} {label}
                        </div>
                        <div className="font-mono text-lg">{getValue(data)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StatsGrid;
