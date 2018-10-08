# event-decorators

    class SomeComponent {
        @Listen('tap', '#increase'))
        increase() {
            // ....
        }

        @Listen('tap', document.querySelector('#decrease'))
        decrease() {
            // ....
        }

        @Listen('farble', document)
        farble() {
            // ....
        }

        @Listen('barble', 'document')
        barble() {
            // ....
        }
    }

