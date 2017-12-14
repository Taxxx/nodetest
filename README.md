# Node Senior Test - Restaurant
Requirements:
* Node 8.9.3
* Postgres 9.6

## Steps to run the project
* Clone the project
* Restore the postgres db using this restore file `db/nodetest`
* Check and update if you need the configuration on datasource.json files (db postgres connection)
* `cd nodetest`
* `npm install`
* `node .`
* Open in a browser to test if the service is running -> <http://localhost:3000/>
* Open in a browser to see the endpoints documentation endpoints for restaurant, reviews, meals and orders are generated, you can test here the service too -> <http://localhost:3000/explorer>
* Open in a browser to test get restaurant with reviews and meals [test](http://localhost:3000/api/restaurants/1?filter[include]=reviews&filter[include]=meals)
* getRatingAvg  <http://localhost:3000/api/reviews/getRatingAvg?restaurantId=1>
