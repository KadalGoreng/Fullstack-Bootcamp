create database skilvulbookstore;

create table penerbit(
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null,
);

create table penulis(
    id int(10) not null auto_increment primary key,
    nama varchar(50) null,
    kota varchar(50) null,
);

create table buku(
    id int(10) not null auto_increment primary key,
    ISBN varchar(50) null,
    judul varchar(50) null,
    penulis varchar(50) null,
    penerbit int(10) null,
    harga int(10) null,
    stock int(10) null,
    
    constraint fk_penerbit_buku 
        foreign key (penerbit)
        references penerbit(id),
    
    constraint fk_buku_penulis
     foreign key (id)
     references penulis(id)
);

select * from buku
    inner join penerbit
    ON buku.penerbit = penerbit.id;


select * from buku
    left join penerbit
    ON buku.penerbit = penerbit.id;

select * from buku
    right join penerbit
    ON buku.penerbit = penerbit.id;
 
select max (harga) from buku
    where stock < 10;

select min (harga) from buku;

select count (id) from buku
    where harga < 100000;