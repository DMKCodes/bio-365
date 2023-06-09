import { 
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer
} from 'recharts';

const ChartLine = ({ data, ticks }) => {
    const keys = data[0] && Object.keys(data[0]).filter(key => key !== 'name');

    const formatCamelCase = (string) => {
        string = string.replace(/([A-Z])/g, ' $1');
        return string.charAt(0).toUpperCase() + string.slice(1);
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
        <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={data} margin={{ top: 15, right: 30, left: 60, bottom: 15 }}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' ticks={ticks} />
                <YAxis tickFormatter={tick => tick.toLocaleString()} />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
                {keys.map((key, index) => (
                    <Line
                        key={index}
                        type='monotone'
                        dataKey={key}
                        stroke={index === 0 ? '#FB8F67' : '#00c49a'}
                    />
                ))}
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartLine;