// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA6BzU3uZcp6ns3NqAiZv1ghTisY7p7C6Y",
    authDomain: "ds-oshop.firebaseapp.com",
    databaseURL: "https://ds-oshop.firebaseio.com",
    projectId: "ds-oshop",
    storageBucket: "ds-oshop.appspot.com",
    messagingSenderId: "1053943766785"
  }
};
