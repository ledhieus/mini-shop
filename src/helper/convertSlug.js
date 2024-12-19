import unidecode from 'unidecode';

export const convertToSlug =(text) => {
    const unidecodeText = unidecode(text.trim())

    const slug = unidecodeText.replace(/\s+/g, "-")
    return slug
}