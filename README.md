# Start
```
yarn
sls offline start -v --stage test --region us-east-1 --port 8101
```

# Deploy
```
sudo sls deploy -v --stage test --region us-east-1
sudo sls deploy function -f service-payments --stage test --region us-east-1 -v
```
