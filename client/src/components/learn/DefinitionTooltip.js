import { useState } from 'react';
import { Tooltip } from 'reactstrap';
import { GLOSSARY } from '../../datasets/glossary';

const DefinitionTooltip = ({ term, targetId }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    const definition = GLOSSARY.filter((item) => item.term === term);

    return (
        <Tooltip
            placement='right'
            isOpen={open}
            target={`${targetId}`}
            toggle={toggle}
        >
            {definition[0].definition}
            <br /><br />
            - {definition[0].source}
        </Tooltip>
    );
};

export default DefinitionTooltip;