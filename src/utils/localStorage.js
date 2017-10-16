export default function isLocalStorageSupported() {
    try {
        localStorage.setItem('check', 'check')
        localStorage.getItem('check')
        return true
    } catch (exc) {
        return false
    }
}