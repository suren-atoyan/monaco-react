const someJSCodeExample = `
  // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

  const CANCELATION_MESSAGE = {
    type: 'cancelation',
    msg: 'operation is manually canceled',
  };

  function makeCancelable(promise) {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
      promise.catch(reject);
    });

    return (wrappedPromise.cancel = () => (hasCanceled_ = true), wrappedPromise);
  }

  export default makeCancelable;
`;

const someCSSCodeExample = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [type=reset], [type=submit], button, html [type=button] {
      -webkit-appearance: button;
  }

  [type=button]{
    -webkit-appearance: none;
  }

  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  .full-size {
    width: 100%;
    height: 100%;
  }

  .ql-editor a {
    color: rgba(255, 255, 255, 0.20);
    cursor: pointer;
    padding-left: 8px;
    padding-right: 8px;
    text-decoration: none;
  }
  .ql-editor ul, .ql-editor li, .ql-editor ol {
    margin-left: 16px;
  }
  .ql-editor object {
    color: #d32f2f;
  }
  .ql-editor blockquote {
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    padding-top: 8px;
    padding-left: 24px;
    padding-right: 16px;
    padding-bottom: 8px;
  }
  .ql-editor .ql-align-center {
    text-align: center;
  }
  .ql-editor .ql-align-justify {
    text-align: justify;
  }
  .ql-editor .ql-align-right {
    text-align: right;
  }
  .ql-editor a:hover {
    text-decoration: underline;
  }
`;

const someHTMLCodeExample = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- https://web.dev/uses-rel-preconnect -->
      <link rel="preconnect" href="https://storage.googleapis.com">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111" />
      <meta name="keywords" content="wlist, wishes, wishes list" />

      <meta
        name="description"
        content="Wlist"
        data-react-helmet="true"
      />
      <meta
        property="og:title"
        content="Wlist"
        data-react-helmet="true"
      >
      <meta
        property="og:description"
        content="Wlist"
        data-react-helmet="true"
      >
      <meta
        property="og:url"
        content="%PUBLIC_URL%"
        data-react-helmet="true"
      >
      <meta
        property="og:image"
        content="%PUBLIC_URL%/images/cover.png"
        data-react-helmet="true"
      />
      <meta
        name="twitter:card"
        content="summary"
        data-react-helmet="true"
      />
      <meta property="og:type" content="website" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <!--
        manifest.json provides metadata used when your web app is installed on a
        user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      -->
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials" />
      <!-- https://web.dev/defer-non-critical-css/ -->
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">

      <title>Wlist</title>

      <!-- ie -->
      <script type="text/javascript">
        var ua = navigator.userAgent;
        var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

        if (is_ie) {
          document.ie = 'true';

          var ie_script = document.createElement('script');
          var ie_styles = document.createElement('link');

          ie_script.src = 'no-ie/init.js';
          ie_styles.rel = 'stylesheet';
          ie_styles.href = 'no-ie/styles.css';

          function injectScripts() {
            document.body.innerHTML = '';
            document.body.appendChild(ie_styles);
            document.body.appendChild(ie_script);
          }

          if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', injectScripts);
          } else { // before IE 9
            document.attachEvent('DOMContentLoaded', injectScripts);
          }

        }
      </script>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <script type="text/javascript">
        // set the body color before app initialization, to avoid blinking
        var themeMode = localStorage.getItem('theme-mode');
        var initialBodyStyles = document.createElement('style');
        var currentThemeColor = themeMode === 'light' ? '#fafafa': '#111';
        initialBodyStyles.innerText = 'body { background-color: ' + currentThemeColor + ' }';
        document.head.appendChild(initialBodyStyles);

        // also set meta[name="theme-color"] content
        var metaTheme = document.querySelector('meta[name="theme-color"]');

        metaTheme.content = currentThemeColor;
      </script>
      <div id="root"></div>
    </body>
  </html>
`;

const files = {
  "children": [
    {
      "name": "src",
      "children": [
        {
          "name": "index.js",
          "language": "javascript",
          "value": `
            // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

            const CANCELATION_MESSAGE = {
              type: 'cancelation',
              msg: 'operation is manually canceled',
            };

            function makeCancelable(promise) {
              let hasCanceled_ = false;

              const wrappedPromise = new Promise((resolve, reject) => {
                promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
                promise.catch(reject);
              });

              return (wrappedPromise.cancel = () => (hasCanceled_ = true), wrappedPromise);
            }

            export default makeCancelable;
          `,
        },
        {
          "name": "global.css",
          "language": "css",
          "value": `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              outline: none;
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            *::-webkit-scrollbar {
              display: none;
            }

            body {
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }

            [type=reset], [type=submit], button, html [type=button] {
                -webkit-appearance: button;
            }

            [type=button]{
              -webkit-appearance: none;
            }

            .full-width {
              width: 100%;
            }
            .full-height {
              height: 100%;
            }
            .full-size {
              width: 100%;
              height: 100%;
            }

            .ql-editor a {
              color: rgba(255, 255, 255, 0.20);
              cursor: pointer;
              padding-left: 8px;
              padding-right: 8px;
              text-decoration: none;
            }
            .ql-editor ul, .ql-editor li, .ql-editor ol {
              margin-left: 16px;
            }
            .ql-editor object {
              color: #d32f2f;
            }
            .ql-editor blockquote {
              border-left: 3px solid rgba(255, 255, 255, 0.12);
              padding-top: 8px;
              padding-left: 24px;
              padding-right: 16px;
              padding-bottom: 8px;
            }
            .ql-editor .ql-align-center {
              text-align: center;
            }
            .ql-editor .ql-align-justify {
              text-align: justify;
            }
            .ql-editor .ql-align-right {
              text-align: right;
            }
            .ql-editor a:hover {
              text-decoration: underline;
            }
          `,
        },
        {
          name: 'home.html',
          language: 'html',
          value: `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="utf-8" />
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <!-- https://web.dev/uses-rel-preconnect -->
                <link rel="preconnect" href="https://storage.googleapis.com">
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#111" />
                <meta name="keywords" content="wlist, wishes, wishes list" />

                <meta
                  name="description"
                  content="Wlist"
                  data-react-helmet="true"
                />
                <meta
                  property="og:title"
                  content="Wlist"
                  data-react-helmet="true"
                >
                <meta
                  property="og:description"
                  content="Wlist"
                  data-react-helmet="true"
                >
                <meta
                  property="og:url"
                  content="%PUBLIC_URL%"
                  data-react-helmet="true"
                >
                <meta
                  property="og:image"
                  content="%PUBLIC_URL%/images/cover.png"
                  data-react-helmet="true"
                />
                <meta
                  name="twitter:card"
                  content="summary"
                  data-react-helmet="true"
                />
                <meta property="og:type" content="website" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <!--
                  manifest.json provides metadata used when your web app is installed on a
                  user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
                -->
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" crossorigin="use-credentials" />
                <!-- https://web.dev/defer-non-critical-css/ -->
                <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">

                <title>Wlist</title>

                <!-- ie -->
                <script type="text/javascript">
                  var ua = navigator.userAgent;
                  var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

                  if (is_ie) {
                    document.ie = 'true';

                    var ie_script = document.createElement('script');
                    var ie_styles = document.createElement('link');

                    ie_script.src = 'no-ie/init.js';
                    ie_styles.rel = 'stylesheet';
                    ie_styles.href = 'no-ie/styles.css';

                    function injectScripts() {
                      document.body.innerHTML = '';
                      document.body.appendChild(ie_styles);
                      document.body.appendChild(ie_script);
                    }

                    if (document.addEventListener) {
                      document.addEventListener('DOMContentLoaded', injectScripts);
                    } else { // before IE 9
                      document.attachEvent('DOMContentLoaded', injectScripts);
                    }

                  }
                </script>
              </head>
              <body>
                <noscript>You need to enable JavaScript to run this app.</noscript>
                <script type="text/javascript">
                  // set the body color before app initialization, to avoid blinking
                  var themeMode = localStorage.getItem('theme-mode');
                  var initialBodyStyles = document.createElement('style');
                  var currentThemeColor = themeMode === 'light' ? '#fafafa': '#111';
                  initialBodyStyles.innerText = 'body { background-color: ' + currentThemeColor + ' }';
                  document.head.appendChild(initialBodyStyles);

                  // also set meta[name="theme-color"] content
                  var metaTheme = document.querySelector('meta[name="theme-color"]');

                  metaTheme.content = currentThemeColor;
                </script>
                <div id="root"></div>
              </body>
            </html>
          `,
        }
      ],
    },
    {
      name: 'package.json',
      language: 'json',
      value: `
        {
          "name": "mr",
          "version": "0.1.0",
          "private": true,
          "dependencies": {
            "@material-ui/core": "^4.10.2",
            "@monaco-editor/react": "^3.7.5",
            "@testing-library/jest-dom": "^4.2.4",
            "@testing-library/react": "^10.4.3",
            "@testing-library/user-event": "^7.1.2",
            "dayjs": "^1.8.28",
            "is-mobile": "^2.2.1",
            "jest-environment-jsdom-sixteen": "^1.0.3",
            "lodash.debounce": "^4.0.8",
            "notistack": "^0.9.17",
            "overmind": "^24.1.1",
            "overmind-react": "^25.1.1",
            "ramda": "^0.27.0",
            "react": "^17.0.1",
            "react-dom": "^17.0.1",
            "react-error-boundary": "^2.2.2",
            "react-helmet": "^6.1.0",
            "react-icons": "^3.10.0",
            "react-router-dom": "^5.2.0",
            "react-scripts": "^4.0.0",
            "state-local": "^1.0.6",
            "uuid": "^8.2.0"
          },
          "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test --env=jest-environment-jsdom-sixteen",
            "eject": "react-scripts eject"
          },
          "eslintConfig": {
            "extends": "react-app"
          },
          "browserslist": {
            "production": [
              ">0.2%",
              "not dead",
              "not op_mini all"
            ],
            "development": [
              "last 1 chrome version",
              "last 1 firefox version",
              "last 1 safari version"
            ]
          },
          "devDependencies": {
            "monaco-editor": "^0.21.2"
          }
        }
      `,
    }
  ],
};

export { someCSSCodeExample, someHTMLCodeExample, someJSCodeExample };

export default files;
