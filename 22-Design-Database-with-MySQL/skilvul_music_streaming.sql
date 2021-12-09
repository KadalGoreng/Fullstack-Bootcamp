create database skilvul_music_streaming

use skilvul_music_streaming

create table users(
	user_id int auto_increment primary key,
	email varchar(255) not null unique,
	password text not null,
	name varchar(40) not null
	);

create table singers(
	singer_id int auto_increment primary key,
	name varchar(40) not null
	);

create table albums(
	album_id int auto_increment primary key,
	name varchar(255) not null,
	singer_id int not null,
	constraint fk_singers_signer_id
		foreign key(singer_id)
		references singers(singer_id)
	);

create table tracks(
	track_id int auto_increment primary key,
	tittle varchar(255) not null,
	singer_id int not null,
	album_id int not null,
	constraint fk_singerss_singer_id
		foreign key(singer_id)
		references singers(singer_id),
	constraint fk_albums_album_id
		foreign key(album_id)
		references albums(album_id)
	);

create table playlist(
	playlist_id int auto_increment primary key,
	track int not null,
	user_id int not null,
	constraint fk_playlist_owner
		foreign key(user_id)
		references users(user_id)
	);
8.
create table track_playlist(
	track_id int not null,
	playlist_id int not null,
	constraint track_id_key_reff
		foreign key(track_id)
		references tracks(track_id),
	constraint playlist_id_key_reff
		foreign key(playlist_id)
		references playlist(playlist_id)
	);