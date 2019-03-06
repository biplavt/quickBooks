var express = require('express');
var router = express.Router();
var path = require('path');




var quickBookController=require('./../controller/quickBook.controller');


router.get('/', function(req, res) {
    res.send('Quickbooks App');
});

router.route('/v1/quickBooks/salesHeader').post(quickBookController.pSalesHeader);

router.route('/v1/quickBooks/salesLineItems').post(quickBookController.pSalesLinesItems);

router.route('/v1/quickBooks/invoiceHeader').post(quickBookController.pInvoiceHeader);

router.route('/v1/quickBooks/invoiceLineItems').post(quickBookController.pInvoiceLineItems);



















module.exports = router;