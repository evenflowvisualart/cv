# cv

An example of CSS Grid layout adapted even for IE 10(+) and Edge 12(+), with some CSS magic to achieve seamless interactive states without using JavaScript:

> Switch buttons
> Fade in animation
> Typewriter animation
> Press button effect 
> Transitions
...and more.


Also, an example of a simple Progressive Web App, offering functionalities such as:

1) precaching of (static) assets;
2) offline mode implementation;
3) add to home screen functionality;

Progressive Web Apps are user experiences that have the reach of the web, and are:

Reliable - Load instantly and never show the downasaur, even in uncertain network conditions. Fast - Respond quickly to user interactions with silky smooth animations and no janky scrolling. Engaging - Feel like a natural app on the device, with an immersive user experience. This new level of quality allows Progressive Web Apps to earn a place on the user's home screen.

For more info refer to: https://developers.google.com/web/progressive-web-apps/
https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/

Sadly, only Chrome and Opera on desktop, and Android fully support PWA. Even without this support, PWAs still work, just not as they were 
originally envisioned and require workarounds. 
Read the following info: https://dockyard.com/blog/2017/07/13/safari-ios-and-progressive-web-apps
https://dockyard.com/blog/2017/09/27/encouraging-pwa-installation-on-ios 
https://cloudfour.com/thinks/ios-doesnt-support-progressive-web-apps-so-what/

*IMPORTANT: At the time of a deployment, Github hasn't resolved issue with Service Worker in a simple manner.
Console log states: "Failed to register a ServiceWorker: ServiceWorker script evaluation failed" although the line above states SW registered
, and so do developement enviroment and other platforms (namely Firebase).
Therefore, until the issue resolves, to test full functionality of PWA refer to this address - https://marinabubnic-cv.firebaseapp.com/
