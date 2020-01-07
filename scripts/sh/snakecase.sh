#!/bin/bash

# convert source type file name to snake case

#                                                                                            v tolower
#                                                                v separate num from alpha
#                                      v put _ @ end of word
#       v put _ @ in front of word
sed -E 's/([A-Z])([A-Z][a-z]+)/\1_\2/g; s/([a-z])([A-Z])/\1_\2/g; s/([A-z])([0-9])/\1_\2/g' | tr '[A-Z]' '[a-z]'
