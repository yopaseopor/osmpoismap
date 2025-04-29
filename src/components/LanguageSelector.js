import { setLanguage, getCurrentLanguage, languages } from '../i18n/index.js';

export class LanguageSelector {
    constructor(container) {
        this.container = container;
        this.render();
        this.setupEventListeners();
    }

    render() {
        const currentLang = getCurrentLanguage();
        const div = document.createElement('div');
        div.className = 'language-selector';
        
        const select = document.createElement('select');
        select.id = 'language-select';
        
        Object.entries(languages).forEach(([code, lang]) => {
            const option = document.createElement('option');
            option.value = code;
            option.textContent = lang.name;
            if (code === currentLang) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        div.appendChild(select);
        this.container.innerHTML = '';
        this.container.appendChild(div);
    }

    setupEventListeners() {
        const select = this.container.querySelector('#language-select');
        select.addEventListener('change', (e) => {
            setLanguage(e.target.value, true);
        });

        // Update selector when URL changes
        window.addEventListener('popstate', () => {
            const currentLang = getCurrentLanguage();
            const select = this.container.querySelector('#language-select');
            if (select && select.value !== currentLang) {
                select.value = currentLang;
            }
        });
    }
} 