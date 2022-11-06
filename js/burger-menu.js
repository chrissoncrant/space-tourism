import getFocusableElements from './get-focusable-elements.js'; 

class BurgerMenu extends HTMLElement {
    constructor() {
        super();

        const self = this;

        this.state = new Proxy(
            {
                status: "open",
                enabled: false
            },
            {
                set(state, key, value) {
                    const oldValue = state[key];

                    state[key] = value;

                    if (oldValue !== value) {
                        self.processStateChange();
                    }

                    return state;
                }
            }
        );
    }

    processStateChange() {
        this.root.setAttribute('status', this.state.status);

        this.root.setAttribute('enabled', this.state.enabled ? 'true' : 'false');

        this.manageFocus();

        switch (this.state.status) {
            case 'closed':
                this.trigger.setAttribute('aria-label', 'Open menu');
                this.trigger.setAttribute('aria-expanded', 'false');
                break;
            case 'iniital':
            case 'open':
                this.trigger.setAttribute('aria-label', 'Close menu');
                this.trigger.setAttribute('aria-expanded', 'true');
                break;
        }
    }

    manageFocus() {
        if (!this.state.enabled) {
            this.focusableElements.forEach(element => element.removeAttribute('tabindex'));
            return;
        }

        switch (this.state.status) {
            case 'open':
                this.focusableElements.forEach(element => element.removeAttribute('tabindex'));
                break;
            case 'closed':
                [...this.focusableElements]
                    .filter(element => element.getAttribute('data-element') !== 'burger-menu-trigger')
                    .forEach(element => element.setAttribute('tabindex', '-1'));
        }
    }

    get maxWidth() {
        return parseInt(this.getAttribute('max-width') || 9999, 10);
    }

    connectedCallback() {
        this.initialMarkup = this.innerHTML;

        this.render();

        const observer = new ResizeObserver(observedItems => {
            const { contentRect } = observedItems[0];
            console.log(contentRect.width)

            this.state.enabled = contentRect.width <= this.maxWidth;
        });

        observer.observe(this.parentNode.parentNode.parentNode);
    }

    render() {
        this.innerHTML = `
            <div class="burger-root" data-element="burger-root">
                <button class="burger-menu__trigger" data-element="burger-menu-trigger" type="button" aria-label="Open menu">
                    <span class="burger-menu__bars" aria-hidden="true"></span>
                </button>
                <div class="burger-menu__panel" data-element="burger-menu-panel">
                    ${this.initialMarkup}
                </div>
            </div>
        `;

        this.postRender();     
    }

    postRender() {
        this.root = document.querySelector('[data-element="burger-root"]');

        this.trigger = document.querySelector('[data-element="burger-menu-trigger"');

        this.panel = document.querySelector('[data-element="burger-menu-panel"]');

        this.focusableElements = getFocusableElements(this);

        if (this.trigger && this.panel) {
            this.toggle();

            this.trigger.addEventListener('click', evt => {
                evt.preventDefault();

                this.toggle();
            });

            document.addEventListener('focusin', () => {
                if (!this.contains(document.activeElement)) {
                    this.toggle('closed');
                }
            });

            return;
        }

        this.innerHTML = this.initialMarkup;
    }

    toggle(forcedStatus) {
        if (forcedStatus) {
            if (this.state.status === forcedStatus) {
                return;
            }

            this.state.status = 'closed';
        } else {
            this.state.status = this.state.status === 'closed' ? 'open' : 'closed';
        }
    }
}

if ('customElements' in window) {
    customElements.define('burger-menu', BurgerMenu);
}