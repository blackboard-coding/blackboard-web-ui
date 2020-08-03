
#install package
yarn

#build project
yarn run build

#start project devs
pm2 start 'yarn run mobile_dev'

#start project production
pm2 start 'yarn run mobile'