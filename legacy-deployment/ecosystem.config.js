module.exports = {
  apps: [
    {
      name: "Migration",
      script: "/usr/bin/serve",
      args: ["-s", "dist", "-l", "4222"],
      cwd: "/Home/App/Xitcoin/Migration",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};