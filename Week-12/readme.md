 // Create a database
 >> create database warehouse; 

 >> use warehouse;

 >> create table cities(city varchar(20),state varchar(20), PRIMARY KEY(cityid));

 >> create table warehouses(wid int NOT NULL,wname varchar(30),location varchar(20),extra json,city varchar(255), PRIMARY KEY(wid));

 >> create table stores(sid int NOT NULL,store_name varchar(20),location_city varchar(20), PRIMARY KEY (sid),wid int, FOREIGN KEY(wid) REFERENCES warehouses(wid));

 >> create table customer(cno int NOT NULL, cname varchar(50),addr varchar(50),cu_city varchar(20),ono int NOT NULL,PRIMARY KEY (cno));

 >> create table items(itemno int NOT NULL,description varchar(255),weight decimal(5,2), cost decimal(5,2),PRIMARY KEY(itemno),sid int,ono int,FOREIGN KEY(sid) REFERENCES stores(sid));

>> create table orders(ono int NOT NULL,odate date,itemno int, PRIMARY KEY(ono), FOREIGN KEY(itemno) REFERENCES items(itemno));

>> alter table items ADD FOREIGN KEY(ono) REFERENCES orders(ono);

>> alter table customer add FOREIGN KEY(ono) REFERENCES orders(ono);

 // Problem -1
 >> select MIN(weight) from items;

 // Problem -2
 >> select * from warehouses where city='Pune';

 // Proble -3
 >> select customer.cname,items.description,items.weight,items.cost from items inner join customer on items.ono=customer.ono where customer.cname='Mr. Patil';

 // Problem -4
 >> select warehouses.wname from warehouses join stores on warehouses.wid = (select wid from stores GROUP BY stores.wid having MAX(wid))

 // Problem -5
 >> select items.itemno,items.description from items join orders on items.itemno=orders.itemno GROUP BY orders.itemno limit 1;
 // Problem -6
 
 >> select cname, addr from customers inner join orders on customers.ono=orders.ono;