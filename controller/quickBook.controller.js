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




module.exports={
	pSalesHeader,
	pSalesLinesItems,
	pInvoiceHeader,
	pInvoiceLineItems
}