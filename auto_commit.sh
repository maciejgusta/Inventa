#!/bin/bash

current_date=$(date +"%d_%m_%Y_%H_%M")

git add .

git commit -m "$current_date"

echo "Pomyślnie dodano i zatwierdzono zmiany z komunikatem: $current_date"
