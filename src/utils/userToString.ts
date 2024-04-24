import { GitHubUser } from '../types';
import { normalizeOffset } from './normalizeOffset';

/*
 * Transform an user to a string for commit message
 */
export function userToString(user: GitHubUser): string {
    // Transform user's date to a timestamp
    const date = new Date(user.date);
    const timestamp = Math.floor(date.getTime() / 1000);
    // Generate timezone for the user's date
    const timezone = normalizeOffset(date.getTimezoneOffset());

    return `${user.name} <${user.email}> ${timestamp} ${timezone}`;
}
