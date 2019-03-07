var express = require('express');
var router = express.Router();
var path = require('path');

var webtoken = require('./../security/webtoken.js');


var quickBookController=require('./../controller/quickBook.controller');

//authentication
router.use(function(req, res, next) {
    var login = webtoken.token(req.header('x-auth')).then(function(result) {
    	// console.log('result:',result)
        if (result) {
            // console.log('authenticated!');
            next();
        }
    }, function(error) {
        res.status(400).send('Invalid Token');
    });
})


router.get('/', function(req, res) {
    res.send('Quickbooks App');
});

router.route('/v1/quickBooks/salesHeader').post(quickBookController.pSalesHeader);

router.route('/v1/quickBooks/salesLineItems').post(quickBookController.pSalesLinesItems);

router.route('/v1/quickBooks/invoiceHeader').post(quickBookController.pInvoiceHeader);

router.route('/v1/quickBooks/invoiceLineItems').post(quickBookController.pInvoiceLineItems);

router.route('/v1/quickBooks/salesOrders').get(quickBookController.gSalesOrderList);

router.route('/v1/quickBooks/customerDetailFromSales/:salesId').get(quickBookController.gCustomerDetailsFromSalesId);

router.route('/v1/quickBooks/salesOrderDetailsFromSalesId/:salesId').get(quickBookController.gSalesOrderDetailsFromSalesId);

router.route('/v1/quickBooks/salesFromCustomer/:customerAccount').get(quickBookController.gSalesFromCustomer);

router.route('/v1/quickBooks/invoiceDetail/:salesId').get(quickBookController.gInvoiceDetail);

router.route('/v1/quickBooks/salesHeader/:salesId').get(quickBookController.gSalesHeaders);
















module.exports = router;