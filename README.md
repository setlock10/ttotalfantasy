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

 heroku run rails runner 'puts User.all.to_json '  -a ttotalfantasy > user_data.json

  heroku run rails runner 'puts Pick.all.to_json '  -a ttotalfantasy > pick_data.json


UPDATING SCORES
    https://rapidapi.com/api-sports/api/api-american-football/
    replace null with nil
  loading data into rails console - variable must be capitalized
  load 'standings.rb'

Standings[:response].map{|k|  Team.where(name: k[:team][:name]).update(points: k[:won])}

User.all.map{|k| k.update(score_total: 0)}

 User.all.map{|k| k.picks.map{|j| if j.is_picked then k.update(score_total: k.score_total + Team.find(j.team_id).points) end }}