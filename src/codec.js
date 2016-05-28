const make = (codecs) => (action, format, data) => codecs.find(codec => codec('format') === format)(action)(data);

module.exports.make = make;