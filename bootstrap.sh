#!/bin/bash
echo "installing dependencies..."
npm install --silent
echo "installing dependencies: 1/3"
cd backend
npm install --silent
echo "installing dependencies: 2/3"
cd ../frontend
npm install --silent
echo "installing dependencies: 3/3"
echo "Done! 👌"
echo "Run \`npm run dev\` to start the projekt 🚀"
echo "Run \`npm run build\` to build the projekt 💡"