document.querySelectorAll('[data-toggle-sidebar]').forEach(toggle => {
    // add event listener on click event
    toggle.addEventListener('click', e => {
        // get the sidebar id from current element data attrible
        const sidebarID = toggle.dataset.toggleSidebar;
        // check if there is an element on the doc with the id
        const sidebarElement = sidebarID ? document.getElementById(sidebarID) : undefined;

        if(sidebarElement) {
            // toggle to hidden state of sidebar
            let sidebarState = sidebarElement.getAttribute('aria-hidden');
            sidebarElement.setAttribute('aria-hidden', sidebarState == 'true' ? false : true);
        }
    });
});