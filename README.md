AFT GROUP WEBSITE 

STACK
    - SVELTEKIT (FRONTEND)
    - POCKETBASE (CMS/BACKEND)

GUIDE DO DEPLOYMENT

1- Build the sveltekit app
    - make sure you're in the app directory and on the branch `main`
    - make sure to delete the 'build' directory if it already exists (to avoid files merging issues). You can do it by running 
    `rm -rf build`
    - run `npm run build`

2- Deploy the CMS
The CMS is based on PocketBase and deployed on Hop.io. Follow these steps to deploy
    - make sure you're in the CMS directory and on the branch `main`
    - make sure to delete the directory 'pb_public' by running `rm -rf pb_publi` (this insures old cached static files are removed)
    - run `cp -r ../app/build ./pb_public`
    - run `hop deploy` (this deploy the cms to hop.io with your authenticated account)

