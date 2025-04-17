export function debounce<Args extends unknown[]>(func: (...args: Args) => void, delay: number) {
    let timeout: NodeJS.Timeout;
    return function (...args: Args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
}