#! /bin/bash

sudo apt-get update

sudo apt-get install -y nodejs

echo ""
echo ""
echo "Your Node Version:"
node -v
echo ""
echo ""

sleep 1
echo "."
sleep 2
echo "."
sleep 3
echo "."

sudo apt-get install -y npm

echo ""
echo ""
echo "Your Npm Version:"
npm -v
echo ""
echo ""

sudo npm install