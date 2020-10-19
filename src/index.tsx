import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Application from './Application';

const rootContainer = document.getElementById('react-application');

ReactDOM.render(<Application />, rootContainer);

if ('serviceWorker' in navigator) {
    const { enviroment } = process.env;

    window.addEventListener('load', async () => {
        try {
            const registration = await navigator.serviceWorker.register(
                '/service-worker.js',
            );

            if (enviroment === 'development') {
                console.info('Service worker registered', registration);
            }
        } catch (error) {
            if (enviroment === 'development') {
                console.error('Service worker failed:', error);
            }
        }
    });
}
