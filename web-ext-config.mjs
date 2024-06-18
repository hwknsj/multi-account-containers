export default {
  run: {
    firefox:
      '/Applications/Firefox Developer Edition.app/Contents/MacOS/firefox',
    firefoxProfile: 'web-ext',
    keepProfileChanges: true,
    profileCreateIfMissing: true,
    reload: true,
    devtools: true
  },
  sourceDir: 'src',
  artifactsDir: 'web-ext-artifacts',
  build: {
    overwriteDest: true
  },
  sign: {
    apiKey: process.env.AMO_JWT_ISSUER,
    apiSecret: process.env.AMO_JWT_SECRET
  },
  ignoreFiles: ['src/_locales']
}
