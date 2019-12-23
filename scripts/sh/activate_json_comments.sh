#!/bin/bash

# translate json multi-comment nodes into active multi line comment tokens

sed 's#"/\*": "",#/*#' | sed 's#"\*/": ""#*/#'
