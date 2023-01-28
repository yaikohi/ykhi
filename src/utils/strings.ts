/**
 * Retrieves a substring containing the name of the file from a string of a filepath.
 */
export const getFileFromFilePath = (filepath: string): string => {
    const regex = "\/[^\/]+$"
    const res = filepath.normalize().match(regex)
    if (res === null) {
        throw new Error('No match found for given regular expression!')
    } 
    return res[0].replace('/', '')
}
