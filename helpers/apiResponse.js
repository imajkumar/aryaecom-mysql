const { response } = require( "express" );

exports.successResponse = function (res, msg) {
	var data = {
		status: 1,
		message: msg,
		response:"successResponse"
	};
	return res.status(200).json(data);
};

exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data,
		response:"successResponseWithData"
	};
	return res.status(200).json(resData);
};

exports.warningResponseWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data,
		response:"warningResponseWithData"
	};
	return res.status(200).json(resData);
};


exports.ErrorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
		response:"ErrorResponse"
	};
	return res.status(500).json(data);
};

exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
		response:"notFoundResponse"
		
	};
	return res.status(404).json(data);
};

exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data,
		response:"validationErrorWithData"
	};
	return res.status(400).json(resData);
};

exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
		response:"unauthorizedResponse"
	};
	return res.status(401).json(data);
};