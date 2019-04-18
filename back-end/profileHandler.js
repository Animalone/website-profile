'use strict';

const AWS= require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({
	region:'ap-southeast-2'
});

const tableName = 'website_profile';
//done

module.exports.readProfile = async (event, context, callback) => {
	if (event.body !== null && event.body !== undefined) {
    	let body = JSON.parse(event.body);
		var params = {
			Key:{
				user_name: body.userName
			},

			TableName: tableName
		}
		const data = await docClient.get(params,function(err,data){
			if(err){
				callback(err,null);
			}else{
				console.log(data.Item);
				if (body.password == data.Item.password){
					const response = {
						"statusCode": 200,
						"body":JSON.stringify(data.Item),
						headers:{
							"Content-Type":'application/json',
							"Access-Control-Allow-Origin":"*"
						}
					}
					callback(null,response);
				}else{
					const response = {
						statusCode: 200,
						body:"wrong"
					}
					callback(null,response);					
				}
			}
		}).promise();
	}else{
		console.log('error')
	}
};

module.exports.writeProfile = async (event, context, callback) => {
	if (event !== null && event !== undefined) {
		var params = {
			Item:{
				user_name: event.userName,
				name: event.name,
				password: event.password,
				email: event.email,
				birthDate: event.birthDate,
				address: event.address
			},

			TableName: tableName
		}
		return await docClient.put(params,function(err,data){
			if(err){
				callback(err,null);
			}else{
				const response = {
					statusCode: 200,
					headers:{
						"Content-Type":'application/json',
						"Access-Control-Allow-Origin": "*"
					},
					body:"success"
				}
				callback(null,response);
			}
		}).promise();
	}else{
		console.log(event);
		console.log('error');
	}
};
