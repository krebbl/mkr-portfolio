#!/usr/bin/env sh

git remote add live ssh://docco@marcuskrejpowicz.com:2222/git/portfolio || true

git push live main
