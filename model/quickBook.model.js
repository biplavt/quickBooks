var mySqlConfig=require('./../configuration/database.config.js');
var makeConnection=require('./utility/utilityModel.js');


function postSalesHeader(input){

	var ourQuery=`Insert into quickBooks.SalesOrderHeader_TB (ID, CUSTACCOUNT, Name ,SalesName,CustomerPO,createdBy,status) values ('${input.ID}','${input.CUSTACCOUNT}','${input.NAME}','${input.SalesName}','${input.CustomerPO}','${input.createdBy}','${input.status}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postSalesLinesItems(input){

	var ourQuery=`Insert into quickBooks.salesOrderLine_TB (ID,ITEMID,ITEMNAME,CONFIGID,Qty,Amount, status) values ('${input.ID}', '${input.ITEMID}','${input.ITEMNAME}','${input.CONFIGID}',${input.Qty},'${input.Amount}','${input.status}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postInvoiceHeader(input){

	var ourQuery=`Insert into quickBooks.invoiceHeader_TB (invoiceID,CUSTACCOUNT,salesID,shipToAddress,billToAddress,createdBy) values ('${input.invoiceID}', '${input.CUSTACCOUNT}','${input.salesID}','${input.shipToAddress}','${input.billToAddress}','${input.createdBy}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function postInvoiceLineItems(input){
	var ourQuery=`Insert into quickBooks.InvoiceLine_TB (invoiceID,ITEMID,ITEMNAME,QTY,CONFIGID,Amount,status)values ('${input.invoiceID}', '${input.ITEMID}','${input.ITEMNAME}','${input.QTY}','${input.CONFIGID}',${input.Amount},'${input.status}')`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function getSalesOrderList(){
	var ourQuery='SELECT ID, CUSTACCOUNT, Name, SalesName, CustomerPO,CreatedDate, createdBy, status FROM quickBooks.SalesOrderHeader_TB'
	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function getCustomerDetailsFromSalesId(salesId) { //get customer from sales
	console.log('salesid:',salesId);
    var ourQuery = `SELECT A.ID, A.CUSTACCOUNT,B.Name,B.Phone, B.email, B.Address FROM quickBooks.SalesOrderHeader_TB A 
		RIGHT JOIN quickBooks.Customer_TB B
		ON A.CUSTACCOUNT=B.CUSTACCOUNT
		WHERE A.ID = '${salesId}' `;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
    
  }

function getSalesOrderDetailsFromSalesId(salesId){

	var ourQuery = `SELECT A.ID, A.CUSTACCOUNT, A.SalesName,A.CreatedDate,B.ITEMID,B.ITEMNAME,B.CONFIGID, A.status,A.Name as CustomerName,B.Qty,B.Amount
FROM quickBooks.SalesOrderHeader_TB A
INNER JOIN quickBooks.salesOrderLine_TB B
ON A.ID=B.ID
WHERE A.ID='${salesId}'`;

return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
}

function getSalesFromCustomer(customerAccount) {//get sales from customer

    var ourQuery = `
		SELECT  A.ID, A.CreatedDate, B.amount, A.CUSTACCOUNT,A.Name   
		FROM quickBooks.SalesOrderHeader_TB A
		LEFT JOIN 
		quickBooks.salesOrderLine_TB B
		ON A.ID=B.ID
		WHERE A.CUSTACCOUNT='${customerAccount}' order by createdDate desc`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
  }

function getInvoiceDetail(salesId){
	var ourQuery = `SELECT A.invoiceID,A.invoiceDate,B.ITEMID,B.ITEMNAME,B.QTY,B.Amount,C.ID 
FROM quickBooks.invoiceHeader_TB A
LEFT JOIN
quickBooks.InvoiceLine_TB B
on A.invoiceID=B.invoiceID
INNER JOIN quickBooks.SalesOrderHeader_TB C
on A.salesID=C.ID

WHERE C.ID='${salesId}'
GROUP BY A.invoiceID,A.invoiceDate,B.ITEMID,B.ITEMNAME,B.QTY,B.Amount`;

	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);

}


function getSalesHeaders(salesId){
	var ourQuery = `SELECT A.salesID, A.invoiceID, B.salesName, A.shipToAddress as DELIVERYADDRESS, A.billToAddress as InvoiceToAddress,
	B.Name as Customer
	FROM quickBooks.invoiceHeader_TB A
	Left JOIN
	quickBooks.SalesOrderHeader_TB B
	on A.salesID=B.ID WHERE B.ID='${salesId}' `;

 	return makeConnection.sqlQueryExecution(ourQuery,mySqlConfig);
       
}


module.exports={
	postSalesHeader,
	postSalesLinesItems,
	postInvoiceHeader,
	postInvoiceLineItems,
	getSalesOrderList,
	getCustomerDetailsFromSalesId,
	getSalesOrderDetailsFromSalesId,
	getSalesFromCustomer,
	getInvoiceDetail,
	getSalesHeaders
}