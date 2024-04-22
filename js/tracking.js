// Track header navigation clicks
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.anchor a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {

            // Get the text of the clicked link
            var text = this.innerHTML;
            // Get the URL of the clicked link
            var url = this.getAttribute('href');

            // Send event to Google Analytics using gtag
            gtag('event', 'click', {
                'event_category': 'Navigation Link',
                'event_label': text,
                'value': url,
            });

        });
    });
});
// Track social icon clicks
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.social-icon a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {

            // Get the text of the clicked link
            var text = this.getAttribute('aria-label');
            // Get the URL of the clicked link
            var url = this.getAttribute('href');

            // Send event to Google Analytics using gtag
            gtag('event', 'click', {
                'event_category': 'Social Icon',
                'event_label': text,
                'value': url
            });

        });
    });
});
// Track fancy button clicks
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.button--fancy');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {

            // Get the text of the clicked link
            var text = this.innerHTML;
            // Get the URL of the clicked link
            var url = this.getAttribute('href');

            // Send event to Google Analytics using gtag
            gtag('event', 'click', {
                'event_category': 'Fancy Button',
                'event_label': text,
                'value': url
            });

        });
    });
});

// Get the elements with class "feature"
const featureElements = document.querySelectorAll('.feature');

// Function to handle mouse enter event
function handleMouseEnter() {
    this.hoverStartTime = Date.now();
}

// Function to handle mouse leave event
function handleMouseLeave() {
    // Calculate hover duration in milliseconds
    const hoverDuration = Date.now() - this.hoverStartTime;
    // Convert milliseconds to seconds
    const hoverDurationSeconds = hoverDuration / 1000;
    // Retrieve the text from the <h4> element within the feature
    const featureTitle = this.querySelector('h4').textContent;
    // If hover duration exceeds 2 seconds, send event to Google Analytics
    if (hoverDurationSeconds >= 2) {
        gtag('event', 'Hover', {
            'event_category': 'Feature Card',
            'event_label': featureTitle,
            'value': hoverDurationSeconds
        });
    }
}

// Attach event listeners to each feature element
featureElements.forEach(element => {
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
});