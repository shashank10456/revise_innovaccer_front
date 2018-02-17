import sqlite3

conn = sqlite3.connect('db.sqlite3')
cur = conn.cursor()

# https://www.sqlite.org/lang_select.html
sqlstr = 'SELECT data,description FROM api_userinfo ORDER BY data'
y=list()
str1='''<!DOCTYPE html>
<html>
<head>
	<title>bill</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<body>
<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">description</th>
      <th scope="col">total_cost</th>
    </tr>
  </thead>
  <tbody>



'''
str2='''
</tbody>
</table>
	<p>Bill Generator created by SHASHANK SRIGIRI</p>
</body>
</html>'''
str3=""
c=0
for row in cur.execute(sqlstr):
    c=c+1
    str3=str3+'''<tr><th scope="row"> '''+str(c)+" </th><td> "+row[1]+" </td><td> "+row[0]+"</td></tr>"

cur.close()
str1=str1+str3+str2;
print(str1);

file3=open("/home/shashank/Documents/expenditure_django_and html_js_files/djangorest/bill_output.html","w+")
file3.write(str1);
file3.close()
