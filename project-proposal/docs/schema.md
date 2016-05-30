# Schema Information

## napspots
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
owner_id    | integer   | not null, foreign key (references users), indexed
type        | string    | not null, indexed
location    | string    | not null, indexed
price       | integer   | not null, indexed
image_urls  | text      |

## availabilities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
napspot_id  | integer   | not null, foreign key (references napspots), indexed
start_date  | datetime  | not null
end_date    | datetime  | not null

## bookings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
napspot_id  | integer   | not null, foreign key (references napspots), indexed
napper_id   | integer   | not null, foreign key (references users), indexed
start_date  | datetime  | not null
end_date    | datetime  | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
napper_id   | integer   | not null, foreign key (references users), indexed
napspot_id  | integer   | not null, foreign key (references napspots), indexed
title       | string    | not null
body        | text      | not null
rating      | integer   | not null

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
