const removeHtmlTags = (str) => {
    return str.replace(/<[^>]*>/g, '');
};

export default removeHtmlTags;