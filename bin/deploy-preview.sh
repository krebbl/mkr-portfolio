#!/usr/bin/env sh

git remote add preview ssh://docco@marcuskrejpowicz.com:2222/git/portfolio-preview || true

git push preview main
