const cluster = require("cluster")
const CPUs = require("os").cpus().length

if(cluster.isMaster) {
  console.log(`master: ${process.pid}`)
  cluster.setupMaster({
    exec: "./app"
  })

  for(let i = 0; i < CPUs - 1;i++) {
    const worker = cluster.fork()
  }
}