import { useState } from 'react';
import { Tooltip } from 'reactstrap';

const DefinitionTooltip = ({ term, targetId }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <Tooltip
            placement='top'
            isOpen={open}
            target={`${targetId}`}
            toggle={toggle}
            className='definition-tooltip'
        >
            {term.definition}<br />
            - {term.source}
        </Tooltip>
    );
};

export default DefinitionTooltip;