const {prefix} = require(`./libs`)

//DISCORD COMMAND
const Ping = new RegExp(`^${prefix}ping$`)
const Admin = new RegExp(`^${prefix}admin$`)
const Warn = new RegExp(`^${prefix}warn`)
const Help = new RegExp (`^${prefix}help$`)
const Add = new RegExp(`^${prefix}ar`)
const Remove = new RegExp (`^${prefix}rm`)
const addVoice = new RegExp (`^${prefix}make`)
const Bc = new RegExp (`^${prefix}bc`)
const AIchat = new RegExp(`^${prefix}ai`)

// TELEGGRAM COMMAND
const init = new RegExp(`^${prefix}start`)
const video = new RegExp(`^${prefix}vd`)

module.exports = {Ping, Admin, Warn, Help, Add, Remove, addVoice, Bc, init, video, AIchat}