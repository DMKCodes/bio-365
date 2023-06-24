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
            <BarChart data={data} width='100%'>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend content={<CustomLegend />} />
                {keys.map((key, index) => (
                    <Bar
                        key={index}
                        type='monotone'
                        dataKey={key}
                        fill={index === 0 ? '#FB8F67' : 1 ? '#00c49a' : 2 ? '#8884d8' : 3 ? '#82ca9d' : null}
                    />
                ))}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ChartBar;