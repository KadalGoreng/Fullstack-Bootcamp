CREATE DATABASE bookstore;

USE bookstore;

SHOW tables;

create table books(
    id int primary key auto_increment,
    author1 varchar(100) not null,
    author2 varchar(100),
    author3 varchar(100),
    title varchar(100),
    description varchar(500),
    place_sell char(3),
    stock int default 0,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

alter table books 
    add price int default 0,
    add status enum('available', 'out of stock', 'limited'),
    drop place_sell;

insert into books (id, author1, author2, author3, title, description, stock, price, status) values
    (1, "unknown", "spongebob", "patrick", "gatau", "gatau juga", 2, 1000, "limited" ),
    (2, "squid", "sandy", "krab", "apa ni", "ini deskripsi", 6, 2000, "available" ),
    (3, "plankton", "pearl", "larry", "ini judul", "ini gatau", 7, 8000, "out of stock" );

select * from books;

select id as ID, author1 as A1, author2 as A2, author3 as A3 from books;

select * from books
    where id=3;

select * from books
    where stock > 3 and status = "available";

select * from books
    where stock > 3 or status = "out of stock";

select * from books
    where not id=3;

select * from books
    order by id;

select * from books
    limit 2;

update books
    set author1="siapa hayo", price=9999
    where id=3;

delete from books
    where id=3;
