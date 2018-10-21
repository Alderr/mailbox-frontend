export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};
  
export const saveAuthToken = (authToken) => {
    try {
        localStorage.setItem('authToken', authToken);
    }
    catch (e) {
        console.warn('Couldnt set auth token.'); // eslint-disable-line
    }
};
  
export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    }
    catch (e) {
        console.warn('Couldnt remove auth token.'); // eslint-disable-line
    }
};
  