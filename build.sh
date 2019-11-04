#!/bin/bash

rm -f build.zip || true
git archive --format=zip HEAD -o build.zip