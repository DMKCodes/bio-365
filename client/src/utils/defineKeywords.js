import DefinitionTooltip from '../components/DefinitionTooltip';
import { GLOSSARY_DICT } from '../app/shared/GLOSSARY';

const defineKeywords = (text) => {
    const words = text.split(' ');

    const textWithTooltips = words.map((word, index) => {
        const wordWithoutPunctuation = word.replace(/[,./#!$%^&*;:{}=\-_`~()]/g,'');

        if (GLOSSARY_DICT[wordWithoutPunctuation]) {
            return (
                <span id={`_${wordWithoutPunctuation}-${index}-definition`} className='definition' key={index}>
                    {word}{' '}
                    <DefinitionTooltip 
                        term={GLOSSARY_DICT[wordWithoutPunctuation]} 
                        targetId={`_${wordWithoutPunctuation}-${index}-definition`} 
                    />
                </span>
            );
        } else {
            return word + ' ';
        }
    });

    return textWithTooltips;
};

export default defineKeywords;