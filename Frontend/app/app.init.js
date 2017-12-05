import jQuery from 'jquery';

import ToDo from './components/c-todo/c-todo';

'use strict';
module.exports = (() => {
    window.jQuery = window.jQuery || jQuery;
    window.$ = window.jQuery;

    jQuery(document).ready(() => {

        // Components
        // ToDo.init();
    });
})();
