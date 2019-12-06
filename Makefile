.PHONY: run
run:
	@echo "Executing sitespeed.io"
	sitespeed.io \
  --config config.json \
  script.js --multi

open-report:
	open $(PWD)/sitespeed-result/*/*/index.html