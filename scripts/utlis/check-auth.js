
export function authenticate() {
    if (sessionStorage.getItem('loggeduserdata') == null) {
        window.location.href = 'index.html';
    }
}

