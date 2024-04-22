document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.social-icon a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Get the URL of the clicked link
            var url = this.getAttribute('href');

            // Send event to Google Analytics using gtag
            gtag('event', 'click', {
                'event_category': 'Navigation Link',
                'event_label': url
            });

            console.log('gtag sent');
            // Optionally, redirect to the clicked link after tracking
            setTimeout(function() {
                //window.location.href = url;
            }, 100);
        });
    });
});