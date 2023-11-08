import { 
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    ResponsiveContainer
} from 'recharts';

const ChartBar = ({ data }) => {
    const keys = data[0] && Object.keys(data[0]).filter(key => key !== 'name');
    const colors = ['#791E94', '#136F63', '#F34213', '#2EC4B6', '#6a4c93'];

    const formatCamelCase = (string) => {
        string = string.replace(/([A-Z])/g, ' $1');
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const formatYAxisTick = (tick) => {
        return `${tick}%`;
    };

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className='chart-tooltip border p-2'>
                    <p className='label'>{`${label}`}</p>
                    {payload.map((item, index) => (
                        <p key={index} style={{ color: item.color }}>
                            {`${formatCamelCase(item.dataKey)}: ${item.value.toLocaleString()}`}
                        </p>
                    ))}
                </div>
            );
        }

        return null;
    };

    const CustomLegend = ({ payload }) => {
        return (
            <p>
                {payload.map((entry, index) => (
                    <span key={`item-${index}`} className='me-3' style={{ color: entry.color }}>
                        • {formatCamelCase(entry.value)}
                    </span>
                ))}
            </p>
        );
    };

    return (
        <ResponsiveContainer className='story-chart'>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis tickFormatter={formatYAxisTick} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
                {keys.map((key, index) => (
                    <Bar
                        key={index}
                        type='monotone'
                        dataKey={key}
                        fill={colors[index % colors.length]}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartBar;