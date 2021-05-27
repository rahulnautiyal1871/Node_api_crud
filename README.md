# Node_api_crud

#Go to the directory of project step 1st => run command => npm install

#Start Application #Run this command to start this application => npm run start

#register user with passowrd #Method => POST #URL => http://localhost:3000/auth/register
#data => { "name" : "rahulnautiyal", "email": "rahulnautiyal@gmail.com", "description" : " Hello blah blah blah blah", "address" : "sainik calony kasheru khera", "dob": "12-07-1997",password:"12345",    "confPassword":"123456"
 }

#description => User login #Method => POST #URL => localhost:3000/auth/login #data => { "email":"rohitnautiyal077", "password":"123456" }

After login you will get token. Just pass that access-token in every api call inside set-header("x-access-token","###########")
and you can access  all the API's.


#description => TO CREATE A NEW USER #Method => POST #URL => http://localhost:3000/api/users

#data => { "name" : "rahulnautiyal", "email": "rahulnautiyal@gmail.com", "description" : " Hello blah blah blah blah", "address" : "sainik calony kasheru khera", "dob": "12-07-1997" }

#description => TO get all users #Method => GET #URL => http://localhost:3000/api/users

#description => TO update a user data #Method => PUT #URL => http://localhost:3000/api/users/{userId} #data => { "name" : "rahulnautiyal", "email": "rahulnautiyal@gmail.com", "description" : " Hello blah blah blah blah", "address" : "sainik calony kasheru khera", "dob": "12-07-1997" }

#description => TO get single user data #Method => GET #URL => http://localhost:3000/api/users/{userId}

#description => TO delete single user data #Method => DELETE #URL => http://localhost:3000/api/remove/{userId}


