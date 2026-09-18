module.exports = {
  packagerConfig: {
    asar: true,

    icon: "ico",

    win32metadata: {
      "requested-execution-level": "requireAdministrator"
    }
  },

  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "cleaner",
        authors: "TeoST",
        description: "Limpiador de archivos para Windows"
      }
    }
  ]
};