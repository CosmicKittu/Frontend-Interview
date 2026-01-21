export function timeAgo(dateString: string): string {
    const now: Date = new Date();
    const past: Date = new Date(dateString);

    if (isNaN(past.getTime())) {
        return "invalid date";
    }

    const diffMs: number = now.getTime() - past.getTime();

    const seconds: number = Math.floor(diffMs / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const weeks: number = Math.floor(days / 7);
    const months: number = Math.floor(days / 30);
    const years: number = Math.floor(days / 365);

    if (seconds < 60) return `${seconds} sec ago`;
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
    if (weeks < 4) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
    if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;

    return `${years} year${years !== 1 ? "s" : ""} ago`;
}