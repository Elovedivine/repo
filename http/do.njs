#!/usr/local/bin/node
var querystring=require('querystring');
var param=querystring.parse(process.env.QUERY_STRING);
var name=require('./name.json');
console.log('Content-type: text/html;charset=utf-8\n');
if(name[param.id]==undefined){
  console.log('<h1>Your id is not my group member,'+param.id+'!!!</h1>');
}
else
console.log('<h1>Welcome my group member:'+name[param.id]+'</h1>');
