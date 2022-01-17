This is testAPI  ecommmerce : mysql
https://github.com/imajkumar/aryaecom-mysql

http://localhost:3005/Api/v1/adminRegister



 await db.User.findOne({
            where: {
              email: email
            }
          })
          .then(
            function(user) {
              // callback(user);
               return apiResponse.ErrorResponse( res,user );

            }, function(errors) {
             // callback(errors);
              return apiResponse.ErrorResponse( res,'errors' );
          }
        )
        


      //  return apiResponse.ErrorResponse( res,resultData );