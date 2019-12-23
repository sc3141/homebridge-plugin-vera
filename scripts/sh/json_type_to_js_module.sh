#!/bin/bash

# convert json type definition (originating from vera device/service file) into a js module

sed 's/^{/module.exports = {/' | sed 's/^}/};/'
