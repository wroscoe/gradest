help:
	cat Makefile

# start (or restart) the services
deploy:
	git subtree push --prefix app origin gh-pages