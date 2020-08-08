# NewStepCheckout

A module has been created in Magento Commerce 2.4. Not testet on other versions.

### Software stack
- Nginx (stable)
- PHP-FPM (7.2)
- MySql (percona 5.7)
- ElasticSearch (6.*)
- Redis (5.*)
- Varnish (4.*)
- Node (10.21.0)


### Before you start
#### Marc Mabe - PHP Enum
Before run the module you need to install 
`` "marc-mabe/php-enum": "*",``  extension for enum types. 

##### Install by composer 
Add `marc-mabe/php-enum` to the project's `composer.json` dependencies and run `php composer.phar install`

#### Recompile typescript files (optional)

1. Go to the module directory
`cd LB/NewStepCheckout`.
2. Run command `nm install`
3. Run command `npm run ts:build`
4. Should work! 


#####This project is for illustrative purposes only. It is forbidden to copy or use anything without the consent of the author!
