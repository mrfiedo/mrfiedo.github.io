const DIENSTPLAN_BASE_URL = 'https://dienstplan-rk.herokuapp.com/plan'

export async function getPlan() {
    const res = await fetch(DIENSTPLAN_BASE_URL, {
        method: 'GET',
        mode: 'cors',
        credentials: 'include'
    });
    if (!res.ok) {
        return [];
    }
    return res.json();
}