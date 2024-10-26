export default function ({ $fire }) {
  if (process.client) {
    // console.log($fire)
    $fire.appCheck.activate($fire.auth._delegate.app._options.appCheckReCapchaV3Key)
  }
}
