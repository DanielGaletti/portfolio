const base = () => {
    const p = process.env.PUBLIC_URL || '';
    return `${p}/blog`.replace(/\/+/g, '/');
};

export function blogUrl(path) {
    const b = base();
    const suffix = path.startsWith('/') ? path : `/${path}`;
    return `${b}${suffix}`.replace(/\/+/g, '/');
}
