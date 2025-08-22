module.exports = {
    apps: [
        {
            name: 'momo-note',
            exec_mode: 'cluster',
            instances: 2,
            port: 8080,
            script: 'build/index.js'
        }
    ]
};
