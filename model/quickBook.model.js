var mySqlConfig=require('./../configuration/database.config.js');
var makeConnection=require('./utility/utilityModel.js');


function postSalesHeader(input){

	var ourQuery=`Insert into quickBooks.SalesOrderHeader_TB (ID, CUSTACCOUNT, Name ,SalesName,CustomerPO,createdBy) values ('${input.ID}','${input.CUSTACCOUNT}','${input.NAME}','${input.SalesName}','${input.CustomerPO}','${input.createdBy}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postSalesLinesItems(input){

	var ourQuery=`Insert into quickBooks.salesOrderLine_TB (ID,ITEMID,ITEMNAME,CONFIGID,Qty) values ('${input.ID}', '${input.ITEMID}','${input.ITEMNAME}','${input.CONFIGID}',${input.Qty})`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postInvoiceHeader(input){

	var ourQuery=`Insert into quickBooks.invoiceHeader_TB (invoiceID,CUSTACCOUNT,salesID,shipToAddress,billToAddress,createdBy) values ('${input.invoiceID}', '${input.CUSTACCOUNT}','${input.salesID}','${input.shipToAddress}','${input.billToAddress}','${input.createdBy}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postInvoiceLineItems(input){
	var ourQuery=`Insert into quickBooks.InvoiceLine_TB (invoiceID,ITEMID,ITEMNAME,QTY,CONFIGID)values ('${input.invoiceID}', '${input.ITEMID}','${input.ITEMNAME}','${input.QTY}','${input.CONFIGID}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}



module.exports={
	postSalesHeader,
	postSalesLinesItems,
	postInvoiceHeader,
	postInvoiceLineItems
}