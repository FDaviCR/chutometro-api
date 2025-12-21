const { Log } = require('../models');

class LogService {
    static async create({ action, userId }) {
        return Log.create({ action, userId });
    }

    static async findAll() {
        return Log.findAll({
            order: [['executedAt', 'DESC']],
        });
    }
}


module.exports = LogService;