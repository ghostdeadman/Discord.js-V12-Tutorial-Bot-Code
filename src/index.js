const GhostDocsClient = require('./Structures/GhostDocsClient');
const config = require('../config.json');

const client = new GhostDocsClient(config);
client.login();