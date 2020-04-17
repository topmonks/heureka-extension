#!/bin/bash

rm -f build.zip || true
git archive --format=zip -o build.zip HEAD:extension
