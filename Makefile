SHELL=bash

start:
	@ docker-compose up -d nextjsboilerplate

restart:
	@ docker-compose restart nextjsboilerplate

stop:
	@ docker-compose stop nextjsboilerplate

logs:
	@ docker-compose logs -f -t

remove:
	@ docker-compose stop && docker-compose rm nextjsboilerplate

fix-permissions:
	@ sudo chown -R $$(id -u):$$(id -g) .
