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
}

customElements.define('burger-menu', BurgerMenu);