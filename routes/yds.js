var express = require('express');
var router = express.Router();
var _ = require('lodash');

var tasks = [{
    id: '00000001',
    sn: 'YDS1111111111',
    taskNumber: '1111',
    phone: '13111111111',
    plateNumber: '鲁F00001',
    customer: '张三',
    createTime: '2018-1-1',
    location: '烟台高新区',
    operator: 'yds-1',
    status: '未完成'
}, {
    id: '00000002',
    sn: 'YDS2222222222',
    taskNumber: '2222',
    phone: '13122222222',
    plateNumber: '鲁F00002',
    customer: '张三',
    createTime: '2018-1-2',
    location: '烟台高新区',
    operator: 'yds-1',
    status: '未完成'
}, {
    id: '00000003',
    sn: 'YDS3333333333',
    taskNumber: '3333',
    phone: '13133333333',
    plateNumber: '鲁F00003',
    customer: '张三',
    createTime: '2018-1-3',
    location: '烟台高新区',
    operator: 'yds-1',
    status: '未完成'
}]

router.get('/tasks', function (req, res) {
    res.send(tasks);
});
router.get('/task/:id', function (req, res) {
    res.send(_.find(tasks, {
        id: req.params.id
    }));
});

module.exports = router;