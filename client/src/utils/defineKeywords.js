import React from 'react';
import DefinitionTooltip from '../components/DefinitionTooltip';
import { GLOSSARY_DICT } from '../app/shared/GLOSSARY';

const defineKeywords = (text) => {
    // Use a regular expression to split text into words and punctuation
    const wordsAndPunctuation = text.split(/(\s+|[,./#!$%^&*;:{}=\-_`~()]+)/);

    const textWithTooltips = wordsAndPunctuation.map((item, index) => {
        // Check if the item is a word (not just whitespace or punctuation)
        const isWord = /[a-zA-Z]/.test(item);

        if (isWord && GLOSSARY_DICT[item]) {
            return (
                <span
                    id={`_${item}-${index}-definition`}
                    className='definition'
                    key={index}
                >
                    {item}
                    <DefinitionTooltip
                        term={GLOSSARY_DICT[item]}
                        targetId={`_${item}-${index}-definition`}
                    />
                </span>
            );
        } else {
            return item;
        }
    });

    return textWithTooltips;
};

export default defineKeywords;