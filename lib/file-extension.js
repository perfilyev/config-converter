const path = module.require('path');
module.exports = (name) => path.extname(name)
                                             .substr(1)
                                             .toLowerCase()
                                             .trim();
