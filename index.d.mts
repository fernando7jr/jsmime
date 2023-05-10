/**
 * The `jsmine` module provides utilities for resolving mime-types.
 * It can be accessed using:
 * ```js
 * const jsmime = require('jsmime');
 * ```
 *
 * or:
 * ```js
 * import jsmime from 'jsmime';
 * ```
 * @see [source](https://github.com/fernando7jr/jsmime)
 */
declare module jsmine {}

/**
 * Resolved mime-type information object
 */
export type MimetypeInfo = {
    /** The compatible extensions. Sometimes multiple file extensions map to the same mime-type */
    extensions: string[];
    /** A basic description of what is the mime-type about */
    description: string;
    /** All mapped mime-types to the given extensions. One extension might map to multiple mime-types such as .ts */
    mimetypes: string[];
};

/**
 * Resolve the mime-type given a file extension
 * @param extension an extension name with or without a leading dot '.'
 * @returns the resolved mime-type information or undefined if it could not resolve to a mime-type
 */
export declare function resolveMimetype(extension: string): MimetypeInfo | undefined;
/**
 * Get a mime-type by name
 * @param mimetype the mime-type name for example 'text/typescript'
 * @returns the resolved mime-type information or undefined if it could not resolve to a mime-type
 */
export declare function resolveMimetype(mimetype: string): MimetypeInfo | undefined;
/**
 * Resolve the mime-type given a filename
 * @param filename a filename with its extension
 * @returns the resolved mime-type information or undefined if it could not resolve to a mime-type
 */
export declare function resolveMimetype(filename: string): MimetypeInfo | undefined;
