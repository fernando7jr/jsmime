import path from 'path';

const MIMETYPES = [
    { extensions: ['aac'], description: 'AAC audio', mimetypes: ['audio/aac'] },
    { extensions: ['abw'], description: 'AbiWord document', mimetypes: ['application/x-abiword'] },
    { extensions: ['arc'], description: 'Archive document (multiple files embedded)', mimetypes: ['application/x-freearc'] },
    { extensions: ['avif'], description: 'AVIF image', mimetypes: ['image/avif'] },
    { extensions: ['avi'], description: 'AVI: Audio Video Interleave', mimetypes: ['video/x-msvideo'] },
    { extensions: ['azw'], description: 'Amazon Kindle eBook format', mimetypes: ['application/vnd.amazon.ebook'] },
    { extensions: ['bin'], description: 'Any kind of binary data', mimetypes: ['application/octet-stream'] },
    { extensions: ['bmp'], description: 'Windows OS/2 Bitmap Graphics', mimetypes: ['image/bmp'] },
    { extensions: ['bz'], description: 'BZip archive', mimetypes: ['application/x-bzip'] },
    { extensions: ['bz2'], description: 'BZip2 archive', mimetypes: ['application/x-bzip2'] },
    { extensions: ['bin'], description: 'Binary file', mimetypes: ['binary/octet-stream'] },
    { extensions: ['cda'], description: 'CD audio', mimetypes: ['application/x-cdf'] },
    { extensions: ['csh'], description: 'C-Shell script', mimetypes: ['application/x-csh'] },
    { extensions: ['css'], description: 'Cascading Style Sheets (CSS)', mimetypes: ['text/css'] },
    { extensions: ['csv'], description: 'Comma-separated values (CSV)', mimetypes: ['text/csv'] },
    { extensions: ['doc'], description: 'Microsoft Word', mimetypes: ['application/msword'] },
    { extensions: ['docx'], description: 'Microsoft Word (OpenXML)', mimetypes: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'] },
    { extensions: ['eot'], description: 'MS Embedded OpenType fonts', mimetypes: ['application/vnd.ms-fontobject'] },
    { extensions: ['epub'], description: 'Electronic publication (EPUB)', mimetypes: ['application/epub+zip'] },
    { extensions: ['gz'], description: 'GZip Compressed Archive', mimetypes: ['application/gzip'] },
    { extensions: ['gif'], description: 'Graphics Interchange Format (GIF)', mimetypes: ['image/gif'] },
    { extensions: ['htm', 'html'], description: 'HyperText Markup Language (HTML)', mimetypes: ['text/html'] },
    { extensions: ['ico'], description: 'Icon format', mimetypes: ['image/vnd.microsoft.icon'] },
    { extensions: ['ics'], description: 'iCalendar format', mimetypes: ['text/calendar'] },
    { extensions: ['jar'], description: 'Java Archive (JAR)', mimetypes: ['application/java-archive'] },
    { extensions: ['jpg', 'jpeg'], description: 'JPEG images', mimetypes: ['image/jpeg'] },
    { extensions: ['js'], description: 'JavaScript', mimetypes: ['text/javascript'] },
    { extensions: ['json'], description: 'JSON format', mimetypes: ['application/json'] },
    { extensions: ['jsonld'], description: 'JSON-LD format', mimetypes: ['application/ld+json'] },
    { extensions: ['mid', 'midi'], description: 'Musical Instrument Digital Interface (MIDI)', mimetypes: ['audio/midi, audio/x-midi'] },
    { extensions: ['mjs'], description: 'JavaScript module', mimetypes: ['text/javascript'] },
    { extensions: ['mp3'], description: 'MP3 audio', mimetypes: ['audio/mpeg'] },
    { extensions: ['mp4'], description: 'MP4 video', mimetypes: ['video/mp4'] },
    { extensions: ['mpeg'], description: 'MPEG Video', mimetypes: ['video/mpeg'] },
    { extensions: ['mpkg'], description: 'Apple Installer Package', mimetypes: ['application/vnd.apple.installer+xml'] },
    { extensions: ['odp'], description: 'OpenDocument presentation document', mimetypes: ['application/vnd.oasis.opendocument.presentation'] },
    { extensions: ['ods'], description: 'OpenDocument spreadsheet document', mimetypes: ['application/vnd.oasis.opendocument.spreadsheet'] },
    { extensions: ['odt'], description: 'OpenDocument text document', mimetypes: ['application/vnd.oasis.opendocument.text'] },
    { extensions: ['oga'], description: 'OGG audio', mimetypes: ['audio/ogg'] },
    { extensions: ['ogv'], description: 'OGG video', mimetypes: ['video/ogg'] },
    { extensions: ['ogx'], description: 'OGG', mimetypes: ['application/ogg'] },
    { extensions: ['opus'], description: 'Opus audio', mimetypes: ['audio/opus'] },
    { extensions: ['otf'], description: 'OpenType font', mimetypes: ['font/otf'] },
    { extensions: ['png'], description: 'Portable Network Graphics', mimetypes: ['image/png'] },
    { extensions: ['pdf'], description: 'Adobe Portable Document Format (PDF)', mimetypes: ['application/pdf'] },
    { extensions: ['php'], description: 'Hypertext Preprocessor (Personal Home Page)', mimetypes: ['application/x-httpd-php'] },
    { extensions: ['ppt'], description: 'Microsoft PowerPoint', mimetypes: ['application/vnd.ms-powerpoint'] },
    {
        extensions: ['pptx'],
        description: 'Microsoft PowerPoint (OpenXML)',
        mimetypes: ['application/vnd.openxmlformats-officedocument.presentationml.presentation'],
    },
    { extensions: ['rar'], description: 'RAR archive', mimetypes: ['application/vnd.rar'] },
    { extensions: ['rtf'], description: 'Rich Text Format (RTF)', mimetypes: ['application/rtf'] },
    { extensions: ['sh'], description: 'Bourne shell script', mimetypes: ['application/x-sh'] },
    { extensions: ['svg'], description: 'Scalable Vector Graphics (SVG)', mimetypes: ['image/svg+xml'] },
    { extensions: ['tar'], description: 'Tape Archive (TAR)', mimetypes: ['application/x-tar'] },
    { extensions: ['tif', 'tiff'], description: 'Tagged Image File Format (TIFF)', mimetypes: ['image/tiff'] },
    { extensions: ['ts'], description: 'TypeScript file', mimetypes: ['text/typescript'] },
    { extensions: ['ts'], description: 'MPEG transport stream', mimetypes: ['video/mp2t'] },
    { extensions: ['ttf'], description: 'TrueType Font', mimetypes: ['font/ttf'] },
    { extensions: ['txt'], description: 'Text, (generally ASCII or ISO 8859-n)', mimetypes: ['text/plain'] },
    { extensions: ['vsd'], description: 'Microsoft Visio', mimetypes: ['application/vnd.visio'] },
    { extensions: ['wav'], description: 'Waveform Audio Format', mimetypes: ['audio/wav'] },
    { extensions: ['weba'], description: 'WEBM audio', mimetypes: ['audio/webm'] },
    { extensions: ['webm'], description: 'WEBM video', mimetypes: ['video/webm'] },
    { extensions: ['webp'], description: 'WEBP image', mimetypes: ['image/webp'] },
    { extensions: ['woff'], description: 'Web Open Font Format (WOFF)', mimetypes: ['font/woff'] },
    { extensions: ['woff2'], description: 'Web Open Font Format (WOFF)', mimetypes: ['font/woff2'] },
    { extensions: ['xhtml'], description: 'XHTML', mimetypes: ['application/xhtml+xml'] },
    { extensions: ['xls'], description: 'Microsoft Excel', mimetypes: ['application/vnd.ms-excel'] },
    { extensions: ['xlsx'], description: 'Microsoft Excel (OpenXML)', mimetypes: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'] },
    { extensions: ['xml'], description: 'XML', mimetypes: ['application/xml', 'text/xml'] },
    { extensions: ['xul'], description: 'XUL', mimetypes: ['application/vnd.mozilla.xul+xml'] },
    { extensions: ['zip'], description: 'ZIP archive', mimetypes: ['application/zip'] },
    { extensions: ['3gp'], description: '3GPP audio/video container', mimetypes: ['video/3gpp', 'audio/3gpp'] },
    { extensions: ['3g2'], description: '3GPP2 audio/video container', mimetypes: ['video/3gpp2', 'audio/3gpp2'] },
    { extensions: ['7z'], description: '7-zip archive', mimetypes: ['application/x-7z-compressed'] },
].reduce((obj, info) => {
    const { extensions, mimetypes } = info;
    extensions.forEach((e) => Object.assign(obj, { [e]: info }));
    mimetypes.forEach((m) => Object.assign(obj, { [m]: info }));
    return obj;
}, {});

export function resolveMimetype(s) {
    const key = path.extname(s) || s || '';
    return MIMETYPES[key.startsWith('.') ? key.slice(1) : key];
}
