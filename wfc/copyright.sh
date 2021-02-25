#!/bin/bash
for file in $(find . -type f -name \*.js); do
    echo "/*
 * Copyright (c) 2020 WildFireChat. All rights reserved.
 */" > copyright-file.txt;
    echo "" >> copyright-file.txt;
    cat $file >> copyright-file.txt;
    mv copyright-file.txt $file;
done
