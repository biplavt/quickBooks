var quickBookModel=require('./../model/quickBook.model');

function pSalesHeader(req,res){
	let newSalesHeader=req.body.salesHeader;
	quickBookModel.postSalesHeader(newSalesHeader).then(function(result){
		// console.log('result:*',result);
		// console.log('typeof result',typeof(result));
		res.send(result);
		// if(result!="undefined"){
		// 	console.log('insertId:',result.insertId)
		// 	return result.insertId;
		// 	res.send(result);
		// }else{
		// 	throw new Error('Insert Failed');
		// }
	}).catch(function(error){
		res.status(400).send(error);
	})
}

function pSalesLinesItems(req,res){
	let newSalesLineItems=req.body.salesLineItems;
	quickBookModel.postSalesLinesItems(newSalesLineItems).then(function(result){
		// console.log('result:',result);
		// if(result){
		// 	console.log('insertId:',result.insertId)
		// 	return result.insertId;
		// }else{
		// 	throw new Error('Insert Failed');
		// }
		res.send(result);

	}).catch(function(error){
		res.status(400).send(error);
	})
}

function pInvoiceHeader(req,res){
	let invoiceHeader=req.body.invoiceHeader;
	quickBookModel.postInvoiceHeader(invoiceHeader).then(function(result){
		// console.log('result:',result);
		// if(result){
		// 	console.log('insertId:',result.insertId)
		// 	return result.insertId;
		// }else{
		// 	throw new Error('Insert Failed');
		// }
		res.send(result);


	}).catch(function(error){
		res.status(400).send(error);
	})
}


function pInvoiceLineItems(req,res){
	let invoiceLineItems=req.body.invoiceLineItems;
	quickBookModel.postInvoiceLineItems(invoiceLineItems).then(function(result){
		// console.log('result:',result);
		// if(result){
		// 	console.log('insertId:',result.insertId)
		// 	return result.insertId;
		// }else{
		// 	throw new Error('Insert Failed');
		// }
		res.send(result);

	}).catch(function(error){
		res.status(400).send(error);
	})
}

function gCustomerDetails(req,res){

}

function gSalesOrderList(req,res){
	// console.log('htere');
	quickBookModel.getSalesOrderList().then(function (result) {
		// console.log('result:',result);
		if (typeof result !== "undefined") {
			// res.setHeader('Access-Control-Allow-Origin', '*')
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}

function gCustomerDetailsFromSalesId(req,res){
	// console.log("hi");
	quickBookModel.getCustomerDetailsFromSalesId(req.params.salesId).then(function (result) {
		// console.log('result:',result);
		if (typeof result !== "undefined") {
			// res.setHeader('Access-Control-Allow-Origin', '*')
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}

function gSalesOrderDetailsFromSalesId(req,res){
	// console.log("hi");
	quickBookModel.getSalesOrderDetailsFromSalesId(req.params.salesId).then(function (result) {
		if (typeof result !== "undefined") {
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}

function gSalesFromCustomer(req,res){
	quickBookModel.getSalesFromCustomer(req.params.customerAccount).then(function (result) {
		if (typeof result !== "undefined") {
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}

function gInvoiceDetail(req,res){
	quickBookModel.getInvoiceDetail(req.params.salesId).then(function (result) {
		if (typeof result !== "undefined") {
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}

function gSalesHeaders(req,res){
	quickBookModel.getSalesHeaders(req.params.salesId).then(function (result) {
		if (typeof result !== "undefined") {
			res.send(result);

		} else {

			res.status(200).send([]);

		}

	}, function (error) {

		res.status(400).send({

			status: 400,
			errorMessage: 'Bad Request!'

		});

	})
}


module.exports={
	pSalesHeader,
	pSalesLinesItems,
	pInvoiceHeader,
	pInvoiceLineItems,
	gCustomerDetails,
	gSalesOrderList,
	gCustomerDetailsFromSalesId,
	gSalesOrderDetailsFromSalesId,
	gSalesFromCustomer,
	gInvoiceDetail,
	gSalesHeaders

}