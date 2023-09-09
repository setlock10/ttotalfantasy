# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
* Commands
sudo service postgresql start
rails s
npm start --prefix client
heroku login
git push heroku main

** to shut down rails c on heroku:
heroku ps
then
heroku ps:stop run.(number)


heroku run rake db:seed
heroku run rails db:seed

heroku run rails c

heroku login

BACKUP
heroku run rails runner 'full script pasted here' -a my-app-name > data.txt

 heroku run rails runner 'pp User.all.to_json '  -a ttotalfantasy > data.txt