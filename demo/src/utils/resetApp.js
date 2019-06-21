// Looks strange? Reset app by redirecting to "/"? 🤦
// Fortunately or unfortunately our application has no backend side
// and doesn't use cloud storages to keep or share states.
// That's why for being able to share something between users we are
// using the URL. When you are pressing the button "Save" or "Share"
// we are adding the hashed state of your app into the URL. So, that means
// by removing everything after "/" we appear in the default state of our app.

const resetApp = _ => (window.location.href = '/');

export default resetApp;
