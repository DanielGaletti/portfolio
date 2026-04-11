export function parseFrontmatter(raw) {
    const trimmed = raw.replace(/^\uFEFF/, '');
    const match = trimmed.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
        return { data: {}, content: trimmed };
    }

    const fmBlock = match[1];
    const content = match[2];
    const data = {};

    fmBlock.split(/\r?\n/).forEach((line) => {
        const idx = line.indexOf(':');
        if (idx === -1) return;
        const key = line.slice(0, idx).trim();
        let val = line.slice(idx + 1).trim();
        if (
            (val.startsWith('"') && val.endsWith('"')) ||
            (val.startsWith("'") && val.endsWith("'"))
        ) {
            val = val.slice(1, -1);
        }
        data[key] = val;
    });

    return { data, content };
}
