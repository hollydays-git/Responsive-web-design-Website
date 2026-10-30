// Move only the background layers. Keep this simple, like the parallax assignment.
const backgrounds = document.querySelectorAll('.parallax-bg');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function parallaxScroll() {
  backgrounds.forEach(function (background) {
    const section = background.parentElement.getBoundingClientRect();
    // Disable movement on small screens and when reduced motion is requested.
    let movement = 0;
    if (!reducedMotion.matches && window.innerWidth >= 768) {
      movement = Math.max(-90, Math.min(90, -section.top * 0.12));
    }
    background.style.transform = 'translateY(' + movement + 'px)';
  });
}
window.addEventListener('scroll', parallaxScroll, { passive: true });
window.addEventListener('resize', parallaxScroll);
reducedMotion.addEventListener('change', parallaxScroll);
parallaxScroll();
// The existing theme uses jQuery animation for anchor links. Respect reduced motion too.
if (window.jQuery) {
  window.jQuery.fx.off = reducedMotion.matches;
}
reducedMotion.addEventListener('change', function () {
  if (window.jQuery) {
    window.jQuery.fx.off = reducedMotion.matches;
  }
});
document.getElementById('messageForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const email = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('messageText').value.trim();
  if (!name || !message) {
    document.getElementById('formStatus').textContent = 'Please enter your name and message.';
    return;
  }
  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  window.location.href = 'mailto:daniilistomin2021@gmail.com?subject=' + subject + '&body=' + body;
  document.getElementById('formStatus').textContent = 'If your email app did not open, use the email link on the left. Your message has not been sent automatically.';
});
