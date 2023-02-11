#!/bin/sh

cd $(dirname "$0")

path=$(pwd)
username=$POSTGRES_USER;
password=$POSTGRES_PASSWORD;
port=$POSTGRES_PORT;
db=$POSTGRES_DB;

directory_names=$(ls | grep -v '\.')

for dir in $directory_names;
do
  if test -f "$dir/_database.sql"; then
    PGPASSWORD=$password psql -U $username -d $db -p $port -f $dir/_database.sql
  else
    echo "_database.sql missing in $dir"
  fi
done

for dir in $directory_names;
do
  files=$(ls $dir | grep ".*\.sql" | sort)
  for file in $files;
  do
    if [ "$file" != "_database.sql" ]; then
      echo "Running file $file... on $dbname you can safely ignore 'exists' errors"
      PGPASSWORD=$password psql -U $username -d $dir -p $port -f $dir/$file
    fi
  done
done
